// Multilingual Support System
const translations = {
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-listings': 'Listings',
        'nav-services': 'Services',
        'nav-about': 'About Us',
        'nav-contact': 'Contact',
        
        // Hero Section
        'hero-title': 'Find Your Perfect Home in Kochi',
        'hero-subtitle': 'Trusted by thousands of residents and verified by Kochi Corporation',
        'search-placeholder': 'Search apartments, houses, rooms...',
        'property-type-label': 'Property Type',
        'budget-label': 'Budget Range',
        'btn-search': 'Search',
        'stat-listings': 'Listings Available',
        'stat-users': 'Happy Users',
        'stat-support': 'Customer Support',
        
        // Features
        'features-title': 'Why Choose KochiNest?',
        'feature-verified': 'Verified Listings',
        'feature-verified-desc': 'All listings are verified by Kochi Corporation for your safety and security.',
        'feature-free': 'Free Listings',
        'feature-free-desc': 'Post your property listings completely free of charge.',
        'feature-services': 'Complete Services',
        'feature-services-desc': 'From cleaning to shifting, we provide all services under one roof.',
        'feature-multilingual': 'Multilingual Support',
        'feature-multilingual-desc': 'Available in English, Malayalam, and Hindi for your convenience.',
        
        // Services
        'services-title': 'Our Services',
        'service-repair': 'Repair Services',
        'service-repair-desc': 'Professional repair services for your home and appliances.',
        'service-cleaning': 'Deep Cleaning',
        'service-cleaning-desc': 'Thorough cleaning services for your home and office spaces.',
        'service-security': 'Security Services',
        'service-security-desc': 'Professional security services for your property and events.',
        'service-carwash': 'Car Wash',
        'service-carwash-desc': 'Premium car washing and detailing services at your doorstep.',
        'service-shifting': 'Flat Shifting',
        'service-shifting-desc': 'Professional moving and shifting services for your home or office.',
        'service-maintenance': 'Maintenance',
        'service-maintenance-desc': 'Regular maintenance services to keep your property in perfect condition.',
        'btn-book-now': 'Book Now',
        
        // Listings
        'listings-title': 'Featured Listings',
        'listing-1-title': '2BHK Apartment in Ernakulam',
        'listing-2-title': 'Spacious Villa in Kakkanad',
        'listing-3-title': 'Single Room in Shared Apartment',
        'btn-view-details': 'View Details',
        'btn-view-all': 'View All Listings',
        'price-month': '/ month',
        
        // About
        'about-title': 'About KochiNest',
        'about-desc-1': 'KochiNest is Kochi Corporation\'s official housing and services platform, established to provide reliable and trustworthy solutions for Kochi\'s growing population.',
        'about-desc-2': 'Our mission is to create a seamless experience for finding homes and accessing essential services, all while maintaining the highest standards of quality and customer satisfaction.',
        'about-stat-1': 'Years of Service',
        'about-stat-2': 'Verified Partners',
        'about-stat-3': 'Customer Satisfaction',
        
        // Contact
        'contact-title': 'Contact Us',
        'contact-address-title': 'Address',
        'contact-phone-title': 'Phone',
        'contact-email-title': 'Email',
        'contact-hours-title': 'Working Hours',
        'btn-send-message': 'Send Message',
        
        // Footer
        'footer-desc': 'Your trusted partner for housing and services in Kochi, brought to you by Kochi Corporation.',
        'footer-links-title': 'Quick Links',
        'footer-link-home': 'Home',
        'footer-link-listings': 'Listings',
        'footer-link-services': 'Services',
        'footer-link-about': 'About Us',
        'footer-link-contact': 'Contact',
        'footer-services-title': 'Services',
        'footer-service-1': 'Property Listings',
        'footer-service-2': 'Repair Services',
        'footer-service-3': 'Cleaning Services',
        'footer-service-4': 'Security Services',
        'footer-service-5': 'Car Wash',
        'footer-newsletter-title': 'Newsletter',
        'footer-newsletter-desc': 'Subscribe to our newsletter for the latest updates and offers.',
        'btn-subscribe': 'Subscribe',
        
        // Authentication
        'btn-login': 'Login',
        'btn-signup': 'Sign Up',
        
        // Modals
        'modal-login-title': 'Login to KochiNest',
        'modal-signup-title': 'Create Your Account',
        'modal-remember-me': 'Remember me',
        'modal-forgot-password': 'Forgot Password?',
        'modal-btn-login': 'Login',
        'modal-btn-signup': 'Sign Up',
        'modal-switch-signup': 'Don\'t have an account?',
        'modal-switch-login': 'Already have an account?',
        'modal-terms-agree': 'I agree to the Terms of Service and Privacy Policy',
        'modal-btn-close': 'Close',
        
        // Success Modal
        'modal-success-title': 'Success!',
        'modal-success-message': 'Your request has been processed successfully.',
        
        // Form Labels
        'First Name': 'First Name',
        'Last Name': 'Last Name',
        'Email Address': 'Email Address',
        'Phone Number': 'Phone Number',
        'Password': 'Password',
        'Confirm Password': 'Confirm Password',
        'Your Name': 'Your Name',
        'Your Email': 'Your Email',
        'Subject': 'Subject',
        'Your Message': 'Your Message'
    },
    
    ml: {
        // Navigation
        'nav-home': 'ഹോം',
        'nav-listings': 'പട്ടികകൾ',
        'nav-services': 'സേവനങ്ങൾ',
        'nav-about': 'ഞങ്ങളെക്കുറിച്ച്',
        'nav-contact': 'ബന്ധപ്പെടുക',
        
        // Hero Section
        'hero-title': 'കൊച്ചിയിൽ നിങ്ങളുടെ പെർഫക്റ്റ് ഹോം കണ്ടെത്തുക',
        'hero-subtitle': 'ആയിരക്കണക്കിന് നിവാസികളാൽ വിശ്വസിക്കപ്പെടുന്നതും കൊച്ചി കോർപ്പറേഷനാൽ സ്ഥിരീകരിക്കപ്പെട്ടതുമാണ്',
        'search-placeholder': 'അപ്പാർട്ട്മെന്റുകൾ, വീടുകൾ, മുറികൾ തിരയുക...',
        'property-type-label': 'പ്രോപ്പർട്ടി തരം',
        'budget-label': 'ബജറ്റ് പരിധി',
        'btn-search': 'തിരയുക',
        'stat-listings': 'ലഭ്യമായ പട്ടികകൾ',
        'stat-users': 'സന്തുഷ്ടരായ ഉപയോക്താക്കൾ',
        'stat-support': 'ഉപഭോക്തൃ പിന്തുണ',
        
        // Features
        'features-title': 'കൊച്ചിനെസ്റ്റ് എന്തുകൊണ്ട് തിരഞ്ഞെടുക്കണം?',
        'feature-verified': 'സ്ഥിരീകരിച്ച പട്ടികകൾ',
        'feature-verified-desc': 'നിങ്ങളുടെ സുരക്ഷയ്ക്കും സുരക്ഷിതത്വത്തിനുമായി കൊച്ചി കോർപ്പറേഷനാൽ എല്ലാ പട്ടികകളും സ്ഥിരീകരിക്കപ്പെട്ടിരിക്കുന്നു.',
        'feature-free': 'സൗജന്യ പട്ടികകൾ',
        'feature-free-desc': 'നിങ്ങളുടെ പ്രോപ്പർട്ടി പട്ടികകൾ പൂർണ്ണമായും സൗജന്യമായി പോസ്റ്റുചെയ്യുക.',
        'feature-services': 'മുഴുവൻ സേവനങ്ങളും',
        'feature-services-desc': 'വൃത്തിയാക്കൽ മുതൽ ഷിഫ്റ്റിംഗ് വരെ, ഒരു മേൽക്കൂരയ്ക്ക് കീഴിൽ എല്ലാ സേവനങ്ങളും ഞങ്ങൾ നൽകുന്നു.',
        'feature-multilingual': 'ബഹുഭാഷാ പിന്തുണ',
        'feature-multilingual-desc': 'നിങ്ങളുടെ സൗകര്യത്തിനായി ഇംഗ്ലീഷ്, മലയാളം, ഹിന്ദി എന്നിവയിൽ ലഭ്യമാണ്.',
        
        // Services
        'services-title': 'ഞങ്ങളുടെ സേവനങ്ങൾ',
        'service-repair': 'അറ്റിപ്പണി സേവനങ്ങൾ',
        'service-repair-desc': 'നിങ്ങളുടെ വീട്ടിലും ഉപകരണങ്ങളിലും പ്രൊഫഷണൽ അറ്റിപ്പണി സേവനങ്ങൾ.',
        'service-cleaning': 'ആഴത്തിലുള്ള വൃത്തിയാക്കൽ',
        'service-cleaning-desc': 'നിങ്ങളുടെ വീടും ഓഫീസ് സ്ഥലങ്ങളും വൃത്തിയാക്കുന്നതിനുള്ള വ്യാപകമായ വൃത്തിയാക്കൽ സേവനങ്ങൾ.',
        'service-security': 'സുരക്ഷാ സേവനങ്ങൾ',
        'service-security-desc': 'നിങ്ങളുടെ പ്രോപ്പർട്ടിയ്ക്കും സംഭവങ്ങൾക്കുമായി പ്രൊഫഷണൽ സുരക്ഷാ സേവനങ്ങൾ.',
        'service-carwash': 'കാർ വാഷ്',
        'service-carwash-desc': 'നിങ്ങളുടെ വാതിൽക്കൽ പ്രീമിയം കാർ വാഷിംഗും ഡീറ്റെയിലിംഗ് സേവനങ്ങളും.',
        'service-shifting': 'ഫ്ലാറ്റ് ഷിഫ്റ്റിംഗ്',
        'service-shifting-desc': 'നിങ്ങളുടെ വീട്ടിലേക്കോ ഓഫീസിലേക്കോ പ്രൊഫഷണൽ മൂവിംഗും ഷിഫ്റ്റിംഗ് സേവനങ്ങളും.',
        'service-maintenance': 'പരിപാലനം',
        'service-maintenance-desc': 'നിങ്ങളുടെ പ്രോപ്പർട്ടി പൂർണ്ണമായി പരിപാലിക്കുന്നതിനുള്ള റെഗുലർ പരിപാലന സേവനങ്ങൾ.',
        'btn-book-now': 'ഇപ്പോൾ ബുക്ക് ചെയ്യുക',
        
        // Listings
        'listings-title': 'ഫീച്ചർ ചെയ്ത പട്ടികകൾ',
        'listing-1-title': 'എറണാകുളത്ത് 2ബിഎച്ച്കെ അപ്പാർട്ട്മെന്റ്',
        'listing-2-title': 'കക്കനാട്ട് വിശാലമായ വില്ല',
        'listing-3-title': 'ഷെയർ ചെയ്ത അപ്പാർട്ട്മെന്റിൽ ഒറ്റ മുറി',
        'btn-view-details': 'വിശദാംശങ്ങൾ കാണുക',
        'btn-view-all': 'എല്ലാ പട്ടികകളും കാണുക',
        'price-month': '/ മാസം',
        
        // About
        'about-title': 'കൊച്ചിനെസ്റ്റിനെക്കുറിച്ച്',
        'about-desc-1': 'കൊച്ചിയുടെ വളരുന്ന ജനസംഖ്യയ്ക്കായി വിശ്വസനീയവും വിശ്വസ്തവുമായ പരിഹാരങ്ങൾ നൽകുന്നതിനായി സ്ഥാപിച്ച കൊച്ചി കോർപ്പറേഷന്റെ ഔദ്യോഗിക ഹൗസിംഗ് സേവന പ്ലാറ്റ്ഫോമാണ് കൊച്ചിനെസ്റ്റ്.',
        'about-desc-2': 'നിങ്ങളുടെ വീടുകൾ കണ്ടെത്തുന്നതിനും അത്യാവശ്യ സേവനങ്ങൾ ലഭ്യമാക്കുന്നതിനുമുള്ള ഒരു സീമ്ലെസ് അനുഭവം സൃഷ്ടിക്കുക എന്നതാണ് ഞങ്ങളുടെ ദൗത്യം, ഏറ്റവും ഉയർന്ന നിലവാരത്തിന്റെയും ഉപഭോക്തൃ തൃപ്തിയുടെയും സ്റ്റാൻഡേർഡുകൾ പാലിക്കുന്നു.',
        'about-stat-1': 'സർവീസ് വർഷങ്ങൾ',
        'about-stat-2': 'സ്ഥിരീകരിച്ച പങ്കാളികൾ',
        'about-stat-3': 'ഉപഭോക്തൃ തൃപ്തി',
        
        // Contact
        'contact-title': 'ഞങ്ങളെ ബന്ധപ്പെടുക',
        'contact-address-title': 'വിലാസം',
        'contact-phone-title': 'ഫോൺ',
        'contact-email-title': 'ഇമെയിൽ',
        'contact-hours-title': 'ജോലി സമയം',
        'btn-send-message': 'സന്ദേശം അയയ്ക്കുക',
        
        // Footer
        'footer-desc': 'കൊച്ചി കോർപ്പറേഷനാൽ നിങ്ങൾക്കായി കൊച്ചിയിൽ ഹൗസിംഗും സേവനങ്ങളും നൽകുന്ന നിങ്ങളുടെ വിശ്വസ്ത പങ്കാളി.',
        'footer-links-title': 'വേഗത്തിലുള്ള ലിങ്കുകൾ',
        'footer-link-home': 'ഹോം',
        'footer-link-listings': 'പട്ടികകൾ',
        'footer-link-services': 'സേവനങ്ങൾ',
        'footer-link-about': 'ഞങ്ങളെക്കുറിച്ച്',
        'footer-link-contact': 'ബന്ധപ്പെടുക',
        'footer-services-title': 'സേവനങ്ങൾ',
        'footer-service-1': 'പ്രോപ്പർട്ടി പട്ടികകൾ',
        'footer-service-2': 'അറ്റിപ്പണി സേവനങ്ങൾ',
        'footer-service-3': 'വൃത്തിയാക്കൽ സേവനങ്ങൾ',
        'footer-service-4': 'സുരക്ഷാ സേവനങ്ങൾ',
        'footer-service-5': 'കാർ വാഷ്',
        'footer-newsletter-title': 'ന്യൂസ്ലെറ്റർ',
        'footer-newsletter-desc': 'ഏറ്റവും പുതിയ അപ്ഡേറ്റുകളും ഓഫറുകളും ലഭിക്കാൻ ഞങ്ങളുടെ ന്യൂസ്ലെറ്ററിന് സബ്സ്ക്രൈബ് ചെയ്യുക.',
        'btn-subscribe': 'സബ്സ്ക്രൈബ് ചെയ്യുക',
        
        // Authentication
        'btn-login': 'ലോഗിൻ',
        'btn-signup': 'സൈൻ അപ്പ്',
        
        // Modals
        'modal-login-title': 'കൊച്ചിനെസ്റ്റിലേക്ക് ലോഗിൻ ചെയ്യുക',
        'modal-signup-title': 'നിങ്ങളുടെ അക്കൗണ്ട് സൃഷ്ടിക്കുക',
        'modal-remember-me': 'എന്നെ ഓർമ്മിക്കുക',
        'modal-forgot-password': 'പാസ്വേഡ് മറന്നു?',
        'modal-btn-login': 'ലോഗിൻ',
        'modal-btn-signup': 'സൈൻ അപ്പ്',
        'modal-switch-signup': 'ഒരു അക്കൗണ്ട് ഇല്ലേ?',
        'modal-switch-login': 'ഇതിനകം ഒരു അക്കൗണ്ട് ഉണ്ടോ?',
        'modal-terms-agree': 'ഞാൻ സേവന നിയമങ്ങളും സ്വകാര്യതാ നയവും അംഗീകരിക്കുന്നു',
        'modal-btn-close': 'അടയ്ക്കുക',
        
        // Success Modal
        'modal-success-title': 'വിജയം!',
        'modal-success-message': 'നിങ്ങളുടെ അഭ്യർത്ഥന വിജയകരമായി പ്രോസസ്സ് ചെയ്തിരിക്കുന്നു.',
        
        // Form Labels
        'First Name': 'ആദ്യ പേര്',
        'Last Name': 'അവസാന പേര്',
        'Email Address': 'ഇമെയിൽ വിലാസം',
        'Phone Number': 'ഫോൺ നമ്പർ',
        'Password': 'പാസ്വേഡ്',
        'Confirm Password': 'പാസ്വേഡ് സ്ഥിരീകരിക്കുക',
        'Your Name': 'നിങ്ങളുടെ പേര്',
        'Your Email': 'നിങ്ങളുടെ ഇമെയിൽ',
        'Subject': 'വിഷയം',
        'Your Message': 'നിങ്ങളുടെ സന്ദേശം'
    },
    
    hi: {
        // Navigation
        'nav-home': 'होम',
        'nav-listings': 'सूचियाँ',
        'nav-services': 'सेवाएँ',
        'nav-about': 'हमारे बारे में',
        'nav-contact': 'संपर्क करें',
        
        // Hero Section
        'hero-title': 'कोच्चि में अपना सही घर ढूंढें',
        'hero-subtitle': 'हजारों निवासियों द्वारा विश्वसनीय और कोच्चि निगम द्वारा सत्यापित',
        'search-placeholder': 'अपार्टमेंट, घर, कमरे खोजें...',
        'property-type-label': 'संपत्ति का प्रकार',
        'budget-label': 'बजट रेंज',
        'btn-search': 'खोजें',
        'stat-listings': 'उपलब्ध सूचियाँ',
        'stat-users': 'खुश उपयोगकर्ता',
        'stat-support': 'ग्राहक सहायता',
        
        // Features
        'features-title': 'कोच्चिनेस्ट क्यों चुनें?',
        'feature-verified': 'सत्यापित सूचियाँ',
        'feature-verified-desc': 'आपकी सुरक्षा और सुरक्षा के लिए कोच्चि निगम द्वारा सभी सूचियाँ सत्यापित हैं।',
        'feature-free': 'मुफ्त सूचियाँ',
        'feature-free-desc': 'अपनी संपत्ति सूचियाँ पूरी तरह से मुफ्त में पोस्ट करें।',
        'feature-services': 'पूर्ण सेवाएँ',
        'feature-services-desc': 'सफाई से लेकर शिफ्टिंग तक, हम एक ही छत के नीचे सभी सेवाएँ प्रदान करते हैं।',
        'feature-multilingual': 'बहुभाषी समर्थन',
        'feature-multilingual-desc': 'आपकी सुविधा के लिए अंग्रेजी, मलयालम और हिंदी में उपलब्ध।',
        
        // Services
        'services-title': 'हमारी सेवाएँ',
        'service-repair': 'मरम्मत सेवाएँ',
        'service-repair-desc': 'आपके घर और उपकरणों के लिए पेशेवर मरम्मत सेवाएँ।',
        'service-cleaning': 'डीप क्लीनिंग',
        'service-cleaning-desc': 'आपके घर और कार्यालय स्थानों के लिए व्यापक सफाई सेवाएँ।',
        'service-security': 'सुरक्षा सेवाएँ',
        'service-security-desc': 'आपकी संपत्ति और कार्यक्रमों के लिए पेशेवर सुरक्षा सेवाएँ।',
        'service-carwash': 'कार वॉश',
        'service-carwash-desc': 'आपके दरवाजे पर प्रीमियम कार वॉशिंग और डिटेलिंग सेवाएँ।',
        'service-shifting': 'फ्लैट शिफ्टिंग',
        'service-shifting-desc': 'आपके घर या कार्यालय के लिए पेशेवर मूविंग और शिफ्टिंग सेवाएँ।',
        'service-maintenance': 'रखरखाव',
        'service-maintenance-desc': 'आपकी संपत्ति को पूर्ण स्थिति में रखने के लिए नियमित रखरखाव सेवाएँ।',
        'btn-book-now': 'अभी बुक करें',
        
        // Listings
        'listings-title': 'विशेष सूचियाँ',
        'listing-1-title': 'एर्नाकुलम में 2बीएचके अपार्टमेंट',
        'listing-2-title': 'कक्कनाड में विशाल विला',
        'listing-3-title': 'साझा अपार्टमेंट में एकल कमरा',
        'btn-view-details': 'विवरण देखें',
        'btn-view-all': 'सभी सूचियाँ देखें',
        'price-month': '/ महीना',
        
        // About
        'about-title': 'कोच्चिनेस्ट के बारे में',
        'about-desc-1': 'कोच्चिनेस्ट कोच्चि निगम का आधिकारिक आवास और सेवा प्लेटफॉर्म है, कोच्चि की बढ़ती आबादी के लिए विश्वसनीय और विश्वसनीय समाधान प्रदान करने के लिए स्थापित।',
        'about-desc-2': 'हमारा मिशन उच्चतम गुणवत्ता और ग्राहक संतुष्टि के मानकों को बनाए रखते हुए घर ढूंढने और आवश्यक सेवाओं तक पहुंचने के लिए एक सहज अनुभव बनाना है।',
        'about-stat-1': 'सेवा वर्ष',
        'about-stat-2': 'सत्यापित भागीदार',
        'about-stat-3': 'ग्राहक संतुष्टि',
        
        // Contact
        'contact-title': 'हमसे संपर्क करें',
        'contact-address-title': 'पता',
        'contact-phone-title': 'फ़ोन',
        'contact-email-title': 'ईमेल',
        'contact-hours-title': 'कार्य समय',
        'btn-send-message': 'संदेश भेजें',
        
        // Footer
        'footer-desc': 'कोच्चि निगम द्वारा आपके लिए कोच्चि में आवास और सेवाओं के लिए आपका विश्वसनीय साझेदार।',
        'footer-links-title': 'त्वरित लिंक',
        'footer-link-home': 'होम',
        'footer-link-listings': 'सूचियाँ',
        'footer-link-services': 'सेवाएँ',
        'footer-link-about': 'हमारे बारे में',
        'footer-link-contact': 'संपर्क करें',
        'footer-services-title': 'सेवाएँ',
        'footer-service-1': 'संपत्ति सूचियाँ',
        'footer-service-2': 'मरम्मत सेवाएँ',
        'footer-service-3': 'सफाई सेवाएँ',
        'footer-service-4': 'सुरक्षा सेवाएँ',
        'footer-service-5': 'कार वॉश',
        'footer-newsletter-title': 'समाचार पत्रिका',
        'footer-newsletter-desc': 'नवीनतम अपडेट और ऑफ़र प्राप्त करने के लिए हमारे समाचार पत्रिका की सदस्यता लें।',
        'btn-subscribe': 'सदस्यता लें',
        
        // Authentication
        'btn-login': 'लॉग इन',
        'btn-signup': 'साइन अप',
        
        // Modals
        'modal-login-title': 'कोच्चिनेस्ट में लॉग इन करें',
        'modal-signup-title': 'अपना खाता बनाएं',
        'modal-remember-me': 'मुझे याद रखें',
        'modal-forgot-password': 'पासवर्ड भूल गए?',
        'modal-btn-login': 'लॉग इन',
        'modal-btn-signup': 'साइन अप',
        'modal-switch-signup': 'खाता नहीं है?',
        'modal-switch-login': 'पहले से खाता है?',
        'modal-terms-agree': 'मैं सेवा की शर्तों और गोपनीयता नीति से सहमत हूं',
        'modal-btn-close': 'बंद करें',
        
        // Success Modal
        'modal-success-title': 'सफलता!',
        'modal-success-message': 'आपका अनुरोध सफलतापूर्वक प्रोसेस किया गया है।',
        
        // Form Labels
        'First Name': 'पहला नाम',
        'Last Name': 'अंतिम नाम',
        'Email Address': 'ईमेल पता',
        'Phone Number': 'फ़ोन नंबर',
        'Password': 'पासवर्ड',
        'Confirm Password': 'पासवर्ड की पुष्टि कीजिये',
        'Your Name': 'आपका नाम',
        'Your Email': 'आपका ईमेल',
        'Subject': 'विषय',
        'Your Message': 'आपका संदेश'
    }
};

