/* Portfolio content: public repositories and professional details from the supplied CV.
   Do not put credentials, private repository data or a full personal CV in this file. */
(() => {
  const d = window.PORTFOLIO_DATA;
  if (!d) return;
  Object.assign(d.profile, {name:'Ali Orkun Özkul', email:'ali.ozkul@icloud.com', linkedin:null, resumeUrl:null});
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    "logo": true
  }
,
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
  }
}
].map(p => ({...p, visibility:'public'}));
  const tr = {
    'nav.home':'Başlangıç', 'nav.career':'Deneyim', 'nav.impact':'Sonuçlar', 'nav.credentials':'Yetkinlikler', 'nav.contact':'İletişim', 'nav.contents':'BU SAYFADA', 'nav.menu':'Menü',
    'projects.empty':'Aramana uygun proje bulunamadı.',
    'universe.tag':'BAĞIMSIZ DİJİTAL ÜRÜNLER', 'universe.caption':'BİR FİKİR. BİR DENEYİM. BİR ÜRÜN.',
    'hero.eyebrow':'SENIOR SOFTWARE & DATA ENGINEER / TECHNICAL LEAD',
    'hero.description':'Ölçeklenebilir mikroservisler, bulut mimarileri, API’ler ve veri odaklı dijital platformlar geliştiriyorum. İş ihtiyaçlarını teknik gereksinimlere ve ölçülebilir değer üreten çözümlere dönüştürüyorum.',
    'hero.secondary':'Deneyimimi incele',
    'projects.title':'Projelerim, tek bir yerde.',
    'projects.description':'Günlük hayatı kolaylaştıran uygulamalardan iş süreçlerini bir araya getiren platformlara. Tasarladığım ürünler ve web projeleri.',
    'projects.note':'Projelerin tanıtım, destek ve gizlilik bilgilerine kendi sayfalarından ulaşabilirsin.',
    'projects.website':'PROJE WEB SAYFASI', 'projects.visit':'Proje sayfasını aç', 'projects.source':'GitHub deposu',
    'projects.search':'Proje veya teknoloji ara', 'projects.filter.other':'Diğer',
    'projects.count':'{count} / {total} proje',
    'projects.sync.loading':'Proje listesi güncelleniyor…', 'projects.sync.live':'Proje listesi güncel',
    'projects.sync.saved':'Uygulamalar ve web projeleri',
    'expertise.one.text':'Ölçeklenebilir mikroservisler, bulut mimarileri ve API entegrasyonları. Python, Go ve Azure ile kurumsal sistemlerde otomasyon, performans ve güvenilirlik.',
    'expertise.two.text':'Endüstri 4.0 için veri mimarileri, makine bağlantıları ve gerçek zamanlı veri akışları. Üretim sistemleri, iş uygulamaları ve SAP entegrasyonları.',
    'expertise.three.text':'İş analizi, ürün sahipliği, gereksinimler ve kabul kriterleri. Mimari kararlardan backlog netleştirmeye, Agile teslimattan canlıya geçişe kadar uçtan uca çalışma.',
    'expertise.one.tags':'Python / Go / .NET / Azure / API',
    'expertise.two.tags':'Kafka / RabbitMQ / MQTT / SQL / SAP',
    'expertise.three.tags':'Product Ownership / Agile / Docker / CI/CD',
    'about.text1':'Ben Ali Orkun Özkul. Stuttgart’ta Robert Bosch GmbH bünyesinde Senior Software Engineer olarak çalışıyorum. Profesyonel geçmişim; telekom yazılımları, biyomedikal kontrol sistemleri, endüstriyel veri platformları ve bulut çözümlerini kapsıyor.',
    'about.text2':'Teknik liderlik ile uygulamalı yazılım geliştirmeyi birleştiriyorum. İş ihtiyaçlarını anlamak, teknik bağımlılıkları yönetmek ve güvenilir, ölçeklenebilir çözümleri ekiplerle birlikte teslim etmek çalışma yaklaşımımın merkezinde.',
    'about.years':'KARİYER BAŞLANGICI', 'about.work':'Yazılım, veri\n& teknik liderlik',
    'contact.kicker':'İLETİŞİM', 'contact.title':'Birlikte çözüm\nüretelim.',
    'contact.description':'Yazılım, veri platformları ve teknik liderlik üzerine konuşmak için e-posta ile ulaşabilirsiniz.',
    'meta.title':'Ali Orkun Özkul — Senior Software & Data Engineer / Technical Lead',
    'meta.description':'Ali Orkun Özkul. Stuttgart merkezli Senior Software & Data Engineer / Technical Lead. Mikroservisler, bulut mimarileri, Endüstri 4.0 ve dijital ürünler.',
    'career.current':'Güncel görev', 'career.contract':'Proje bazlı sözleşme', 'career.tags':'Teknolojiler ve çalışma alanları', 'career.kicker':'04 / DENEYİM', 'career.title':'Sistemlerden iş değerine.',
    'career.intro':'Telekom ve biyomedikal kontrol sistemlerinden Endüstri 4.0 ve kurumsal bulut çözümlerine: yazılım geliştirme, veri mimarisi ve teknik liderlik.',
    'impact.kicker':'05 / SONUÇLAR', 'impact.title':'Ölçülebilir katkı.',
    "impact.intro":"Üretim süreçlerinden veri altyapısına: geliştirdiğim sistemlerin maliyet, izlenebilirlik ve operasyonel güvenilirlik üzerindeki somut sonuçları.",
    "impact.contribution":"Katkım",
    "impact.outcome":"İş sonucu",
    "impact.technologies":"Teknolojiler",
    "impact.more.kicker":"OPERASYONEL KATKI",
    "impact.more.title":"Görünür süreçler. Güvenilir sistemler.",
    "impact.delivery.kicker":"TEKNİK LİDERLİK",
    "impact.delivery.title":"İhtiyaçtan canlıya, uçtan uca.",
    "impact.delivery.intro":"İş paydaşları ile mühendislik ekipleri arasında; gereksinimleri netleştiren, teknik bağımlılıkları yöneten ve teslimatı destekleyen bir çalışma yaklaşımı.",
    "impact.note":"Tutarlar yaklaşık değerlerdir. Tool Tracking için tasarruf yıllıktır; diğer iki proje için dönem belirtilmemiştir.",
    'credentials.kicker':'06 / BİLGİ BİRİKİMİ', 'credentials.title':'Teknoloji, eğitim ve gelişim.',
    'credentials.skills':'Teknik yetkinlikler', 'credentials.certificates':'Sertifikalar', 'credentials.education':'Eğitim', 'credentials.languages':'Diller',
    'education.degree':'Elektrik-Elektronik Mühendisliği', 'education.school':'Uludağ Üniversitesi · Ocak 2009',
    'languages.text':'Türkçe — Ana dil · İngilizce — Akıcı · Almanca — Başlangıç'
  };
  const en = {
    'nav.home':'Home', 'nav.career':'Experience', 'nav.impact':'Impact', 'nav.credentials':'Skills', 'nav.contact':'Contact', 'nav.contents':'ON THIS PAGE', 'nav.menu':'Menu',
    'projects.empty':'No projects match your search.',
    'universe.tag':'INDEPENDENT DIGITAL PRODUCTS', 'universe.caption':'AN IDEA. AN EXPERIENCE. A PRODUCT.',
    'hero.eyebrow':'SENIOR SOFTWARE & DATA ENGINEER / TECHNICAL LEAD',
    'hero.description':'I design and deliver scalable microservices, cloud architectures, APIs and data-driven digital platforms — translating business needs into technical requirements and solutions with measurable value.',
    'hero.secondary':'Explore my experience',
    'projects.title':'My projects, in one place.',
    'projects.description':'From everyday apps to platforms that connect business processes. Explore the products and web projects I design and build.',
    'projects.note':'Visit each project for its overview, support and privacy information.',
    'projects.website':'PROJECT WEBSITE', 'projects.visit':'Visit project website', 'projects.source':'GitHub repository',
    'projects.search':'Search projects or technologies', 'projects.filter.other':'Other',
    'projects.count':'{count} / {total} projects',
    'projects.sync.loading':'Updating projects…', 'projects.sync.live':'Project list up to date',
    'projects.sync.saved':'Apps and web projects',
    'expertise.one.text':'Scalable microservices, cloud architectures and API integrations. Python, Go and Azure for enterprise automation, performance and reliability.',
    'expertise.two.text':'Data architectures, machine connectivity and real-time streams for Industry 4.0. Integrating production systems, business applications and SAP.',
    'expertise.three.text':'Business analysis, product ownership, requirements and acceptance criteria. End-to-end work from architectural decisions and backlog refinement to Agile delivery and go-live.',
    'expertise.one.tags':'Python / Go / .NET / Azure / APIs',
    'expertise.two.tags':'Kafka / RabbitMQ / MQTT / SQL / SAP',
    'expertise.three.tags':'Product Ownership / Agile / Docker / CI/CD',
    'about.text1':'I’m Ali Orkun Özkul, a Senior Software Engineer at Robert Bosch GmbH in Stuttgart. My professional experience spans telecom software, biomedical control systems, industrial data platforms and cloud solutions.',
    'about.text2':'I combine technical leadership with hands-on software engineering. Understanding business needs, managing technical dependencies and working with teams to deliver reliable, scalable solutions are central to my approach.',
    'about.years':'CAREER START', 'about.work':'Software, data\n& technical leadership',
    'contact.kicker':'GET IN TOUCH', 'contact.title':'Let’s build\na solution.',
    'contact.description':'Get in touch by email to talk about software, data platforms and technical leadership.',
    'meta.title':'Ali Orkun Özkul — Senior Software & Data Engineer / Technical Lead',
    'meta.description':'Ali Orkun Özkul. Stuttgart-based Senior Software & Data Engineer / Technical Lead. Microservices, cloud architectures, Industry 4.0 and digital products.',
    'career.current':'Current role', 'career.contract':'Project-based contract', 'career.tags':'Technologies and focus areas', 'career.kicker':'04 / EXPERIENCE', 'career.title':'From systems to business value.',
    'career.intro':'From telecom and biomedical control systems to Industry 4.0 and enterprise cloud solutions: software engineering, data architecture and technical leadership.',
    'impact.kicker':'05 / IMPACT', 'impact.title':'Measurable contribution.',
    "impact.intro":"From production processes to data infrastructure: the tangible results of systems I built across cost, traceability and operational reliability.",
    "impact.contribution":"My contribution",
    "impact.outcome":"Business outcome",
    "impact.technologies":"Technologies",
    "impact.more.kicker":"OPERATIONAL IMPACT",
    "impact.more.title":"Visible processes. Reliable systems.",
    "impact.delivery.kicker":"TECHNICAL LEADERSHIP",
    "impact.delivery.title":"From requirements to go-live.",
    "impact.delivery.intro":"A bridge between business stakeholders and engineering teams, clarifying requirements, managing technical dependencies and supporting delivery.",
    "impact.note":"Figures are approximate. Tool Tracking savings are annual; no period is specified for the other two projects.",
    'credentials.kicker':'06 / KNOWLEDGE', 'credentials.title':'Technology, education and growth.',
    'credentials.skills':'Technical skills', 'credentials.certificates':'Certifications', 'credentials.education':'Education', 'credentials.languages':'Languages',
    'education.degree':'Electrical-Electronical Engineering', 'education.school':'Uludag University · January 2009',
    'languages.text':'Turkish — Native · English — Fluent · German — Beginner'
  };
  Object.assign(d.translations.tr,tr); Object.assign(d.translations.en,en);
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
      "tr": "BULUT & KURUMSAL YAZILIM",
      "en": "CLOUD & ENTERPRISE SOFTWARE"
    },
    "text": {
      "tr": "Kurumsal bulut çözümlerinde yazılım geliştirme, teknik danışmanlık ve iş ihtiyaçlarından canlıya geçişe uzanan teslimat desteği.",
      "en": "Software engineering and technical consulting for enterprise cloud solutions, supporting delivery from business needs through go-live."
    },
    "details": [
      {
        "label": {
          "tr": "Bulut çözümleri",
          "en": "Cloud solutions"
        },
        "text": {
          "tr": "Python, Go ve Azure ile yazılım ve otomasyon çözümleri geliştirme; ölçeklenebilir kurumsal bulut mimarilerini tasarlama ve destekleme.",
          "en": "Develop software and automation with Python, Go and Azure; design and support scalable enterprise cloud architectures."
        }
      },
      {
        "label": {
          "tr": "İş ile teknoloji arasında",
          "en": "Business–engineering collaboration"
        },
        "text": {
          "tr": "Paydaş ihtiyaçlarını teknik gereksinimlere ve uygulama görevlerine dönüştürme; backlog netleştirme, yapılabilirlik analizi ve önceliklendirmeye destek.",
          "en": "Translate stakeholder needs into technical requirements and implementation tasks; support backlog refinement, feasibility analysis and prioritisation."
        }
      },
      {
        "label": {
          "tr": "Entegrasyon & mimari",
          "en": "Integration & architecture"
        },
        "text": {
          "tr": "Çapraz fonksiyonlu ekiplerle, iş hedeflerine uygun API entegrasyonları, veri akışları ve mimari kararlar üzerinde çalışma.",
          "en": "Work with cross-functional teams on scalable API integrations, data flows and architecture decisions aligned with business objectives."
        }
      },
      {
        "label": {
          "tr": "Uçtan uca teslimat",
          "en": "End-to-end delivery"
        },
        "text": {
          "tr": "Gereksinim analizinden uygulama uyumuna, test desteğinden canlıya geçiş koordinasyonu ve sürüm sonrası iyileştirmelere kadar katkı.",
          "en": "Support requirements analysis, implementation alignment, testing, go-live coordination and post-release improvements."
        }
      },
      {
        "label": {
          "tr": "Operasyonel iyileştirme",
          "en": "Operational improvement"
        },
        "text": {
          "tr": "Bulut ortamlarında performans, güvenlik ve güvenilirliği iyileştirme; süreçlerde otomasyon ve operasyonel verimlilik fırsatlarını belirleme.",
          "en": "Improve cloud performance, security and reliability; identify opportunities for automation and operational efficiency."
        }
      }
    ],
    "tags": [
      "Python",
      "Go",
      "Azure",
      "API integration"
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
      "tr": "Endüstriyel yazılım ekosistemlerinde mimari yön, entegrasyon stratejisi ve geliştirme yaşam döngüsü boyunca teknik liderlik.",
      "en": "Technical leadership across architecture, integration strategy and the software lifecycle for industrial software ecosystems."
    },
    "details": [
      {
        "label": {
          "tr": "Mimari liderlik",
          "en": "Architecture leadership"
        },
        "text": {
          "tr": "Endüstri 4.0 gereksinimleri ve küresel kod kalitesi standartlarıyla uyumlu mikroservis mimarilerinin tasarımına liderlik.",
          "en": "Lead microservice architecture design aligned with Industry 4.0 requirements and global coding quality standards."
        }
      },
      {
        "label": {
          "tr": "Veri akışı stratejisi",
          "en": "Data-flow strategy"
        },
        "text": {
          "tr": "Yapay zekâ odaklı sistemler ve yazılım ekosistemi entegrasyonlarını destekleyen veri akışı stratejileri tanımlama.",
          "en": "Define data-flow strategies supporting AI-driven systems and software ecosystem integrations."
        }
      },
      {
        "label": {
          "tr": "Yaşam döngüsü & standartlar",
          "en": "Lifecycle & standards"
        },
        "text": {
          "tr": "Mimari tasarım, uygulama stratejisi ve operasyonel destekte teknik yönlendirme; kurumsal kalite, güvenlik ve ölçeklenebilirlik standartlarını gözetme.",
          "en": "Provide technical direction across architecture, implementation strategy and operational support, aligned with enterprise quality, security and scalability standards."
        }
      },
      {
        "label": {
          "tr": "Gereksinimler & bağımlılıklar",
          "en": "Requirements & dependencies"
        },
        "text": {
          "tr": "İş kullanıcılarıyla ihtiyaçları netleştirme; kabul kriterlerini ve sistemler arası bağımlılıkları yönetme. Agile ekipler için kapsamı, riskleri ve teknik kısıtları açıklığa kavuşturma.",
          "en": "Clarify business-user needs, define acceptance criteria and manage cross-system dependencies. Support Agile teams by clarifying scope, risks and technical constraints."
        }
      }
    ],
    "tags": [
      "Microservices",
      "Industry 4.0",
      "APIs",
      "Agile"
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
      "tr": "Endüstri 4.0 için mikroservisler, veri yoğun sistemler ve bulut tabanlı uygulamaların tasarımı ve geliştirilmesi.",
      "en": "Design and development of microservices, data-intensive systems and cloud-native applications for Industry 4.0."
    },
    "details": [
      {
        "label": {
          "tr": "Ölçeklenebilir yazılım",
          "en": "Scalable software"
        },
        "text": {
          "tr": "Tüm geliştirme yaşam döngüsünde kaliteyi gözeterek endüstriyel uygulamalar ve mikroservisler tasarlama ve geliştirme.",
          "en": "Design and develop industrial applications and microservices with quality standards across the full software lifecycle."
        }
      },
      {
        "label": {
          "tr": "Veri mimarisi sahipliği",
          "en": "Data architecture ownership"
        },
        "text": {
          "tr": "Yapay zekâ odaklı ve veri yoğun sistemleri destekleyen veri mimarilerini tasarlama ve sahiplenme.",
          "en": "Design and own data architectures supporting AI-driven and data-intensive systems."
        }
      },
      {
        "label": {
          "tr": "Bulut & ekipler arası teslimat",
          "en": "Cloud & cross-functional delivery"
        },
        "text": {
          "tr": "Docker ve CI/CD ile konteyner tabanlı çözümleri uygulama ve optimize etme; karmaşık projelerin teslimatında farklı ekip ve paydaşlarla iş birliği.",
          "en": "Implement and optimise container-based solutions with Docker and CI/CD; collaborate with teams and stakeholders to deliver complex projects."
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
          "tr": "ISUP ve PRI ile çağrı kontrolü, takibi ve yönlendirme yazılımlarını geliştirme ve bakımını yapma; H-323 protokol entegrasyonlarını iyileştirme.",
          "en": "Develop and maintain call-control, tracking and routing software using ISUP and PRI; improve H-323 protocol integrations."
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
          "tr": "Müşterilerle senaryoları simüle etme, sorunları analiz edip giderme ve yeni özellikler teslim etme.",
          "en": "Collaborate with customers to simulate scenarios, troubleshoot issues and deliver new features."
        }
      }
    ],
    "tags": [
      "ISUP",
      "PRI",
      "H-323",
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
      "tr": "N-SMART biyomedikal kontrol birimi için yazılım, donanım ve haberleşme tasarımı.",
      "en": "Software, hardware and communication design for the N-SMART biomedical controller."
    },
    "details": [
      {
        "label": {
          "tr": "Cihaz haberleşmesi",
          "en": "Device communication"
        },
        "text": {
          "tr": "RS-232/485, Ethernet, USB Host/Device ve TCP/IP üzerinden arayüz haberleşmeleri için yazılım ve donanım tasarımı.",
          "en": "Design software and hardware for interface communications over RS-232/485, Ethernet, USB Host/Device and TCP/IP."
        }
      },
      {
        "label": {
          "tr": "Kontrol & kalibrasyon",
          "en": "Control & calibration"
        },
        "text": {
          "tr": "MODBUS haberleşme yazılımı, alarm yapılandırmaları, sıcaklık kalibrasyonu ve PID kontrolü.",
          "en": "Develop MODBUS communication software, alarm configurations, temperature calibration and PID controls."
        }
      },
      {
        "label": {
          "tr": "Kayıt & bildirimler",
          "en": "Records & alerts"
        },
        "text": {
          "tr": "Sıcaklık verilerinin USB’ye kaydı; HMI üzerinden GSM modem ile SMS ve e-posta uyarıları.",
          "en": "Record temperature data to USB and implement SMS and email escalations through a GSM modem from the HMI."
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
    "title": {
      "tr": "Gerçek zamanlı takım takibi",
      "en": "Real-time tool tracking"
    },
    "contribution": {
      "tr": "Maliyet hesaplamasını gerçek zamanlı takım takibiyle birleştiren Tool Tracking System’i geliştirdim.",
      "en": "Developed a Tool Tracking System combining real-time tool tracking with cost calculation."
    },
    "outcome": {
      "tr": "Takip ve maliyet hesaplama çözümüyle yaklaşık €750 bin yıllık maliyet tasarrufu sağlandı.",
      "en": "The tracking and cost-calculation solution delivered approximately €750K in annual cost savings."
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
      "tr": "Makine bağlantılarında tasarruf",
      "en": "Machine connectivity savings"
    },
    "category": {
      "tr": "ENDÜSTRİYEL ENTEGRASYON",
      "en": "INDUSTRIAL INTEGRATION"
    },
    "title": {
      "tr": "Makineden veri akışına",
      "en": "From machines to data streams"
    },
    "contribution": {
      "tr": "Go, Kafka ve OPC entegrasyonuyla makine bağlantılarını sağlayan mikroservisler geliştirdim.",
      "en": "Built machine connectivity microservices using Go, Kafka and OPC integration."
    },
    "outcome": {
      "tr": "Gerçek zamanlı endüstriyel veri akışı mümkün hale geldi; yaklaşık €350 bin tasarruf sağlandı.",
      "en": "Enabled real-time industrial data streaming and delivered approximately €350K in savings."
    },
    "tech": [
      "Go",
      "Kafka",
      "OPC"
    ]
  },
  {
    "value": "~€200K",
    "metric": {
      "tr": "Veri altyapısında tasarruf",
      "en": "Data infrastructure savings"
    },
    "category": {
      "tr": "VERİ MÜHENDİSLİĞİ",
      "en": "DATA ENGINEERING"
    },
    "title": {
      "tr": "Ölçeklenebilir veri altyapısı",
      "en": "Scalable data infrastructure"
    },
    "contribution": {
      "tr": "Kafka, MQTT ve Redis temelli; CI/CD ve izleme bileşenleri içeren ölçeklenebilir veri altyapısını tasarladım ve hayata geçirdim.",
      "en": "Designed and implemented scalable data infrastructure with Kafka, MQTT, Redis, CI/CD and monitoring."
    },
    "outcome": {
      "tr": "Sistem verimliliği ve güvenilirliğindeki iyileştirmelerle yaklaşık €200 bin tasarruf sağlandı.",
      "en": "Improved system efficiency and reliability, delivering approximately €200K in savings."
    },
    "tech": [
      "Kafka",
      "MQTT",
      "Redis",
      "CI/CD",
      "Monitoring"
    ]
  }
];
  d.otherImpact = [
  {
    "category": {
      "tr": "ÜRETİM İZLENEBİLİRLİĞİ",
      "en": "PRODUCTION TRACEABILITY"
    },
    "title": "TETRIS",
    "contribution": {
      "tr": "Üretim akışının gerçek zamanlı optimizasyonunu ve sistemler arası tam yaşam döngüsü izlenebilirliğini sağlayan uçtan uca takip sistemi geliştirdim.",
      "en": "Developed an end-to-end tracking system enabling real-time production-flow optimisation and full lifecycle traceability across systems."
    },
    "outcome": {
      "tr": "Her bir parçanın üretim sürecinde operasyonel görünürlük arttı, darboğazlar azaldı ve üretim verimliliği iyileşti.",
      "en": "Increased operational visibility, reduced bottlenecks and improved production efficiency for every individual part."
    },
    "tags": {
      "tr": [
        "Uçtan uca takip",
        "Gerçek zamanlı üretim"
      ],
      "en": [
        "End-to-end tracking",
        "Real-time production"
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
      "tr": "SAP ile entegre çalışan bir üretim uygulaması tasarladım; parti takibi ve malzeme akışını iş zekâsı destekli kararlarla birleştirdim.",
      "en": "Designed an SAP-integrated production application connecting batch tracking and material flow with business-intelligence-driven decisions."
    },
    "outcome": {
      "tr": "Parti takibi ve malzeme akışında şeffaflık sağlandı. Power BI ve Tableau ile veri destekli karar alma mümkün hale geldi.",
      "en": "Enabled batch tracking, material-flow transparency and data-driven decision-making with Power BI and Tableau."
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
      "tr": "Python ve Selenium kullanarak otomasyon ve web testi çözümlerini hayata geçirdim.",
      "en": "Implemented automation and web testing solutions using Python and Selenium."
    },
    "outcome": {
      "tr": "Manuel kalite kontrol yükü azaldı, sistem kararlılığı arttı ve sürüm döngüleri hızlandı.",
      "en": "Reduced manual QA effort, increased system stability and accelerated release cycles."
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
      "tr": "İhtiyacı netleştirme",
      "en": "Clarify the need"
    },
    "text": {
      "tr": "İş ihtiyaçlarını teknik gereksinimlere, çözüm önerilerine ve kabul kriterlerine dönüştürme.",
      "en": "Translate business needs into technical requirements, solution concepts and acceptance criteria."
    }
  },
  {
    "title": {
      "tr": "Mimari & entegrasyon",
      "en": "Architecture & integration"
    },
    "text": {
      "tr": "API’ler, veri akışları ve üretim sistemleri arasındaki bağımlılıkları ele alarak ölçeklenebilir çözümler tasarlama.",
      "en": "Design scalable solutions while managing dependencies across APIs, data flows and production systems."
    }
  },
  {
    "title": {
      "tr": "Teslimat & canlıya geçiş",
      "en": "Delivery & go-live"
    },
    "text": {
      "tr": "Backlog netleştirme, teknik yapılabilirlik, test desteği ve canlıya geçiş koordinasyonuna katkı.",
      "en": "Support backlog refinement, technical feasibility analysis, testing and go-live coordination."
    }
  },
  {
    "title": {
      "tr": "Sürekli iyileştirme",
      "en": "Continuous improvement"
    },
    "text": {
      "tr": "Sürüm sonrasında otomasyon, performans, güvenilirlik ve operasyonel verimlilik fırsatlarını belirleme.",
      "en": "Identify post-release opportunities to improve automation, performance, reliability and operational efficiency."
    }
  }
];
  d.skills = ['Python','Go','.NET / .NET Core','C / C++','Node.js / JavaScript','AngularJS','Vue.js','SQL / T-SQL','Kafka','RabbitMQ','MQTT','Redis','Azure','Docker','CI/CD','Microservices / APIs','SAP','Power BI / Tableau','Selenium','Product ownership','Business analysis','Agile / Scrum','User stories / Acceptance criteria','KPI definition / Continuous improvement'];
  d.certificates = ['Introduction to Data Science in Python — University of Michigan','Open Source Project Management — Linux Foundation','SQL for Data Science — University of California','Oracle Database: SQL & PL/SQL Fundamentals — Bilginc IT Academy','Advanced Communication Skills — Netas','Software and Database Specialist — Bilge Adam'];
})();
