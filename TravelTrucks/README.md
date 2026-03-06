# TravelTrucks

## Kısa Açıklama
TravelTrucks, karavan kiralama hizmeti sunan kurgusal bir şirket için geliştirilmiş modern bir frontend web uygulamasıdır. Kullanıcılar katalog üzerinden çeşitli karavanları inceleyebilir, özelliklerine göre filtreleyebilir, detaylarını ve kullanıcı yorumlarını görüntüleyebilir ve hızlıca rezervasyon formunu doldurabilirler.

## Temel Özellikler
* **Katalog ve Dinamik Filtreleme:** Karavanları lokasyona, araç tipine ve ek özelliklere göre filtreleme (Backend destekli).
* **Sayfalandırma (Pagination):** "Load More" butonu ile ilanları performanslı bir şekilde sayfa sayfa yükleme.
* **Favoriler:** Beğenilen karavanları favorilere ekleme (Veriler sayfa yenilense bile `localStorage` ile kalıcı hale getirilir).
* **Detay Sayfası:** Karavanların teknik detayları, resim galerisi ve kullanıcı yorumlarının bulunduğu sekmeli (tab) yapı.
* **Rezervasyon Formu:** Kullanıcı dostu ve anında form doğrulama (Formik & Yup) içeren rezervasyon arayüzü.
* **Modern State Yönetimi:** Redux Toolkit ile merkezi ve optimize edilmiş veri yönetimi.