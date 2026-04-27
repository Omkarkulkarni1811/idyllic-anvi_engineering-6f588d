const yearEl = document.getElementById("year");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const scrollProgress = document.getElementById("scrollProgress");
const revealEls = document.querySelectorAll(".reveal");
const cursorGlow = document.querySelector(".cursor-glow");
const metricNumbers = document.querySelectorAll(".metric-number");
const magneticEls = document.querySelectorAll(".magnetic");
const usageMainImage = document.getElementById("usageMainImage");
const usageCaption = document.getElementById("usageCaption");
const usageThumbs = Array.from(document.querySelectorAll("#usageThumbs .thumb"));
const usagePrev = document.getElementById("usagePrev");
const usageNext = document.getElementById("usageNext");
const testimonialSlider = document.getElementById("testimonialSlider");
const testimonialCards = Array.from(document.querySelectorAll(".testimonial-card"));
const testimonialDots = Array.from(document.querySelectorAll("#testimonialDots .dot"));
const mediaOpenImages = document.querySelectorAll(".media-open");
const experienceVideoWraps = Array.from(
  document.querySelectorAll("#experience .video-wrap")
);
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");
const forcedMutedVideos = document.querySelectorAll("video");
const inquiryForm = document.getElementById("inquiryForm");
const inquiryStatus = document.getElementById("inquiryStatus");
const inquirySubmitBtn = document.getElementById("inquirySubmitBtn");
const addCartButtons = Array.from(document.querySelectorAll(".add-cart-btn"));
const clearCartBtn = document.getElementById("clearCartBtn");
const applyCartBtn = document.getElementById("applyCartBtn");
const cartSummaryText = document.getElementById("cartSummaryText");
const cartToggleBtn = document.getElementById("cartToggleBtn");
const cartDrawer = document.getElementById("cartDrawer");
const cartCloseBtn = document.getElementById("cartCloseBtn");
const cartHomeQty = document.getElementById("cartHomeQty");
const cartCommercialQty = document.getElementById("cartCommercialQty");
const cartIndustrialQty = document.getElementById("cartIndustrialQty");
const cartTotalQty = document.getElementById("cartTotalQty");
const cartLineButtons = Array.from(document.querySelectorAll(".line-btn"));
const inquiryCartSummary = document.getElementById("inquiryCartSummary");
const scrollToCartLink = document.getElementById("scrollToCartLink");
const usageTypeInput = inquiryForm?.querySelector('input[name="usage_type"]');
const quantityRequiredInput = inquiryForm?.querySelector(
  'input[name="quantity_required"]'
);
const productSelectionInput = inquiryForm?.querySelector(
  'input[name="product_selection"]'
);
const brokerForm = document.getElementById("brokerForm");
const brokerStatus = document.getElementById("brokerStatus");
const brokerSubmitBtn = document.getElementById("brokerSubmitBtn");
const languageModal = document.getElementById("languageModal");
const languageOpenBtn = document.getElementById("languageOpenBtn");
const languageTriggerLabel = document.getElementById("languageTriggerLabel");
const languageModalTitle = document.getElementById("languageModalTitle");
const languageModalHint = document.getElementById("languageModalHint");
const languageOptionButtons = Array.from(
  document.querySelectorAll(".language-option")
);

const ASSET_CDN_BASE =
  "https://cdn.jsdelivr.net/gh/Omkarkulkarni1811/idyllic-anvi_engineering-6f588d@main/assets/";
const LANGUAGE_STORAGE_KEY = "anvi_selected_language";
let activeLanguage = "en";