// Language Management
class LanguageManager {
    constructor() {
        this.currentLanguage = 'en';
        this.init();
    }
    
    init() {
        // Check for saved language preference
        const savedLang = localStorage.getItem('kochinest_language');
        if (savedLang && translations[savedLang]) {
            this.currentLanguage = savedLang;
        }
        
        // Set initial language
        this.setLanguage(this.currentLanguage);
        
        // Add event listener for language switcher
        const languageSelect = document.getElementById('language-select');
        if (languageSelect) {
            languageSelect.value = this.currentLanguage;
            languageSelect.addEventListener('change', (e) => {
                this.setLanguage(e.target.value);
            });
        }
    }
    
    setLanguage(language) {
        if (!translations[language]) return;
        
        this.currentLanguage = language;
        localStorage.setItem('kochinest_language', language);
        
        // Update all elements with data-i18n attributes
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = translations[language][key];
            
            if (translation) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    if (element.hasAttribute('data-i18n-placeholder')) {
                        element.placeholder = translation;
                    }
                } else {
                    element.textContent = translation;
                }
            }
        });
        
        // Update form labels
        this.updateFormLabels(language);
    }
    
    updateFormLabels(language) {
        // Update form labels that might be hardcoded
        const labels = document.querySelectorAll('label');
        labels.forEach(label => {
            const text = label.textContent.trim();
            if (translations[language][text]) {
                label.innerHTML = label.innerHTML.replace(text, translations[language][text]);
            }
        });
    }
}

