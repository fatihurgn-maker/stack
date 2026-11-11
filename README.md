# Stack - Android APK

## APK'yi indirme linki alma (bilgisayar gerekmez, sadece GitHub)
1. github.com'da ücretsiz hesap aç, yeni bir **repository** oluştur.
2. Bu klasörün içindekileri (zip'ten çıkar) repoya yükle (Add file > Upload files).
   `.github` klasörünün de yüklendiğinden emin ol.
3. Repoda **Actions** sekmesi > "APK Olustur" çalışır (yaklaşık 5-8 dk).
4. Bitince repo ana sayfasında sağdaki **Releases** bölümünden `app-debug.apk` dosyasını indir.
5. Telefonda APK'yı aç, "bilinmeyen kaynaklardan yüklemeye izin ver" de.

## Yerelde derlemek istersen
npm install && npm run build && npx cap add android && node scripts/patch-android.js && npx cap sync android && npx cap open android
