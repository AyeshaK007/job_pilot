const tar = require('tar');
const fs = require('fs');

(async () => {
  const path = 'insforge-mcp-1.2.11.tgz';
  const extractPath = 'mcp_extracted';
  if (!fs.existsSync(extractPath)) {
    fs.mkdirSync(extractPath);
  }
  await tar.extract({ file: path, cwd: extractPath, sync: true, strip: 1 });
  const indexPath = `${extractPath}/package/dist/index.js`;
  const source = fs.readFileSync(indexPath, 'utf8');
  const lines = source.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/\b(command|option|description|fetch|docs|mcp)\b/i.test(line)) {
      console.log(`${i + 1}: ${line}`);
    }
  }
})();
