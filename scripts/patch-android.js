// Android manifestine bildirim izinlerini ekler
const fs = require('fs');
const p = 'android/app/src/main/AndroidManifest.xml';
let x = fs.readFileSync(p, 'utf8');
const perms = [
  'android.permission.POST_NOTIFICATIONS',
  'android.permission.SCHEDULE_EXACT_ALARM',
  'android.permission.RECEIVE_BOOT_COMPLETED'
];
for (const perm of perms) {
  if (!x.includes(perm)) {
    x = x.replace('</manifest>', `    <uses-permission android:name="${perm}" />\n</manifest>`);
  }
}
fs.writeFileSync(p, x);
console.log('Manifest güncellendi');
