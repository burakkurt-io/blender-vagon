# Burak Kurt Blender Vagon

Bu proje, Three.js ve Blender kullanılarak hazırlanmış etkileşimli bir 3D web sahnesidir.  
Vite altyapısı ile geliştirilmiş ve Vercel üzerinde yayınlanmaya uygundur.

## Özellikler

- Three.js tabanlı gerçek zamanlı 3D sahne
- Blender ile üretilmiş `.glb` model kullanımı
- GLSL shader destekli görsel efektler
- Otomatik dönen kamera ve etkileşimli informer noktaları
- Müzik ve sosyal bağlantı alanı

## Proje Yapısı

```text
src/
  index.html
  script.js
  css/
    style.css
  Experience/
    Experience.js
    Config.js
    Events.js
    Resources.js
    World.js
    World/
      BurakText.js
      Wagon.js
      ...
static/
  assets/
    wagon.glb
    *.jpg
    music.mp3
  social/
    *.svg
```

## Gereksinimler

- Node.js 18+ (önerilir)
- npm 9+ (önerilir)

## Yerel Geliştirme

```bash
npm install
npm run dev
```

Tarayıcıdan aç:

`http://localhost:3000`

## Production Build

```bash
npm run build
```

Build çıktısı Vite tarafından oluşturulur ve Vercel tarafından otomatik algılanır.

## Vercel Kurulumu

### 1) GitHub'a gönder

Depoyu GitHub'a push et. Önerilen depo:

`https://github.com/burakkurt-io/burakkurt-blender-vagon`

### 2) Vercel ile içe aktar

1. [Vercel](https://vercel.com/) hesabına giriş yap.
2. `Add New -> Project` seç.
3. GitHub deposunu bağla ve projeyi seç.

### 3) Build ayarları

Vercel çoğu ayarı otomatik algılar. Gerekirse manuel:

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

### 4) Deploy

`Deploy` butonuna bas ve yayınlanmasını bekle.

## Önemli Notlar

- Model dosyası `static/assets/wagon.glb` yolunda olmalıdır.
- Büyük `.glb` dosyaları ilk yükleme süresini artırabilir.
- `wagon.glb` dosyasını değiştirdiğinde sayfayı `Ctrl+F5` ile sert yenilemen önerilir.

## Özelleştirme Rehberi

- Ön yazı metni: `src/Experience/World/BurakText.js`
- Sağ alt metin/ikonlar: `src/index.html`
- Bilgi popup metinleri: `src/Experience/Config.js`
- Renk ve genel sahne ayarları: `src/Experience/Config.js`

## Lisans

Bu proje kişisel portföy ve öğrenme amaçlı kullanılabilir.  
Kullanılan üçüncü parti kütüphanelerin lisansları ilgili paketlerde belirtilmiştir.