const translations = {
  en: {
    title: "Anvi Engineering | Precision Mechanical Products",
    metaDescription:
      "Anvi Engineering manufactures durable mechanical products including premium Shegdi systems and industrial Oil Skimmer machines. Discover our design quality, performance, and trust.",
    languageLabel: "Language",
    languageModalTitle: "Choose your language",
    languageModalHint: "Select one option to view the full website.",
    nav: ["Products", "Industrial", "About", "Experience", "Contact", "Brokers"],
    heroEyebrow: "Built in India with precision",
    heroTitle: "Mechanical products designed and manufacturing for modern reliability.",
    heroLead:
      "From our signature <strong>Shegdi</strong> to upcoming mechanical solutions and <strong>industrial Oil Skimmer</strong> systems, Anvi Engineering focuses on performance, safety, and long-term trust for every customer.",
    heroCtas: ["Explore Products", "Watch Demo"],
    metricTexts: [
      "Core product lines: Shegdi and Oil Skimmer",
      "Made and tested by Anvi Engineering",
      "Responsive support and service availability",
    ],
    productTypesTitle: "Choose the right product setup for your use.",
    productTypesLead:
      "We support home, commercial, and industrial requirements with practical quantity guidance for fast planning.",
    addToCart: "Add to Cart",
    cartTitle: "Your Selection",
    cartEmpty: "No items added yet.",
    cartNoneSelected: "No items selected yet.",
    cartUpdateSelection: "Update selection",
    cartGoTop: "Go to top cart",
    cartClear: "Clear",
    cartUseInInquiry: "Use In Inquiry",
    cartTotalPrefix: "Total Quantity:",
    cartLabels: {
      home: "Home Shegdi",
      commercial: "Commercial Shegdi",
      industrial: "Industrial Oil Skimmer",
    },
    statuses: {
      added: "{qty} item(s) added to inquiry for {usage} use.",
      selectionCleared: "Selection cleared.",
      cartApplied: "Cart applied to inquiry. Total quantity: {total}.",
      fillInquiry: "Please fill all fields before submitting.",
      sendingInquiry: "Sending inquiry...",
      inquirySuccess: "Thank you! Inquiry submitted successfully. We will contact you soon.",
      inquiryFail:
        "Inquiry could not be submitted right now. Please try again in a minute.",
      fillBroker: "Please fill all required broker details.",
      sendingBroker: "Submitting broker details...",
      brokerSuccess:
        "Thank you! Broker details submitted successfully. We will contact you shortly.",
      brokerFail:
        "Broker details could not be submitted right now. Please try again shortly.",
    },
  },
  hi: {
    title: "अन्वी इंजीनियरिंग | प्रिसिजन मैकेनिकल प्रोडक्ट्स",
    metaDescription:
      "अन्वी इंजीनियरिंग मजबूत मैकेनिकल प्रोडक्ट्स बनाती है, जिनमें प्रीमियम शेगडी और इंडस्ट्रियल ऑयल स्किमर मशीनें शामिल हैं।",
    languageLabel: "भाषा",
    languageModalTitle: "अपनी भाषा चुनें",
    languageModalHint: "पूरी वेबसाइट देखने के लिए एक विकल्प चुनें।",
    nav: ["प्रोडक्ट्स", "इंडस्ट्रियल", "हमारे बारे में", "अनुभव", "संपर्क", "ब्रोकर"],
    heroEyebrow: "भारत में सटीकता के साथ निर्मित",
    heroTitle: "आधुनिक विश्वसनीयता के लिए डिज़ाइन और निर्मित मैकेनिकल उत्पाद।",
    heroLead:
      "हमारी विश्वसनीय <strong>शेगडी</strong> से लेकर नए मैकेनिकल समाधानों और <strong>इंडस्ट्रियल ऑयल स्किमर</strong> सिस्टम तक, अन्वी इंजीनियरिंग हर ग्राहक के लिए प्रदर्शन, सुरक्षा और दीर्घकालिक विश्वास को प्राथमिकता देती है।",
    heroCtas: ["प्रोडक्ट देखें", "डेमो देखें"],
    metricTexts: [
      "मुख्य प्रोडक्ट लाइनें: शेगडी और ऑयल स्किमर",
      "अन्वी इंजीनियरिंग द्वारा निर्मित और परीक्षणित",
      "तेज़ सपोर्ट और सर्विस उपलब्धता 24/7",
    ],
    productTypesTitle: "अपने उपयोग के लिए सही प्रोडक्ट सेटअप चुनें।",
    productTypesLead:
      "हम होम, कमर्शियल और इंडस्ट्रियल जरूरतों के लिए सही मात्रा योजना में मदद करते हैं।",
    addToCart: "कार्ट में जोड़ें",
    cartTitle: "आपका चयन",
    cartEmpty: "अभी कोई आइटम नहीं जोड़ा गया।",
    cartNoneSelected: "अभी कोई आइटम चुना नहीं गया।",
    cartUpdateSelection: "चयन अपडेट करें",
    cartGoTop: "ऊपर कार्ट पर जाएँ",
    cartClear: "साफ करें",
    cartUseInInquiry: "पूछताछ में जोड़ें",
    cartTotalPrefix: "कुल मात्रा:",
    cartLabels: {
      home: "होम शेगडी",
      commercial: "कमर्शियल शेगडी",
      industrial: "इंडस्ट्रियल ऑयल स्किमर",
    },
    statuses: {
      added: "{usage} के लिए {qty} आइटम पूछताछ में जोड़े गए।",
      selectionCleared: "चयन साफ कर दिया गया।",
      cartApplied: "कार्ट पूछताछ में जोड़ दिया गया। कुल मात्रा: {total}।",
      fillInquiry: "कृपया सबमिट करने से पहले सभी आवश्यक फ़ील्ड भरें।",
      sendingInquiry: "पूछताछ भेजी जा रही है...",
      inquirySuccess: "धन्यवाद! आपकी पूछताछ सफलतापूर्वक भेज दी गई है।",
      inquiryFail:
        "अभी पूछताछ सबमिट नहीं हो पाई। कृपया एक मिनट बाद पुनः प्रयास करें।",
      fillBroker: "कृपया ब्रोकर की सभी जरूरी जानकारी भरें।",
      sendingBroker: "ब्रोकर जानकारी भेजी जा रही है...",
      brokerSuccess: "धन्यवाद! आपकी ब्रोकर जानकारी सफलतापूर्वक सबमिट हो गई है।",
      brokerFail:
        "अभी ब्रोकर जानकारी सबमिट नहीं हो पाई। कृपया एक मिनट बाद पुनः प्रयास करें।",
    },
  },
  mr: {
    title: "अन्वी इंजिनिअरिंग | प्रिसिजन मेकॅनिकल प्रॉडक्ट्स",
    metaDescription:
      "अन्वी इंजिनिअरिंग मजबूत मेकॅनिकल प्रॉडक्ट्स तयार करते, ज्यात शेगडी आणि इंडस्ट्रियल ऑईल स्किमर मशीनचा समावेश आहे.",
    languageLabel: "भाषा",
    languageModalTitle: "तुमची भाषा निवडा",
    languageModalHint: "पूर्ण वेबसाइट पाहण्यासाठी एक पर्याय निवडा.",
    nav: ["प्रॉडक्ट्स", "इंडस्ट्रियल", "आमच्याबद्दल", "अनुभव", "संपर्क", "ब्रोकर"],
    heroEyebrow: "अचूकतेसह भारतात निर्मित",
    heroTitle: "आधुनिक विश्वासार्हतेसाठी डिझाइन व निर्मित केलेली यांत्रिक उत्पादने.",
    heroLead:
      "आमच्या विश्वसनीय <strong>शेगडी</strong>पासून नव्या यांत्रिक उपायांपर्यंत आणि <strong>इंडस्ट्रियल ऑईल स्किमर</strong> प्रणालीपर्यंत, अन्वी इंजिनिअरिंग प्रत्येक ग्राहकासाठी कार्यक्षमता, सुरक्षितता आणि दीर्घकालीन विश्वास यांना प्राधान्य देते.",
    heroCtas: ["प्रॉडक्ट्स पहा", "डेमो पहा"],
    metricTexts: [
      "मुख्य उत्पादन लाईन्स: शेगडी आणि ऑईल स्किमर",
      "अन्वी इंजिनिअरिंगकडून निर्मित आणि तपासलेले",
      "वेगवान सपोर्ट आणि सर्व्हिस उपलब्धता 24/7",
    ],
    productTypesTitle: "तुमच्या वापरासाठी योग्य प्रॉडक्ट सेटअप निवडा.",
    productTypesLead:
      "घरगुती, कमर्शियल आणि इंडस्ट्रियल गरजांसाठी योग्य प्रमाण नियोजनामध्ये आम्ही मदत करतो.",
    addToCart: "कार्टमध्ये जोडा",
    cartTitle: "तुमची निवड",
    cartEmpty: "अजून कोणतीही वस्तू जोडलेली नाही.",
    cartNoneSelected: "अजून कोणतीही वस्तू निवडलेली नाही.",
    cartUpdateSelection: "निवड अपडेट करा",
    cartGoTop: "वरच्या कार्टकडे जा",
    cartClear: "क्लिअर",
    cartUseInInquiry: "चौकशीत जोडा",
    cartTotalPrefix: "एकूण प्रमाण:",
    cartLabels: {
      home: "होम शेगडी",
      commercial: "कमर्शियल शेगडी",
      industrial: "इंडस्ट्रियल ऑईल स्किमर",
    },
    statuses: {
      added: "{usage} साठी {qty} वस्तू चौकशीत जोडल्या.",
      selectionCleared: "निवड क्लिअर केली.",
      cartApplied: "कार्ट चौकशीत जोडला आहे. एकूण प्रमाण: {total}.",
      fillInquiry: "सबमिट करण्यापूर्वी सर्व आवश्यक फील्ड भरा.",
      sendingInquiry: "चौकशी पाठवली जात आहे...",
      inquirySuccess: "धन्यवाद! तुमची चौकशी यशस्वीरीत्या सबमिट झाली आहे.",
      inquiryFail: "आत्ता चौकशी सबमिट होऊ शकली नाही. कृपया एक मिनिटानंतर पुन्हा प्रयत्न करा.",
      fillBroker: "कृपया ब्रोकरची सर्व आवश्यक माहिती भरा.",
      sendingBroker: "ब्रोकर तपशील पाठवले जात आहेत...",
      brokerSuccess: "धन्यवाद! ब्रोकर तपशील यशस्वीरीत्या सबमिट झाले आहेत.",
      brokerFail: "आत्ता ब्रोकर तपशील सबमिट होऊ शकले नाहीत. कृपया एक मिनिटानंतर पुन्हा प्रयत्न करा.",
    },
  },
};

const t = (key) => {
  const selected = translations[activeLanguage] || translations.en;
  return selected[key] ?? translations.en[key] ?? "";
};

const statusText = (key) => {
  const selected = translations[activeLanguage] || translations.en;
  return selected.statuses?.[key] ?? translations.en.statuses?.[key] ?? "";
};

const cartLabel = (usage) => {
  const selected = translations[activeLanguage] || translations.en;
  return selected.cartLabels?.[usage] ?? translations.en.cartLabels?.[usage] ?? usage;
};

