import type { Dictionary } from "./en";

export const tr: Dictionary = {
  meta: {
    tagline: "Kazanmak için tasarlandı.",
    promise:
      "İddialı şirketlerin arkasındaki işletim sistemini kuruyoruz. Mahkeme salonundan ödeme sayfasına, klinikten depoya kadar her işimiz ölçülebilir gelirle kendini öder.",
    origin:
      "Ada, Türkçede bir kara parçası, aynı zamanda ilk programcı Ada Lovelace'a bir saygı duruşu. Sessiz duran, sonuçlarıyla yüksek sesle konuşan bir evin adı.",
    longName: "Ada House",
    location: "İstanbul · Dünyanın her yerinde çalışıyoruz",
  },
  common: {
    startProject: "Projeyi başlat",
    seeWork: "İşlerimize bak",
    readMore: "Devamını oku",
    scopeEngagement: "Birlikte çalışalım",
    comingSoon: "Yakında",
    notifyMe: "Beni haberdar et",
    sendToStudio: "Stüdyoya gönder",
    backHome: "Ana sayfaya dön",
    studioOpen: "Stüdyo açık · bu çeyrek üç yeni iş ortağı alıyoruz",
    soon: "yakında",
    house: "Ev",
  },
  nav: {
    work: "İşler",
    services: "Hizmetler",
    industries: "Sektörler",
    studio: "Stüdyo",
    journal: "Günlük",
    contact: "İletişim",
    shop: "Mağaza",
    index: "Dizin",
  },
  home: {
    houseLabel: "Ev № 001",
    estLabel: "Kuruluş",
    headlineA: "Kazanmak",
    headlineB: "için tasarlandı.",
    sectionsServicesEyebrow: "Hizmetler",
    sectionsServicesTitle: "Dört disiplin. Tek iş standardı.",
    sectionsServicesIntro:
      "Her disiplin, kıdemli mühendisler ve uygulamalı bilim insanlarından oluşan bir teslimat ekibidir. Sıfatlarla değil, sayılarla anlaşırız.",
    sectionsIndustriesEyebrow: "Sektörler",
    sectionsIndustriesTitle: "Riskin gerçek olduğu yerde çalışırız.",
    sectionsIndustriesIntro:
      "Her iş ilişkisi varsayılan olarak özeldir ve sektörünüzün gerçekten nasıl işlediğine göre ayarlanır.",
    sectionsWorkEyebrow: "Seçilmiş işler",
    sectionsWorkTitle: "Slogan değil, fatura.",
    sectionsWorkIntro:
      "Yeniden inşa ettiğimiz birkaç işletme. İsimler iş ortaklarımızın talebiyle saklıdır.",
    sectionsPrinciplesEyebrow: "Ev kuralları",
    sectionsPrinciplesTitle: "Sessiz disiplin. Yüksek sesli sonuç.",
    ctaEyebrow: "Stüdyo açık",
    ctaTitle: "Çözmeye değer bir probleminiz mi var? Sizi dinliyoruz.",
    ctaBody:
      "Hangi metriği yukarı çekmek istediğinizi söyleyin. Çekip çekemeyeceğimizi ve ne kadar hızlı olacağını biz söyleyelim.",
  },
  stats: [
    { value: "+%50", label: "Hukuk iş ortaklarında ortalama gelir artışı" },
    { value: "+%30", label: "E-ticaret iş ortaklarında ortalama trafik artışı" },
    { value: "12+", label: "Avukat başına haftalık geri kazanılan saat" },
    { value: "30", label: "Ürünlerimizin konuştuğu dil sayısı" },
  ],
  marquee: [
    "Hukuk",
    "Ticaret",
    "Sağlık",
    "Marka",
    "Tekstil",
    "Strateji",
    "Mühendislik",
  ],
  services: [
    {
      slug: "legal",
      eyebrow: "Hukuk büroları için",
      title: "Hukuk AI Çalışma Alanı",
      headline: "Hiç uyumayan bir ikinci avukat.",
      summary:
        "Hukuk büroları için yapay zekâ tabanlı çalışma alanı. Belgeleri sizin üslubunuzla yazar, UYAP ve diğer hukuk servislerinden dosyaları otomatik çeker, yeni müvekkillerle ilk görüşmeyi yaparak ortakların hazırlıklı bir şekilde toplantıya girmesini sağlar.",
      metric: { value: "+%50", label: "iş ortağı bürolarda ortalama gelir artışı" },
      features: [
        {
          title: "Belge otomasyonu",
          body: "Dilekçe, sözleşme, dava özetleri ve resmi yazışmalar; sizin şablonlarınız ve geçmiş işlerinizden hareketle hazırlanır. Çıktılar kaynak gösterir, büro üslubuna saygı duyar.",
        },
        {
          title: "UYAP ve dosya senkronizasyonu",
          body: "Dosyalar UYAP ve diğer hukuk servislerinden otomatik olarak çekilir. Belgeler, süreler ve taraflar manuel girişe gerek kalmadan çalışma alanına düşer.",
        },
        {
          title: "Müvekkil karşılama asistanı",
          body: "Danışmanlık tonunda bir karşılama asistanı, potansiyel müvekkillerle ön görüşmeyi yapar, vakanın temel verilerini toplar ve uygun dosyaları doğru ortağa yönlendirir.",
        },
        {
          title: "Bilgi hafızası",
          body: "Büronuzun kazandığı yöntem, içtihat ve üslup özel bir hafızada saklanır. Kapatılan her dava ile kalite üst üste birikir.",
        },
      ],
      proof:
        "İlk çeyrek içinde iş ortağı bürolar; daha yüksek dosya verimi, hızlı müvekkil karşılama ve daha az yazım saati sayesinde +%50 gelir artışı bildiriyor.",
    },
    {
      slug: "commerce",
      eyebrow: "E-ticaret için",
      title: "Ticaret Büyüme Motoru",
      headline: "Pazarda kazan. Sonra rafa sahip ol.",
      summary:
        "Pazardaki konumunuzu çıkarırız, rakiplerinizi aralıksız takip ederiz ve mağazanızı dönüşüme göre yeniden kurarız. Katalog, metin, görsel, SEO ve mağazacılık tek bir sistem olarak çalışır.",
      metric: { value: "+%30", label: "ilk çeyrekte ortalama trafik artışı" },
      features: [
        {
          title: "Rakip istihbaratı",
          body: "Rakip fiyatlandırma, listeleme ve içeriklerinin sürekli takibi. Bu hafta hangi açıdan kazanabileceğinizi netçe gösteririz.",
        },
        {
          title: "Katalog ve mağaza tasarımı",
          body: "Uçtan uca ürün kataloğu, açılış sayfaları ve mağaza tasarımı. Görsel, metin ve yapı dönüşüm için kurulur.",
        },
        {
          title: "Arama ve SEO programı",
          body: "Anahtar kelime stratejisi, teknik SEO ve sayfa içi düzenlemelerle hak edilen sıralama. +%30 trafik hedefine göre raporlama.",
        },
        {
          title: "İş stratejisi",
          body: "Fiyatlama, paketleme ve mağazacılık hamleleri. Vitrini süslemekle kalmıyor, bir sonraki neyi satmanız gerektiğini de söylüyoruz.",
        },
      ],
      proof:
        "İş ortakları, yayına alındıktan sonraki ilk çeyrekte ortalama +%30 trafik ve dönüşümde anlamlı bir artış elde ediyor.",
    },
    {
      slug: "health",
      eyebrow: "Sağlık için",
      title: "Klinik Zeka Paketi",
      headline: "Hekimlerinize saatlerini geri verin.",
      summary:
        "Mevcut sistemlerinizle entegre olan, ince ayarlanmış yüksek performanslı modeller. Belgeleme, triyaj ve hasta iletişimini kliniği bozmadan hızlandırırız.",
      metric: { value: "+%38", label: "hekim başına kazanılan belgeleme süresi" },
      features: [
        {
          title: "Klinik belgeleme yardımcısı",
          body: "Sessiz not alma ve yapılandırılmış özetler, doğrudan EHR sisteminize düşer. Hekim okur, imzalar; gerisini sistem halleder.",
        },
        {
          title: "Hasta triyajı ve karşılama",
          body: "Çok dilli ön görüşme ve triyaj, ziyaret öncesi anamnezi toplar ve aciliyeti ekibe işaret eder.",
        },
        {
          title: "Operasyonel yapay zekâ",
          body: "Klinik ve hastane ağlarının gerçekliğine uygun planlama, yönlendirme ve arka ofis otomasyonu.",
        },
        {
          title: "Tasarımdan gelen uyumluluk",
          body: "Özel kurulumlar, KVKK ve HIPAA uyumlu, tam denetim izleriyle. Veriniz çevrenizden çıkmaz.",
        },
      ],
      proof:
        "Sağlık iş ortaklarımız belgeleme saatinin %38'ini hasta bakımına geri kazandırıyor, kayıt kalitesi de yükseliyor.",
    },
    {
      slug: "build",
      eyebrow: "Uçtan uca",
      title: "Birlikte İnşa Edelim",
      headline: "Aklınızdaki şirketin tamamını kuruyoruz.",
      summary:
        "Strateji, ürün, mühendislik ve marka tek çatı altında. Peçete üstündeki bir eskizden üretimde çalışan bir işletmeye kadar, ilk işe almanızı isteyeceğiniz kıdemli ekibiz.",
      metric: { value: "4–6", label: "haftada üretimde çalışan ilk sürüm" },
      features: [
        {
          title: "Strateji ve yol haritası",
          body: "Pazar konumlandırma, kapsam ve önemli olanı koruyup hedefe götüren çeyrek bazlı plan.",
        },
        {
          title: "Ürün ve marka",
          body: "İlk özellik yüklenmeden önce güven kazanan kimlik, kullanıcı deneyimi ve hikâye anlatımı.",
        },
        {
          title: "Ölçekte mühendislik",
          body: "AWS, GCP ve Azure üzerinde bulut yerel teslimat. Gözlemlenebilirlik, değerlendirmeler ve güvenlik içeride.",
        },
        {
          title: "İşletelim ya da devredelim",
          body: "Sizin yerinize işletiriz veya ekibinizi eğitir, geri çekiliriz. Karar sizin.",
        },
      ],
      proof:
        "Çoğu projede çalışan ilk sürüm dört ila altı haftada üretime alınır. Hızlıyız, çünkü kıdemliler işi bizzat yapar.",
    },
  ],
  industries: [
    {
      name: "Hukuk",
      pitch:
        "Belge otomasyonu, UYAP entegre dosya alımı ve görüşmeleri kazanılmış işe çeviren müvekkil karşılama asistanı.",
      metric: "+%50 gelir",
    },
    {
      name: "E-ticaret",
      pitch:
        "Katalog ve mağaza tasarımı, rakip izleme ve ölçülebilir trafik artışı sağlayan SEO programı.",
      metric: "+%30 trafik",
    },
    {
      name: "Sağlık",
      pitch:
        "Belgeleme yardımcıları, triyaj ve karşılama, mevcut sistemlere entegre operasyonel yapay zekâ.",
      metric: "+%38 zaman tasarrufu",
    },
    {
      name: "Kurumsal",
      pitch:
        "Kurumsal bilgi birikimini rekabet avantajına çeviren özel platformlar ve yardımcı sistemler.",
      metric: "Kalıcı şekilde kurulur",
    },
  ],
  principles: [
    {
      title: "Sonuç, ürünün kendisidir.",
      body: "Sıfatla değil, sayıyla anlaşırız. Her iş, söz verdiğimiz metriğe göre raporlanır.",
    },
    {
      title: "Her koltukta kıdemli.",
      body: "Tanıştığınız kişiler işi yapan kişilerdir. Devir teslim yok, sizin üzerinizde öğrenen genç yok.",
    },
    {
      title: "Demo için değil, kalmak için inşa edilir.",
      body: "İlk günden üretim disiplini: gözlemlenebilirlik, değerlendirme ve güvenlik tercih meselesi değildir.",
    },
    {
      title: "Türk ustalığı, küresel standart.",
      body: "Dünya standardı mühendisliği eve getiriyoruz, evin en iyisini de dünyaya götürüyoruz.",
    },
  ],
  work: [
    {
      industry: "Hukuk",
      title: "Gelen kutusu kaosundan kapanan dosyaya.",
      summary:
        "Bir butik hukuk bürosu manuel müvekkil karşılama ve yazım sürecini Ada hukuk çalışma alanıyla değiştirdi. UYAP entegre dosya senkronizasyonu ve müvekkil asistanı, ortakları kâğıttan stratejiye taşıdı.",
      outcome: "+%50 gelir",
      duration: "12 hafta",
    },
    {
      industry: "E-ticaret",
      title: "Tek çeyrekte pazarda öne geçti.",
      summary:
        "Çok kategorili bir perakendeci, kataloğunu ve SEO temelini bizimle yeniden kurdu. Sürekli rakip izleme, mağazacılık planını her hafta yeniden yazdı.",
      outcome: "+%30 trafik",
      duration: "10 hafta",
    },
    {
      industry: "Sağlık",
      title: "Saatler geri kazanıldı, dosyalar insan kalemiyle yazılmış gibi okunuyor.",
      summary:
        "Bir klinik ağı, belgeleme yardımcımızı kendi EHR sistemine yerleştirdi. Hekimler daha hızlı imzalıyor, dosyalar daha zengin, karşılama varsayılan olarak çok dilli.",
      outcome: "+%38 zaman tasarrufu",
      duration: "14 hafta",
    },
  ],
  studio: {
    team: [
      {
        name: "Kurucular",
        role: "Mühendislik · Uygulamalı Bilim",
        body: "Amazon, Google ve Microsoft'ta milyonlarca kullanıcının kullandığı ürünleri sevkiyat etmiş, ana dili Türkçe kıdemli bir mühendis ve uygulamalı bilim insanı ekibi.",
      },
      {
        name: "Strateji",
        role: "Marka · Ürün · Hikâye",
        body: "Bahsi çerçeveleyen, markayı kuran ve ilk özellik yüklenmeden güven kazanan sözleri yazan stratejistler ve tasarımcılar.",
      },
      {
        name: "Operasyon",
        role: "Teslimat · Güvenilirlik",
        body: "İşin akışını sürdüren ekip. Gözlemlenebilirlik, değerlendirme, güvenlik ve üretimi iyi işletmenin günlük ustalığı.",
      },
    ],
    journey: [
      {
        step: "01",
        title: "Keşif",
        body: "30 dakikalık bir görüşme. Önce dinleriz, ardından hangi metriği yukarı çekeceğimizi ve nasıl kanıtlayacağımızı öneririz.",
      },
      {
        step: "02",
        title: "Kapsam",
        body: "Sıkı, kilometre taşına dayalı bir teklif. İlk sürümü, ekibi ve takvimi başlamadan görürsünüz.",
      },
      {
        step: "03",
        title: "İnşa",
        body: "İki haftalık döngüler. Neyin sevk edildiğini ve sıradakinin ne olduğunu görürsünüz. Takvimi biz koruruz, önceliği siz.",
      },
      {
        step: "04",
        title: "İşletim",
        body: "Sizinle birlikte işletiriz ya da belgeleme ve eğitimle devrederiz. Her durumda iş bizden uzun yaşar.",
      },
    ],
    faq: [
      {
        q: "Nasıl ücretlendiriyorsunuz?",
        a: "İşler sonuca göre kapsamlanır, kilometre taşı bazlı faturalanır. Saat üzerinden çalışmıyor, ekipleri şişirmiyoruz.",
      },
      {
        q: "Veri nerede saklanıyor?",
        a: "Her müşteri için izole bir veri deposu. KVKK, GDPR ve HIPAA uyumlu kurulumları bulutta veya yerinde destekliyoruz.",
      },
      {
        q: "Sadece Türkiye'deki müşterilerle mi çalışıyorsunuz?",
        a: "Hayır. Stüdyo İstanbul'da, müşteriler global. Varsayılan olarak Türkçe ve İngilizce, talebe göre 30+ dilde çalışıyoruz.",
      },
      {
        q: "Ekibimizi eğitir misiniz?",
        a: "Evet. Devir; belgeleme, koşu kitapları ve yapılandırılmış eğitimi içerir. İş, tasarım gereği bizden uzun yaşar.",
      },
    ],
  },
  pages: {
    services: {
      eyebrow: "Hizmetler",
      title: "Üst üste birikmek için kurulan dört disiplin.",
      intro:
        "İş ortaklarımızın gerçekten önemsediği metrikler etrafında örgütlüyüz. İster bir disiplin seçin, ister dördünü.",
    },
    industries: {
      eyebrow: "Sektörler",
      title: "Alan disiplini ile gerçek sonuçların kesiştiği yerde inşa ediyoruz.",
      intro:
        "Hukuk ekipleri imtiyazını korur, ticaret ekipleri marjını korur, hekimler saatlerini korur. İş, en çok gerektiği yerde belirir.",
    },
    work: {
      eyebrow: "İşler",
      title: "Slogan değil, fatura.",
      intro:
        "Son işlerden kısa bir defter. İsimler iş ortaklarımızın talebiyle saklı, sayılar doğrulanmıştır.",
    },
    journal: {
      eyebrow: "Günlük",
      title: "Stüdyodan saha notları.",
      intro: "İşin sahibi tarafından yazılmış kısa denemeler.",
      entries: [
        {
          date: "2026 · 05",
          title: "Hukuk bürolarını neden özellikle değil gelirle ölçüyoruz.",
          summary:
            "Bir hukuk bürosuna yazılım sattığınızda gerçekten önemli olan tek metrik üzerine kısa bir not.",
        },
        {
          date: "2026 · 04",
          title: "Pazar bir çeyrekte nasıl kazanılır.",
          summary:
            "Ticaret iş ortaklarımızın trafiği %30 yükseltmek ve doğru olanı satmak için kullandığı mağazacılık oyun planı.",
        },
        {
          date: "2026 · 03",
          title: "Stüdyo modeli: yalnızca kıdemlilerle neden daha hızlı sevkiyat yapıyoruz.",
          summary:
            "Bilinçli bir ekip kurmak ve gençlere emanet etmeyi reddettiğimiz görevler üzerine.",
        },
      ],
    },
    studio: {
      eyebrow: "Stüdyo",
      title: "Kıdemli yapımcılardan bir ev, açıkta çalışıyor.",
      intro:
        "Ada House küçük ve bilinçli bir ekiptir. Hiperölçekte sevkiyat yapmış mühendisler, uygulamalı bilim insanları, tasarımcılar ve operatörler. İki haftalık döngülerde, sade bir dille, karar verenlerle çalışırız.",
      journeyEyebrow: "Nasıl çalışırız",
      journeyTitle: "İlk görüşmeden ilk sevkiyata.",
      faqEyebrow: "Sık gelen sorular",
      faqTitle: "Sorulduğu gibi cevaplandı.",
    },
    shop: {
      eyebrow: "Mağaza",
      title: "Yakında. İlk koleksiyon.",
      intro:
        "Ada işaretiyle küçük bir temel parça serisi. Uzun ve odaklı günler için yapıldı. Ev, ekranın ötesine uzanır.",
      items: [
        { name: "Kurucu Tişört", note: "Ağır pamuklu · Siyah" },
        { name: "Stüdyo Sweatshirt", note: "Fırçalanmış polar · Kum" },
        { name: "Saha Şapkası", note: "Altı parçalı · Nakışlı" },
        { name: "Atölye Çantası", note: "Branda · Doğal" },
      ],
      newsletterTitle: "Sırada ilk sırada olun.",
      newsletterBody:
        "E-postanızı bırakın, ilk sevkiyat hazır olduğunda tek bir not gönderelim. Bülten yok, gürültü yok.",
      emailPlaceholder: "siz@alanadi.com",
    },
    contact: {
      eyebrow: "İletişim",
      title: "Hangi metriği yukarı çekmek istediğinizi söyleyin.",
      intro:
        "Çekip çekemeyeceğimizi ve ne kadar hızlı olacağını biz söyleyelim. Cevabı kıdemli mühendisler verir, bot değil.",
      studioCardEyebrow: "Stüdyo",
      studioCardBody: "Uzaktan çalışıyoruz. İş ortaklarımıza onların olduğu yerde gideriz.",
      directCardEyebrow: "Doğrudan",
      directCardBody: "İş ortaklığı ve basın görüşmeleri için.",
      formNameLabel: "Adınız",
      formEmailLabel: "E-posta",
      formCompanyLabel: "Şirket",
      formIndustryLabel: "Sektör · Hukuk, Ticaret, Sağlık, Diğer",
      formMessageLabel: "Proje",
      formMessagePlaceholder:
        "Hangi metriği yukarı çekmek istiyorsunuz? Önünüzde ne var?",
      formNote:
        "Bu formu /api/contact altına bir Next.js route handler ekleyerek e-posta veya CRM sisteminize bağlayabilirsiniz.",
    },
    notFound: {
      eyebrow: "Hata · 404",
      title: "Adada kaybolduk.",
      body: "Aradığınız sayfa sürüklenip gitmiş. Sizi yararlı bir yere geri götürelim.",
    },
  },
};