// Form Validation
class FormValidator {
    static validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    static validatePhone(phone) {
        const re = /^[6-9]\d{9}$/;
        return re.test(phone);
    }
    
    static validatePassword(password) {
        return password.length >= 6;
    }
    
    static validateName(name) {
        return name.trim().length >= 2;
    }
    
    static showFieldError(field, message) {
        const formGroup = field.closest('.form-group');
        if (formGroup) {
            let errorElement = formGroup.querySelector('.field-error');
            if (!errorElement) {
                errorElement = document.createElement('div');
                errorElement.className = 'field-error';
                errorElement.style.color = '#ef4444';
                errorElement.style.fontSize = '0.875rem';
                errorElement.style.marginTop = '0.25rem';
                formGroup.appendChild(errorElement);
            }
            errorElement.textContent = message;
            field.style.borderColor = '#ef4444';
        }
    }
    
    static clearFieldError(field) {
        const formGroup = field.closest('.form-group');
        if (formGroup) {
            const errorElement = formGroup.querySelector('.field-error');
            if (errorElement) {
                errorElement.remove();
            }
            field.style.borderColor = '';
        }
    }
}

// Modal Management
class ModalManager {
    constructor() {
        this.modals = {};
        this.init();
    }
    
    init() {
        // Initialize modals
        const modalElements = document.querySelectorAll('.modal');
        modalElements.forEach(modal => {
            const modalId = modal.id;
            this.modals[modalId] = modal;
            
            // Add close functionality
            const closeBtn = modal.querySelector('.close');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => this.closeModal(modalId));
            }
            
            // Close modal when clicking outside
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeModal(modalId);
                }
            });
        });
        
        // Add event listeners for modal triggers
        const loginBtn = document.getElementById('login-btn');
        const signupBtn = document.getElementById('signup-btn');
        
        if (loginBtn) {
            loginBtn.addEventListener('click', () => this.openModal('login-modal'));
        }
        
        if (signupBtn) {
            signupBtn.addEventListener('click', () => this.openModal('signup-modal'));
        }
        
        // Switch between modals
        document.addEventListener('click', (e) => {
            if (e.target.id === 'switch-to-signup') {
                this.closeModal('login-modal');
                this.openModal('signup-modal');
                e.preventDefault();
            } else if (e.target.id === 'switch-to-login') {
                this.closeModal('signup-modal');
                this.openModal('login-modal');
                e.preventDefault();
            }
        });
    }
    
    openModal(modalId) {
        const modal = this.modals[modalId];
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }
    
    closeModal(modalId) {
        const modal = this.modals[modalId];
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
    
    showSuccess(message) {
        const modal = this.modals['success-modal'];
        if (modal) {
            const messageElement = document.getElementById('success-message');
            if (messageElement) {
                messageElement.textContent = message;
            }
            modal.style.display = 'block';
            
            // Auto close after 3 seconds
            setTimeout(() => {
                this.closeModal('success-modal');
            }, 3000);
        }
    }
}