const applyLanguage = (lang) => {
  const selectedLang = translations[lang] ? lang : "en";
  const tr = translations[selectedLang];
  activeLanguage = selectedLang;
  document.documentElement.lang = selectedLang;
  document.title = tr.title;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", tr.metaDescription);
  }

  if (languageTriggerLabel) languageTriggerLabel.textContent = tr.languageLabel;
  if (languageModalTitle) languageModalTitle.textContent = tr.languageModalTitle;
  if (languageModalHint) languageModalHint.textContent = tr.languageModalHint;

  languageOptionButtons.forEach((button) => {
    if (button.dataset.lang === "en") button.textContent = "English";
    if (button.dataset.lang === "hi") button.textContent = "हिंदी";
    if (button.dataset.lang === "mr") button.textContent = "मराठी";
  });

  const navLinks = Array.from(document.querySelectorAll("#navMenu a"));
  navLinks.forEach((link, index) => {
    link.textContent = tr.nav[index] || link.textContent;
  });

  const heroEyebrow = document.querySelector(".hero .eyebrow");
  const heroTitle = document.querySelector(".hero h1");
  const heroLead = document.querySelector(".hero .lead");
  const heroCtaButtons = Array.from(document.querySelectorAll(".hero .hero-cta .btn"));
  const metricTexts = Array.from(document.querySelectorAll(".hero-metrics p"));

  if (heroEyebrow) heroEyebrow.textContent = tr.heroEyebrow;
  if (heroTitle) heroTitle.textContent = tr.heroTitle;
  if (heroLead) heroLead.innerHTML = tr.heroLead;
  if (heroCtaButtons[0]) heroCtaButtons[0].textContent = tr.heroCtas[0];
  if (heroCtaButtons[1]) heroCtaButtons[1].textContent = tr.heroCtas[1];
  metricTexts.forEach((el, index) => {
    el.textContent = tr.metricTexts[index] || el.textContent;
  });

  const productsEyebrow = document.querySelector("#products .section-head .eyebrow");
  const productsTitle = document.querySelector("#products .section-head h2");
  const productsLead = document.querySelector("#products .section-head p:not(.eyebrow)");
  if (productsEyebrow) {
    productsEyebrow.textContent =
      selectedLang === "en"
        ? "Most Selling + Industrial Range"
        : selectedLang === "hi"
          ? "सबसे लोकप्रिय + इंडस्ट्रियल रेंज"
          : "सर्वाधिक विक्री + इंडस्ट्रियल रेंज";
  }
  if (productsTitle) {
    productsTitle.textContent =
      selectedLang === "en"
        ? "Shegdi and Oil Skimmer, built for real-world usage."
        : selectedLang === "hi"
          ? "शेगडी और ऑयल स्किमर, वास्तविक उपयोग के लिए तैयार।"
          : "शेगडी आणि ऑईल स्किमर, प्रत्यक्ष वापरासाठी तयार.";
  }
  if (productsLead) {
    productsLead.textContent =
      selectedLang === "en"
        ? "Durable construction, optimized performance, and low-maintenance engineering for both kitchen and industrial requirements."
        : selectedLang === "hi"
          ? "किचन और इंडस्ट्रियल दोनों जरूरतों के लिए मजबूत निर्माण, बेहतर परफॉर्मेंस और कम मेंटेनेंस।"
          : "किचन आणि इंडस्ट्रियल दोन्ही गरजांसाठी मजबूत बांधणी, उत्तम परफॉर्मन्स आणि कमी मेंटेनन्स.";
  }

  const productCopyTitle = document.querySelector(".product-copy h3");
  const productDetailsLink = document.querySelector(".product-copy .text-link");
  if (productCopyTitle) {
    productCopyTitle.textContent =
      selectedLang === "en"
        ? "Flagship: Anvi Shegdi"
        : selectedLang === "hi"
          ? "फ्लैगशिप: अन्वी शेगडी"
          : "फ्लॅगशिप: अन्वी शेगडी";
  }
  if (productDetailsLink) {
    productDetailsLink.textContent =
      selectedLang === "en"
        ? "Request product details"
        : selectedLang === "hi"
          ? "प्रोडक्ट जानकारी के लिए अनुरोध करें"
          : "प्रॉडक्ट तपशीलासाठी विनंती करा";
  }

  const productFeatureList = Array.from(document.querySelectorAll(".product-copy ul li"));
  if (productFeatureList.length >= 4) {
    const featureTexts =
      selectedLang === "en"
        ? [
            "Strong, heat-resistant materials for long lifespan",
            "Stable and efficient burner architecture",
            "Easy cleaning design with practical access points",
            "Mechanical robustness suited for continuous use",
          ]
        : selectedLang === "hi"
          ? [
              "लंबे समय तक उपयोग के लिए मजबूत, हीट-रेसिस्टेंट सामग्री",
              "स्थिर और प्रभावी बर्नर संरचना",
              "आसान सफाई के लिए व्यावहारिक डिज़ाइन",
              "लगातार उपयोग के लिए मजबूत मैकेनिकल संरचना",
            ]
          : [
              "दीर्घकाळ वापरासाठी मजबूत, उष्णतारोधक साहित्य",
              "स्थिर आणि कार्यक्षम बर्नर रचना",
              "सुलभ साफसफाईसाठी उपयुक्त डिझाइन",
              "सतत वापरासाठी मजबूत मेकॅनिकल बांधणी",
            ];
    productFeatureList.forEach((item, idx) => {
      item.textContent = featureTexts[idx] || item.textContent;
    });
  }

  const cards = Array.from(document.querySelectorAll(".cards .card"));
  if (cards.length >= 4) {
    const cardTitles = cards.map((card) => card.querySelector("h4"));
    const cardBodies = cards.map((card) => card.querySelector("p"));
    const cardContent =
      selectedLang === "en"
        ? [
            ["New: Industrial Oil Skimmer", "Industry-use machine for removing floating oil from coolant and process tanks."],
            ["Current Best Seller", "Customer-demanded Shegdi model with consistent reliability."],
            ["Custom Engineering", "Manufacturing support for specialized mechanical requirements."],
            ["Upcoming Range", "More precision products are in development and testing."],
          ]
        : selectedLang === "hi"
          ? [
              ["नया: इंडस्ट्रियल ऑयल स्किमर", "कूलेंट और प्रोसेस टैंकों से तैरता तेल हटाने के लिए इंडस्ट्री-उपयोग मशीन।"],
              ["वर्तमान बेस्ट सेलर", "लगातार भरोसेमंद प्रदर्शन वाला ग्राहक-पसंदीदा शेगडी मॉडल।"],
              ["कस्टम इंजीनियरिंग", "विशेष मैकेनिकल जरूरतों के लिए निर्माण सहयोग।"],
              ["आगामी रेंज", "और अधिक प्रिसिजन प्रोडक्ट्स विकास और परीक्षण में हैं।"],
            ]
          : [
              ["नवीन: इंडस्ट्रियल ऑईल स्किमर", "कूलंट आणि प्रोसेस टँकमधील तरंगते तेल काढण्यासाठी इंडस्ट्री-उपयोग मशीन."],
              ["सध्याचा बेस्ट सेलर", "सतत विश्वासार्ह कामगिरी देणारे ग्राहक-पसंतीचे शेगडी मॉडेल."],
              ["कस्टम इंजिनिअरिंग", "विशेष मेकॅनिकल गरजांसाठी उत्पादन सहकार्य."],
              ["लवकरच येत आहे", "अधिक प्रिसिजन उत्पादने विकास आणि चाचणीमध्ये आहेत."],
            ];
    cardContent.forEach((content, idx) => {
      if (cardTitles[idx]) cardTitles[idx].textContent = content[0];
      if (cardBodies[idx]) cardBodies[idx].textContent = content[1];
    });
  }

  const industrialTag = document.querySelector("#industrial .product-tag");
  const industrialTitle = document.querySelector("#industrial h3");
  const industrialLead = document.querySelector("#industrial > p:not(.product-tag)");
  const industrialBullets = Array.from(document.querySelectorAll("#industrial ul li"));
  const industrialButton = document.querySelector("#industrial .btn");
  if (industrialTag) {
    industrialTag.textContent =
      selectedLang === "en"
        ? "Industrial Use Only"
        : selectedLang === "hi"
          ? "केवल इंडस्ट्रियल उपयोग"
          : "फक्त इंडस्ट्रियल वापरासाठी";
  }
  if (industrialTitle) {
    industrialTitle.textContent =
      selectedLang === "en"
        ? "New Product: Oil Skimmer"
        : selectedLang === "hi"
          ? "नया प्रोडक्ट: ऑयल स्किमर"
          : "नवीन उत्पादन: ऑईल स्किमर";
  }
  if (industrialLead) {
    industrialLead.textContent =
      selectedLang === "en"
        ? "Designed for industrial environments to continuously remove floating oil from coolant tanks and process liquid surfaces."
        : selectedLang === "hi"
          ? "इंडस्ट्रियल वातावरण में कूलेंट टैंकों और प्रोसेस लिक्विड सतहों से तैरता तेल लगातार हटाने के लिए डिज़ाइन किया गया।"
          : "इंडस्ट्रियल वातावरणात कूलंट टँक आणि प्रोसेस द्रव पृष्ठभागावरील तरंगते तेल सतत काढण्यासाठी डिझाइन केलेले.";
  }
  if (industrialBullets.length >= 3) {
    const industrialBulletTexts =
      selectedLang === "en"
        ? [
            "Supports cleaner coolant and better machine performance",
            "Built for long-hour, low-maintenance industrial operation",
            "Suitable for workshop and manufacturing line usage",
          ]
        : selectedLang === "hi"
          ? [
              "कूलेंट को साफ रखने और मशीन प्रदर्शन बेहतर करने में सहायक",
              "लंबे समय तक कम मेंटेनेंस के साथ इंडस्ट्रियल उपयोग के लिए उपयुक्त",
              "वर्कशॉप और मैन्युफैक्चरिंग लाइन उपयोग के लिए उपयुक्त",
            ]
          : [
              "कूलंट स्वच्छ ठेवण्यासाठी आणि मशीनची कार्यक्षमता सुधारण्यासाठी उपयुक्त",
              "दीर्घकाळ कमी मेंटेनन्ससह इंडस्ट्रियल वापरासाठी तयार",
              "वर्कशॉप आणि मॅन्युफॅक्चरिंग लाइन वापरासाठी योग्य",
            ];
    industrialBullets.forEach((item, idx) => {
      item.textContent = industrialBulletTexts[idx] || item.textContent;
    });
  }
  if (industrialButton) {
    industrialButton.textContent =
      selectedLang === "en"
        ? "Request Oil Skimmer Quote"
        : selectedLang === "hi"
          ? "ऑयल स्किमर कोटेशन के लिए अनुरोध करें"
          : "ऑईल स्किमर कोटेशनसाठी विनंती करा";
  }

  const aboutEyebrow = document.querySelector("#about .eyebrow");
  const aboutTitle = document.querySelector("#about h2");
  const aboutLead = document.querySelector("#about .about-grid > div p:not(.eyebrow)");
  const aboutPoints = Array.from(document.querySelectorAll(".about-points p"));
  if (aboutEyebrow) {
    aboutEyebrow.textContent =
      selectedLang === "en"
        ? "Why Anvi Engineering"
        : selectedLang === "hi"
          ? "अन्वी इंजीनियरिंग क्यों"
          : "अन्वी इंजिनिअरिंग का निवडावी";
  }
  if (aboutTitle) {
    aboutTitle.textContent =
      selectedLang === "en"
        ? "Engineering detail in every part."
        : selectedLang === "hi"
          ? "हर हिस्से में इंजीनियरिंग की बारीकी।"
          : "प्रत्येक भागात अभियांत्रिकीची बारकाई.";
  }
  if (aboutLead) {
    aboutLead.textContent =
      selectedLang === "en"
        ? "We are focused on mechanical product manufacturing with an approach that balances quality materials, practical design, and customer feedback. From Shegdi systems to industrial Oil Skimmer machines, our process is transparent, reliable, and quality-first."
        : selectedLang === "hi"
          ? "हम मैकेनिकल प्रोडक्ट मैन्युफैक्चरिंग पर केंद्रित हैं, जहाँ गुणवत्ता सामग्री, व्यावहारिक डिज़ाइन और ग्राहक फीडबैक का संतुलन रखा जाता है। शेगडी से लेकर इंडस्ट्रियल ऑयल स्किमर तक, हमारी प्रक्रिया पारदर्शी, भरोसेमंद और गुणवत्ता-प्रथम है।"
          : "आम्ही मेकॅनिकल उत्पादन निर्मितीवर लक्ष केंद्रित करतो, जिथे दर्जेदार साहित्य, व्यावहारिक डिझाइन आणि ग्राहक अभिप्राय यांचा योग्य समतोल ठेवला जातो. शेगडीपासून इंडस्ट्रियल ऑईल स्किमरपर्यंत आमची प्रक्रिया पारदर्शक, विश्वासार्ह आणि गुणवत्ता-केंद्रित आहे.";
  }
  if (aboutPoints.length >= 4) {
    const aboutPointTexts =
      selectedLang === "en"
        ? [
            "01Design review and practical prototyping",
            "02Precision manufacturing and assembly checks",
            "03Performance validation before delivery",
            "04After-sales support and trust-led service",
          ]
        : selectedLang === "hi"
          ? [
              "01डिज़ाइन समीक्षा और व्यावहारिक प्रोटोटाइपिंग",
              "02प्रिसिजन मैन्युफैक्चरिंग और असेंबली जाँच",
              "03डिलीवरी से पहले प्रदर्शन सत्यापन",
              "04बिक्री-पश्चात सपोर्ट और भरोसेमंद सेवा",
            ]
          : [
              "01डिझाइन पुनरावलोकन आणि व्यावहारिक प्रोटोटायपिंग",
              "02प्रिसिजन उत्पादन आणि असेंब्ली तपासणी",
              "03डिलिव्हरीपूर्वी कार्यक्षमता पडताळणी",
              "04विक्रीनंतर सपोर्ट आणि विश्वासार्ह सेवा",
            ];
    aboutPoints.forEach((item, idx) => {
      item.textContent = aboutPointTexts[idx] || item.textContent;
    });
  }

  const experienceEyebrow = document.querySelector("#experience .eyebrow");
  const experienceTitle = document.querySelector("#experience h2");
  const experienceLead = document.querySelector("#experience .section-head p:not(.eyebrow)");
  if (experienceEyebrow) {
    experienceEyebrow.textContent =
      selectedLang === "en"
        ? "Product Experience"
        : selectedLang === "hi"
          ? "प्रोडक्ट अनुभव"
          : "प्रॉडक्ट अनुभव";
  }
  if (experienceTitle) {
    experienceTitle.textContent =
      selectedLang === "en"
        ? "See our products in action."
        : selectedLang === "hi"
          ? "हमारे प्रोडक्ट्स को काम करते हुए देखें।"
          : "आमचे प्रॉडक्ट्स प्रत्यक्ष वापरात पहा.";
  }
  if (experienceLead) {
    experienceLead.textContent =
      selectedLang === "en"
        ? "Real product demos from Anvi Engineering manufacturing and customer use across kitchen and industrial setups."
        : selectedLang === "hi"
          ? "किचन और इंडस्ट्रियल सेटअप में अन्वी इंजीनियरिंग के वास्तविक प्रोडक्ट डेमो देखें।"
          : "किचन आणि इंडस्ट्रियल सेटअपमधील अन्वी इंजिनिअरिंगचे प्रत्यक्ष प्रॉडक्ट डेमो पहा.";
  }

  const usageEyebrow = document.querySelector(".usage-gallery .eyebrow");
  const usageTitle = document.querySelector(".usage-gallery h2");
  const usageLead = document.querySelector(".usage-gallery .section-head p:not(.eyebrow)");
  if (usageEyebrow) {
    usageEyebrow.textContent =
      selectedLang === "en"
        ? "Real Product Usage"
        : selectedLang === "hi"
          ? "वास्तविक प्रोडक्ट उपयोग"
          : "वास्तविक प्रॉडक्ट वापर";
  }
  if (usageTitle) {
    usageTitle.textContent =
      selectedLang === "en"
        ? "Real usage across home, commercial, and industrial environments."
        : selectedLang === "hi"
          ? "होम, कमर्शियल और इंडस्ट्रियल वातावरण में वास्तविक उपयोग।"
          : "होम, कमर्शियल आणि इंडस्ट्रियल वातावरणातील वास्तविक वापर.";
  }
  if (usageLead) {
    usageLead.textContent =
      selectedLang === "en"
        ? "Official product photos shared by Anvi Engineering, selected to avoid repeated or copyrighted frame captures."
        : selectedLang === "hi"
          ? "अन्वी इंजीनियरिंग द्वारा साझा आधिकारिक फोटो, जिनमें कॉपीराइट या रिपीट फ्रेम का उपयोग नहीं है।"
          : "अन्वी इंजिनिअरिंगने शेअर केलेले अधिकृत फोटो, कॉपीराइट किंवा रिपीट फ्रेम टाळून निवडलेले.";
  }

  const testimonialEyebrow = document.querySelector(".testimonials .eyebrow");
  const testimonialTitle = document.querySelector(".testimonials h2");
  const testimonialLead = document.querySelector(".testimonials .section-head p:not(.eyebrow)");
  if (testimonialEyebrow) {
    testimonialEyebrow.textContent =
      selectedLang === "en"
        ? "Customer Voices"
        : selectedLang === "hi"
          ? "ग्राहकों की राय"
          : "ग्राहकांचे अभिप्राय";
  }
  if (testimonialTitle) {
    testimonialTitle.textContent =
      selectedLang === "en"
        ? "What customers like about Anvi products."
        : selectedLang === "hi"
          ? "अन्वी प्रोडक्ट्स के बारे में ग्राहकों को क्या पसंद है।"
          : "अन्वी प्रॉडक्ट्सबद्दल ग्राहकांना काय आवडते.";
  }
  if (testimonialLead) {
    testimonialLead.textContent =
      selectedLang === "en"
        ? "Real usage confidence comes from product stability, easy handling, and reliable day-to-day performance."
        : selectedLang === "hi"
          ? "वास्तविक भरोसा प्रोडक्ट की स्थिरता, आसान उपयोग और रोज़ाना विश्वसनीय प्रदर्शन से मिलता है।"
          : "वास्तविक विश्वास उत्पादनाची स्थिरता, सुलभ वापर आणि दैनंदिन विश्वासार्ह कामगिरीमुळे निर्माण होतो.";
  }

  const allMediaEyebrow = document.querySelector(".all-media .eyebrow");
  const allMediaTitle = document.querySelector(".all-media h2");
  const allMediaLead = document.querySelector(".all-media .section-head p:not(.eyebrow)");
  if (allMediaEyebrow) {
    allMediaEyebrow.textContent =
      selectedLang === "en"
        ? "Complete Media Collection"
        : selectedLang === "hi"
          ? "पूर्ण मीडिया संग्रह"
          : "संपूर्ण मीडिया संग्रह";
  }
  if (allMediaTitle) {
    allMediaTitle.textContent =
      selectedLang === "en"
        ? "All photos and videos shared by you."
        : selectedLang === "hi"
          ? "आपके द्वारा साझा सभी फ़ोटो और वीडियो।"
          : "तुमच्याकडून शेअर केलेले सर्व फोटो आणि व्हिडिओ.";
  }
  if (allMediaLead) {
    allMediaLead.textContent =
      selectedLang === "en"
        ? "This section now uses only approved, non-repeated product photos."
        : selectedLang === "hi"
          ? "इस सेक्शन में अब केवल स्वीकृत और बिना दोहराव वाले प्रोडक्ट फ़ोटो का उपयोग किया गया है।"
          : "या सेक्शनमध्ये आता फक्त मान्यताप्राप्त आणि पुनरावृत्ती नसलेले प्रॉडक्ट फोटो वापरले आहेत.";
  }

  const productTypesHead = document.querySelector("#orderCartSection .section-head h2");
  const productTypesLead = document.querySelector("#orderCartSection .section-head p:not(.eyebrow)");
  const productTypesEyebrow = document.querySelector("#orderCartSection .section-head .eyebrow");
  if (productTypesHead) productTypesHead.textContent = tr.productTypesTitle;
  if (productTypesLead) productTypesLead.textContent = tr.productTypesLead;
  if (productTypesEyebrow) {
    productTypesEyebrow.textContent =
      selectedLang === "en"
        ? "Product Types"
        : selectedLang === "hi"
          ? "प्रोडक्ट प्रकार"
          : "उत्पादन प्रकार";
  }

  const orderCards = Array.from(document.querySelectorAll(".use-type-card"));
  if (orderCards.length >= 3) {
    const orderHeadings = orderCards.map((card) => card.querySelector("h3"));
    const orderParagraphs = orderCards.map((card) => card.querySelector("p"));
    const orderLabels = Array.from(document.querySelectorAll(".order-row label"));
    const orderBullets = orderCards.map((card) => Array.from(card.querySelectorAll("ul li")));
    const contentByLang =
      selectedLang === "en"
        ? {
            heads: ["Home Use (Shegdi)", "Commercial Use (Shegdi)", "Industrial Use (Oil Skimmer)"],
            paras: [
              "Best for daily family cooking with compact and efficient setup.",
              "Designed for higher usage volume in hotels, canteens, and catering kitchens.",
              "Designed for factories, workshops, and machining setups to remove floating oil from coolant and process tanks.",
            ],
            bullets: [
              ["Optimized for regular home kitchens", "Easy maintenance and space-efficient layout"],
              ["Quantity depends on daily meal volume", "Heavy-duty usage with stable long-hour performance"],
              ["Supports cleaner coolant and better machine life", "Stable operation for continuous industrial use"],
            ],
            qty: "Quantity",
          }
        : selectedLang === "hi"
          ? {
              heads: ["होम उपयोग (शेगडी)", "कमर्शियल उपयोग (शेगडी)", "इंडस्ट्रियल उपयोग (ऑयल स्किमर)"],
              paras: [
                "परिवार की दैनिक कुकिंग जरूरतों के लिए कॉम्पैक्ट और प्रभावी सेटअप।",
                "होटल, कैंटीन और कैटरिंग किचन में अधिक उपयोग के लिए डिज़ाइन किया गया।",
                "फैक्टरी, वर्कशॉप और मशीनिंग सेटअप में कूलेंट/प्रोसेस टैंक से तैरता तेल हटाने के लिए उपयुक्त।",
              ],
              bullets: [
                ["दैनिक होम किचन के लिए अनुकूल", "आसान मेंटेनेंस और कम जगह में उपयुक्त"],
                ["आवश्यक मात्रा दैनिक भोजन उत्पादन पर निर्भर", "लंबे समय के उपयोग के लिए मजबूत और स्थिर प्रदर्शन"],
                ["कूलेंट को साफ रखने और मशीन लाइफ बेहतर करने में सहायक", "लगातार इंडस्ट्रियल उपयोग के लिए स्थिर संचालन"],
              ],
              qty: "मात्रा",
            }
          : {
              heads: ["घरगुती वापर (शेगडी)", "कमर्शियल वापर (शेगडी)", "इंडस्ट्रियल वापर (ऑईल स्किमर)"],
              paras: [
                "दैनंदिन कुटुंबीय स्वयंपाकासाठी कॉम्पॅक्ट आणि कार्यक्षम सेटअप.",
                "हॉटेल, कॅन्टीन आणि केटरिंग किचनमधील जास्त वापरासाठी डिझाइन केलेले.",
                "फॅक्टरी, वर्कशॉप आणि मशीनिंग सेटअपमध्ये कूलंट/प्रोसेस टँकमधील तरंगते तेल काढण्यासाठी उपयुक्त.",
              ],
              bullets: [
                ["दैनंदिन घरगुती किचनसाठी अनुकूल", "सुलभ मेंटेनन्स आणि कमी जागेत उपयोगी रचना"],
                ["आवश्यक प्रमाण दैनंदिन जेवण उत्पादनावर अवलंबून", "दीर्घकालीन वापरासाठी मजबूत आणि स्थिर कार्यक्षमता"],
                ["कूलंट स्वच्छ ठेवून मशीनचे आयुष्य सुधारण्यास मदत", "सतत इंडस्ट्रियल वापरासाठी स्थिर कार्यप्रणाली"],
              ],
              qty: "प्रमाण",
            };
    orderHeadings.forEach((el, idx) => {
      if (el) el.textContent = contentByLang.heads[idx] || el.textContent;
    });
    orderParagraphs.forEach((el, idx) => {
      if (el) el.textContent = contentByLang.paras[idx] || el.textContent;
    });
    orderBullets.forEach((list, idx) => {
      list.forEach((item, bulletIdx) => {
        item.textContent = contentByLang.bullets[idx]?.[bulletIdx] || item.textContent;
      });
    });
    orderLabels.forEach((label) => {
      label.textContent = contentByLang.qty;
    });
  }

  document.querySelectorAll(".add-cart-btn").forEach((button) => {
    button.textContent = tr.addToCart;
  });

  const cartTitle = document.querySelector(".cart-drawer-head h3");
  const cartHomeLabel = document.querySelector("#cartHomeLine span");
  const cartCommercialLabel = document.querySelector("#cartCommercialLine span");
  const cartIndustrialLabel = document.querySelector("#cartIndustrialLine span");
  const clearButton = document.getElementById("clearCartBtn");
  const applyButton = document.getElementById("applyCartBtn");

  if (cartTitle) cartTitle.textContent = tr.cartTitle;
  if (cartHomeLabel) cartHomeLabel.textContent = tr.cartLabels.home;
  if (cartCommercialLabel) cartCommercialLabel.textContent = tr.cartLabels.commercial;
  if (cartIndustrialLabel) cartIndustrialLabel.textContent = tr.cartLabels.industrial;
  if (clearButton) clearButton.textContent = tr.cartClear;
  if (applyButton) applyButton.textContent = tr.cartUseInInquiry;
  const cartTotalText = document.querySelector(".cart-total");
  if (cartTotalText && cartTotalText.firstChild) {
    cartTotalText.firstChild.textContent = `${tr.cartTotalPrefix} `;
  }

  const contactTitle = document.querySelector("#contact h2");
  const contactLead = document.querySelector("#contact .contact-box > div p:not(.eyebrow)");
  const contactEyebrow = document.querySelector("#contact .eyebrow");
  const contactName = inquiryForm?.querySelector('input[name="name"]');
  const contactPhone = inquiryForm?.querySelector('input[name="phone"]');
  const contactAddress = inquiryForm?.querySelector('textarea[name="address"]');
  const contactRequirement = inquiryForm?.querySelector('textarea[name="requirement"]');
  if (contactEyebrow) {
    contactEyebrow.textContent =
      selectedLang === "en"
        ? "Let's build together"
        : selectedLang === "hi"
          ? "आइए साथ मिलकर आगे बढ़ें"
          : "चला, एकत्रितपणे पुढे जाऊया";
  }
  if (contactTitle) {
    contactTitle.textContent =
      selectedLang === "en"
        ? "Talk to Anvi Engineering for Shegdi and Oil Skimmer orders."
        : selectedLang === "hi"
          ? "शेगडी और ऑयल स्किमर ऑर्डर के लिए अन्वी इंजीनियरिंग से संपर्क करें।"
          : "शेगडी आणि ऑईल स्किमरसाठी अन्वी इंजिनिअरिंगशी संपर्क साधा.";
  }
  if (contactLead) {
    contactLead.textContent =
      selectedLang === "en"
        ? "Share your kitchen or industrial requirement and we will help you with the right mechanical solution."
        : selectedLang === "hi"
          ? "अपनी किचन या इंडस्ट्रियल आवश्यकता साझा करें। हम आपको सही मैकेनिकल समाधान प्रदान करेंगे।"
          : "तुमच्या किचन किंवा इंडस्ट्रियल गरजा सांगा. आम्ही तुम्हाला योग्य मेकॅनिकल सोल्यूशन देऊ.";
  }
  if (contactName) {
    contactName.placeholder =
      selectedLang === "en" ? "Your Name" : selectedLang === "hi" ? "आपका नाम" : "तुमचे नाव";
  }
  if (contactPhone) {
    contactPhone.placeholder =
      selectedLang === "en"
        ? "Mobile Number"
        : selectedLang === "hi"
          ? "मोबाइल नंबर"
          : "मोबाइल नंबर";
  }
  if (contactAddress) {
    contactAddress.placeholder =
      selectedLang === "en" ? "Your Address" : selectedLang === "hi" ? "आपका पता" : "तुमचा पत्ता";
  }
  if (contactRequirement) {
    contactRequirement.placeholder =
      selectedLang === "en"
        ? "Write your requirement (examples: home use for family of 5, need 2 units in Pune, hotel kitchen order with 8 commercial units, or industrial oil skimmer requirement with machine/coolant tank details and delivery timeline)."
        : selectedLang === "hi"
          ? "अपनी आवश्यकता लिखें (उदाहरण: 5 लोगों के परिवार के लिए होम उपयोग, पुणे में 2 यूनिट, होटल किचन के लिए 8 कमर्शियल यूनिट, या ऑयल स्किमर के लिए मशीन/कूलेंट टैंक और डिलीवरी समय)."
          : "तुमची आवश्यकता लिहा (उदाहरण: 5 जणांच्या कुटुंबासाठी होम वापर, पुण्यात 2 युनिट्स, हॉटेल किचनसाठी 8 कमर्शियल युनिट्स, किंवा ऑईल स्किमरसाठी मशीन/कूलंट टँक आणि डिलिव्हरी टाइमलाइन).";
  }

  const inquiryButton = document.getElementById("inquirySubmitBtn");
  if (inquiryButton && selectedLang !== "en") {
    inquiryButton.textContent = selectedLang === "hi" ? "पूछताछ भेजें" : "चौकशी पाठवा";
  } else if (inquiryButton) {
    inquiryButton.textContent = "Send Inquiry";
  }

  const brokerTitle = document.querySelector("#broker h2");
  const brokerLead = document.querySelector("#broker .contact-box > div p:not(.eyebrow)");
  const brokerEyebrow = document.querySelector("#broker .eyebrow");
  const brokerName = brokerForm?.querySelector('input[name="name"]');
  const brokerPhone = brokerForm?.querySelector('input[name="phone"]');
  const brokerCity = brokerForm?.querySelector('input[name="city"]');
  const brokerExperience = brokerForm?.querySelector('textarea[name="experience"]');
  const brokerProducts = brokerForm?.querySelector('textarea[name="products"]');
  const brokerMessage = brokerForm?.querySelector('textarea[name="message"]');
  if (brokerEyebrow) {
    brokerEyebrow.textContent =
      selectedLang === "en"
        ? "Broker Partner Network"
        : selectedLang === "hi"
          ? "ब्रोकर पार्टनर नेटवर्क"
          : "ब्रोकर पार्टनर नेटवर्क";
  }
  if (brokerTitle && selectedLang !== "en") {
    brokerTitle.textContent =
      selectedLang === "hi"
        ? "शेगडी और ऑयल स्किमर बेचने के लिए ब्रोकर के रूप में जुड़ें।"
        : "शेगडी आणि ऑईल स्किमर विक्रीसाठी ब्रोकर म्हणून सहभागी व्हा.";
  } else if (brokerTitle) {
    brokerTitle.textContent = "Join as a broker to sell Shegdi and Oil Skimmer.";
  }
  if (brokerLead) {
    brokerLead.textContent =
      selectedLang === "en"
        ? "If you can help with sales in your city or industry, share your details. We will contact you to discuss pricing, margins, and business terms."
        : selectedLang === "hi"
          ? "यदि आप अपने शहर या उद्योग में बिक्री सहयोग दे सकते हैं, तो अपनी जानकारी साझा करें। हम आपसे मूल्य, मार्जिन और व्यावसायिक शर्तों पर चर्चा के लिए संपर्क करेंगे।"
          : "तुम्ही तुमच्या शहरात किंवा उद्योगात विक्रीसाठी सहकार्य करू शकत असाल, तर तुमची माहिती शेअर करा. किंमत, मार्जिन आणि व्यावसायिक अटींबाबत चर्चेसाठी आम्ही तुमच्याशी संपर्क करू.";
  }
  if (brokerName) {
    brokerName.placeholder =
      selectedLang === "en" ? "Broker Name" : selectedLang === "hi" ? "ब्रोकर का नाम" : "ब्रोकरचे नाव";
  }
  if (brokerPhone) {
    brokerPhone.placeholder =
      selectedLang === "en"
        ? "Mobile / WhatsApp Number"
        : selectedLang === "hi"
          ? "मोबाइल / व्हाट्सऐप नंबर"
          : "मोबाइल / व्हॉट्सअॅप नंबर";
  }
  if (brokerCity) {
    brokerCity.placeholder =
      selectedLang === "en"
        ? "City / Service Area"
        : selectedLang === "hi"
          ? "शहर / सेवा क्षेत्र"
          : "शहर / सेवा क्षेत्र";
  }
  if (brokerExperience) {
    brokerExperience.placeholder =
      selectedLang === "en"
        ? "Your experience (examples: kitchen equipment sales 3 years, industrial supply network, dealer contacts)."
        : selectedLang === "hi"
          ? "आपका अनुभव (उदाहरण: 3 साल किचन इक्विपमेंट बिक्री, इंडस्ट्रियल सप्लाई नेटवर्क, डीलर संपर्क)."
          : "तुमचा अनुभव (उदाहरण: 3 वर्षे किचन इक्विपमेंट विक्री, इंडस्ट्रियल सप्लाय नेटवर्क, डीलर संपर्क).";
  }
  if (brokerProducts) {
    brokerProducts.placeholder =
      selectedLang === "en"
        ? "Products you can sell (examples: Home Shegdi, Commercial Shegdi, Industrial Oil Skimmer)."
        : selectedLang === "hi"
          ? "आप कौन से उत्पाद बेच सकते हैं (उदाहरण: होम शेगडी, कमर्शियल शेगडी, इंडस्ट्रियल ऑयल स्किमर)।"
          : "तुम्ही कोणते प्रॉडक्ट्स विकू शकता (उदाहरण: होम शेगडी, कमर्शियल शेगडी, इंडस्ट्रियल ऑईल स्किमर).";
  }
  if (brokerMessage) {
    brokerMessage.placeholder =
      selectedLang === "en"
        ? "Additional details (target market, monthly potential, preferred way to connect)."
        : selectedLang === "hi"
          ? "अतिरिक्त जानकारी (टार्गेट मार्केट, मासिक क्षमता, संपर्क का तरीका)."
          : "अधिक माहिती (टार्गेट मार्केट, मासिक क्षमता, संपर्काचा प्राधान्य मार्ग).";
  }
  if (brokerSubmitBtn) {
    brokerSubmitBtn.textContent =
      selectedLang === "en"
        ? "Submit Broker Details"
        : selectedLang === "hi"
          ? "ब्रोकर जानकारी सबमिट करें"
          : "ब्रोकर तपशील सबमिट करा";
  }

  const usageThumbsLocal = Array.from(document.querySelectorAll("#usageThumbs .thumb"));
  if (usageThumbsLocal[0]) {
    usageThumbsLocal[0].dataset.caption =
      selectedLang === "en"
        ? "Official Anvi product photo."
        : selectedLang === "hi"
          ? "अन्वी का आधिकारिक प्रोडक्ट फोटो।"
          : "अन्वीचा अधिकृत प्रॉडक्ट फोटो.";
  }
  if (usageThumbsLocal[1]) {
    usageThumbsLocal[1].dataset.caption =
      selectedLang === "en"
        ? "Customer shared Shegdi image."
        : selectedLang === "hi"
          ? "ग्राहक द्वारा साझा शेगडी फोटो।"
          : "ग्राहकाने शेअर केलेला शेगडी फोटो.";
  }
  if (usageThumbsLocal[2]) {
    usageThumbsLocal[2].dataset.caption =
      selectedLang === "en"
        ? "Industrial Oil Skimmer product image."
        : selectedLang === "hi"
          ? "इंडस्ट्रियल ऑयल स्किमर प्रोडक्ट फोटो।"
          : "इंडस्ट्रियल ऑईल स्किमर प्रॉडक्ट फोटो.";
  }
  if (usageMainImage && usageCaption) {
    const activeThumb =
      document.querySelector("#usageThumbs .thumb.active") || usageThumbsLocal[0];
    if (activeThumb) {
      usageMainImage.src = activeThumb.dataset.src || usageMainImage.src;
      usageMainImage.alt = activeThumb.dataset.alt || usageMainImage.alt;
      usageCaption.textContent = activeThumb.dataset.caption || usageCaption.textContent;
    }
  }

  const footerText = document.querySelector(".site-footer p");
  if (footerText) {
    footerText.innerHTML =
      selectedLang === "en"
        ? `© <span id="year"></span> Anvi Engineering. All rights reserved.`
        : selectedLang === "hi"
          ? `© <span id="year"></span> अन्वी इंजीनियरिंग। सर्वाधिकार सुरक्षित।`
          : `© <span id="year"></span> अन्वी इंजिनिअरिंग। सर्व हक्क राखीव।`;
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  }

  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, selectedLang);
  } catch (error) {
    // Ignore localStorage errors in restricted environments.
  }

  window.dispatchEvent(new Event("languageChanged"));
};

