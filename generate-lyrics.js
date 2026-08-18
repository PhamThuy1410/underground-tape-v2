const fs = require('fs');
const path = require('path');

// Đọc file lyrics.js hiện tại
const lyricsFilePath = './lyrics.js';
let existingLyrics = {};

if (fs.existsSync(lyricsFilePath)) {
  const content = fs.readFileSync(lyricsFilePath, 'utf8');
  
  // Parse object LYRICS từ file
  const match = content.match(/const LYRICS = \{([\s\S]*)\};/);
  if (match) {
    try {
      // Eval để parse object (cẩn thận khi dùng eval với dữ liệu không đáng tin cậy)
      existingLyrics = eval('(' + '{' + match[1] + '}' + ')');
    } catch (e) {
      console.log('Không thể parse lyrics cũ, sẽ tạo mới');
      existingLyrics = {};
    }
  }
}

// Hàm quét folder đệ quy
function scanFolder(folderPath, baseFolder = '') {
  const files = {};
  
  try {
    const items = fs.readdirSync(folderPath);
    
    items.forEach(item => {
      const fullPath = path.join(folderPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Quét folder con
        const subFiles = scanFolder(fullPath, baseFolder ? `${baseFolder}/${item}` : item);
        Object.assign(files, subFiles);
      } else if (item.endsWith('.mp3')) {
        // Tạo key theo format
        const relativePath = baseFolder 
          ? `${baseFolder}/${item}` 
          : item;
        const key = `assets/artists/${relativePath}`;
        
        files[key] = null; // Sẽ điền value sau
      }
    });
  } catch (e) {
    console.error(`Lỗi khi quét folder ${folderPath}:`, e.message);
  }
  
  return files;
}

// Quét folder artists
console.log('🔍 Đang quét folder assets/artists/...');
const newFiles = scanFolder('./assets/artists');

// Merge với lyrics cũ
let allLyrics = { ...newFiles };

for (const key in existingLyrics) {
  if (allLyrics.hasOwnProperty(key)) {
    allLyrics[key] = existingLyrics[key];
  } else {
    // Giữ lại lyrics cũ ngay cả nếu file đã xóa
    allLyrics[key] = existingLyrics[key];
  }
}

// Sort keys theo tên artist
const sortedLyrics = {};
const keys = Object.keys(allLyrics).sort();

keys.forEach(key => {
  sortedLyrics[key] = allLyrics[key] === null ? '' : allLyrics[key];
});

// Tạo file lyrics.js mới
const output = `/* =========================================================
   lyrics.js v2 — Multi-artist lyrics
   
   Cách sử dụng:
   - Key: "assets/artists/[artist-id]/audio/[filename].mp3"
   - Value: lời bài hát (text hoặc HTML)
   - Để trống nếu chưa có lời
   
   User sẽ điền lời sau khi có file mp3 thực tế
   ========================================================= */

const LYRICS = {
`;

let content = output;

Object.entries(sortedLyrics).forEach(([key, value], index) => {
  const isLast = index === Object.keys(sortedLyrics).length - 1;
  const lyricValue = typeof value === 'string' 
    ? `\`${value}\`` 
    : '""';
  
  content += `  "${key}": ${lyricValue}${isLast ? '' : ','}
`;
});

content += `};
`;

fs.writeFileSync(lyricsFilePath, content, 'utf8');

// Thống kê
const newKeysCount = Object.keys(newFiles).length;
const existingKeysCount = Object.keys(existingLyrics).length;
const withLyricsCount = Object.values(sortedLyrics).filter(v => v && v.trim()).length;

console.log('\n✅ Hoàn thành!');
console.log(`📊 Thống kê:`);
console.log(`   - File .mp3 tìm thấy: ${newKeysCount}`);
console.log(`   - Keys từ file cũ: ${existingKeysCount}`);
console.log(`   - Tổng keys: ${Object.keys(sortedLyrics).length}`);
console.log(`   - Đã có lyrics: ${withLyricsCount}`);
console.log(`   - Chưa có lyrics: ${Object.keys(sortedLyrics).length - withLyricsCount}`);
console.log(`\n💾 File lyrics.js đã được cập nhật!`);