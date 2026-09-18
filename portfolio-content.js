/* Public portfolio content, aligned with the owner-supplied Germany CV.
   Keep contact credentials, private repository data and full CV files out of this file. */
(() => {
  const d = window.PORTFOLIO_DATA;
  if (!d) return;
  Object.assign(d.profile, {
  "name": "Ali Orkun Özkul",
  "email": "ali.ozkul@icloud.com",
  "linkedin": "https://www.linkedin.com/in/aliorkunozkul/",
  "resumeUrl": null
});
  Object.assign(d.translations.tr, {
  "nav.home": "Demo",
  "nav.career": "Deneyim",
  "nav.impact": "Sonuçlar",
  "nav.credentials": "Yetkinlikler",
  "nav.contact": "İletişim",
  "nav.contents": "BU SAYFADA",
  "nav.menu": "Menü",
  "projects.empty": "Aramana uygun proje bulunamadı.",
  "universe.tag": "BAĞIMSIZ DİJİTAL ÜRÜNLER",
  "universe.caption": "BİR FİKİR. BİR DENEYİM. BİR ÜRÜN.",
  "hero.eyebrow": "SENIOR / LEAD SOFTWARE ENGINEER",
  "hero.description": "Endüstriyel yazılım, bulut ve veri platformları ile telekom alanlarında 15+ yıllık deneyim. Go ve Python geliştirmeyi mimari sahiplik, gereksinim analizi ve uçtan uca teslimatla birleştiriyorum.",
  "hero.secondary": "Deneyimimi incele",
  "projects.title": "Projelerim, tek bir yerde.",
  "projects.description": "Günlük hayatı kolaylaştıran uygulamalardan iş süreçlerini bir araya getiren platformlara. Tasarladığım ürünler ve web projeleri.",
  "projects.note": "Projelerin tanıtım, destek ve gizlilik bilgilerine kendi sayfalarından ulaşabilirsin.",
  "projects.website": "PROJE WEB SAYFASI",
  "projects.visit": "Proje sayfasını aç",
  "projects.source": "GitHub deposu",
  "projects.search": "Proje veya teknoloji ara",
  "projects.filter.other": "Diğer",
  "projects.count": "{count} / {total} proje",
  "projects.sync.loading": "Proje listesi güncelleniyor…",
  "projects.sync.live": "Proje listesi güncel",
  "projects.sync.saved": "Uygulamalar ve web projeleri",
  "expertise.one.text": "Endüstri 4.0 mikroservisleri, REST API’ler ve veri yoğun sistemler. Mimari ve teknoloji seçiminden Go/Python geliştirmeye, entegrasyondan canlıya geçişe kadar uygulamalı mühendislik.",
  "expertise.two.text": "Bosch genelinde kullanım için tasarlanan üretim veri platformları: veri toplama, yedekleme ve işleme. Databricks ve Azure Functions ile yapay zekâ girişimlerine kullanılabilir veri hazırlama.",
  "expertise.three.text": "Beş kişilik yazılım ekibine teknik liderlik. Kod incelemeleri, mentorluk, iş paketlerine ayırma ve önceliklendirme; ekipler arası koordinasyon ve canlıya geçişte teknik sahiplik.",
  "expertise.one.tags": "Go / Python / REST APIs / Microservices",
  "expertise.two.tags": "Databricks / Azure Functions / Kafka / OPC",
  "expertise.three.tags": "Code review / Mentoring / Agile / Delivery",
  "about.text1": "Ben Ali Orkun Özkul. Stuttgart’ta Robert Bosch GmbH bünyesinde Senior Software Engineer olarak çalışıyorum. Bosch genelinde kullanım için tasarlanan üretim veri platformlarının mimarisini, backend servislerini ve entegrasyonlarını geliştiriyorum.",
  "about.text2": "Bursa’daki Lead Software Engineer görevimde beş kişilik bir yazılım ekibine teknik liderlik yaptım. Mimari sahipliği; kod inceleme, mentorluk ve uygulamalı geliştirmeyle birleştirerek tasarımdan canlıya geçişe kadar teknik teslimatı yönettim. Geçmişim endüstriyel yazılım, veri platformları ve telekom sistemlerini kapsıyor.",
  "about.years": "YILLIK DENEYİM",
  "about.work": "Yazılım, veri\n& teknik liderlik",
  "contact.kicker": "İLETİŞİM",
  "contact.title": "Birlikte çözüm\nüretelim.",
  "contact.description": "Yazılım mimarisi, mikroservisler, veri platformları ve teknik liderlik hakkında e-posta veya LinkedIn üzerinden iletişime geçebilirsiniz.",
  "meta.title": "Ali Orkun Özkul — Senior / Lead Software Engineer",
  "meta.description": "Ali Orkun Özkul. Stuttgart merkezli Senior / Lead Software Engineer. 15+ yıl deneyim; yazılım mimarisi, mikroservisler, üretim veri platformları ve teknik liderlik.",
  "career.current": "Güncel görev",
  "career.contract": "Proje bazlı sözleşme",
  "career.tags": "Teknolojiler ve çalışma alanları",
  "career.kicker": "04 / DENEYİM",
  "career.title": "Sistemlerden iş değerine.",
  "career.intro": "Üretim verisi platformları, Endüstri 4.0 mikroservisleri ve telekom sistemlerinde 15+ yıllık deneyim; uygulamalı geliştirme ve teknik liderlik.",
  "impact.kicker": "05 / SONUÇLAR",
  "impact.title": "Ölçülebilir katkı.",
  "impact.intro": "Bağımsız tasarım ve teknik devreye almadan üretim görünürlüğüne: seçili profesyonel projelerim ve iş sonuçları.",
  "impact.contribution": "Katkım",
  "impact.outcome": "İş sonucu",
  "impact.technologies": "Teknolojiler",
  "impact.more.kicker": "DİĞER PROFESYONEL PROJELER",
  "impact.more.title": "İzlenebilirlik, karar desteği ve kalite.",
  "impact.delivery.kicker": "TEKNİK LİDERLİK",
  "impact.delivery.title": "İhtiyaçtan canlıya, uçtan uca.",
  "impact.delivery.intro": "Beş kişilik bir yazılım ekibine teknik liderlik deneyimi: mimari ve teknoloji seçiminden kod inceleme ve mentorluğa, önceliklendirmeden canlıya geçiş sahipliğine.",
  "impact.note": "Tool Tracking ve Machine Connectivity tutarları yaklaşık yıllık maliyet tasarruflarıdır.",
  "credentials.kicker": "06 / BİLGİ BİRİKİMİ",
  "credentials.title": "Teknoloji, eğitim ve gelişim.",
  "credentials.skills": "Teknik yetkinlikler",
  "credentials.certificates": "Seçili eğitimler",
  "credentials.education": "Eğitim",
  "credentials.languages": "Diller",
  "education.degree": "Elektrik-Elektronik Mühendisliği · Lisans (B.Sc.)",
  "education.school": "Uludağ Üniversitesi · 2009",
  "languages.text": "Türkçe — Ana dil · İngilizce — Akıcı · Almanca — Başlangıç",
  "projects.professional": "Profesyonel projeler ve iş sonuçları",
  "expertise.one.title": "Yazılım mimarisi & backend",
  "expertise.two.title": "Üretim verisi & bulut",
  "impact.context": "BOSCH · BURSA, TÜRKİYE",
  "contact.linkedin": "LinkedIn’de iletişime geç"
});
  Object.assign(d.translations.en, {
  "nav.home": "Demo",
  "nav.career": "Experience",
  "nav.impact": "Impact",
  "nav.credentials": "Skills",
  "nav.contact": "Contact",
  "nav.contents": "ON THIS PAGE",
  "nav.menu": "Menu",
  "projects.empty": "No projects match your search.",
  "universe.tag": "INDEPENDENT DIGITAL PRODUCTS",
  "universe.caption": "AN IDEA. AN EXPERIENCE. A PRODUCT.",
  "hero.eyebrow": "SENIOR / LEAD SOFTWARE ENGINEER",
  "hero.description": "15+ years in industrial software, cloud and data platforms, and telecommunications. I combine hands-on Go and Python development with architecture ownership, requirements analysis and end-to-end delivery.",
  "hero.secondary": "Explore my experience",
  "projects.title": "My projects, in one place.",
  "projects.description": "From everyday apps to platforms that connect business processes. Explore the products and web projects I design and build.",
  "projects.note": "Visit each project for its overview, support and privacy information.",
  "projects.website": "PROJECT WEBSITE",
  "projects.visit": "Visit project website",
  "projects.source": "GitHub repository",
  "projects.search": "Search projects or technologies",
  "projects.filter.other": "Other",
  "projects.count": "{count} / {total} projects",
  "projects.sync.loading": "Updating projects…",
  "projects.sync.live": "Project list up to date",
  "projects.sync.saved": "Apps and web projects",
  "expertise.one.text": "Industry 4.0 microservices, REST APIs and data-intensive systems. Hands-on engineering from architecture and technology selection to Go/Python development, integration and rollout.",
  "expertise.two.text": "Production-data platforms designed for global use across Bosch: collection, backup and processing. Preparing usable data for AI initiatives with Databricks and Azure Functions.",
  "expertise.three.text": "Technical leadership of a five-person software team. Code reviews, mentoring, work breakdown and prioritisation; cross-team coordination and technical ownership through go-live.",
  "expertise.one.tags": "Go / Python / REST APIs / Microservices",
  "expertise.two.tags": "Databricks / Azure Functions / Kafka / OPC",
  "expertise.three.tags": "Code review / Mentoring / Agile / Delivery",
  "about.text1": "I’m Ali Orkun Özkul, a Senior Software Engineer at Robert Bosch GmbH in Stuttgart. I design architecture, develop backend services and implement integrations for production-data platforms intended for global use across Bosch.",
  "about.text2": "As Lead Software Engineer in Bursa, I provided technical leadership to a five-person software team. I combined architecture ownership with code reviews, mentoring and hands-on development, owning technical delivery from design through go-live. My background spans industrial software, data platforms and telecom systems.",
  "about.years": "YEARS OF EXPERIENCE",
  "about.work": "Software, data\n& technical leadership",
  "contact.kicker": "GET IN TOUCH",
  "contact.title": "Let’s build\na solution.",
  "contact.description": "Get in touch by email or LinkedIn about software architecture, microservices, data platforms and technical leadership.",
  "meta.title": "Ali Orkun Özkul — Senior / Lead Software Engineer",
  "meta.description": "Ali Orkun Özkul. Stuttgart-based Senior / Lead Software Engineer with 15+ years of experience in software architecture, microservices, production-data platforms and technical leadership.",
  "career.current": "Current role",
  "career.contract": "Project-based contract",
  "career.tags": "Technologies and focus areas",
  "career.kicker": "04 / EXPERIENCE",
  "career.title": "From systems to business value.",
  "career.intro": "15+ years across production-data platforms, Industry 4.0 microservices and telecommunications, combining hands-on development and technical leadership.",
  "impact.kicker": "05 / IMPACT",
  "impact.title": "Measurable contribution.",
  "impact.intro": "From independent design and technical rollout to production visibility: selected professional projects and business outcomes.",
  "impact.contribution": "My contribution",
  "impact.outcome": "Business outcome",
  "impact.technologies": "Technologies",
  "impact.more.kicker": "ADDITIONAL PROFESSIONAL PROJECTS",
  "impact.more.title": "Traceability, decision support and quality.",
  "impact.delivery.kicker": "TECHNICAL LEADERSHIP",
  "impact.delivery.title": "From requirements to go-live.",
  "impact.delivery.intro": "Experience leading a five-person software team: architecture and technology selection, code reviews and mentoring, prioritisation and go-live ownership.",
  "impact.note": "Tool Tracking and Machine Connectivity figures are approximate annual cost savings.",
  "credentials.kicker": "06 / KNOWLEDGE",
  "credentials.title": "Technology, education and growth.",
  "credentials.skills": "Technical skills",
  "credentials.certificates": "Selected training",
  "credentials.education": "Education",
  "credentials.languages": "Languages",
  "education.degree": "B.Sc. Electrical-Electronics Engineering",
  "education.school": "Uludag University · 2009",
  "languages.text": "Turkish — Native · English — Fluent · German — Beginner",
  "projects.professional": "Professional projects and business impact",
  "expertise.one.title": "Software architecture & backend",
  "expertise.two.title": "Production data & cloud",
  "impact.context": "BOSCH · BURSA, TURKEY",
  "contact.linkedin": "Connect on LinkedIn"
});
  d.projects = [
  {
    "name": "UFFF",
    "mark": "U!",
    "language": "HTML",
    "tone": "lavender",
    "icon": "assets/icons/ufff-original.png",
    "page": "https://aozkul.github.io/UFFF/",
    "pageEn": "https://aozkul.github.io/UFFF/en/",
    "description": {
      "tr": "Sesini çizgi film karakterine dönüştür. Kendi sahneni yarat, hareketlendir ve paylaş.",
      "en": "Turn your voice into a cartoon character. Create, animate and share your own scene."
    },
    "visibility": "public"
  },
  {
    "name": "PaceQ",
    "mark": "PQ",
    "language": "HTML",
    "tone": "blue",
    "icon": "assets/icons/paceq-original.png",
    "page": "https://aozkul.github.io/PaceQ/",
    "pageEn": "https://aozkul.github.io/PaceQ/en/",
    "description": {
      "tr": "Odak seansları, esnek molalar ve sakin bir çalışma ritmi.",
      "en": "Focused sessions, flexible breaks and a calmer working rhythm."
    },
    "visibility": "public"
  },
  {
    "name": "NotNow",
    "mark": "N.",
    "language": "HTML",
    "tone": "yellow",
    "icon": "assets/icons/notnow-original.png",
    "page": "https://aozkul.github.io/NotNow/",
    "pageEn": "https://aozkul.github.io/NotNow/en/",
    "description": {
      "tr": "İstek anında kendine kısa bir mola ver. Küçük adımlarla, kendi hızında.",
      "en": "Take a short pause when a craving arrives. Small steps, at your own pace."
    },
    "visibility": "public"
  },
  {
    "name": "PayGuard",
    "mark": "PG",
    "language": "HTML",
    "tone": "rose",
    "icon": "assets/icons/payguard-original.png",
    "page": "https://aozkul.github.io/PayGuard/",
    "pageEn": "https://aozkul.github.io/PayGuard/en/",
    "description": {
      "tr": "Abonelikler, garantiler ve iade tarihleri. Önemli günler tek bir yerde.",
      "en": "Subscriptions, warranties and return dates. Keep the important dates together."
    },
    "visibility": "public"
  },
  {
    "name": "VocabLens",
    "mark": "Aa",
    "language": "HTML",
    "tone": "lavender",
    "icon": "assets/icons/vocablens-premium.svg",
    "page": "https://aozkul.github.io/VocabLens/",
    "pageEn": "https://aozkul.github.io/VocabLens/en/",
    "description": {
      "tr": "Gördüğün kelimeleri keşfet. Çeviri ve kişisel kelime kartlarıyla öğren.",
      "en": "Discover the words around you. Learn with translations and personal word cards."
    },
    "visibility": "public"
  },
  {
    "name": "MathRush",
    "mark": "x²",
    "language": "HTML",
    "tone": "peach",
    "icon": "assets/icons/mathrush.svg",
    "page": "https://aozkul.github.io/MathRush/",
    "pageEn": "https://aozkul.github.io/MathRush/en/",
    "description": {
      "tr": "Matematiğe küçük bir mola. Uygulama bilgileri, destek ve gizlilik.",
      "en": "A little time for maths. App information, support and privacy."
    },
    "visibility": "public"
  },
  {
    "name": "NuThings_v1",
    "mark": "N°",
    "language": "TypeScript",
    "tone": "sage",
    "icon": "assets/icons/nut-things.png",
    "page": "https://aozkul.github.io/NuThings_v1/",
    "pageEn": "https://aozkul.github.io/NuThings_v1/en/",
    "description": {
      "tr": "Doğal ürünler için tasarlanmış modern katalog ve alışveriş deneyimi projesi.",
      "en": "A modern catalogue and shopping experience project for natural products."
    },
    "logo": true,
    "visibility": "public"
  },
  {
    "name": "Kernora",
    "mark": "K",
    "language": "TypeScript",
    "tone": "blue",
    "icon": "assets/icons/kernora-original.png",
    "page": "https://aozkul.github.io/kernora/",
    "pageEn": "https://aozkul.github.io/kernora/en/",
    "catalogOnly": true,
    "description": {
      "tr": "Kayıtlar, süreçler, belgeler ve ekip görevleri. Danışmanlık ve operasyon için ortak CRM çalışma alanı.",
      "en": "Records, processes, documents and team tasks. A shared CRM workspace for consultancy and operations."
    },
    "visibility": "public"
  }
];
  d.career = [
  {
    "role": "Senior Software Engineer",
    "company": "Robert Bosch GmbH",
    "city": "Stuttgart",
    "dates": {
      "tr": "Ağu 2023 – Günümüz",
      "en": "Aug 2023 – Present"
    },
    "current": true,
    "focus": {
      "tr": "ÜRETİM VERİSİ PLATFORMLARI",
      "en": "PRODUCTION-DATA PLATFORMS"
    },
    "text": {
      "tr": "Bosch genelinde kullanım için tasarlanan platformlarda veri toplama, yedekleme ve işleme mimarisi; Python/Go servisleri ve üretim sistemleri entegrasyonları.",
      "en": "Architecture for data collection, backup and processing on platforms intended for global use across Bosch, with Python/Go services and production-system integrations."
    },
    "details": [
      {
        "label": {
          "tr": "Platform mimarisi",
          "en": "Platform architecture"
        },
        "text": {
          "tr": "Üretim verisinin toplanması, yedeklenmesi ve işlenmesini kapsayan yazılım mimarileri tasarlama.",
          "en": "Design software architecture covering the collection, backup and processing of production data."
        }
      },
      {
        "label": {
          "tr": "Backend & entegrasyon",
          "en": "Backend & integration"
        },
        "text": {
          "tr": "Üretim veri akışlarını ve sistemlerini bağlayan Python ve Go backend servisleri ile API entegrasyonları geliştirme.",
          "en": "Develop backend services in Python and Go and API integrations connecting production-data workflows and systems."
        }
      },
      {
        "label": {
          "tr": "Yapay zekâ için veri hazırlığı",
          "en": "Data preparation for AI"
        },
        "text": {
          "tr": "Databricks ve Azure Functions kullanarak üretim verisini işleme ve yapay zekâ girişimlerinde kullanılabilir girdilere dönüştürme.",
          "en": "Use Databricks and Azure Functions to process and structure production data into usable inputs for AI initiatives."
        }
      },
      {
        "label": {
          "tr": "Gereksinimler & önceliklendirme",
          "en": "Requirements & prioritisation"
        },
        "text": {
          "tr": "Paydaş gereksinimlerini teknik görevlere dönüştürme, entegrasyon ihtiyaçlarını tanımlama; backlog netleştirme ve önceliklendirmeye katkı.",
          "en": "Translate stakeholder requirements into technical tasks, define integration needs and contribute to backlog refinement and prioritisation."
        }
      },
      {
        "label": {
          "tr": "Otomasyon & teslimat",
          "en": "Automation & delivery"
        },
        "text": {
          "tr": "Manuel yükü azaltıp işleme hızı ve güvenilirliğini artıran veri akışları otomasyonu; test, canlıya geçiş ve sürüm sonrası iyileştirmelere destek.",
          "en": "Automate data workflows to reduce manual effort and improve processing speed and reliability; support testing, go-live and post-release improvements."
        }
      }
    ],
    "tags": [
      "Python",
      "Go",
      "Databricks",
      "Azure Functions",
      "REST APIs"
    ]
  },
  {
    "role": "Lead Software Engineer",
    "company": "Bosch",
    "city": "Bursa",
    "dates": {
      "tr": "Haz 2020 – Ağu 2023",
      "en": "Jun 2020 – Aug 2023"
    },
    "focus": {
      "tr": "TEKNİK LİDERLİK & ENDÜSTRİ 4.0",
      "en": "TECHNICAL LEADERSHIP & INDUSTRY 4.0"
    },
    "text": {
      "tr": "Endüstri 4.0 mikroservisleri geliştiren beş kişilik yazılım ekibine teknik liderlik; mimari ve teknoloji seçiminden uygulama ve devreye almaya kadar teknik sahiplik.",
      "en": "Technical leadership of a five-person team delivering Industry 4.0 microservices, owning architecture and technology selection through implementation and rollout."
    },
    "details": [
      {
        "label": {
          "tr": "Mimari & teknoloji seçimi",
          "en": "Architecture & technology selection"
        },
        "text": {
          "tr": "Mimari kararları ve teknoloji seçimini sahiplenerek tasarım, uygulama ve teknik devreye alma sürecini yönetme.",
          "en": "Own architecture and technology selection across design, implementation and technical rollout."
        }
      },
      {
        "label": {
          "tr": "İş paketleri & öncelikler",
          "en": "Work breakdown & priorities"
        },
        "text": {
          "tr": "Veri akışları, gereksinimler ve kabul kriterlerini tanımlama; teslimat kapsamını teknik iş paketlerine ayırıp uygulama görevlerini önceliklendirme.",
          "en": "Define data flows, requirements and acceptance criteria; break delivery scope into technical work packages and prioritise implementation tasks."
        }
      },
      {
        "label": {
          "tr": "Kod inceleme & mentorluk",
          "en": "Code reviews & mentoring"
        },
        "text": {
          "tr": "Geliştiricilere tasarım ve uygulama sırasında uygulamalı teknik rehberlik sunma; kod incelemeleri ve mentorluk.",
          "en": "Review code and mentor developers, providing hands-on technical guidance during design and implementation."
        }
      },
      {
        "label": {
          "tr": "Koordinasyon & canlıya geçiş",
          "en": "Coordination & go-live"
        },
        "text": {
          "tr": "Ekipler arası bağımlılıkları koordine etme, riskleri ve teknik kısıtları netleştirme; canlıya geçiş ve operasyonel desteğe kadar teknik teslimatı sahiplenme.",
          "en": "Coordinate cross-team dependencies, clarify risks and technical constraints, and own technical delivery through go-live and operational support."
        }
      }
    ],
    "tags": [
      "Microservices",
      "Industry 4.0",
      "Architecture",
      "Code review",
      "Mentoring"
    ]
  },
  {
    "role": "Senior Software and Data Engineer",
    "company": "Bosch",
    "city": "Bursa",
    "dates": {
      "tr": "Haz 2015 – Haz 2020",
      "en": "Jun 2015 – Jun 2020"
    },
    "focus": {
      "tr": "VERİ MİMARİSİ & YAZILIM MÜHENDİSLİĞİ",
      "en": "DATA ARCHITECTURE & SOFTWARE ENGINEERING"
    },
    "text": {
      "tr": "Endüstri 4.0 mikroservislerinin geliştirilmesi ve veri yoğun endüstriyel sistemlerin yazılım mimarisi sahipliği.",
      "en": "Industry 4.0 microservice development and software architecture ownership for data-intensive industrial systems."
    },
    "details": [
      {
        "label": {
          "tr": "Mikroservisler & mimari",
          "en": "Microservices & architecture"
        },
        "text": {
          "tr": "Endüstri 4.0 mikroservisleri geliştirme ve veri yoğun sistemlerin yazılım mimarisini sahiplenme.",
          "en": "Develop Industry 4.0 microservices and own the software architecture of data-intensive industrial systems."
        }
      },
      {
        "label": {
          "tr": "Bulut & teslimat",
          "en": "Cloud & delivery"
        },
        "text": {
          "tr": "Docker ve CI/CD ile bulut tabanlı ve konteyner kullanan çözümleri hayata geçirme; yazılım yaşam döngüsü boyunca farklı ekiplerle çalışma.",
          "en": "Implement cloud-native and container-based solutions with Docker and CI/CD, working with cross-functional teams throughout the software lifecycle."
        }
      }
    ],
    "tags": [
      "Data architecture",
      "Microservices",
      "Docker",
      "CI/CD"
    ]
  },
  {
    "role": "Senior Software Developer",
    "company": "Netas",
    "city": "Istanbul",
    "dates": {
      "tr": "Nis 2013 – Haz 2015",
      "en": "Apr 2013 – Jun 2015"
    },
    "focus": {
      "tr": "TELEKOM & ÇAĞRI SİSTEMLERİ",
      "en": "TELECOM & CALL SYSTEMS"
    },
    "text": {
      "tr": "Ses iletişim sistemleri için çağrı kontrolü, yönlendirme, sinyalleşme ve protokol entegrasyonları.",
      "en": "Call control, routing, signalling and protocol integrations for voice communication systems."
    },
    "details": [
      {
        "label": {
          "tr": "Çağrı işleme",
          "en": "Call processing"
        },
        "text": {
          "tr": "ISUP, PRI ve H.323 kullanarak çağrı kontrolü ve yönlendirme yazılımı geliştirme.",
          "en": "Develop call-control and routing software using ISUP, PRI and H.323."
        }
      },
      {
        "label": {
          "tr": "Acil çağrı özellikleri",
          "en": "Emergency calling"
        },
        "text": {
          "tr": "112 acil çağrı işleme dahil olmak üzere ses iletişim sistemleri için yeni özellikler tasarlama ve uygulama.",
          "en": "Design and implement voice communication features, including emergency call handling for 112."
        }
      },
      {
        "label": {
          "tr": "Müşteri senaryoları",
          "en": "Customer scenarios"
        },
        "text": {
          "tr": "Sorun giderme ve yeni sesli iletişim özellikleri için müşterilerle birlikte çalışma.",
          "en": "Work with customers on troubleshooting and new voice communication features."
        }
      }
    ],
    "tags": [
      "ISUP",
      "PRI",
      "H.323",
      "112"
    ]
  },
  {
    "role": "Software Developer",
    "company": "Emko",
    "city": "Bursa",
    "dates": {
      "tr": "Nis 2012 – Nis 2013",
      "en": "Apr 2012 – Apr 2013"
    },
    "contract": true,
    "focus": {
      "tr": "BİYOMEDİKAL KONTROL SİSTEMLERİ",
      "en": "BIOMEDICAL CONTROL SYSTEMS"
    },
    "text": {
      "tr": "N-SMART biyomedikal kontrolörünün iletişim tasarımı, kontrol işlevleri ve uyarı sistemleri.",
      "en": "Communication design, control functions and alerts for the N-SMART biomedical controller."
    },
    "details": [
      {
        "label": {
          "tr": "Cihaz haberleşmesi",
          "en": "Device communication"
        },
        "text": {
          "tr": "RS-232/485, Ethernet, USB, TCP/IP ve MODBUS üzerinden N-SMART kontrolör iletişimini tasarlama.",
          "en": "Design N-SMART controller communications using RS-232/485, Ethernet, USB, TCP/IP and MODBUS."
        }
      },
      {
        "label": {
          "tr": "Kontrol & kalibrasyon",
          "en": "Control & calibration"
        },
        "text": {
          "tr": "Alarm işlevleri, sıcaklık kalibrasyonu ve PID kontrolü geliştirme.",
          "en": "Implement alarms, temperature calibration and PID control."
        }
      },
      {
        "label": {
          "tr": "Kayıt & bildirimler",
          "en": "Records & alerts"
        },
        "text": {
          "tr": "Sıcaklık verisi kaydı ve GSM tabanlı SMS/e-posta uyarıları geliştirme.",
          "en": "Implement temperature logging and GSM-based SMS/email alerts."
        }
      }
    ],
    "tags": [
      "N-SMART",
      "MODBUS",
      "PID",
      "TCP/IP",
      "GSM"
    ]
  },
  {
    "role": "Software Developer",
    "company": "Netas",
    "city": "Istanbul",
    "dates": {
      "tr": "Haz 2009 – Eyl 2011",
      "en": "Jun 2009 – Sep 2011"
    },
    "focus": {
      "tr": "AĞ & IP TABANLI İLETİŞİM",
      "en": "NETWORK & IP COMMUNICATIONS"
    },
    "text": {
      "tr": "Ses ve veri trafiği taşıyan ağ anahtarlama sistemleri için iletişim yazılımları.",
      "en": "Communication software for network switching systems carrying voice and data traffic."
    },
    "details": [
      {
        "label": {
          "tr": "Çağrı kontrolü",
          "en": "Call control"
        },
        "text": {
          "tr": "SIP ve ISDN tabanlı çağrı kontrolü özellikleri ve protokol entegrasyonları geliştirme.",
          "en": "Implement call-control features and protocol integrations using SIP and ISDN."
        }
      },
      {
        "label": {
          "tr": "Arayüz & backend",
          "en": "Interfaces & backend"
        },
        "text": {
          "tr": "IP tabanlı iletişim sistemleri için kullanıcı arayüzleri ve backend bileşenleri tasarlama.",
          "en": "Design user interfaces and backend components for IP-based communication systems."
        }
      },
      {
        "label": {
          "tr": "Performans & kararlılık",
          "en": "Performance & stability"
        },
        "text": {
          "tr": "Sistem performansının iyileştirilmesine ve daha kararlı çalışmasına katkı.",
          "en": "Contribute to system performance improvements and stability enhancements."
        }
      }
    ],
    "tags": [
      "SIP",
      "ISDN",
      "IP communications"
    ]
  }
];
  d.impact = [
  {
    "value": "~€750K",
    "metric": {
      "tr": "Yıllık maliyet tasarrufu",
      "en": "Annual cost savings"
    },
    "category": {
      "tr": "TAKIM TAKİBİ",
      "en": "TOOL TRACKING"
    },
    "title": "Tool Tracking System",
    "contribution": {
      "tr": "Gerçek zamanlı takım takibi ve maliyet hesaplama sistemini bağımsız olarak tasarladım ve teknik devreye alınmasına liderlik ettim.",
      "en": "Independently designed the real-time tracking and cost-calculation system and led its technical rollout."
    },
    "outcome": {
      "tr": "Kesici ve delici takımların ömrünü uzattı, takım kırılma nedenlerinin analizini iyileştirdi ve daha kararlı operasyonları destekledi. Yaklaşık €750 bin yıllık tasarruf.",
      "en": "Extended cutting and drilling tool life, improved analysis of tool-breakage causes and supported more stable operations. Approximately €750K in annual savings."
    },
    "tech": [
      "Vue.js",
      "Go",
      "Python",
      "RabbitMQ",
      "Docker"
    ]
  },
  {
    "value": "~€350K",
    "metric": {
      "tr": "Yıllık maliyet tasarrufu",
      "en": "Annual cost savings"
    },
    "category": {
      "tr": "ENDÜSTRİYEL ENTEGRASYON",
      "en": "INDUSTRIAL INTEGRATION"
    },
    "title": "Machine Connectivity",
    "contribution": {
      "tr": "Yeniden kullanılabilir makine bağlantı altyapısını bağımsız olarak tasarladım ve teknik devreye alınmasına liderlik ettim.",
      "en": "Independently designed a reusable machine-connectivity foundation and led its technical rollout."
    },
    "outcome": {
      "tr": "Makineler arası iletişim ve gerçek zamanlı veri akışı sağladı; iş gücü ihtiyacını azalttı, arızaların önlenmesine yardımcı oldu ve yeni endüstriyel projelere zemin hazırladı. Yaklaşık €350 bin yıllık tasarruf.",
      "en": "Enabled machine-to-machine communication and real-time industrial data streaming, reduced labour requirements and helped prevent faults while opening the way for new industrial projects. Approximately €350K in annual savings."
    },
    "tech": [
      "Go",
      "Kafka",
      "OPC"
    ]
  }
];
  d.otherImpact = [
  {
    "category": {
      "tr": "ÜRETİM İZLENEBİLİRLİĞİ",
      "en": "PRODUCTION TRACEABILITY"
    },
    "title": {
      "tr": "TETRIS · Üretim takibi",
      "en": "TETRIS · Production tracking"
    },
    "contribution": {
      "tr": "Üretim akışının görünürlüğünü ve yaşam döngüsü izlenebilirliğini geliştiren uçtan uca üretim takip sistemi.",
      "en": "End-to-end production tracking to improve production-flow visibility and lifecycle traceability."
    },
    "outcome": {
      "tr": "Üretimdeki darboğazların belirlenmesini ve yönetilmesini destekleyen süreç görünürlüğü.",
      "en": "Process visibility supporting bottleneck identification and management."
    },
    "tags": {
      "tr": [
        "Üretim görünürlüğü",
        "Yaşam döngüsü takibi"
      ],
      "en": [
        "Production visibility",
        "Lifecycle traceability"
      ]
    }
  },
  {
    "category": {
      "tr": "ERP & İŞ ZEKÂSI",
      "en": "ERP & BUSINESS INTELLIGENCE"
    },
    "title": {
      "tr": "ERP entegre üretim uygulaması",
      "en": "ERP-integrated production app"
    },
    "contribution": {
      "tr": "Parti takibi ve malzeme akışı şeffaflığı için SAP ile entegre üretim uygulaması.",
      "en": "SAP-integrated production application for batch tracking and material-flow transparency."
    },
    "outcome": {
      "tr": "Power BI ve Tableau raporlarıyla operasyonel karar almayı destekleyen görünürlük.",
      "en": "Power BI and Tableau reporting to support operational decision-making."
    },
    "tech": [
      "SAP",
      "Power BI",
      "Tableau"
    ]
  },
  {
    "category": {
      "tr": "KALİTE & OTOMASYON",
      "en": "QUALITY & AUTOMATION"
    },
    "title": {
      "tr": "Test otomasyonu",
      "en": "Test automation"
    },
    "contribution": {
      "tr": "Python ve Selenium ile web testi otomasyonu.",
      "en": "Python and Selenium web-test automation."
    },
    "outcome": {
      "tr": "Manuel kalite kontrol yükünü azaltma, yazılım kararlılığını iyileştirme ve sürümleri hızlandırma.",
      "en": "Reduce manual QA effort, improve software stability and accelerate releases."
    },
    "tech": [
      "Python",
      "Selenium"
    ]
  }
];
  d.impactDelivery = [
  {
    "title": {
      "tr": "Mimariyi sahiplenme",
      "en": "Own the architecture"
    },
    "text": {
      "tr": "Mimari ve teknoloji seçimini gereksinimler, veri akışları ve entegrasyon ihtiyaçlarıyla birlikte ele alma.",
      "en": "Own architecture and technology selection alongside requirements, data flows and integration needs."
    }
  },
  {
    "title": {
      "tr": "İşi planlama",
      "en": "Structure the work"
    },
    "text": {
      "tr": "Kapsamı teknik iş paketlerine ayırma, kabul kriterlerini netleştirme ve uygulama görevlerini önceliklendirme.",
      "en": "Break scope into technical work packages, clarify acceptance criteria and prioritise implementation tasks."
    }
  },
  {
    "title": {
      "tr": "Ekibe rehberlik etme",
      "en": "Guide the team"
    },
    "text": {
      "tr": "Kod incelemeleri, mentorluk ve uygulamalı teknik rehberlikle tasarım ve geliştirmeyi destekleme.",
      "en": "Support design and implementation through code reviews, mentoring and hands-on technical guidance."
    }
  },
  {
    "title": {
      "tr": "Canlıya taşıma",
      "en": "Own the rollout"
    },
    "text": {
      "tr": "Ekipler arası bağımlılıkları, riskleri ve teknik kısıtları koordine ederek canlıya geçiş ve operasyonel desteği sahiplenme.",
      "en": "Coordinate cross-team dependencies, risks and constraints, owning technical delivery through go-live and operational support."
    }
  }
];
  d.skillGroups = [
  {
    "title": {
      "tr": "Mimari & teslimat",
      "en": "Architecture & delivery"
    },
    "items": [
      "Microservices",
      "REST APIs",
      "Software / data architecture",
      "Requirements analysis",
      "Product ownership",
      "Agile / Scrum"
    ]
  },
  {
    "title": {
      "tr": "Teknik liderlik",
      "en": "Technical leadership"
    },
    "items": {
      "tr": [
        "Mimari & teknoloji seçimi",
        "Kod incelemeleri",
        "Mentorluk",
        "İş paketlerine ayırma",
        "Önceliklendirme",
        "Ekipler arası koordinasyon",
        "Canlıya geçiş sahipliği"
      ],
      "en": [
        "Architecture & technology selection",
        "Code reviews",
        "Mentoring",
        "Work breakdown",
        "Prioritisation",
        "Cross-team coordination",
        "Go-live ownership"
      ]
    }
  },
  {
    "title": {
      "tr": "Diller & framework’ler",
      "en": "Languages & frameworks"
    },
    "items": [
      "Go",
      "Python",
      "C / C++",
      "JavaScript",
      "Node.js",
      ".NET / .NET Core",
      "Vue.js",
      "AngularJS"
    ]
  },
  {
    "title": {
      "tr": "Bulut & DevOps",
      "en": "Cloud & DevOps"
    },
    "items": [
      "Azure",
      "Azure Functions",
      "Databricks",
      "Docker",
      "CI/CD",
      "Monitoring"
    ]
  },
  {
    "title": {
      "tr": "Mesajlaşma & veri",
      "en": "Messaging & data"
    },
    "items": [
      "Kafka",
      "RabbitMQ",
      "MQTT",
      "Redis",
      "SQL",
      "T-SQL",
      "Oracle SQL / PLSQL"
    ]
  },
  {
    "title": {
      "tr": "Entegrasyon & test",
      "en": "Integration & testing"
    },
    "items": [
      "SAP",
      "OPC",
      "TCP/IP",
      "MODBUS",
      "Selenium"
    ]
  }
];
  d.certificates = [
  "Introduction to Data Science in Python — University of Michigan",
  "Open Source Project Management — Linux Foundation",
  "SQL for Data Science — University of California",
  "Oracle Database: SQL & PL/SQL Fundamentals — Bilginc IT Academy"
];
})();
