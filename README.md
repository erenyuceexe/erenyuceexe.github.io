# erenyuceexe.github.io

Eren Yüce'nin GitHub Pages proje dizini. Ana sayfa, yayındaki alt projeleri ve yakında gelecek çalışma alanlarını tek bir statik girişte toplar.

## Yerel kontrol

Harici bağımlılık yoktur. Dosyaları basit bir statik sunucuyla açabilirsiniz:

```bash
python -m http.server 8000
```

Sonra `http://localhost:8000` adresini ziyaret edin.

## Yeni proje eklemek

`script.js` içindeki `projects` dizisine `title`, `description`, `url`, `category`, `status`, `year` ve `available` alanlarına sahip yeni bir kayıt ekleyin. `available: false` kayıtları “yakında” olarak görünür ve bir `note` alanı eklemek isteğe bağlıdır.

Örnek kayıt:

```js
{
  title: "Yeni alan",
  description: "Kısa ve net açıklama.",
  url: "https://example.com",
  category: "Araştırma",
  status: "YAKINDA",
  year: "2025",
  available: false,
  note: "Hazırlık sürüyor."
}
```