const showLanguageModal = () => {
  if (!languageModal) return;
  languageModal.classList.add("open");
  languageModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
};

const hideLanguageModal = () => {
  if (!languageModal) return;
  languageModal.classList.remove("open");
  languageModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
};

const resolveAssetUrl = (value) => {
  if (!value || !value.startsWith("assets/")) {
    return value;
  }
  if (
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
  ) {
    return value;
  }
  return `${ASSET_CDN_BASE}${value.replace(/^assets\//, "")}`;
};

const remapMediaAttributesToCdn = () => {
  document.querySelectorAll('[src^="assets/"]').forEach((el) => {
    const src = el.getAttribute("src");
    el.setAttribute("src", resolveAssetUrl(src));
  });

  document.querySelectorAll('[poster^="assets/"]').forEach((el) => {
    const poster = el.getAttribute("poster");
    el.setAttribute("poster", resolveAssetUrl(poster));
  });

  document.querySelectorAll('[data-src^="assets/"]').forEach((el) => {
    const dataSrc = el.getAttribute("data-src");
    el.setAttribute("data-src", resolveAssetUrl(dataSrc));
  });

  document.querySelectorAll("video").forEach((video) => {
    video.load();
  });
};

remapMediaAttributesToCdn();

let initialLanguage = "en";
try {
  initialLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) || "en";
} catch (error) {
  initialLanguage = "en";
}
applyLanguage(initialLanguage);
showLanguageModal();

