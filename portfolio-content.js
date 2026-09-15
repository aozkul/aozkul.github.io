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
].map(p => ({...p, visibility:'public'}));
  const tr = {
    'projects.empty':'Aramana uygun proje bulunamadı.',
    'universe.tag':'BAĞIMSIZ DİJİTAL ÜRÜNLER', 'universe.caption':'BİR FİKİR. BİR DENEYİM. BİR ÜRÜN.',
    'hero.eyebrow':'SENIOR SOFTWARE & DATA ENGINEER / TECHNICAL LEAD',
    'hero.description':'Ölçeklenebilir mikroservisler, bulut mimarileri, API’ler ve veri odaklı dijital platformlar geliştiriyorum. İş ihtiyaçlarını teknik gereksinimlere ve ölçülebilir değer üreten çözümlere dönüştürüyorum.',
    'hero.secondary':'Deneyimimi incele',
    'projects.title':'Projelerim, tek bir yerde.',
    'projects.description':'Günlük hayatın küçük ihtiyaçları için tasarladığım uygulamalar ve web projeleri. Her birinin kendine ait bir hikâyesi var.',
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
    'career.kicker':'04 / DENEYİM', 'career.title':'Sistemlerden iş değerine.',
    'career.intro':'Telekom ve kontrol sistemlerinden bulut mimarilerine uzanan profesyonel deneyim.',
    'impact.kicker':'05 / SONUÇLAR', 'impact.title':'Ölçülebilir katkı.',
    'credentials.kicker':'06 / BİLGİ BİRİKİMİ', 'credentials.title':'Teknoloji, eğitim ve gelişim.',
    'credentials.skills':'Teknik yetkinlikler', 'credentials.certificates':'Sertifikalar', 'credentials.education':'Eğitim', 'credentials.languages':'Diller',
    'education.degree':'Elektrik-Elektronik Mühendisliği', 'education.school':'Uludağ Üniversitesi · Ocak 2009',
    'languages.text':'Türkçe — Ana dil · İngilizce — Akıcı · Almanca — Başlangıç'
  };
  const en = {
    'projects.empty':'No projects match your search.',
    'universe.tag':'INDEPENDENT DIGITAL PRODUCTS', 'universe.caption':'AN IDEA. AN EXPERIENCE. A PRODUCT.',
    'hero.eyebrow':'SENIOR SOFTWARE & DATA ENGINEER / TECHNICAL LEAD',
    'hero.description':'I design and deliver scalable microservices, cloud architectures, APIs and data-driven digital platforms — translating business needs into technical requirements and solutions with measurable value.',
    'hero.secondary':'Explore my experience',
    'projects.title':'My projects, in one place.',
    'projects.description':'Apps and web projects I build for the small needs of everyday life. Each one has a story of its own.',
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
    'career.kicker':'04 / EXPERIENCE', 'career.title':'From systems to business value.',
    'career.intro':'Professional experience spanning telecom and control systems through to cloud architectures.',
    'impact.kicker':'05 / IMPACT', 'impact.title':'Measurable contribution.',
    'credentials.kicker':'06 / KNOWLEDGE', 'credentials.title':'Technology, education and growth.',
    'credentials.skills':'Technical skills', 'credentials.certificates':'Certifications', 'credentials.education':'Education', 'credentials.languages':'Languages',
    'education.degree':'Electrical-Electronical Engineering', 'education.school':'Uludag University · January 2009',
    'languages.text':'Turkish — Native · English — Fluent · German — Beginner'
  };
  Object.assign(d.translations.tr,tr); Object.assign(d.translations.en,en);
  d.career = [
    {role:'Senior Software Engineer',company:'Robert Bosch GmbH',city:'Stuttgart',dates:{tr:'Ağu 2023 – Günümüz',en:'Aug 2023 – Present'},text:{tr:'Kurumsal bulut mimarileri; Python, Go ve Azure ile yazılım ve otomasyon çözümleri. İş ihtiyaçları, API entegrasyonları ve veri akışlarından test, canlıya geçiş ve sürüm sonrası iyileştirmelere uzanan teslimat.',en:'Enterprise cloud architectures; software and automation with Python, Go and Azure. Delivery spanning business requirements, API integrations and data flows through testing, go-live and post-release improvements.'}},
    {role:'Lead Software Engineer',company:'Bosch',city:'Bursa',dates:{tr:'Haz 2020 – Ağu 2023',en:'Jun 2020 – Aug 2023'},text:{tr:'Endüstri 4.0 mikroservis mimarileri, veri akışı stratejileri ve teknik liderlik. Entegrasyon ağırlıklı sistemlerde gereksinimler, kabul kriterleri, teknik bağımlılıklar ve kalite standartları.',en:'Industry 4.0 microservice architectures, data-flow strategies and technical leadership. Requirements, acceptance criteria, technical dependencies and quality standards for integration-heavy systems.'}},
    {role:'Senior Software and Data Engineer',company:'Bosch',city:'Bursa',dates:{tr:'Haz 2015 – Haz 2020',en:'Jun 2015 – Jun 2020'},text:{tr:'Ölçeklenebilir mikroservisler, Endüstri 4.0 uygulamaları ve veri yoğun sistemler için veri mimarileri. Docker ve CI/CD ile bulut tabanlı, konteyner kullanan çözümler.',en:'Scalable microservices, Industry 4.0 applications and data architectures for data-intensive systems. Cloud-native and container-based solutions with Docker and CI/CD.'}},
    {role:'Senior Software Developer',company:'Netas',city:'Istanbul',dates:{tr:'Nis 2013 – Haz 2015',en:'Apr 2013 – Jun 2015'},text:{tr:'Telekom çağrı kontrolü, izleme ve yönlendirme yazılımları; ISUP, PRI ve H-323 entegrasyonları. 112 acil çağrı işleme özellikleri ve müşteri senaryolarının test edilmesi.',en:'Telecom call-control, tracking and routing software; ISUP, PRI and H-323 integrations. Emergency call handling for 112 and customer-scenario testing.'}},
    {role:'Software Developer',company:'Emko',city:'Bursa',dates:{tr:'Nis 2012 – Nis 2013',en:'Apr 2012 – Apr 2013'},text:{tr:'Biyomedikal sistemler için N-SMART kontrol birimi: RS-232/485, Ethernet, USB, TCP/IP ve MODBUS. Alarm, sıcaklık kalibrasyonu, PID kontrolü ve GSM bildirimleri; proje bazlı sözleşme.',en:'N-SMART controller for biomedical systems: RS-232/485, Ethernet, USB, TCP/IP and MODBUS. Alarms, temperature calibration, PID control and GSM notifications; project-based contract.'}},
    {role:'Software Developer',company:'Netas',city:'Istanbul',dates:{tr:'Haz 2009 – Eyl 2011',en:'Jun 2009 – Sep 2011'},text:{tr:'Ses ve veri trafiği taşıyan ağ anahtarlama sistemleri. SIP ve ISDN çağrı kontrolü, IP tabanlı iletişim arayüzleri ve backend bileşenleri; performans ve kararlılık iyileştirmeleri.',en:'Network switching systems for voice and data traffic. SIP and ISDN call control, IP communication interfaces and backend components; performance and stability improvements.'}}
  ];
  d.impact = [
    {value:'~€750K',title:{tr:'Yıllık maliyet tasarrufu',en:'Annual cost savings'},text:{tr:'Maliyet hesaplamalı gerçek zamanlı Tool Tracking System.',en:'Real-time Tool Tracking System with cost calculation.'},tech:'Vue.js · Go · Python · RabbitMQ · Docker'},
    {value:'~€350K',title:{tr:'Makine bağlantılarında tasarruf',en:'Machine connectivity savings'},text:{tr:'Gerçek zamanlı endüstriyel veri akışı sağlayan mikroservisler.',en:'Microservices enabling real-time industrial data streaming.'},tech:'Go · Kafka · OPC'},
    {value:'~€200K',title:{tr:'Veri altyapısında tasarruf',en:'Data infrastructure savings'},text:{tr:'Verimlilik ve güvenilirliği artıran ölçeklenebilir veri altyapısı.',en:'Scalable data infrastructure improving efficiency and reliability.'},tech:'Kafka · MQTT · Redis · CI/CD · Monitoring'}
  ];
  d.otherImpact = [
    {title:'TETRIS',text:{tr:'Uçtan uca üretim takibi, yaşam döngüsü izlenebilirliği ve darboğazların azaltılması.',en:'End-to-end production tracking, lifecycle traceability and reduced bottlenecks.'}},
    {title:'SAP · Power BI · Tableau',text:{tr:'Parti takibi, malzeme akışı şeffaflığı ve BI destekli kararlar için ERP entegre üretim uygulaması.',en:'ERP-integrated production application for batch tracking, material-flow transparency and BI-driven decisions.'}},
    {title:'Python · Selenium',text:{tr:'Manuel test yükünü azaltan, sistem kararlılığını ve sürüm hızını iyileştiren otomasyon ve web testleri.',en:'Automation and web testing to reduce manual QA work and improve stability and release cycles.'}}
  ];
  d.skills = ['Python','Go','.NET / .NET Core','C / C++','Node.js / JavaScript','AngularJS','Vue.js','SQL / T-SQL','Kafka','RabbitMQ','MQTT','Redis','Azure','Docker','CI/CD','Microservices / APIs','SAP','Power BI / Tableau','Selenium','Product ownership','Business analysis','Agile / Scrum','User stories / Acceptance criteria','KPI definition / Continuous improvement'];
  d.certificates = ['Introduction to Data Science in Python — University of Michigan','Open Source Project Management — Linux Foundation','SQL for Data Science — University of California','Oracle Database: SQL & PL/SQL Fundamentals — Bilginc IT Academy','Advanced Communication Skills — Netas','Software and Database Specialist — Bilge Adam'];
})();
