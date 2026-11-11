const fs = require('fs');
const path = require('path');

fs.rmSync('www', { recursive: true, force: true });
fs.mkdirSync('www/fa/css', { recursive: true });
fs.mkdirSync('www/fa/webfonts', { recursive: true });

fs.copyFileSync('src/index.html', 'www/index.html');

const fa = path.join('node_modules', '@fortawesome', 'fontawesome-free');
fs.copyFileSync(path.join(fa, 'css', 'all.min.css'), 'www/fa/css/all.min.css');
for (const f of fs.readdirSync(path.join(fa, 'webfonts'))) {
  fs.copyFileSync(path.join(fa, 'webfonts', f), path.join('www/fa/webfonts', f));
}
console.log('www/ hazır');