if (languageOpenBtn) {
  languageOpenBtn.addEventListener("click", () => {
    showLanguageModal();
  });
}

if (languageOptionButtons.length > 0) {
  languageOptionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.dataset.lang || "en";
      applyLanguage(selected);
      hideLanguageModal();
    });
  });
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navMenu.classList.remove("open"));
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

revealEls.forEach((el) => observer.observe(el));

window.addEventListener("scroll", () => {
  if (!scrollProgress) {
    return;
  }
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
  scrollProgress.style.width = `${progress}%`;
});

window.addEventListener("mousemove", (event) => {
  if (!cursorGlow) {
    return;
  }
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});

magneticEls.forEach((el) => {
  el.addEventListener("mousemove", (event) => {
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
  });
  el.addEventListener("mouseleave", () => {
    el.style.transform = "translate(0px, 0px)";
  });
});

const countObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      const el = entry.target;
      const target = Number(el.dataset.target || "0");
      const suffix = el.dataset.suffix || "";
      const duration = 1100;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const value = Math.floor(target * progress);
        el.textContent = `${value}${suffix}`;
        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      };

      requestAnimationFrame(tick);
      countObserver.unobserve(el);
    });
  },
  { threshold: 0.45 }
);

metricNumbers.forEach((el) => countObserver.observe(el));