// Form Handlers
class FormHandler {
    constructor() {
        this.init();
    }
    
    init() {
        // Login form
        const loginForm = document.getElementById('login-form');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => this.handleLogin(e));
        }
        
        // Signup form
        const signupForm = document.getElementById('signup-form');
        if (signupForm) {
            signupForm.addEventListener('submit', (e) => this.handleSignup(e));
        }
        
        // Contact form
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => this.handleContact(e));
        }
        
        // Newsletter form
        const newsletterForm = document.querySelector('.newsletter-form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => this.handleNewsletter(e));
        }
    }
    
    handleLogin(e) {
        e.preventDefault();
        const form = e.target;
        const email = form.querySelector('#login-email').value.trim();
        const password = form.querySelector('#login-password').value;
        
        let isValid = true;
        
        // Validate email
        if (!FormValidator.validateEmail(email)) {
            FormValidator.showFieldError(form.querySelector('#login-email'), 'Please enter a valid email address');
            isValid = false;
        } else {
            FormValidator.clearFieldError(form.querySelector('#login-email'));
        }
        
        // Validate password
        if (!FormValidator.validatePassword(password)) {
            FormValidator.showFieldError(form.querySelector('#login-password'), 'Password must be at least 6 characters long');
            isValid = false;
        } else {
            FormValidator.clearFieldError(form.querySelector('#login-password'));
        }
        
        if (isValid) {
            // Simulate login
            this.showLoading(form.querySelector('.btn-primary'));
            setTimeout(() => {
                this.hideLoading(form.querySelector('.btn-primary'));
                modalManager.showSuccess('Login successful!');
                modalManager.closeModal('login-modal');
                form.reset();
            }, 2000);
        }
    }
    
    handleSignup(e) {
        e.preventDefault();
        const form = e.target;
        const firstName = form.querySelector('#signup-first-name').value.trim();
        const lastName = form.querySelector('#signup-last-name').value.trim();
        const email = form.querySelector('#signup-email').value.trim();
        const phone = form.querySelector('#signup-phone').value.trim();
        const password = form.querySelector('#signup-password').value;
        const confirmPassword = form.querySelector('#signup-confirm-password').value;
        const terms = form.querySelector('input[type="checkbox"]').checked;
        
        let isValid = true;
        
        // Validate first name
        if (!FormValidator.validateName(firstName)) {
            FormValidator.showFieldError(form.querySelector('#signup-first-name'), 'Please enter a valid first name');
            isValid = false;
        } else {
            FormValidator.clearFieldError(form.querySelector('#signup-first-name'));
        }
        
        // Validate last name
        if (!FormValidator.validateName(lastName)) {
            FormValidator.showFieldError(form.querySelector('#signup-last-name'), 'Please enter a valid last name');
            isValid = false;
        } else {
            FormValidator.clearFieldError(form.querySelector('#signup-last-name'));
        }
        
        // Validate email
        if (!FormValidator.validateEmail(email)) {
            FormValidator.showFieldError(form.querySelector('#signup-email'), 'Please enter a valid email address');
            isValid = false;
        } else {
            FormValidator.clearFieldError(form.querySelector('#signup-email'));
        }
        
        // Validate phone
        if (!FormValidator.validatePhone(phone)) {
            FormValidator.showFieldError(form.querySelector('#signup-phone'), 'Please enter a valid 10-digit phone number');
            isValid = false;
        } else {
            FormValidator.clearFieldError(form.querySelector('#signup-phone'));
        }
        
        // Validate password
        if (!FormValidator.validatePassword(password)) {
            FormValidator.showFieldError(form.querySelector('#signup-password'), 'Password must be at least 6 characters long');
            isValid = false;
        } else {
            FormValidator.clearFieldError(form.querySelector('#signup-password'));
        }
        
        // Validate confirm password
        if (password !== confirmPassword) {
            FormValidator.showFieldError(form.querySelector('#signup-confirm-password'), 'Passwords do not match');
            isValid = false;
        } else {
            FormValidator.clearFieldError(form.querySelector('#signup-confirm-password'));
        }
        
        // Validate terms
        if (!terms) {
            alert('Please agree to the terms and conditions');
            isValid = false;
        }
        
        if (isValid) {
            // Simulate signup
            this.showLoading(form.querySelector('.btn-primary'));
            setTimeout(() => {
                this.hideLoading(form.querySelector('.btn-primary'));
                modalManager.showSuccess('Registration successful! Please check your email for verification.');
                modalManager.closeModal('signup-modal');
                form.reset();
            }, 2000);
        }
    }
    
    handleContact(e) {
        e.preventDefault();
        const form = e.target;
        const name = form.querySelector('#contact-name').value.trim();
        const email = form.querySelector('#contact-email').value.trim();
        const subject = form.querySelector('#contact-subject').value.trim();
        const message = form.querySelector('#contact-message').value.trim();
        
        let isValid = true;
        
        // Validate name
        if (!FormValidator.validateName(name)) {
            FormValidator.showFieldError(form.querySelector('#contact-name'), 'Please enter your name');
            isValid = false;
        } else {
            FormValidator.clearFieldError(form.querySelector('#contact-name'));
        }
        
        // Validate email
        if (!FormValidator.validateEmail(email)) {
            FormValidator.showFieldError(form.querySelector('#contact-email'), 'Please enter a valid email address');
            isValid = false;
        } else {
            FormValidator.clearFieldError(form.querySelector('#contact-email'));
        }
        
        // Validate subject
        if (subject.length < 3) {
            FormValidator.showFieldError(form.querySelector('#contact-subject'), 'Subject must be at least 3 characters long');
            isValid = false;
        } else {
            FormValidator.clearFieldError(form.querySelector('#contact-subject'));
        }
        
        // Validate message
        if (message.length < 10) {
            FormValidator.showFieldError(form.querySelector('#contact-message'), 'Message must be at least 10 characters long');
            isValid = false;
        } else {
            FormValidator.clearFieldError(form.querySelector('#contact-message'));
        }
        
        if (isValid) {
            // Simulate contact form submission
            this.showLoading(form.querySelector('.btn-primary'));
            setTimeout(() => {
                this.hideLoading(form.querySelector('.btn-primary'));
                modalManager.showSuccess('Thank you for your message! We will get back to you soon.');
                form.reset();
            }, 2000);
        }
    }
    
    handleNewsletter(e) {
        e.preventDefault();
        const form = e.target;
        const email = form.querySelector('input[type="email"]').value.trim();
        
        if (!FormValidator.validateEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        this.showLoading(form.querySelector('.btn-primary'));
        setTimeout(() => {
            this.hideLoading(form.querySelector('.btn-primary'));
            modalManager.showSuccess('Thank you for subscribing to our newsletter!');
            form.reset();
        }, 1500);
    }
    
    showLoading(button) {
        button.classList.add('loading');
        button.disabled = true;
    }
    
    hideLoading(button) {
        button.classList.remove('loading');
        button.disabled = false;
    }
}

// Navigation and Scroll Behavior
class NavigationManager {
    constructor() {
        this.init();
    }
    
    init() {
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // Active navigation highlighting
        window.addEventListener('scroll', () => {
            this.updateActiveNav();
        });
        
        // Close mobile menu when clicking nav links (if implemented)
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove('active'));
                // Add active class to clicked link
                link.classList.add('active');
            });
        });
    }
    
    updateActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                // Remove active class from all nav links
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                
                // Add active class to current section link
                const currentLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (currentLink) {
                    currentLink.classList.add('active');
                }
            }
        });
    }
}

// Service Booking
class ServiceManager {
    constructor() {
        this.init();
    }
    
    init() {
        const bookButtons = document.querySelectorAll('.service-card .btn-outline');
        bookButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const serviceName = e.target.closest('.service-card').querySelector('h3').textContent;
                modalManager.showSuccess(`Thank you for booking ${serviceName}! We will contact you shortly.`);
            });
        });
    }
}

// Search Functionality
class SearchManager {
    constructor() {
        this.init();
    }
    
    init() {
        const searchBtn = document.getElementById('search-btn');
        const searchInput = document.getElementById('search-input');
        
        if (searchBtn) {
            searchBtn.addEventListener('click', () => this.performSearch());
        }
        
        if (searchInput) {
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.performSearch();
                }
            });
        }
    }
    
    performSearch() {
        const query = document.getElementById('search-input').value.trim();
        const propertyType = document.getElementById('property-type').value;
        const budgetRange = document.getElementById('budget-range').value;
        
        if (!query && propertyType === 'all' && budgetRange === 'all') {
            modalManager.showSuccess('Please enter a search term or select filters.');
            return;
        }
        
        // Simulate search
        modalManager.showSuccess(`Searching for: ${query || 'all properties'} (${propertyType}) in budget: ${budgetRange}`);
        
        // In a real application, this would trigger an API call or filter listings
        setTimeout(() => {
            // Scroll to listings section
            const listingsSection = document.getElementById('listings');
            if (listingsSection) {
                listingsSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 1000);
    }
}

// Initialize all components
let languageManager, modalManager, formHandler, navigationManager, serviceManager, searchManager;

document.addEventListener('DOMContentLoaded', () => {
    languageManager = new LanguageManager();
    modalManager = new ModalManager();
    formHandler = new FormHandler();
    navigationManager = new NavigationManager();
    serviceManager = new ServiceManager();
    searchManager = new SearchManager();
    
    // Add some visual feedback for interactive elements
    document.querySelectorAll('.listing-card, .feature-card, .service-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add loading states for buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.classList.contains('btn-primary') && !this.disabled) {
                formHandler.showLoading(this);
                setTimeout(() => formHandler.hideLoading(this), 2000);
            }
        });
    });
    
    console.log('KochiNest website initialized successfully!');
    console.log('Available in English, Malayalam, and Hindi');
    console.log('Features: Multilingual support, form validation, modal management, and responsive design');
});