forcedMutedVideos.forEach((video) => {
  video.muted = true;
  video.volume = 0;
  // Keep all site videos silent even if controls are used.
  video.addEventListener("volumechange", () => {
    if (!video.muted || video.volume !== 0) {
      video.muted = true;
      video.volume = 0;
    }
  });
});

experienceVideoWraps.forEach((wrap) => {
  const video = wrap.querySelector("video");
  if (!video) {
    return;
  }

  const applyOrientation = () => {
    if (!video.videoWidth || !video.videoHeight) {
      return;
    }
    const isPortrait = video.videoHeight > video.videoWidth;
    wrap.classList.toggle("portrait", isPortrait);
    wrap.classList.toggle("landscape", !isPortrait);
  };

  if (video.readyState >= 1) {
    applyOrientation();
  }
  video.addEventListener("loadedmetadata", applyOrientation);
});

const openLightbox = (src, alt = "") => {
  if (!lightbox || !lightboxImage) {
    return;
  }
  lightboxImage.src = src;
  lightboxImage.alt = alt;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
};

if (usageMainImage && usageCaption && usageThumbs.length > 0) {
  let activeIndex = 0;

  const applyUsageSlide = (index) => {
    activeIndex = (index + usageThumbs.length) % usageThumbs.length;
    const activeThumb = usageThumbs[activeIndex];
    usageMainImage.src = activeThumb.dataset.src || usageMainImage.src;
    usageMainImage.alt = activeThumb.dataset.alt || usageMainImage.alt;
    usageCaption.textContent = activeThumb.dataset.caption || "";
    usageThumbs.forEach((thumb, i) => {
      thumb.classList.toggle("active", i === activeIndex);
    });
  };

  usageThumbs.forEach((thumb, i) => {
    thumb.addEventListener("click", () => applyUsageSlide(i));
  });

  if (usagePrev) {
    usagePrev.addEventListener("click", () => applyUsageSlide(activeIndex - 1));
  }

  if (usageNext) {
    usageNext.addEventListener("click", () => applyUsageSlide(activeIndex + 1));
  }

  usageMainImage.addEventListener("click", () =>
    openLightbox(usageMainImage.src, usageMainImage.alt)
  );

  if (lightbox && lightboxClose) {
    lightboxClose.addEventListener("click", () => {
      lightbox.classList.remove("open");
      lightbox.setAttribute("aria-hidden", "true");
    });
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) {
        lightbox.classList.remove("open");
        lightbox.setAttribute("aria-hidden", "true");
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    if (!lightbox || !lightbox.classList.contains("open")) {
      return;
    }
    if (event.key === "Escape") {
      lightbox.classList.remove("open");
      lightbox.setAttribute("aria-hidden", "true");
    }
  });
}

mediaOpenImages.forEach((img) => {
  img.addEventListener("click", () => openLightbox(img.src, img.alt));
});

if (testimonialSlider && testimonialCards.length > 0 && testimonialDots.length > 0) {
  let activeTestimonial = 0;
  let sliderTimer;

  const applyTestimonial = (index) => {
    activeTestimonial = (index + testimonialCards.length) % testimonialCards.length;
    testimonialCards.forEach((card, i) => {
      card.classList.toggle("active", i === activeTestimonial);
    });
    testimonialDots.forEach((dot, i) => {
      dot.classList.toggle("active", i === activeTestimonial);
    });
  };

  const restartSlider = () => {
    clearInterval(sliderTimer);
    sliderTimer = setInterval(() => {
      applyTestimonial(activeTestimonial + 1);
    }, 4200);
  };

  testimonialDots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      applyTestimonial(i);
      restartSlider();
    });
  });

  testimonialSlider.addEventListener("mouseenter", () => clearInterval(sliderTimer));
  testimonialSlider.addEventListener("mouseleave", restartSlider);
  restartSlider();
}

if (addCartButtons.length > 0 && cartSummaryText) {
  const cart = {
    home: 0,
    commercial: 0,
    industrial: 0,
  };

  const updateCartSummary = () => {
    const total = cart.home + cart.commercial + cart.industrial;

    if (cartHomeQty && cartCommercialQty && cartIndustrialQty && cartTotalQty) {
      cartHomeQty.textContent = String(cart.home);
      cartCommercialQty.textContent = String(cart.commercial);
      cartIndustrialQty.textContent = String(cart.industrial);
      cartTotalQty.textContent = String(total);
    }

    const parts = [];
    if (cart.home > 0) {
      parts.push(`${cartLabel("home")}: ${cart.home}`);
    }
    if (cart.commercial > 0) {
      parts.push(`${cartLabel("commercial")}: ${cart.commercial}`);
    }
    if (cart.industrial > 0) {
      parts.push(`${cartLabel("industrial")}: ${cart.industrial}`);
    }
    cartSummaryText.textContent =
      parts.length > 0 ? `${parts.join(" | ")} (${t("cartTotalPrefix")} ${total})` : t("cartEmpty");

    if (inquiryCartSummary) {
      inquiryCartSummary.textContent =
        parts.length > 0 ? `${parts.join(" | ")} (${t("cartTotalPrefix")} ${total})` : t("cartNoneSelected");
    }

    if (scrollToCartLink) {
      scrollToCartLink.textContent = parts.length > 0 ? t("cartUpdateSelection") : t("cartGoTop");
    }

    if (cartToggleBtn) {
      cartToggleBtn.textContent = `${t("cartTitle")} (${total})`;
    }

    if (usageTypeInput && quantityRequiredInput && productSelectionInput) {
      if (total < 1) {
        usageTypeInput.value = "";
        quantityRequiredInput.value = "";
        productSelectionInput.value = "{}";
      } else {
        const activeTypes = Object.entries(cart)
          .filter(([, qty]) => qty > 0)
          .map(([type]) => type);
        usageTypeInput.value =
          activeTypes.length > 1 ? "mixed" : activeTypes[0] || "";
        quantityRequiredInput.value = String(total);
        productSelectionInput.value = JSON.stringify(cart);
      }
    }
  };

  addCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const usageType = button.dataset.usageType || "";
      const qtyInputId = button.dataset.qtyInputId || "";
      const card = button.closest(".use-type-card, .inquiry-order-builder");
      const qtyInput = qtyInputId
        ? document.getElementById(qtyInputId)
        : card?.querySelector(".order-qty-input");
      const quantity = Number.parseInt(String(qtyInput?.value || ""), 10);

      if (!["home", "commercial", "industrial"].includes(usageType) || !Number.isInteger(quantity) || quantity < 1) {
        return;
      }

      cart[usageType] += quantity;
      updateCartSummary();

      if (inquiryStatus) {
        inquiryStatus.textContent = statusText("added")
          .replace("{qty}", String(quantity))
          .replace("{usage}", cartLabel(usageType));
        inquiryStatus.classList.remove("error");
      }

      if (cartDrawer) {
        cartDrawer.setAttribute("aria-hidden", "false");
      }
    });
  });

  if (cartLineButtons.length > 0) {
    cartLineButtons.forEach((lineButton) => {
      lineButton.addEventListener("click", () => {
        const usage = lineButton.dataset.usage;
        const action = lineButton.dataset.action;
        if (!usage || !["home", "commercial", "industrial"].includes(usage)) {
          return;
        }
        if (action === "increase") {
          cart[usage] += 1;
        } else if (action === "decrease") {
          cart[usage] = Math.max(0, cart[usage] - 1);
        }
        updateCartSummary();
      });
    });
  }

  if (cartToggleBtn && cartDrawer) {
    cartToggleBtn.addEventListener("click", () => {
      const isHidden = cartDrawer.getAttribute("aria-hidden") === "true";
      cartDrawer.setAttribute("aria-hidden", isHidden ? "false" : "true");
    });
  }

  if (cartCloseBtn && cartDrawer) {
    cartCloseBtn.addEventListener("click", () => {
      cartDrawer.setAttribute("aria-hidden", "true");
    });
  }

  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", () => {
      cart.home = 0;
      cart.commercial = 0;
      cart.industrial = 0;
      updateCartSummary();
      if (inquiryStatus) {
        inquiryStatus.textContent = statusText("selectionCleared");
        inquiryStatus.classList.remove("error");
      }
    });
  }

  if (applyCartBtn && usageTypeInput && quantityRequiredInput) {
    applyCartBtn.addEventListener("click", () => {
      const total = cart.home + cart.commercial + cart.industrial;
      if (total < 1) {
        return;
      }
      updateCartSummary();
      inquiryStatus.textContent = statusText("cartApplied").replace(
        "{total}",
        String(total)
      );
      inquiryStatus.classList.remove("error");
      inquiryForm?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  window.addEventListener("languageChanged", () => {
    updateCartSummary();
  });

  updateCartSummary();
}

if (scrollToCartLink) {
  scrollToCartLink.addEventListener("click", (event) => {
    event.preventDefault();
    const section = document.getElementById("orderCartSection");
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

if (inquiryForm && inquiryStatus && inquirySubmitBtn) {
  inquiryForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(inquiryForm);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      address: String(formData.get("address") || "").trim(),
      usageType: String(formData.get("usage_type") || "").trim(),
      quantityRequired: Number.parseInt(
        String(formData.get("quantity_required") || ""),
        10
      ),
      productSelection: String(formData.get("product_selection") || "{}"),
      requirement: String(formData.get("requirement") || "").trim(),
    };

    if (
      !payload.name ||
      !payload.phone ||
      !payload.address ||
      !payload.usageType ||
      payload.productSelection === "{}" ||
      !payload.requirement ||
      !Number.isInteger(payload.quantityRequired) ||
      payload.quantityRequired < 1
    ) {
      inquiryStatus.textContent = statusText("fillInquiry");
      inquiryStatus.classList.add("error");
      return;
    }

    inquirySubmitBtn.disabled = true;
    inquiryStatus.textContent = statusText("sendingInquiry");
    inquiryStatus.classList.remove("error");

    try {
      const response = await fetch("/.netlify/functions/create-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        throw new Error(result.error || "Failed to save inquiry");
      }

      inquiryForm.reset();
      inquiryStatus.textContent = statusText("inquirySuccess");
      inquiryStatus.classList.remove("error");
    } catch (error) {
      inquiryStatus.textContent = statusText("inquiryFail");
      inquiryStatus.classList.add("error");
    } finally {
      inquirySubmitBtn.disabled = false;
    }
  });
}

if (brokerForm && brokerStatus && brokerSubmitBtn) {
  brokerForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(brokerForm);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      city: String(formData.get("city") || "").trim(),
      experience: String(formData.get("experience") || "").trim(),
      products: String(formData.get("products") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    if (
      !payload.name ||
      !payload.phone ||
      !payload.city ||
      !payload.experience ||
      !payload.products
    ) {
      brokerStatus.textContent = statusText("fillBroker");
      brokerStatus.classList.add("error");
      return;
    }

    brokerSubmitBtn.disabled = true;
    brokerStatus.textContent = statusText("sendingBroker");
    brokerStatus.classList.remove("error");

    try {
      const response = await fetch("/.netlify/functions/create-broker-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        throw new Error(result.error || "Failed to save broker details");
      }

      brokerForm.reset();
      brokerStatus.textContent = statusText("brokerSuccess");
      brokerStatus.classList.remove("error");
    } catch (error) {
      brokerStatus.textContent = statusText("brokerFail");
      brokerStatus.classList.add("error");
    } finally {
      brokerSubmitBtn.disabled = false;
    }
  });
}
