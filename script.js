// --- DOM Elements ---
const userInfoForm = document.getElementById('userInfoForm');
const schemesOutputDiv = document.getElementById('schemesOutput');
const apiResponsePre = document.getElementById('apiResponse');
const loader = document.getElementById('loader');
const submitBtn = document.getElementById('submitBtn');
const languageSwitcher = document.getElementById('languageSwitcher');

// --- Translations Data ---
const translations = {
    'hi': {
        'page_title': 'PragatiGPT - आपकी सरकारी योजनाएँ खोजें',
        'app_name': 'PragatiGPT',
        'logo_alt_text': 'PragatiGPT लोगो',
        'nav_home': 'मुख्य पृष्ठ',
        'nav_about': 'हमारे बारे में',
        'nav_how_it_works': 'यह कैसे काम करता है?',
        'nav_scheme_finder': 'योजना खोजें',
        'nav_testimonials': 'प्रशंसापत्र',
        'hero_title': 'भारत के कल्याणकारी भविष्य की ओर एक कदम',
        'hero_subtitle': 'PragatiGPT के साथ अपनी पात्र सरकारी योजनाओं को आसानी से खोजें। आपकी आवश्यकताओं के अनुरूप, सही जानकारी, सही समय पर।',
        'hero_cta_button': 'अभी योजनाएँ खोजें',
        'stats_title': 'कुछ महत्वपूर्ण आँकड़े (उदाहरण)',
        'stats_users_helped': 'संतुष्ट उपयोगकर्ता',
        'stats_schemes_listed': ' सूचीबद्ध योजनाएँ (स्थानीय डेटाबेस)',
        'stats_accuracy_rate': 'अनुमानित सटीकता दर',
        'about_title': 'हमारे बारे में',
        'about_p1': 'PragatiGPT एक अभिनव पहल है जिसका उद्देश्य भारतीय नागरिकों को उनके लिए उपलब्ध विभिन्न सरकारी कल्याणकारी योजनाओं के बारे में जानकारी प्रदान करना है। हम आपकी प्रोफ़ाइल के आधार पर सबसे उपयुक्त योजनाओं को खोजने में आपकी सहायता करते हैं। हमारा लक्ष्य सूचना तक पहुँच को सरल बनाना और यह सुनिश्चित करना है कि प्रत्येक पात्र नागरिक सरकारी लाभों का उपयोग कर सके।',
        'about_card1_title': 'सटीक मिलान',
        'about_card1_desc': 'आपकी व्यक्तिगत जानकारी के आधार पर योजनाओं का सटीक मिलान।',
        'about_card2_title': 'सरल पहुँच',
        'about_card2_desc': 'जटिल सरकारी पोर्टलों के बजाय एक सरल और सुलभ मंच।',
        'about_card3_title': 'नियम-आधारित जानकारी',
        'about_card3_desc': 'परिभाषित नियमों के आधार पर योजना सुझाव (सत्यापन आवश्यक)।',
        'howitworks_title': 'यह कैसे काम करता है?',
        'howitworks_step1_title': 'जानकारी दर्ज करें',
        'howitworks_step1_desc': 'अपना नाम, आयु, लिंग और व्यवसाय जैसे सरल विवरण प्रदान करें।',
        'howitworks_step2_title': 'स्थानीय विश्लेषण',
        'howitworks_step2_desc': 'हमारी प्रणाली आपकी प्रोफ़ाइल का विश्लेषण करेगी और हमारे डेटाबेस से पात्र योजनाओं को ढूंढेगी।',
        'howitworks_step3_title': 'परिणाम देखें',
        'howitworks_step3_desc': 'आपके लिए सबसे उपयुक्त सरकारी योजनाओं की एक सूची प्राप्त करें।',
        'scheme_finder_title': 'अपनी पात्र सरकारी योजनाएँ खोजें',
        'form_name_label': 'आपका नाम:',
        'form_name_placeholder': 'उदा. रमेश कुमार',
        'form_age_label': 'आयु (वर्षों में):',
        'form_age_placeholder': 'उदा. 35',
        'form_gender_label': 'लिंग:',
        'form_gender_select': 'चुनें...',
        'form_gender_male': 'पुरुष',
        'form_gender_female': 'महिला',
        'form_gender_other': 'अन्य',
        'form_occupation_label': 'व्यवसाय:',
        'form_occupation_select': 'चुनें...',
        'form_occupation_student': 'विद्यार्थी',
        'form_occupation_farmer': 'किसान',
        'form_occupation_worker': 'श्रमिक',
        'form_occupation_homemaker': 'गृहिणी',
        'form_occupation_entrepreneur': 'उद्यमी',
        'form_occupation_other_option': 'अन्य',
        'form_submit_button': 'मेरी योजनाएँ देखें',
        'form_submit_loading': '<i class="fas fa-spinner fa-spin"></i> लोड हो रहा है...',
        'no_schemes_found': 'आपके मानदंडों से मेल खाने वाली कोई उपयुक्त योजना नहीं मिली। अधिक जानकारी के लिए कृपया सरकारी पोर्टलों पर जाएँ।',
        'testimonials_title': 'लाभार्थियों की कहानियाँ (उदाहरण)',
        'testimonial1_text': '"PragatiGPT ने मुझे PM-KISAN योजना के बारे में जानने में मदद की, जिससे मुझे बहुत लाभ हुआ। धन्यवाद!"',
        'testimonial1_author': '- एक किसान, राजस्थान',
        'testimonial2_text': '"एक छोटे उद्यमी के रूप में, मुझे मुद्रा योजना के बारे में यहाँ से जानकारी मिली। यह बहुत मददगार था।"',
        'testimonial2_author': '- एक उद्यमी, महाराष्ट्र',
        'testimonial3_text': '"मुझे अपनी बेटी के लिए सुकन्या समृद्धि योजना की जानकारी मिली। यह मंच बहुत उपयोगी है।"',
        'testimonial3_author': '- एक अभिभावक, उत्तर प्रदेश',
        'developer_title': 'डेवलपर से मिलें',
        'developer_avatar_alt_text': 'डेवलपर का अवतार',
        'developer_name_text': 'अभिषेक सिंह शेखावत',
        'developer_bio_text': 'एक उत्साही वेब डेवलपर जो प्रौद्योगिकी के माध्यम से समाधान बनाने पर केंद्रित है।',
        'developer_project_attribution_text': 'यह PragatiGPT परियोजना सामाजिक भलाई के लिए नियम-आधारित योजना खोज को प्रदर्शित करने के लिए बनाई गई थी।',
        'developer_portfolio_button_text': 'पोर्टफोलियो देखें',
        'developer_connect_prompt_text': 'मुझसे जुड़ें:',
        'footer_copyright': `© ${new Date().getFullYear()} PragatiGPT. सर्वाधिकार सुरक्षित।`,
        'social_facebook': 'फेसबुक',
        'social_twitter': 'ट्विटर',
        'social_linkedin': 'लिंक्डइन',
        'footer_disclaimer': "अस्वीकरण: PragatiGPT एक डेमो प्रोजेक्ट है। योजना की जानकारी उदाहरण के लिए है और इसे आधिकारिक स्रोतों से सत्यापित किया जाना चाहिए। यह किसी सरकारी निकाय का प्रतिनिधित्व नहीं करता है।",
        'output_user_profile_title': ':: उपयोगकर्ता प्रोफ़ाइल ::',
        'output_name_label': 'नाम',
        'output_age_label': 'आयु',
        'output_gender_label': 'लिंग',
        'output_occupation_label': 'व्यवसाय',
        'output_schemes_title': ':: पात्र सरकारी योजनाएँ ::',
        'output_scheme_name_label': 'योजना का नाम',
        'output_description_label': 'विवरण',
        'output_more_schemes_1': '... और ',
        'output_more_schemes_2_singular': ' अन्य संभावित योजना।',
        'output_more_schemes_2_plural': ' अन्य संभावित योजनाएँ।',
        'output_more_schemes_3': ' अधिक जानकारी के लिए आधिकारिक स्रोतों की जाँच करें।',
    },
    'en': {
        'page_title': 'PragatiGPT - Find Your Government Schemes',
        'app_name': 'PragatiGPT',
        'logo_alt_text': 'PragatiGPT Logo',
        'nav_home': 'Home',
        'nav_about': 'About Us',
        'nav_how_it_works': 'How It Works',
        'nav_scheme_finder': 'Scheme Finder',
        'nav_testimonials': 'Testimonials',
        'hero_title': 'A Step Towards India\'s Welfare Future',
        'hero_subtitle': 'Easily discover your eligible government schemes with PragatiGPT. Tailored to your needs, right information, right time.',
        'hero_cta_button': 'Find Schemes Now',
        'stats_title': 'Some Key Statistics (Example)',
        'stats_users_helped': 'Users Helped',
        'stats_schemes_listed': 'Schemes Listed (Local Database)',
        'stats_accuracy_rate': 'Estimated Accuracy Rate',
        'about_title': 'About Us',
        'about_p1': 'PragatiGPT is an innovative initiative aimed at providing Indian citizens with information about various government welfare schemes available to them. We help you find the most suitable schemes based on your profile. Our goal is to simplify access to information and ensure that every eligible citizen can avail government benefits.',
        'about_card1_title': 'Accurate Matching',
        'about_card1_desc': 'Precise matching of schemes based on your personal information.',
        'about_card2_title': 'Simple Access',
        'about_card2_desc': 'A simple and accessible platform instead of complex government portals.',
        'about_card3_title': 'Rule-Based Info',
        'about_card3_desc': 'Scheme suggestions based on defined rules (verification needed).',
        'howitworks_title': 'How It Works',
        'howitworks_step1_title': 'Enter Information',
        'howitworks_step1_desc': 'Provide simple details like your name, age, gender, and occupation.',
        'howitworks_step2_title': 'Local Analysis',
        'howitworks_step2_desc': 'Our system will analyze your profile and find eligible schemes from our database.',
        'howitworks_step3_title': 'View Results',
        'howitworks_step3_desc': 'Get a list of the most suitable government schemes for you.',
        'scheme_finder_title': 'Find Your Eligible Government Schemes',
        'form_name_label': 'Your Name:',
        'form_name_placeholder': 'e.g., Ramesh Kumar',
        'form_age_label': 'Age (in years):',
        'form_age_placeholder': 'e.g., 35',
        'form_gender_label': 'Gender:',
        'form_gender_select': 'Select...',
        'form_gender_male': 'Male',
        'form_gender_female': 'Female',
        'form_gender_other': 'Other',
        'form_occupation_label': 'Occupation:',
        'form_occupation_select': 'Select...',
        'form_occupation_student': 'Student',
        'form_occupation_farmer': 'Farmer',
        'form_occupation_worker': 'Worker',
        'form_occupation_homemaker': 'Homemaker',
        'form_occupation_entrepreneur': 'Entrepreneur',
        'form_occupation_other_option': 'Other',
        'form_submit_button': 'Get My Schemes',
        'form_submit_loading': '<i class="fas fa-spinner fa-spin"></i> Loading...',
        'no_schemes_found': 'No suitable schemes found matching your criteria. Please visit official government portals for more information.',
        'testimonials_title': 'Beneficiary Stories (Example)',
        'testimonial1_text': '"PragatiGPT helped me learn about the PM-KISAN scheme, which has benefited me greatly. Thank you!"',
        'testimonial1_author': '- A Farmer, Rajasthan',
        'testimonial2_text': '"As a small entrepreneur, I found information about the Mudra scheme here. It was very helpful."',
        'testimonial2_author': '- An Entrepreneur, Maharashtra',
        'testimonial3_text': '"I found information about the Sukanya Samriddhi Yojana for my daughter. This platform is very useful."',
        'testimonial3_author': '- A Parent, Uttar Pradesh',
        'developer_title': 'Meet the Developer',
        'developer_avatar_alt_text': 'Developer Avatar',
        'developer_name_text': 'Abhishek Singh Shekhawat',
        'developer_bio_text': 'A passionate web developer focused on building solutions through technology.',
        'developer_project_attribution_text': 'This PragatiGPT project was created to showcase rule-based scheme finding for social good.',
        'developer_portfolio_button_text': 'View Portfolio',
        'developer_connect_prompt_text': 'Connect with me:',
        'footer_copyright': `© ${new Date().getFullYear()} PragatiGPT. All rights reserved.`,
        'social_facebook': 'Facebook',
        'social_twitter': 'Twitter',
        'social_linkedin': 'LinkedIn',
        'footer_disclaimer': "Disclaimer: PragatiGPT is a demo project. Scheme info is illustrative and needs verification from official sources. It does not represent any government body.",
        'output_user_profile_title': ':: USER PROFILE ::',
        'output_name_label': 'Name',
        'output_age_label': 'Age',
        'output_gender_label': 'Gender',
        'output_occupation_label': 'Occupation',
        'output_schemes_title': ':: ELIGIBLE GOVERNMENT SCHEMES ::',
        'output_scheme_name_label': 'Scheme Name',
        'output_description_label': 'Description',
        'output_more_schemes_1': '... and ',
        'output_more_schemes_2_singular': ' other potential scheme.',
        'output_more_schemes_2_plural': ' other potential schemes.',
        'output_more_schemes_3': ' Please check official sources for more details.',
    },
    'bn': { // Bengali - YOU NEED TO FILL ALL KEYS
        'page_title': 'প্রগতিজিপিটি - আপনার সরকারি স্কিমগুলি খুঁজুন',
        'app_name': 'প্রগতিজিপিটি',
        'logo_alt_text': 'প্রগতিজিপিটি প্রতীক',
        'nav_home': 'মূল পাতা',
        'nav_about': 'আমাদের সম্পর্কে',
        'nav_how_it_works': 'এটি কিভাবে কাজ করে?',
        'nav_scheme_finder': 'স্কিম খুঁজুন',
        'nav_testimonials': 'প্রশংসাপত্র',
        'hero_title': 'ভারতের কল্যাণ ভবিষ্যতের দিকে এক ধাপ',
        'hero_subtitle': 'প্রগতিজিপিটি দিয়ে আপনার যোগ্য সরকারি স্কিমগুলি সহজেই আবিষ্কার করুন। আপনার প্রয়োজন অনুযায়ী, সঠিক তথ্য, সঠিক সময়ে।',
        'hero_cta_button': 'এখনই স্কিম খুঁজুন',
        'stats_title': 'কিছু গুরুত্বপূর্ণ পরিসংখ্যান (উদাহরণ)',
        'stats_users_helped': 'সন্তুষ্ট ব্যবহারকারী',
        'stats_schemes_listed': 'তালিকাভুক্ত স্কিম (স্থানীয় ডেটাবেস)',
        'stats_accuracy_rate': 'আনুমানিক নির্ভুলতার হার',
        'about_title': 'আমাদের সম্পর্কে',
        'about_p1': 'প্রগতিজিপিটি একটি উদ্ভাবনী উদ্যোগ যার লক্ষ্য ভারতীয় নাগরিকদের তাদের জন্য উপলব্ধ বিভিন্ন সরকারি কল্যাণমূলক প্রকল্প সম্পর্কে তথ্য সরবরাহ করা। আমরা আপনার প্রোফাইলের ভিত্তিতে সবচেয়ে উপযুক্ত স্কিম খুঁজে পেতে আপনাকে সহায়তা করি। আমাদের লক্ষ্য তথ্যে প্রবেশাধিকার সহজ করা এবং প্রতিটি যোগ্য নাগরিক যাতে সরকারি সুবিধাগুলি পেতে পারে তা নিশ্চিত করা।',
        'about_card1_title': 'সঠিক মিল',
        'about_card1_desc': 'আপনার ব্যক্তিগত তথ্যের ভিত্তিতে স্কিমগুলির সঠিক মিল।',
        'about_card2_title': 'সহজ প্রবেশাধিকার',
        'about_card2_desc': 'জটিল সরকারি পোর্টালের পরিবর্তে একটি সহজ এবং অ্যাক্সেসযোগ্য প্ল্যাটফর্ম।',
        'about_card3_title': 'নিয়ম-ভিত্তিক তথ্য',
        'about_card3_desc': 'সংজ্ঞায়িত নিয়মের ভিত্তিতে স্কিম পরামর্শ (যাচাইকরণ প্রয়োজন)।',
        'howitworks_title': 'এটি কিভাবে কাজ করে?',
        'howitworks_step1_title': 'তথ্য প্রবেশ করান',
        'howitworks_step1_desc': 'আপনার নাম, বয়স, লিঙ্গ এবং পেশার মতো সাধারণ বিবরণ সরবরাহ করুন।',
        'howitworks_step2_title': 'স্থানীয় বিশ্লেষণ',
        'howitworks_step2_desc': 'আমাদের সিস্টেম আপনার প্রোফাইল বিশ্লেষণ করবে এবং আমাদের ডেটাবেস থেকে যোগ্য স্কিম খুঁজে বের করবে।',
        'howitworks_step3_title': 'ফলাফল দেখুন',
        'howitworks_step3_desc': 'আপনার জন্য সবচেয়ে উপযুক্ত সরকারি স্কিমগুলির একটি তালিকা পান।',
        'scheme_finder_title': 'আপনার যোগ্য সরকারি স্কিমগুলি খুঁজুন',
        'form_name_label': 'আপনার নাম:',
        'form_name_placeholder': 'যেমন रमेश कुमार',
        'form_age_label': 'বয়স (বছরে):',
        'form_age_placeholder': 'যেমন 35',
        'form_gender_label': 'লিঙ্গ:',
        'form_gender_select': 'নির্বাচন করুন...',
        'form_gender_male': 'পুরুষ',
        'form_gender_female': 'মহিলা',
        'form_gender_other': 'অন্যান্য',
        'form_occupation_label': 'পেশা:',
        'form_occupation_select': 'নির্বাচন করুন...',
        'form_occupation_student': 'ছাত্র',
        'form_occupation_farmer': 'কৃষক',
        'form_occupation_worker': 'শ্রমিক',
        'form_occupation_homemaker': 'গৃহকর্ত্রী',
        'form_occupation_entrepreneur': 'উদ্যোক্তা',
        'form_occupation_other_option': 'অন্যান্য',
        'form_submit_button': 'আমার স্কিমগুলি দেখুন',
        'form_submit_loading': '<i class="fas fa-spinner fa-spin"></i> লোড হচ্ছে...',
        'no_schemes_found': 'আপনার মানদণ্ডের সাথে মেলে এমন কোনো উপযুক্ত স্কিম পাওয়া যায়নি। আরও তথ্যের জন্য অনুগ্রহ করে সরকারি পোর্টালে যান।',
        'testimonials_title': 'সুবিধাভোগীদের গল্প (উদাহরণ)',
        'testimonial1_text': '"প্রগতিজিপিটি আমাকে পিএম-কিষাণ প্রকল্প সম্পর্কে জানতে সাহায্য করেছে, যা আমাকে অনেক উপকৃত করেছে। ধন্যবাদ!"',
        'testimonial1_author': '- এক কৃষক, রাজস্থান',
        'testimonial2_text': '"একজন ছোট উদ্যোক্তা হিসেবে, আমি এখানে মুদ্রা প্রকল্প সম্পর্কে তথ্য পেয়েছি। এটি খুব সহায়ক ছিল।"',
        'testimonial2_author': '- এক উদ্যোক্তা, মহারাষ্ট্র',
        'testimonial3_text': '"আমি আমার মেয়ের জন্য সুকন্যা সমৃদ্ধি যোজনা সম্পর্কে তথ্য পেয়েছি। এই প্ল্যাটফর্মটি খুব দরকারী।"',
        'testimonial3_author': '- এক অভিভাবক, উত্তর প্রদেশ',
        'developer_title': 'ডেভেলপারের সাথে দেখা করুন',
        'developer_avatar_alt_text': 'ডেভেলপারের অবতার',
        'developer_name_text': 'অভিষেক সিং শেখাওয়াত', // Your Name in Bengali
        'developer_bio_text': 'একজন উদ্যমী ওয়েব ডেভেলপার যিনি প্রযুক্তির মাধ্যমে সমাধান তৈরিতে মনোনিবেশ করেন।', // Your Bio in Bengali
        'developer_project_attribution_text': 'এই প্রগতিজিপিটি প্রকল্পটি সামাজিক কল্যাণে নিয়ম-ভিত্তিক স্কিম খোঁজার প্রদর্শনের জন্য তৈরি করা হয়েছিল।',
        'developer_portfolio_button_text': 'পোর্টফোলিও দেখুন',
        'developer_connect_prompt_text': 'আমার সাথে সংযুক্ত হন:',
        'footer_copyright': `© ${new Date().getFullYear()} প্রগতিজিপিটি। সর্বস্বত্ব সংরক্ষিত।`,
        'social_facebook': 'ফেসবুক',
        'social_twitter': 'টুইটার',
        'social_linkedin': 'লিঙ্কডইন',
        'footer_disclaimer': "অস্বীকৃতি: প্রগতিজিপিটি একটি ডেমো প্রকল্প। স্কিমের তথ্য দৃষ্টান্তমূলক এবং সরকারি উৎস থেকে যাচাই করা প্রয়োজন। এটি কোনো সরকারি সংস্থার প্রতিনিধিত্ব করে না।",
        'output_user_profile_title': ':: ব্যবহারকারীর প্রোফাইল ::',
        'output_name_label': 'নাম',
        'output_age_label': 'বয়স',
        'output_gender_label': 'লিঙ্গ',
        'output_occupation_label': 'পেশা',
        'output_schemes_title': ':: যোগ্য সরকারি স্কিম ::',
        'output_scheme_name_label': 'স্কিমের নাম',
        'output_description_label': 'বিবরণ',
        'output_more_schemes_1': '... এবং ',
        'output_more_schemes_2_singular': ' অন্য সম্ভাব্য স্কিম।',
        'output_more_schemes_2_plural': ' অন্যান্য সম্ভাব্য স্কিম।',
        'output_more_schemes_3': ' আরও তথ্যের জন্য অনুগ্রহ করে সরকারি পোর্টালে যান।',
    },
    'ta': { // Tamil - YOU NEED TO FILL ALL KEYS
        'page_title': 'பிரகதிஜிபிடி - உங்கள் அரசாங்க திட்டங்களைக் கண்டறியவும்',
        'app_name': 'பிரகதிஜிபிடி',
        'logo_alt_text': 'பிரகதிஜிபிடி சின்னம்',
        'nav_home': 'முகப்பு',
        'nav_about': 'எங்களை பற்றி',
        'nav_how_it_works': 'இது எப்படி வேலை செய்கிறது?',
        'nav_scheme_finder': 'திட்டத்தைக் கண்டறியவும்',
        'nav_testimonials': 'பாராட்டுரைகள்',
        'hero_title': 'இந்தியாவின் நலன்புரி எதிர்காலத்தை நோக்கிய ஒரு படி',
        'hero_subtitle': 'பிரகதிஜிபிடி மூலம் உங்கள் தகுதியான அரசாங்க திட்டங்களை எளிதாகக் கண்டறியவும். உங்கள் தேவைகளுக்கு ஏற்ப, சரியான தகவல், சரியான நேரத்தில்.',
        'hero_cta_button': 'இப்போதே திட்டங்களைக் கண்டறியவும்',
        'stats_title': 'சில முக்கிய புள்ளிவிவரங்கள் (எடுத்துக்காட்டு)',
        'stats_users_helped': 'உதவப்பட்ட பயனர்கள்',
        'stats_schemes_listed': 'பட்டியலிடப்பட்ட திட்டங்கள் (உள்ளூர் தரவுத்தளம்)',
        'stats_accuracy_rate': 'மதிப்பிடப்பட்ட துல்லிய விகிதம்',
        'about_title': 'எங்களை பற்றி',
        'about_p1': 'பிரகதிஜிபிடி என்பது இந்திய குடிமக்களுக்குக் கிடைக்கும் பல்வேறு அரசாங்க நலத்திட்டங்கள் குறித்த தகவல்களை வழங்கும் ஒரு புதுமையான முயற்சியாகும். உங்கள் சுயவிவரத்தின் அடிப்படையில் மிகவும் பொருத்தமான திட்டங்களைக் கண்டறிய நாங்கள் உங்களுக்கு உதவுகிறோம். தகவல்களை அணுகுவதை எளிதாக்குவதும், தகுதியுள்ள ஒவ்வொரு குடிமகனும் அரசாங்கப் பலன்களைப் பெறுவதை உறுதி செய்வதும் எங்கள் குறிக்கோள்.',
        'about_card1_title': 'துல்லியமான பொருத்தம்',
        'about_card1_desc': 'உங்கள் தனிப்பட்ட தகவல்களின் அடிப்படையில் திட்டங்களின் துல்லியமான பொருத்தம்.',
        'about_card2_title': 'எளிய அணுகல்',
        'about_card2_desc': 'சிக்கலான அரசாங்க வலைத்தளங்களுக்குப் பதிலாக ஒரு எளிய மற்றும் அணுகக்கூடிய தளம்.',
        'about_card3_title': 'விதி அடிப்படையிலான தகவல்',
        'about_card3_desc': 'வரையறுக்கப்பட்ட விதிகளின் அடிப்படையில் திட்டப் பரிந்துரைகள் (சரிபார்ப்பு தேவை).',
        'howitworks_title': 'இது எப்படி வேலை செய்கிறது?',
        'howitworks_step1_title': 'தகவலை உள்ளிடவும்',
        'howitworks_step1_desc': 'உங்கள் பெயர், வயது, பாலினம் மற்றும் தொழில் போன்ற எளிய விவரங்களை வழங்கவும்.',
        'howitworks_step2_title': 'உள்ளூர் பகுப்பாய்வு',
        'howitworks_step2_desc': 'எங்கள் அமைப்பு உங்கள் சுயவிவரத்தை பகுப்பாய்வு செய்து எங்கள் தரவுத்தளத்திலிருந்து தகுதியான திட்டங்களைக் கண்டறியும்.',
        'howitworks_step3_title': 'முடிவுகளைக் காண்க',
        'howitworks_step3_desc': 'உங்களுக்கான மிகவும் பொருத்தமான அரசாங்க திட்டங்களின் பட்டியலைப் பெறுங்கள்.',
        'scheme_finder_title': 'உங்கள் தகுதியான அரசாங்க திட்டங்களைக் கண்டறியவும்',
        'form_name_label': 'உங்கள் பெயர்:',
        'form_name_placeholder': 'எ.கா. ரமேஷ் குமார்',
        'form_age_label': 'வயது (வருடங்களில்):',
        'form_age_placeholder': 'எ.கா. 35',
        'form_gender_label': 'பாலினம்:',
        'form_gender_select': 'தேர்ந்தெடு...',
        'form_gender_male': 'ஆண்',
        'form_gender_female': 'பெண்',
        'form_gender_other': 'மற்றவை',
        'form_occupation_label': 'தொழில்:',
        'form_occupation_select': 'தேர்ந்தெடு...',
        'form_occupation_student': 'மாணவர்',
        'form_occupation_farmer': 'விவசாயி',
        'form_occupation_worker': 'தொழிலாளி',
        'form_occupation_homemaker': 'இல்லத்தரசி',
        'form_occupation_entrepreneur': 'தொழில்முனைவோர்',
        'form_occupation_other_option': 'மற்றவை',
        'form_submit_button': 'எனது திட்டங்களைப் பெறுங்கள்',
        'form_submit_loading': '<i class="fas fa-spinner fa-spin"></i> ஏற்றுகிறது...',
        'no_schemes_found': 'உங்கள் தகுதிகளுடன் பொருந்தக்கூடிய பொருத்தமான திட்டங்கள் எதுவும் கிடைக்கவில்லை. மேலும் தகவலுக்கு அதிகாரப்பூர்வ அரசாங்க வலைத்தளங்களைப் பார்வையிடவும்.',
        'testimonials_title': 'பயனாளிகளின் கதைகள் (எடுத்துக்காட்டு)',
        'testimonial1_text': '"பிரகதிஜிபிடி எனக்கு பிஎம்-கிசான் திட்டம் பற்றி அறிய உதவியது, இது எனக்கு மிகவும் பயனளித்தது. நன்றி!"',
        'testimonial1_author': '- ஒரு விவசாயி, ராஜஸ்தான்',
        'testimonial2_text': '"ஒரு சிறு தொழில்முனைவோராக, நான் இங்கே முத்ரா திட்டம் பற்றிய தகவலைக் கண்டேன். இது மிகவும் உதவியாக இருந்தது."',
        'testimonial2_author': '- ஒரு தொழில்முனைவோர், மகாராஷ்டிரா',
        'testimonial3_text': '"எனது மகளுக்கான சுகன்யா சம்ரிதி யோஜனா பற்றிய தகவலை நான் கண்டேன். இந்த தளம் மிகவும் பயனுள்ளதாக இருக்கிறது."',
        'testimonial3_author': '- ஒரு பெற்றோர், உத்தரபிரதேசம்',
        'developer_title': 'டெவலப்பரை சந்திக்கவும்',
        'developer_avatar_alt_text': 'டெவலப்பர் அவதார்',
        'developer_name_text': 'அபிஷேக் சிங் ஷெகாவத்', // Your Name in Tamil
        'developer_bio_text': 'தொழில்நுட்பத்தின் மூலம் தீர்வுகளை உருவாக்குவதில் கவனம் செலுத்தும் ஒரு ஆர்வமுள்ள வலை உருவாக்குநர்.', // Your Bio in Tamil
        'developer_project_attribution_text': 'இந்த பிரகதிஜிபிடி திட்டம் சமூக நலனுக்காக விதி அடிப்படையிலான திட்டக் கண்டுபிடிப்பை வெளிப்படுத்த உருவாக்கப்பட்டது.',
        'developer_portfolio_button_text': 'போர்ட்ஃபோலியோவைப் பார்வையிடவும்',
        'developer_connect_prompt_text': 'என்னுடன் இணையுங்கள்:',
        'footer_copyright': `© ${new Date().getFullYear()} பிரகதிஜிபிடி. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.`,
        'social_facebook': 'முகநூல்',
        'social_twitter': 'ட்விட்டர்',
        'social_linkedin': 'லிங்க்ட்இன்',
        'footer_disclaimer': "பொறுப்புத்துறப்பு: பிரகதிஜிபிடி ஒரு டெமோ திட்டமாகும். திட்டத் தகவல் விளக்க நோக்கங்களுக்காக மட்டுமே உள்ளது மற்றும் அதிகாரப்பூர்வ ஆதாரங்களில் இருந்து சரிபார்க்கப்பட வேண்டும். இது எந்தவொரு அரசாங்க அமைப்பையும் பிரதிநிதித்துவப்படுத்தவில்லை.",
        'output_user_profile_title': ':: பயனர் சுயவிவரம் ::',
        'output_name_label': 'பெயர்',
        'output_age_label': 'வயது',
        'output_gender_label': 'பாலினம்',
        'output_occupation_label': 'தொழில்',
        'output_schemes_title': ':: தகுதியான அரசாங்க திட்டங்கள் ::',
        'output_scheme_name_label': 'திட்டத்தின் பெயர்',
        'output_description_label': 'விளக்கம்',
        'output_more_schemes_1': '... மற்றும் ',
        'output_more_schemes_2_singular': ' மற்ற சாத்தியமான திட்டம்.',
        'output_more_schemes_2_plural': ' மற்ற சாத்தியமான திட்டங்கள்.',
        'output_more_schemes_3': ' மேலும் தகவலுக்கு அதிகாரப்பூர்வ அரசாங்க வலைத்தளங்களைப் பார்வையிடவும்.',
    },
     'te': { // Telugu - YOU NEED TO FILL ALL KEYS
        'page_title': 'ప్రగతిజిపిటి - మీ ప్రభుత్వ పథకాలను కనుగొనండి',
        'app_name': 'ప్రగతిజిపిటి',
        'logo_alt_text': 'ప్రగతిజిపిటి లోగో',
        'nav_home': 'హోమ్',
        'nav_about': 'మా గురించి',
        'nav_how_it_works': 'ఇది ఎలా పని చేస్తుంది?',
        'nav_scheme_finder': 'పథకం ఫైండర్',
        'nav_testimonials': 'టెస్టిమోనియల్స్',
        'hero_title': 'భారతదేశ సంక్షేమ భవిష్యత్తు వైపు ఒక అడుగు',
        'hero_subtitle': 'ప్రగతిజిపిటితో మీ అర్హతగల ప్రభుత్వ పథకాలను సులభంగా కనుగొనండి. మీ అవసరాలకు అనుగుణంగా, సరైన సమాచారం, సరైన సమయంలో.',
        'hero_cta_button': 'ఇప్పుడే పథకాలను కనుగొనండి',
        'stats_title': 'కొన్ని ముఖ్య గణాంకాలు (ఉదాహరణ)',
        'stats_users_helped': 'సహాయపడిన వినియోగదారులు',
        'stats_schemes_listed': ' జాబితా చేయబడిన పథకాలు (స్థానిక డేటాబేస్)',
        'stats_accuracy_rate': 'అంచనా వేసిన ఖచ్చితత్వ రేటు',
        'about_title': 'మా గురించి',
        'about_p1': 'ప్రగతిజిపిటి భారతీయ పౌరులకు అందుబాటులో ఉన్న వివిధ ప్రభుత్వ సంక్షేమ పథకాల గురించి సమాచారం అందించే లక్ష్యంతో ఒక వినూత్న కార్యక్రమం. మేము మీ ప్రొఫైల్ ఆధారంగా అత్యంత అనుకూలమైన పథకాలను కనుగొనడంలో మీకు సహాయం చేస్తాము. సమాచార ప్రాప్యతను సులభతరం చేయడం మరియు ప్రతి అర్హతగల పౌరుడు ప్రభుత్వ ప్రయోజనాలను పొందగలరని నిర్ధారించడం మా లక్ష్యం.',
        'about_card1_title': 'ఖచ్చితమైన సరిపోలిక',
        'about_card1_desc': 'మీ వ్యక్తిగత సమాచారం ఆధారంగా పథకాల ఖచ్చితమైన సరిపోలిక.',
        'about_card2_title': 'సులభమైన యాక్సెస్',
        'about_card2_desc': 'సంక్లిష్టమైన ప్రభుత్వ పోర్టల్‌లకు బదులుగా సరళమైన మరియు ప్రాప్యత ప్లాట్‌ఫారమ్.',
        'about_card3_title': 'నియమ-ఆధారిత సమాచారం',
        'about_card3_desc': 'నిర్వచించిన నిబంధనల ఆధారంగా పథక సూచనలు (ధృవీకరణ అవసరం).',
        'howitworks_title': 'ఇది ఎలా పని చేస్తుంది?',
        'howitworks_step1_title': 'సమాచారం నమోదు చేయండి',
        'howitworks_step1_desc': 'మీ పేరు, వయస్సు, లింగం మరియు వృత్తి వంటి సాధారణ వివరాలను అందించండి.',
        'howitworks_step2_title': 'స్థానిక విశ్లేషణ',
        'howitworks_step2_desc': 'మా సిస్టమ్ మీ ప్రొఫైల్‌ను విశ్లేషించి మా డేటాబేస్ నుండి అర్హతగల పథకాలను కనుగొంటుంది.',
        'howitworks_step3_title': 'ఫలితాలను వీక్షించండి',
        'howitworks_step3_desc': 'మీకు అత్యంత అనుకూలమైన ప్రభుత్వ పథకాల జాబితాను పొందండి.',
        'scheme_finder_title': 'మీ అర్హతగల ప్రభుత్వ పథకాలను కనుగొనండి',
        'form_name_label': 'మీ పేరు:',
        'form_name_placeholder': 'ఉదా. రమేష్ కుమార్',
        'form_age_label': 'వయస్సు (సంవత్సరాలలో):',
        'form_age_placeholder': 'ఉదా. 35',
        'form_gender_label': 'లింగం:',
        'form_gender_select': 'ఎంచుకోండి...',
        'form_gender_male': 'పురుషుడు',
        'form_gender_female': 'స్త్రీ',
        'form_gender_other': 'ఇతర',
        'form_occupation_label': 'వృత్తి:',
        'form_occupation_select': 'ఎంచుకోండి...',
        'form_occupation_student': 'విద్యార్థి',
        'form_occupation_farmer': 'రైతు',
        'form_occupation_worker': 'కార్మికుడు',
        'form_occupation_homemaker': 'గృహిణి',
        'form_occupation_entrepreneur': 'పారిశ్రామికవేత్త',
        'form_occupation_other_option': 'ఇతర',
        'form_submit_button': 'నా పథకాలను పొందండి',
        'form_submit_loading': '<i class="fas fa-spinner fa-spin"></i> లోడ్ అవుతోంది...',
        'no_schemes_found': 'మీ ప్రమాణాలకు సరిపోయే উপযুক্ত పథకాలు కనుగొనబడలేదు. మరింత సమాచారం కోసం దయచేసి అధికారిక ప్రభుత్వ పోర్టల్‌లను సందర్శించండి.',
        'testimonials_title': 'లబ్ధిదారుల కథనాలు (ఉదాహరణ)',
        'testimonial1_text': '"ప్రగతిజిపిటి నాకు PM-KISAN పథకం గురించి తెలుసుకోవడానికి సహాయపడింది, ఇది నాకు చాలా ప్రయోజనం చేకూర్చింది. ధన్యవాదాలు!"',
        'testimonial1_author': '- ఒక రైతు, రాజస్థాన్',
        'testimonial2_text': '"ఒక చిన్న పారిశ్రామికవేత్తగా, నేను ఇక్కడ ముద్రా పథకం గురించి సమాచారం కనుగొన్నాను. ఇది చాలా సహాయకరంగా ఉంది."',
        'testimonial2_author': '- ఒక పారిశ్రామికవేత్త, మహారాష్ట్ర',
        'testimonial3_text': '"నా కుమార్తె కోసం సుకన్య సమృద్ధి యోజన గురించి సమాచారం కనుగొన్నాను. ఈ ప్లాట్‌ఫారమ్ చాలా ఉపయోగకరంగా ఉంది."',
        'testimonial3_author': '- ఒక తల్లిదండ్రులు, ఉత్తర ప్రదేశ్',
        'developer_title': 'డెవలపర్‌ను కలవండి',
        'developer_avatar_alt_text': 'డెవలపర్ అవతార్',
        'developer_name_text': 'అభిషేక్ సింగ్ షేఖావత్', // Your Name in Telugu
        'developer_bio_text': 'సాంకేతికత ద్వారా పరిష్కారాలను నిర్మించడంపై దృష్టి సారించిన ఉత్సాహభరితమైన వెబ్ డెవలపర్.', // Your Bio in Telugu
        'developer_project_attribution_text': 'ఈ ప్రగతిజిపిటి ప్రాజెక్ట్ సామాజిక ప్రయోజనం కోసం నియమ-ఆధారిత పథకం కనుగొనడాన్ని ప్రదర్శించడానికి సృష్టించబడింది.',
        'developer_portfolio_button_text': 'పోర్ట్‌ఫోలియోను వీక్షించండి',
        'developer_connect_prompt_text': 'నాతో కనెక్ట్ అవ్వండి:',
        'footer_copyright': `© ${new Date().getFullYear()} ప్రగతిజిపిటి. అన్ని హక్కులు ప్రత్యేకించబడ్డాయి.`,
        'social_facebook': 'ఫేస్‌బుక్',
        'social_twitter': 'ట్విట్టర్',
        'social_linkedin': 'లింక్డ్‌ఇన్',
        'footer_disclaimer': 'నిరాకరణ: ప్రగతిజిపిటి ఒక డెమో ప్రాజెక్ట్. పథకం సమాచారం ఉదాహరణ ప్రయోజనాల కోసం మాత్రమే మరియు అధికారిక మూలాల నుండి ధృవీకరించబడాలి. ఇది ఏ ప్రభుత్వ సంస్థను సూచించదు.',
        'output_user_profile_title': ':: వినియోగదారు ప్రొఫైల్ ::',
        'output_name_label': 'పేరు',
        'output_age_label': 'వయస్సు',
        'output_gender_label': 'లింగం',
        'output_occupation_label': 'వృత్తి',
        'output_schemes_title': ':: అర్హతగల ప్రభుత్వ పథకాలు ::',
        'output_scheme_name_label': 'పథకం పేరు',
        'output_description_label': 'వివరణ',
        'output_more_schemes_1': '... మరియు ',
        'output_more_schemes_2_singular': ' ఇతర సంభావ్య పథకం.',
        'output_more_schemes_2_plural': ' ఇతర సంభావ్య పథకాలు.',
        'output_more_schemes_3': ' మరింత సమాచారం కోసం దయచేసి అధికారిక ప్రభుత్వ పోర్టల్‌లను సందర్శించండి.',
    },
    'mr': { // Marathi - YOU NEED TO FILL ALL KEYS
        'page_title': 'प्रगतिजीपीटी - तुमच्या सरकारी योजना शोधा',
        'app_name': 'प्रगतिजीपीटी',
        'logo_alt_text': 'प्रगतिजीपीटी लोगो',
        'nav_home': 'मुख्यपृष्ठ',
        'nav_about': 'आमच्याबद्दल',
        'nav_how_it_works': 'हे कसे कार्य करते?',
        'nav_scheme_finder': 'योजना शोधक',
        'nav_testimonials': 'प्रशंसापत्रे',
        'hero_title': 'भारताच्या कल्याणकारी भविष्याकडे एक पाऊल',
        'hero_subtitle': 'प्रगतिजीपीटीसह तुमच्या पात्र सरकारी योजना सहजपणे शोधा. तुमच्या गरजेनुसार, योग्य माहिती, योग्य वेळी.',
        'hero_cta_button': 'आता योजना शोधा',
        'stats_title': 'काही महत्त्वाची आकडेवारी (उदाहरण)',
        'stats_users_helped': 'मदत केलेले वापरकर्ते',
        'stats_schemes_listed': ' सूचीबद्ध योजना (स्थानिक डेटाबेस)',
        'stats_accuracy_rate': 'अंदाजित अचूकता दर',
        'about_title': 'आमच्याबद्दल',
        'about_p1': 'प्रगतिजीपीटी हा एक नाविन्यपूर्ण उपक्रम आहे ज्याचा उद्देश भारतीय नागरिकांना त्यांच्यासाठी उपलब्ध असलेल्या विविध सरकारी कल्याणकारी योजनांबद्दल माहिती प्रदान करणे आहे. आम्ही तुमच्या प्रोफाइलवर आधारित सर्वात योग्य योजना शोधण्यात तुम्हाला मदत करतो. माहितीचा Zugang सुलभ करणे आणि प्रत्येक पात्र नागरिकाला सरकारी लाभांचा उपयोग करता यावा हे सुनिश्चित करणे हे आमचे ध्येय आहे.',
        'about_card1_title': 'अचूक जुळणारे',
        'about_card1_desc': 'तुमच्या वैयक्तिक माहितीवर आधारित योजनांचे अचूक जुळणारे.',
        'about_card2_title': 'सोपा प्रवेश',
        'about_card2_desc': 'गुंतागुंतीच्या सरकारी पोर्टल्सऐवजी एक सोपे आणि सुलभ प्लॅटफॉर्म.',
        'about_card3_title': 'नियम-आधारित माहिती',
        'about_card3_desc': 'परिभाषित नियमांवर आधारित योजना सूचना (पडताळणी आवश्यक).',
        'howitworks_title': 'हे कसे कार्य करते?',
        'howitworks_step1_title': 'माहिती प्रविष्ट करा',
        'howitworks_step1_desc': 'तुमचे नाव, वय, लिंग आणि व्यवसाय यासारखे सोपे तपशील प्रदान करा.',
        'howitworks_step2_title': 'स्थानिक विश्लेषण',
        'howitworks_step2_desc': 'आमची प्रणाली तुमच्या प्रोफाइलचे विश्लेषण करेल आणि आमच्या डेटाबेसमधून पात्र योजना शोधेल.',
        'howitworks_step3_title': 'निकाल पहा',
        'howitworks_step3_desc': 'तुमच्यासाठी सर्वात योग्य सरकारी योजनांची सूची मिळवा.',
        'scheme_finder_title': 'तुमच्या पात्र सरकारी योजना शोधा',
        'form_name_label': 'तुमचे नाव:',
        'form_name_placeholder': 'उदा. रमेश कुमार',
        'form_age_label': 'वय (वर्षांमध्ये):',
        'form_age_placeholder': 'उदा. ३५',
        'form_gender_label': 'लिंग:',
        'form_gender_select': 'निवडा...',
        'form_gender_male': 'पुरुष',
        'form_gender_female': 'महिला',
        'form_gender_other': 'इतर',
        'form_occupation_label': 'व्यवसाय:',
        'form_occupation_select': 'निवडा...',
        'form_occupation_student': 'विद्यार्थी',
        'form_occupation_farmer': 'शेतकरी',
        'form_occupation_worker': 'कामगार',
        'form_occupation_homemaker': 'गृहिणी',
        'form_occupation_entrepreneur': 'उद्योजक',
        'form_occupation_other_option': 'इतर',
        'form_submit_button': 'माझ्या योजना मिळवा',
        'form_submit_loading': '<i class="fas fa-spinner fa-spin"></i> लोड होत आहे...',
        'no_schemes_found': 'तुमच्या निकषांशी जुळणाऱ्या कोणत्याही योग्य योजना आढळल्या नाहीत. अधिक माहितीसाठी कृपया सरकारी पोर्टल्सना भेट द्या.',
        'testimonials_title': 'लाभार्थ्यांच्या कथा (उदाहरण)',
        'testimonial1_text': '"प्रगतिजीपीटीने मला PM-KISAN योजनेबद्दल जाणून घेण्यास मदत केली, ज्यामुळे मला खूप फायदा झाला. धन्यवाद!"',
        'testimonial1_author': '- एक शेतकरी, राजस्थान',
        'testimonial2_text': '"एक छोटा उद्योजक म्हणून, मला येथे मुद्रा योजनेबद्दल माहिती मिळाली. ती खूप उपयुक्त होती."',
        'testimonial2_author': '- एक उद्योजक, महाराष्ट्र',
        'testimonial3_text': '"मला माझ्या मुलीसाठी सुकन्या समृद्धी योजनेची माहिती मिळाली. हे व्यासपीठ खूप उपयुक्त आहे."',
        'testimonial3_author': '- एक पालक, उत्तर प्रदेश',
        'developer_title': 'विकसकाला भेटा',
        'developer_avatar_alt_text': 'विकसकाचा अवतार',
        'developer_name_text': 'अभिषेक सिंग शेखावत', // Your Name in Marathi
        'developer_bio_text': 'तंत्रज्ञानाच्या माध्यमातून उपाय तयार करण्यावर लक्ष केंद्रित करणारा एक उत्साही वेब डेव्हलपर.', // Your Bio in Marathi
        'developer_project_attribution_text': 'हा प्रगतिजीपीटी प्रकल्प सामाजिक कल्याणासाठी नियम-आधारित योजना शोधणे प्रदर्शित करण्यासाठी तयार केला गेला.',
        'developer_portfolio_button_text': 'पोर्टफोलिओ पहा',
        'developer_connect_prompt_text': 'माझ्याशी कनेक्ट व्हा:',
        'footer_copyright': `© ${new Date().getFullYear()} प्रगतिजीपीटी. सर्व हक्क राखीव.`,
        'social_facebook': 'फेसबुक',
        'social_twitter': 'ट्विटर',
        'social_linkedin': 'लिंक्डइन',
        'footer_disclaimer': 'अस्वीकरण: प्रगतिजीपीटी हा एक डेमो प्रकल्प आहे. योजना माहिती केवळ उदाहरणासाठी आहे आणि अधिकृत स्रोतांकडून सत्यापित करणे आवश्यक आहे. हे कोणत्याही सरकारी संस्थेचे प्रतिनिधित्व करत नाही.',
        'output_user_profile_title': ':: वापरकर्ता प्रोफाइल ::',
        'output_name_label': 'नाव',
        'output_age_label': 'वय',
        'output_gender_label': 'लिंग',
        'output_occupation_label': 'व्यवसाय',
        'output_schemes_title': ':: पात्र सरकारी योजना ::',
        'output_scheme_name_label': 'योजनेचे नाव',
        'output_description_label': 'वर्णन',
        'output_more_schemes_1': '... आणि ',
        'output_more_schemes_2_singular': ' अन्य संभाव्य योजना.',
        'output_more_schemes_2_plural': ' अन्य संभाव्य योजना.',
        'output_more_schemes_3': ' अधिक माहितीसाठी कृपया सरकारी पोर्टल्सना भेट द्या.',
    },
    'gu': {  // Gujarati - YOU NEED TO FILL ALL KEYS
        'page_title': 'પ્રગતિજીપીટી - તમારી સરકારી યોજનાઓ શોધો',
        'app_name': 'પ્રગતિજીપીટી',
        'logo_alt_text': 'પ્રગતિજીપીટી લોગો',
        'nav_home': 'મુખ્ય પૃષ્ઠ',
        'nav_about': 'અમારા વિશે',
        'nav_how_it_works': 'તે કેવી રીતે કામ કરે છે?',
        'nav_scheme_finder': 'યોજના શોધો',
        'nav_testimonials': 'પ્રશંસાપત્રો',
        'hero_title': 'ભારતના કલ્યાણકારી ભવિષ્ય તરફ એક પગલું',
        'hero_subtitle': 'પ્રગતિજીપીટી સાથે તમારી પાત્ર સરકારી યોજનાઓ સરળતાથી શોધો. તમારી જરૂરિયાતોને અનુરૂપ, સાચી માહિતી, સાચા સમયે.',
        'hero_cta_button': 'હમણાં યોજનાઓ શોધો',
        'stats_title': 'કેટલાક મહત્વપૂર્ણ આંકડા (ઉદાહરણ)',
        'stats_users_helped': 'સંતોષિત વપરાશકર્તાઓ',
        'stats_schemes_listed': 'સૂચિબદ્ધ યોજનાઓ (સ્થાનિક ડેટાબેઝ)',
        'stats_accuracy_rate': 'અંદાજિત ચોકસાઈ દર',
        'about_title': 'અમારા વિશે',
        'about_p1': 'પ્રગતિજીપીટી એક નવીન પહેલ છે જેનો ઉદ્દેશ ભારતીય નાગરિકોને તેમના માટે ઉપલબ્ધ વિવિધ સરકારી કલ્યાણકારી યોજનાઓ વિશે માહિતી પ્રદાન કરવાનો છે. અમે તમારી પ્રોફાઇલના આધારે સૌથી યોગ્ય યોજનાઓ શોધવામાં તમારી સહાય કરીએ છીએ. અમારો લક્ષ્ય માહિતી સુધી પહોંચને સરળ બનાવવાનો અને તે સુનિશ્ચિત કરવાનો છે કે દરેક પાત્ર નાગરિક સરકારી લાભોનો ઉપયોગ કરી શકે.',
        'about_card1_title': 'ચોક્કસ મેચિંગ',
        'about_card1_desc': 'તમારી વ્યક્તિગત માહિતીના આધારે યોજનાઓનું ચોક્કસ મેચિંગ.',
        'about_card2_title': 'સરળ પહોંચ',
        'about_card2_desc': 'જટિલ સરકારી પોર્ટલને બદલે એક સરળ અને સુલભ પ્લેટફોર્મ.',
        'about_card3_title': 'નિયમ-આધારિત માહિતી',
        'about_card3_desc': 'વ્યાખ્યાયિત નિયમો પર આધારિત યોજના સૂચનો (ચકાસણી જરૂરી).',
        'howitworks_step1_title': 'માહિતી દાખલ કરો',
        'howitworks_step1_desc': 'તમારું નામ, ઉંમર, લિંગ અને વ્યવસાય જેવી સરળ વિગતો પ્રદાન કરો.',
        'howitworks_step2_title': 'સ્થાનિક વિશ્લેષણ',
        'howitworks_step2_desc': 'અમારી સિસ્ટમ તમારી પ્રોફાઇલનું વિશ્લેષણ કરશે અને અમારા ડેટાબેઝમાંથી પાત્ર યોજનાઓ શોધશે.',
        'howitworks_step3_title': 'પરિણામ જુઓ',
        'howitworks_step3_desc': 'તમારા માટે સૌથી યોગ્ય સરકારી યોજનાઓની સૂચિ મેળવો.',
        'scheme_finder_title': 'તમારી પાત્ર સરકારી યોજનાઓ શોધો',
        'form_name_label': 'તમારું નામ:',
        'form_name_placeholder': 'ઉદા. રમેશ કુમાર',
        'form_age_label': 'ઉંમર (વર્ષોમાં):',
        'form_age_placeholder': 'ઉદા. 35',
        'form_gender_label': 'લિંગ:',
        'form_gender_select': 'પસંદ કરો...',
        'form_gender_male': 'પુરુષ',
        'form_gender_female': 'સ્ત્રી',
        'form_gender_other': 'અન્ય',
        'form_occupation_label': 'વ્યવસાય:',
        'form_occupation_select': 'પસંદ કરો...',
        'form_occupation_student': 'વિદ્યાર્થી',
        'form_occupation_farmer': 'ખેડૂત',
        'form_occupation_worker': 'કામદાર',
        'form_occupation_homemaker': 'ગૃહિણી',
        'form_occupation_entrepreneur': 'ઉદ્યોગસાહસિક',
        'form_occupation_other_option': 'અન્ય',
        'form_submit_button': 'મારી યોજનાઓ મેળવો',
        'form_submit_loading': '<i class="fas fa-spinner fa-spin"></i> લોડ થઈ રહ્યું છે...',
        'no_schemes_found': 'તમારા માપદંડો સાથે મેળ ખાતી કોઈ યોગ્ય યોજનાઓ મળી નથી. વધુ માહિતી માટે કૃપા કરીને સત્તાવાર સરકારી પોર્ટલની મુલાકાત લો.',
        'testimonials_title': 'લાભાર્થીઓની વાર્તાઓ (ઉદાહરણ)',
        'testimonial1_text': '"પ્રગતિજીપીટીએ મને PM-KISAN યોજના વિશે જાણવામાં મદદ કરી, જેનાથી મને ઘણો ફાયદો થયો. આભાર!"',
        'testimonial1_author': '- એક ખેડૂત, રાજસ્થાન',
        'testimonial2_text': '"એક નાના ઉદ્યોગસાહસિક તરીકે, મને અહીં મુદ્રા યોજના વિશે માહિતી મળી. તે ખૂબ મદદરૂપ હતી."',
        'testimonial2_author': '- એક ઉદ્યોગસાહસિક, મહારાષ્ટ્ર',
        'testimonial3_text': '"મને મારી દીકરી માટે સુકન્યા સમૃદ્ધિ યોજનાની માહિતી મળી. આ પ્લેટફોર્મ ખૂબ ઉપયોગી છે."',
        'testimonial3_author': '- એક વાલી, ઉત્તર પ્રદેશ',
        'developer_title': 'વિકાસકર્તાને મળો',
        'developer_avatar_alt_text': 'વિકાસકર્તાનો અવતાર',
        'developer_name_text': 'અભિષેક સિંહ શેખાવત', // Your Name in Gujarati
        'developer_bio_text': 'એક ઉત્સાહી વેબ ડેવલપર જે ટેકનોલોજી દ્વારા ઉકેલો બનાવવા પર ધ્યાન કેન્દ્રિત કરે છે.', // Your Bio in Gujarati
        'developer_project_attribution_text': 'આ પ્રગતિજીપીટી પ્રોજેક્ટ સામાજિક સારા માટે નિયમ-આધારિત યોજના શોધ દર્શાવવા માટે બનાવવામાં આવ્યો હતો.',
        'developer_portfolio_button_text': 'પોર્ટફોલિયો જુઓ',
        'developer_connect_prompt_text': 'મારી સાથે જોડાઓ:',
        'footer_copyright': `© ${new Date().getFullYear()} પ્રગતિજીપીટી. સર્વાધિકાર સુરક્ષિત.`,
        'social_facebook': 'ફેસબુક',
        'social_twitter': 'ટ્વિટર',
        'social_linkedin': 'લિંક્ડઇન',
        'footer_disclaimer': "અસ્વીકૃતિ: પ્રગતિજીપીટી એક ડેમો પ્રોજેક્ટ છે. યોજના માહિતી દૃષ્ટાંતરૂપ છે અને સત્તાવાર સ્ત્રોતોમાંથી ચકાસણીની જરૂર છે. તે કોઈપણ સરકારી સંસ્થાનું પ્રતિનિધિત્વ કરતું નથી.",
        'output_user_profile_title': ':: વપરાશકર્તા પ્રોફાઇલ ::',
        'output_name_label': 'નામ',
        'output_age_label': 'ઉંમર',
        'output_gender_label': 'લિંગ',
        'output_occupation_label': 'વ્યવસાય',
        'output_schemes_title': ':: પાત્ર સરકારી યોજનાઓ ::',
        'output_scheme_name_label': 'યોજનાનું નામ',
        'output_description_label': 'વર્ણન',
        'output_more_schemes_1': '... અને ',
        'output_more_schemes_2_singular': ' અન્ય સંભવિત યોજના.',
        'output_more_schemes_2_plural': ' અન્ય સંભવિત યોજનાઓ.',
        'output_more_schemes_3': ' વધુ માહિતી માટે કૃપા કરીને સત્તાવાર સરકારી પોર્ટલની મુલાકાત લો.',
    },
    'kn': { // Kannada - YOU NEED TO FILL ALL KEYS
        'page_title': 'ಪ್ರಗತಿಜಿಪಿಟಿ - ನಿಮ್ಮ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ',
        'app_name': 'ಪ್ರಗತಿಜಿಪಿಟಿ',
        'logo_alt_text': 'ಪ್ರಗತಿಜಿಪಿಟಿ ಲಾಂಛನ',
        'nav_home': 'ಮುಖಪುಟ',
        'nav_about': 'ನಮ್ಮ ಬಗ್ಗೆ',
        'nav_how_it_works': 'ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ?',
        'nav_scheme_finder': 'ಯೋಜನೆ ಹುಡುಕು',
        'nav_testimonials': 'ಪ್ರಶಂಸಾಪತ್ರಗಳು',
        'hero_title': 'ಭಾರತದ ಕಲ್ಯಾಣ ಭವಿಷ್ಯದತ್ತ ಒಂದು ಹೆಜ್ಜೆ',
        'hero_subtitle': 'ಪ್ರಗತಿಜಿಪಿಟಿಯೊಂದಿಗೆ ನಿಮ್ಮ ಅರ್ಹ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳನ್ನು ಸುಲಭವಾಗಿ ಹುಡುಕಿ. ನಿಮ್ಮ ಅಗತ್ಯಗಳಿಗೆ ತಕ್ಕಂತೆ, ಸರಿಯಾದ ಮಾಹಿತಿ, ಸರಿಯಾದ ಸಮಯದಲ್ಲಿ.',
        'hero_cta_button': 'ಈಗ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ',
        'stats_title': 'ಕೆಲವು ಪ್ರಮುಖ ಅಂಕಿಅಂಶಗಳು (ಉದಾಹರಣೆ)',
        'stats_users_helped': 'ಸಹಾಯ ಪಡೆದ ಬಳಕೆದಾರರು',
        'stats_schemes_listed': 'ಪಟ್ಟಿಯಲ್ಲಿರುವ ಯೋಜನೆಗಳು (ಸ್ಥಳೀಯ ಡೇಟಾಬೇಸ್)',
        'stats_accuracy_rate': 'ಅಂದಾಜು ನಿಖರತೆ ದರ',
        'about_title': 'ನಮ್ಮ ಬಗ್ಗೆ',
        'about_p1': 'ಪ್ರಗತಿಜಿಪಿಟಿ ಭಾರತೀಯ ನಾಗರಿಕರಿಗೆ ಲಭ್ಯವಿರುವ ವಿವಿಧ ಸರ್ಕಾರಿ ಕಲ್ಯಾಣ ಯೋಜನೆಗಳ ಬಗ್ಗೆ ಮಾಹಿತಿ ಒದಗಿಸುವ ಒಂದು ನವೀನ ಉಪಕ್ರಮವಾಗಿದೆ. ನಾವು ನಿಮ್ಮ ಪ್ರೊಫೈಲ್ ಆಧರಿಸಿ ಅತ್ಯಂತ ಸೂಕ್ತವಾದ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಲು ನಿಮಗೆ ಸಹಾಯ ಮಾಡುತ್ತೇವೆ. ಮಾಹಿತಿಯ ಪ್ರವೇಶವನ್ನು ಸರಳಗೊಳಿಸುವುದು ಮತ್ತು ಪ್ರತಿಯೊಬ್ಬ ಅರ್ಹ ನಾಗರಿಕನು ಸರ್ಕಾರಿ ಪ್ರಯೋಜನಗಳನ್ನು ಪಡೆಯಬಹುದೆಂದು ಖಚಿತಪಡಿಸುವುದು ನಮ್ಮ ಗುರಿಯಾಗಿದೆ.',
        'about_card1_title': 'ನಿಖರ ಹೊಂದಾಣಿಕೆ',
        'about_card1_desc': 'ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಮಾಹಿತಿಯ ಆಧಾರದ ಮೇಲೆ ಯೋಜನೆಗಳ ನಿಖರ ಹೊಂದಾಣಿಕೆ.',
        'about_card2_title': 'ಸರಳ ಪ್ರವೇಶ',
        'about_card2_desc': 'ಸಂಕೀರ್ಣ ಸರ್ಕಾರಿ ಪೋರ್ಟಲ್‌ಗಳ ಬದಲು ಸರಳ ಮತ್ತು ಪ್ರವೇಶಿಸಬಹುದಾದ ವೇದಿಕೆ.',
        'about_card3_title': 'ನಿಯಮ-ಆಧಾರಿತ ಮಾಹಿತಿ',
        'about_card3_desc': 'ವ್ಯಾಖ್ಯಾನಿಸಲಾದ ನಿಯಮಗಳ ಆಧಾರದ ಮೇಲೆ ಯೋಜನಾ ಸಲಹೆಗಳು (ಪರಿಶೀಲನೆ ಅಗತ್ಯ).',
        'howitworks_step1_title': 'ಮಾಹಿತಿ ನಮೂದಿಸಿ',
        'howitworks_step1_desc': 'ನಿಮ್ಮ ಹೆಸರು, ವಯಸ್ಸು, ಲಿಂಗ ಮತ್ತು ಉದ್ಯೋಗದಂತಹ ಸರಳ ವಿವರಗಳನ್ನು ಒದಗಿಸಿ.',
        'howitworks_step2_title': 'ಸ್ಥಳೀಯ ವಿಶ್ಲೇಷಣೆ',
        'howitworks_step2_desc': 'ನಮ್ಮ ವ್ಯವಸ್ಥೆಯು ನಿಮ್ಮ ಪ್ರೊಫೈಲ್ ಅನ್ನು ವಿಶ್ಲೇಷಿಸುತ್ತದೆ ಮತ್ತು ನಮ್ಮ ಡೇಟಾಬೇಸ್‌ನಿಂದ ಅರ್ಹ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕುತ್ತದೆ.',
        'howitworks_step3_title': 'ಫಲಿತಾಂಶಗಳನ್ನು ವೀಕ್ಷಿಸಿ',
        'howitworks_step3_desc': 'ನಿಮಗಾಗಿ ಅತ್ಯಂತ ಸೂಕ್ತವಾದ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳ ಪಟ್ಟಿಯನ್ನು ಪಡೆಯಿರಿ.',
        'scheme_finder_title': 'ನಿಮ್ಮ ಅರ್ಹ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ',
        'form_name_label': 'ನಿಮ್ಮ ಹೆಸರು:',
        'form_name_placeholder': 'ಉದಾ. ರಮೇಶ್ ಕುಮಾರ್',
        'form_age_label': 'ವಯಸ್ಸು (ವರ್ಷಗಳಲ್ಲಿ):',
        'form_age_placeholder': 'ಉದಾ. 35',
        'form_gender_label': 'ಲಿಂಗ:',
        'form_gender_select': 'ಆಯ್ಕೆಮಾಡಿ...',
        'form_gender_male': 'ಪುರುಷ',
        'form_gender_female': 'ಮಹಿಳೆ',
        'form_gender_other': 'ಇತರೆ',
        'form_occupation_label': 'ಉದ್ಯೋಗ:',
        'form_occupation_select': 'ಆಯ್ಕೆಮಾಡಿ...',
        'form_occupation_student': 'ವಿದ್ಯಾರ್ಥಿ',
        'form_occupation_farmer': 'ಕೃಷಿಕ',
        'form_occupation_worker': 'ಕಾರ್ಮಿಕ',
        'form_occupation_homemaker': 'ಗೃಹಿಣಿ',
        'form_occupation_entrepreneur': 'ಉದ್ಯಮಿ',
        'form_occupation_other_option': 'ಇತರೆ',
        'form_submit_button': 'ನನ್ನ ಯೋಜನೆಗಳನ್ನು ಪಡೆಯಿರಿ',
        'form_submit_loading': '<i class="fas fa-spinner fa-spin"></i> ಲೋಡ್ ಆಗುತ್ತಿದೆ...',
        'no_schemes_found': 'ನಿಮ್ಮ ಮಾನದಂಡಗಳಿಗೆ ಸರಿಹೊಂದುವ ಯಾವುದೇ ಸೂಕ್ತ ಯೋಜನೆಗಳು ಕಂಡುಬಂದಿಲ್ಲ. ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ದಯವಿಟ್ಟು ಅಧಿಕೃತ ಸರ್ಕಾರಿ ಪೋರ್ಟಲ್‌ಗಳನ್ನು ಭೇಟಿ ಮಾಡಿ.',
        'testimonials_title': 'ಫಲಾನುಭವಿಗಳ ಕಥೆಗಳು (ಉದಾಹರಣೆ)',
        'testimonial1_text': '"ಪ್ರಗತಿಜಿಪಿಟಿ ನನಗೆ ಪಿಎಂ-ಕಿಸಾನ್ ಯೋಜನೆಯ ಬಗ್ಗೆ ತಿಳಿದುಕೊಳ್ಳಲು ಸಹಾಯ ಮಾಡಿತು, ಇದರಿಂದ ನನಗೆ ಬಹಳ ಪ್ರಯೋಜನವಾಯಿತು. ಧನ್ಯವಾದಗಳು!"',
        'testimonial1_author': '- ಒಬ್ಬ ರೈತ, ರಾಜಸ್ಥಾನ',
        'testimonial2_text': '"ಒಬ್ಬ ಸಣ್ಣ ಉದ್ಯಮಿಯಾಗಿ, ನಾನು ಇಲ್ಲಿ ಮುದ್ರಾ ಯೋಜನೆಯ ಬಗ್ಗೆ ಮಾಹಿತಿ ಕಂಡುಕೊಂಡೆ. ಇದು ತುಂಬಾ ಸಹಾಯಕವಾಗಿತ್ತು."',
        'testimonial2_author': '- ಒಬ್ಬ ಉದ್ಯಮಿ, ಮಹಾರಾಷ್ಟ್ರ',
        'testimonial3_text': '"ನನ್ನ ಮಗಳಿಗಾಗಿ ಸುಕನ್ಯಾ ಸಮೃದ್ಧಿ ಯೋಜನೆಯ ಬಗ್ಗೆ ಮಾಹಿತಿ ಕಂಡುಕೊಂಡೆ. ಈ ವೇದಿಕೆ ತುಂಬಾ ಉಪಯುಕ್ತವಾಗಿದೆ."',
        'testimonial3_author': '- ಒಬ್ಬ ಪೋಷಕರು, ಉತ್ತರ ಪ್ರದೇಶ',
        'developer_title': 'ಅಭಿವೃದ್ಧಿಗಾರರನ್ನು ಭೇಟಿ ಮಾಡಿ',
        'developer_avatar_alt_text': 'ಅಭಿವೃದ್ಧಿಗಾರರ ಅವತಾರ',
        'developer_name_text': 'ಅಭಿಷೇಕ್ ಸಿಂಗ್ ಶೇಖಾವತ್', // Your Name in Kannada
        'developer_bio_text': 'ತಂತ್ರಜ್ಞಾನದ ಮೂಲಕ ಪರಿಹಾರಗಳನ್ನು ನಿರ್ಮಿಸುವುದರ ಮೇಲೆ ಕೇಂದ್ರೀಕರಿಸಿದ ಉತ್ಸಾಹಿ ವೆಬ್ ಡೆವಲಪರ್.', // Your Bio in Kannada
        'developer_project_attribution_text': 'ಈ ಪ್ರಗತಿಜಿಪಿಟಿ ಯೋಜನೆಯು ಸಾಮಾಜಿಕ ಒಳಿತಿಗಾಗಿ ನಿಯಮ-ಆಧಾರಿತ ಯೋಜನೆ ಹುಡುಕಾಟವನ್ನು ಪ್ರದರ್ಶಿಸಲು ರಚಿಸಲಾಗಿದೆ.',
        'developer_portfolio_button_text': 'ಪೋರ್ಟ್ಫೋಲಿಯೋ ವೀಕ್ಷಿಸಿ',
        'developer_connect_prompt_text': 'ನನ್ನೊಂದಿಗೆ ಸಂಪರ್ಕ ಸಾಧಿಸಿ:',
        'footer_copyright': `© ${new Date().getFullYear()} ಪ್ರಗತಿಜಿಪಿಟಿ. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.`,
        'social_facebook': 'ಫೇಸ್ಬುಕ್',
        'social_twitter': 'ಟ್ವಿಟರ್',
        'social_linkedin': 'ಲಿಂಕ್ಡ್ಇನ್',
        'footer_disclaimer': 'ಹಕ್ಕುತ್ಯಾಗ: ಪ್ರಗತಿಜಿಪಿಟಿ ಒಂದು ಡೆಮೊ ಯೋಜನೆಯಾಗಿದೆ. ಯೋಜನಾ ಮಾಹಿತಿಯು ದೃಷ್ಟಾಂತಿಕವಾಗಿದೆ ಮತ್ತು ಅಧಿಕೃತ ಮೂಲಗಳಿಂದ ಪರಿಶೀಲನೆ ಅಗತ್ಯವಿದೆ. ಇದು ಯಾವುದೇ ಸರ್ಕಾರಿ ಸಂಸ್ಥೆಯನ್ನು ಪ್ರತಿನಿಧಿಸುವುದಿಲ್ಲ.',
        'output_user_profile_title': ':: ಬಳಕೆದಾರರ ಪ್ರೊಫೈಲ್ ::',
        'output_name_label': 'ಹೆಸರು',
        'output_age_label': 'ವಯಸ್ಸು',
        'output_gender_label': 'ಲಿಂಗ',
        'output_occupation_label': 'ಉದ್ಯೋಗ',
        'output_schemes_title': ':: ಅರ್ಹ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು ::',
        'output_scheme_name_label': 'ಯೋಜನೆಯ ಹೆಸರು',
        'output_description_label': 'ವಿವರಣೆ',
        'output_more_schemes_1': '... ಮತ್ತು ',
        'output_more_schemes_2_singular': ' ಇತರ ಸಂಭಾವ್ಯ ಯೋಜನೆ.',
        'output_more_schemes_2_plural': ' ಇತರ ಸಂಭಾವ್ಯ ಯೋಜನೆಗಳು.',
        'output_more_schemes_3': ' ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ದಯವಿಟ್ಟು ಅಧಿಕೃತ ಸರ್ಕಾರಿ ಪೋರ್ಟಲ್‌ಗಳನ್ನು ಭೇಟಿ ಮಾಡಿ.',
    },
    'ml': { // Malayalam - YOU NEED TO FILL ALL KEYS
        'page_title': 'പ്രഗതിജിപിടി - നിങ്ങളുടെ സർക്കാർ പദ്ധതികൾ കണ്ടെത്തുക',
        'app_name': 'പ്രഗതിജിപിടി',
        'logo_alt_text': 'പ്രഗതിജിപിടി ലോഗോ',
        'nav_home': 'ഹോം',
        'nav_about': 'ഞങ്ങളെക്കുറിച്ച്',
        'nav_how_it_works': 'ഇതെങ്ങനെ പ്രവർത്തിക്കുന്നു?',
        'nav_scheme_finder': 'പദ്ധതി കണ്ടെത്തുക',
        'nav_testimonials': 'അഭിപ്രായങ്ങൾ',
        'hero_title': 'ഇന്ത്യയുടെ ക്ഷേമ ഭാവിയിലേക്കുള്ള ഒരു ചുവടുവെപ്പ്',
        'hero_subtitle': 'പ്രഗതിജിപിടി ഉപയോഗിച്ച് നിങ്ങളുടെ യോഗ്യമായ സർക്കാർ പദ്ധതികൾ എളുപ്പത്തിൽ കണ്ടെത്തുക. നിങ്ങളുടെ ആവശ്യങ്ങൾക്കനുസരിച്ച്, ശരിയായ വിവരം, ശരിയായ സമയത്ത്.',
        'hero_cta_button': 'ഇപ്പോൾ പദ്ധതികൾ കണ്ടെത്തുക',
        'stats_title': 'ചില പ്രധാന സ്ഥിതിവിവരക്കണക്കുകൾ (ഉദാഹരണം)',
        'stats_users_helped': 'സഹായിച്ച ഉപയോക്താക്കൾ',
        'stats_schemes_listed': 'ലിസ്റ്റ് ചെയ്ത പദ്ധതികൾ (പ്രാദേശിക ഡാറ്റാബേസ്)',
        'stats_accuracy_rate': 'കണക്കാക്കിയ കൃത്യത നിരക്ക്',
        'about_title': 'ഞങ്ങളെക്കുറിച്ച്',
        'about_p1': 'പ്രഗതിജിപിടി ഇന്ത്യൻ പൗരന്മാർക്ക് ലഭ്യമായ വിവിധ സർക്കാർ ക്ഷേമ പദ്ധതികളെക്കുറിച്ച് വിവരങ്ങൾ നൽകുന്ന ഒരു നൂതന സംരംഭമാണ്. ഞങ്ങൾ നിങ്ങളുടെ പ്രൊഫൈലിനെ അടിസ്ഥാനമാക്കി ഏറ്റവും അനുയോജ്യമായ പദ്ധതികൾ കണ്ടെത്താൻ നിങ്ങളെ സഹായിക്കുന്നു. വിവരങ്ങളിലേക്കുള്ള പ്രവേശനം ലളിതമാക്കുകയും യോഗ്യതയുള്ള ഓരോ പൗരനും സർക്കാർ ആനുകൂല്യങ്ങൾ പ്രയോജനപ്പെടുത്താൻ കഴിയുമെന്ന് ഉറപ്പാക്കുകയും ചെയ്യുക എന്നതാണ് ഞങ്ങളുടെ ലക്ഷ്യം.',
        'about_card1_title': 'കൃത്യമായ പൊരുത്തപ്പെടുത്തൽ',
        'about_card1_desc': 'നിങ്ങളുടെ വ്യക്തിഗത വിവരങ്ങളെ അടിസ്ഥാനമാക്കി പദ്ധതികളുടെ കൃത്യമായ പൊരുത്തപ്പെടുത്തൽ.',
        'about_card2_title': 'ലളിതമായ പ്രവേശനം',
        'about_card2_desc': 'സങ്കീർണ്ണമായ സർക്കാർ പോർട്ടലുകൾക്ക് പകരം ലളിതവും ആക്സസ് ചെയ്യാവുന്നതുമായ ഒരു പ്ലാറ്റ്ഫോം.',
        'about_card3_title': 'നിയമ-അധിഷ്ഠിത വിവരങ്ങൾ',
        'about_card3_desc': 'നിർവചിക്കപ്പെട്ട നിയമങ്ങളെ അടിസ്ഥാനമാക്കിയുള്ള പദ്ധതി നിർദ്ദേശങ്ങൾ (സ്ഥിരീകരണം ആവശ്യമാണ്).',
        'howitworks_step1_title': 'വിവരങ്ങൾ നൽകുക',
        'howitworks_step1_desc': 'നിങ്ങളുടെ പേര്, പ്രായം, ലിംഗഭേദം, തൊഴിൽ തുടങ്ങിയ ലളിതമായ വിശദാംശങ്ങൾ നൽകുക.',
        'howitworks_step2_title': 'പ്രാദേശിക വിശകലനം',
        'howitworks_step2_desc': 'ഞങ്ങളുടെ സിസ്റ്റം നിങ്ങളുടെ പ്രൊഫൈൽ വിശകലനം ചെയ്യുകയും ഞങ്ങളുടെ ഡാറ്റാബേസിൽ നിന്ന് യോഗ്യമായ പദ്ധതികൾ കണ്ടെത്തുകയും ചെയ്യും.',
        'howitworks_step3_title': 'ഫലങ്ങൾ കാണുക',
        'howitworks_step3_desc': 'നിങ്ങൾക്ക് ഏറ്റവും അനുയോജ്യമായ സർക്കാർ പദ്ധതികളുടെ ഒരു ലിസ്റ്റ് നേടുക.',
        'scheme_finder_title': 'നിങ്ങളുടെ യോഗ്യമായ സർക്കാർ പദ്ധതികൾ കണ്ടെത്തുക',
        'form_name_label': 'നിങ്ങളുടെ പേര്:',
        'form_name_placeholder': 'ഉദാ. രമേഷ് കുമാർ',
        'form_age_label': 'പ്രായം (വർഷങ്ങളിൽ):',
        'form_age_placeholder': 'ഉദാ. 35',
        'form_gender_label': 'ലിംഗഭേദം:',
        'form_gender_select': 'തിരഞ്ഞെടുക്കുക...',
        'form_gender_male': 'പുരുഷൻ',
        'form_gender_female': 'സ്ത്രീ',
        'form_gender_other': 'മറ്റുള്ളവ',
        'form_occupation_label': 'തൊഴിൽ:',
        'form_occupation_select': 'തിരഞ്ഞെടുക്കുക...',
        'form_occupation_student': 'വിദ്യാർത്ഥി',
        'form_occupation_farmer': 'കർഷകൻ',
        'form_occupation_worker': 'തൊഴിലാളി',
        'form_occupation_homemaker': 'വീട്ടമ്മ',
        'form_occupation_entrepreneur': 'സംരംഭകൻ',
        'form_occupation_other_option': 'മറ്റുള്ളവ',
        'form_submit_button': 'എന്റെ പദ്ധതികൾ നേടുക',
        'form_submit_loading': '<i class="fas fa-spinner fa-spin"></i> ലോഡ് ചെയ്യുന്നു...',
        'no_schemes_found': 'നിങ്ങളുടെ മാനദണ്ഡങ്ങളുമായി പൊരുത്തപ്പെടുന്ന അനുയോജ്യമായ പദ്ധതികളൊന്നും കണ്ടെത്തിയില്ല. കൂടുതൽ വിവരങ്ങൾക്ക് ഔദ്യോഗിക സർക്കാർ പോർട്ടലുകൾ സന്ദർശിക്കുക.',
        'testimonials_title': 'ഗുണഭോക്താക്കളുടെ കഥകൾ (ഉദാഹരണം)',
        'testimonial1_text': '"പ്രഗതിജിപിടി എനിക്ക് പിഎം-കിസാൻ പദ്ധതിയെക്കുറിച്ച് അറിയാൻ സഹായിച്ചു, അത് എനിക്ക് വളരെയധികം പ്രയോജനം ചെയ്തു. നന്ദി!"',
        'testimonial1_author': '- ഒരു കർഷകൻ, രാജസ്ഥാൻ',
        'testimonial2_text': '"ഒരു ചെറിയ സംരംഭകൻ എന്ന നിലയിൽ, എനിക്ക് ഇവിടെ മുദ്ര പദ്ധതിയെക്കുറിച്ചുള്ള വിവരങ്ങൾ ലഭിച്ചു. അത് വളരെ സഹായകരമായിരുന്നു."',
        'testimonial2_author': '- ഒരു സംരംഭകൻ, മഹാരാഷ്ട്ര',
        'testimonial3_text': '"എന്റെ മകൾക്കായി സുകന്യ സമൃദ്ധി യോജനയെക്കുറിച്ചുള്ള വിവരങ്ങൾ ഞാൻ കണ്ടെത്തി. ഈ പ്ലാറ്റ്ഫോം വളരെ ഉപയോഗപ്രദമാണ്."',
        'testimonial3_author': '- ഒരു രക്ഷിതാവ്, ഉത്തർപ്രദേശ്',
        'developer_title': 'ഡെവലപ്പറെ കാണുക',
        'developer_avatar_alt_text': 'ഡെവലപ്പർ അവതാർ',
        'developer_name_text': 'അഭിഷേക് സിംഗ് ശേഖാവത്', // Your Name in Malayalam
        'developer_bio_text': 'സാങ്കേതികവിദ്യയിലൂടെ പരിഹാരങ്ങൾ നിർമ്മിക്കുന്നതിൽ ശ്രദ്ധ കേന്ദ്രീകരിക്കുന്ന ഒരു ഉത്സുകനായ വെബ് ഡെവലപ്പർ.', // Your Bio in Malayalam
        'developer_project_attribution_text': 'ഈ പ്രഗതിജിപിടി പ്രോജക്റ്റ് സാമൂഹിക നന്മയ്ക്കായി നിയമ-അധിഷ്ഠിത പദ്ധതി കണ്ടെത്തൽ പ്രദർശിപ്പിക്കുന്നതിനായി സൃഷ്ടിച്ചതാണ്.',
        'developer_portfolio_button_text': 'പോർട്ട്ഫോളിയോ കാണുക',
        'developer_connect_prompt_text': 'എന്നെ ബന്ധപ്പെടുക:',
        'footer_copyright': `© ${new Date().getFullYear()} പ്രഗതിജിപിടി. എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം.`,
        'social_facebook': 'ഫേസ്ബുക്ക്',
        'social_twitter': 'ട്വിറ്റർ',
        'social_linkedin': 'ലിങ്ക്ഡ്ഇൻ',
        'footer_disclaimer': 'നിരാകരണം: പ്രഗതിജിപിടി ഒരു ഡെമോ പ്രോജക്റ്റാണ്. പദ്ധതി വിവരങ്ങൾ ചിത്രീകരണത്തിന് മാത്രമുള്ളതാണ്, ഔദ്യോഗിക ഉറവിടങ്ങളിൽ നിന്ന് സ്ഥിരീകരിക്കേണ്ടതുണ്ട്. ഇത് ഏതെങ്കിലും സർക്കാർ സ്ഥാപനത്തെ പ്രതിനിധീകരിക്കുന്നില്ല.',
        'output_user_profile_title': ':: ഉപയോക്താവിൻ്റെ പ്രൊഫൈൽ ::',
        'output_name_label': 'പേര്',
        'output_age_label': 'പ്രായം',
        'output_gender_label': 'ലിംഗഭേദം',
        'output_occupation_label': 'തൊഴിൽ',
        'output_schemes_title': ':: യോഗ്യമായ സർക്കാർ പദ്ധതികൾ ::',
        'output_scheme_name_label': 'പദ്ധതിയുടെ പേര്',
        'output_description_label': 'വിവരണം',
        'output_more_schemes_1': '... കൂടാതെ ',
        'output_more_schemes_2_singular': ' മറ്റ് സാധ്യതയുള്ള പദ്ധതി.',
        'output_more_schemes_2_plural': ' മറ്റ് സാധ്യതയുള്ള പദ്ധതികൾ.',
        'output_more_schemes_3': ' കൂടുതൽ വിവരങ്ങൾക്ക് ഔദ്യോഗിക സർക്കാർ പോർട്ടലുകൾ സന്ദർശിക്കുക.',
    }
};

// --- Expanded Local Scheme Data ---
const localSchemesData = [
    // Original 5 + 21 new ones
    {
        id: 'pmkisan',
        name: { 'hi': 'प्रधानमंत्री किसान सम्मान निधि (पीएम-किसान)', 'en': 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)', 'bn': 'প্রধানমন্ত্রী কিষাণ সম্মান নিধি (পিএম-কিষাণ)', 'ta': 'பிரதம மந்திரி கிசான் சம்மான் நிதி (பிஎம்-கிசான்)', 'te': 'ప్రధాన మంత్రి కిసాన్ సమ్మాన్ నిధి (పిఎం-కిసాన్)', 'mr': 'प्रधानमंत्री किसान सन्मान निधी (पीएम-किसान)', 'gu': 'પ્રધાનમંત્રી કિસાન સન્માન નિધિ (પીએમ-કિસાન)', 'kn': 'ಪ್ರಧಾನಮಂತ್ರಿ ಕಿಸಾನ್ ಸಮ್ಮಾನ್ ನಿಧಿ (ಪಿಎಂ-ಕಿಸಾನ್)', 'ml': 'പ്രധാനമന്ത്രി കിസാൻ സമ്മാൻ നിധി (പിഎം-കിസാൻ)' },
        description: { 'hi': 'सभी भूमिधारक किसान परिवारों को प्रति वर्ष ₹6,000 की आय सहायता प्रदान करती है।', 'en': 'Provides income support of ₹6,000 per year to all landholding farmer families.', 'bn': 'সকল ভূমিধারী কৃষক পরিবারকে প্রতি বছর ₹৬,০০০ আর্থিক সহায়তা প্রদান করে।', 'ta': 'அனைத்து நில உரிமையாளர் விவசாய குடும்பங்களுக்கும் ஆண்டுக்கு ₹6,000 வருமான ஆதரவை வழங்குகிறது.', 'te': 'అన్ని భూస్వామ్య రైతు కుటుంబాలకు సంవత్సరానికి ₹6,000 ఆదాయ మద్దతును అందిస్తుంది.', 'mr': 'सर्व भूधारक शेतकरी कुटुंबांना प्रति वर्ष ₹6,000 ची उत्पन्न मदत पुरवते.', 'gu': 'બધા જમીનધારક ખેડૂત પરિવારોને પ્રતિ વર્ષ ₹6,000 ની આવક સહાય પૂરી પાડે છે.', 'kn': 'ಎಲ್ಲಾ ಭೂಮಾಲೀಕ ರೈತ ಕುಟುಂಬಗಳಿಗೆ ಪ್ರತಿ ವರ್ಷ ₹6,000 ಆದಾಯ ಬೆಂಬಲವನ್ನು ಒದಗಿಸುತ್ತದೆ.', 'ml': 'എല്ലാ ഭൂവുടമ കർഷക കുടുംബങ്ങൾക്കും പ്രതിവർഷം ₹6,000 വരുമാന സഹായം നൽകുന്നു.' },
        eligibility: { minAge: 18, genders: [], occupations: ['किसान', 'Farmer'] }
    },
    {
        id: 'mudra',
        name: { 'hi': 'प्रधानमंत्री मुद्रा योजना (PMMY)', 'en': 'Pradhan Mantri MUDRA Yojana (PMMY)', 'bn': 'প্রধানমন্ত্রী মুদ্রা যোজনা (পিএমএমওয়াই)', 'ta': 'பிரதம மந்திரி முத்ரா யோஜனா (PMMY)', 'te': 'ప్రధాన మంత్రి ముద్రా యోజన (PMMY)', 'mr': 'प्रधानमंत्री मुद्रा योजना (PMMY)', 'gu': 'પ્રધાનમંત્રી મુદ્રા યોજના (PMMY)', 'kn': 'ಪ್ರಧಾನಮಂತ್ರಿ ಮುದ್ರಾ ಯೋಜನೆ (PMMY)', 'ml': 'പ്രധാനമന്ത്രി മുദ്ര യോജന (PMMY)' },
        description: { 'hi': 'गैर-कॉर्पोरेट, गैर-कृषि लघु/सूक्ष्म उद्यमों को ₹10 लाख तक का ऋण प्रदान करती है।', 'en': 'Provides loans up to ₹10 lakh to non-corporate, non-farm small/micro enterprises.', 'bn': 'অ-কর্পোরেট, অ-কৃষি ক্ষুদ্র/ছোট উদ্যোগগুলিকে ₹১০ লক্ষ পর্যন্ত ঋণ প্রদান করে।', 'ta': 'பெருநிறுவனமற்ற, விவசாயம் சாராத சிறு/குறு நிறுவனங்களுக்கு ₹10 லட்சம் வரை கடன் வழங்குகிறது.', 'te': 'కార్పొరేట్-యేతర, వ్యవసాయేతర చిన్న/సూక్ష్మ సంస్థలకు ₹10 లక్షల వరకు రుణాలను అందిస్తుంది.', 'mr': 'बिगर-कॉर्पोरेट, बिगर-शेती लहान/सूक्ष्म उद्योगांना ₹10 लाखांपर्यंत कर्ज पुरवते.', 'gu': 'બિન-કોર્પોરેટ, બિન-ખેતી નાના/સૂક્ષ્મ સાહસોને ₹10 લાખ સુધીની લોન પૂરી પાડે છે.', 'kn': 'ಕಾರ್ಪೊರೇಟ್ ಅಲ್ಲದ, ಕೃಷಿಯೇತರ ಸಣ್ಣ/ಸೂಕ್ಷ್ಮ ಉದ್ಯಮಗಳಿಗೆ ₹10 ಲಕ್ಷದವರೆಗೆ ಸಾಲ ಒದಗಿಸುತ್ತದೆ.', 'ml': 'കോർപ്പറേറ്റ് ഇതര, കാർഷികേതര ചെറുകിട/സൂക്ഷ്മ സംരംഭങ്ങൾക്ക് ₹10 ലക്ഷം വരെ വായ്പ നൽകുന്നു.' },
        eligibility: { minAge: 18, genders: [], occupations: ['उद्यमी', 'Entrepreneur', 'अन्य', 'Other'] }
    },
    {
        id: 'sukanya',
        name: { 'hi': 'सुकन्या समृद्धि योजना (SSY)', 'en': 'Sukanya Samriddhi Yojana (SSY)', 'bn': 'সুকন্যা সমৃদ্ধি যোজনা (এসএসওয়াই)', 'ta': 'சுகன்யா சம்ரிதி யோஜனா (SSY)', 'te': 'సుకన్య సమృద్ధి యోజన (SSY)', 'mr': 'सुकन्या समृद्धी योजना (SSY)', 'gu': 'સુકન્યા સમૃદ્ધિ યોજના (SSY)', 'kn': 'ಸುಕನ್ಯಾ ಸಮೃದ್ಧಿ ಯೋಜನೆ (SSY)', 'ml': 'സുകന്യ സമൃദ്ധി യോജന (SSY)' },
        description: { 'hi': 'बालिकाओं के भविष्य के लिए एक छोटी बचत योजना, माता-पिता या कानूनी अभिभावक द्वारा 10 वर्ष से कम आयु की लड़की के नाम पर खोला जा सकता है।', 'en': 'A small savings scheme for the future of girl children, can be opened by parents or legal guardians in the name of a girl child below 10 years of age.', 'bn': 'কন্যাশিশুদের ভবিষ্যতের জন্য একটি ছোট সঞ্চয় প্রকল্প, ১০ বছরের কম বয়সী কন্যাসন্তানের নামে পিতামাতা বা আইনী অভিভাবক খুলতে পারেন।', 'ta': 'பெண் குழந்தைகளின் எதிர்காலத்திற்கான ஒரு சிறு சேமிப்புத் திட்டம், 10 வயதுக்குட்பட்ட பெண் குழந்தையின் பெயரில் பெற்றோர் அல்லது சட்டப்பூர்வ பாதுகாவலர்களால் திறக்கப்படலாம்.', 'te': 'ఆడపిల్లల భవిష్యత్తు కోసం ఒక చిన్న పొదుపు పథకం, 10 సంవత్సరాల కంటే తక్కువ వయస్సు ఉన్న ఆడపిల్ల పేరు మీద తల్లిదండ్రులు లేదా చట్టపరమైన సంరక్షకులు తెరవవచ్చు.', 'mr': 'मुलींच्या भविष्यासाठी एक छोटी बचत योजना, 10 वर्षांपेक्षा कमी वयाच्या मुलीच्या नावे पालक किंवा कायदेशीर पालकांद्वारे उघडली जाऊ शकते.', 'gu': '10 વર્ષથી ઓછી ઉંમરની બાળકીના નામે માતા-પિતા અથવા કાનૂની વાલી દ્વારા ખોલી શકાય તેવી બાળકીઓના ભવિષ્ય માટેની એક નાની બચત યોજના.', 'kn': 'ಹೆಣ್ಣು ಮಕ್ಕಳ ಭವಿಷ್ಯಕ್ಕಾಗಿ ಒಂದು ಸಣ್ಣ ಉಳಿತಾಯ ಯೋಜನೆ, 10 ವರ್ಷಕ್ಕಿಂತ ಕಡಿಮೆ ವಯಸ್ಸಿನ ಹೆಣ್ಣು ಮಗುವಿನ ಹೆಸರಿನಲ್ಲಿ ಪೋಷಕರು ಅಥವಾ ಕಾನೂನು ಪಾಲಕರಿಂದ ತೆರೆಯಬಹುದು.', 'ml': 'പെൺകുട്ടികളുടെ ഭാവിക്കുവേണ്ടിയുള്ള ഒരു ചെറിയ സമ്പാദ്യ പദ്ധതി, 10 വയസ്സിന് താഴെയുള്ള പെൺകുട്ടിയുടെ പേരിൽ മാതാപിതാക്കൾക്കോ നിയമപരമായ രക്ഷിതാക്കൾക്കോ ​​തുറക്കാൻ കഴിയും.' },
        eligibility: { minAge: 18, maxAge: 50, genders: [], occupations: [] } // Parent applying
    },
    {
        id: 'atalpension',
        name: { 'hi': 'अटल पेंशन योजना (APY)', 'en': 'Atal Pension Yojana (APY)', 'bn': 'অটল পেনশন যোজনা (এপিওয়াই)', 'ta': 'அடல் பென்ஷன் யோஜனா (APY)', 'te': 'అటల్ పెన్షన్ యోజన (APY)', 'mr': 'अटल पेंशन योजना (APY)', 'gu': 'અટલ પેન્શન યોજના (APY)', 'kn': 'ಅಟಲ್ ಪಿಂಚಣಿ ಯೋಜನೆ (APY)', 'ml': 'അടൽ പെൻഷൻ യോജന (APY)' },
        description: { 'hi': 'असंगठित क्षेत्र के श्रमिकों पर केंद्रित एक पेंशन योजना।', 'en': 'A pension scheme focused on workers in the unorganized sector.', 'bn': 'অসংগঠিত খাতের কর্মীদের উপর দৃষ্টি নিবদ্ধ একটি পেনশন প্রকল্প।', 'ta': 'ஒழுங்கமைக்கப்படாத துறையில் உள்ள தொழிலாளர்களை மையமாகக் கொண்ட ஒரு ஓய்வூதியத் திட்டம்.', 'te': 'అసంఘటిత రంగంలోని కార్మికులపై దృష్టి సారించిన పెన్షన్ పథకం.', 'mr': 'असंघटित क्षेत्रातील कामगारांवर लक्ष केंद्रित करणारी एक पेन्शन योजना.', 'gu': 'અસંગઠિત ક્ષેત્રના કામદારો પર કેન્દ્રિત એક પેન્શન યોજના.', 'kn': 'ಅಸಂಘಟಿತ ವಲಯದ ಕಾರ್ಮಿಕರ ಮೇಲೆ ಕೇಂದ್ರೀಕರಿಸಿದ ಪಿಂಚಣಿ ಯೋಜನೆ.', 'ml': 'അസംഘടിത മേഖലയിലെ തൊഴിലാളികൾക്കായി ശ്രദ്ധ കേന്ദ്രീകരിക്കുന്ന ഒരു പെൻഷൻ പദ്ധതി.' },
        eligibility: { minAge: 18, maxAge: 40, genders: [], occupations: ['श्रमिक', 'Worker', 'अन्य', 'Other'] }
    },
    {
        id: 'pmjjby',
        name: { 'hi': 'प्रधानमंत्री जीवन ज्योति बीमा योजना (PMJJBY)', 'en': 'Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)', 'bn': 'প্রধানমন্ত্রী জীবন জ্যোতি বিমা যোজনা (পিএমজেজেবিওয়াই)', 'ta': 'பிரதம மந்திரி ஜீவன் ஜோதி பீமா யோஜனா (PMJJBY)', 'te': 'ప్రధాన మంత్రి జీవన్ జ్యోతి బీమా యోజన (PMJJBY)', 'mr': 'प्रधानमंत्री जीवन ज्योती विमा योजना (PMJJBY)', 'gu': 'પ્રધાનમંત્રી જીવન જ્યોતિ બીમા યોજના (PMJJBY)', 'kn': 'ಪ್ರಧಾನಮಂತ್ರಿ ಜೀವನ ಜ್ಯೋತಿ ಬಿಮಾ ಯೋಜನೆ (PMJJBY)', 'ml': 'പ്രധാനമന്ത്രി ജീവൻ ജ്യോതി ബീമാ യോജന (PMJJBY)' },
        description: { 'hi': 'एक वर्षीय जीवन बीमा योजना, जो किसी भी कारण से मृत्यु के लिए कवरेज प्रदान करती है।', 'en': 'A one-year life insurance scheme, offering coverage for death due to any reason.', 'bn': 'এক বছরের জীবন বিমা প্রকল্প, যা কোনও কারণে মৃত্যুর জন্য কভারেজ প্রদান করে।', 'ta': 'ஒரு வருட ஆயுள் காப்பீட்டுத் திட்டம், எந்தவொரு காரணத்தினாலும் மரணத்திற்கு கவரேஜ் வழங்குகிறது.', 'te': 'ఒక సంవత్సరం జీవిత బీమా పథకం, ఏ కారణం చేతనైనా మరణానికి కవరేజీని అందిస్తుంది.', 'mr': 'एक वर्षाची जीवन विमा योजना, जी कोणत्याही कारणास्तव मृत्यूसाठी संरक्षण देते.', 'gu': 'એક વર્ષીય જીવન વીમા યોજના, જે કોઈપણ કારણસર મૃત્યુ માટે કવરેજ પ્રદાન કરે છે.', 'kn': 'ಒಂದು ವರ್ಷದ ಜೀವ ವಿಮಾ ಯೋಜನೆ, ಯಾವುದೇ ಕಾರಣದಿಂದ ಮರಣಕ್ಕೆ ರಕ್ಷಣೆ ನೀಡುತ್ತದೆ.', 'ml': 'ഒരു വർഷത്തെ ലൈഫ് ഇൻഷുറൻസ് പദ്ധതി, ഏത് കാരണത്താലുമുള്ള മരണത്തിന് പരിരക്ഷ വാഗ്ദാനം ചെയ്യുന്നു.' },
        eligibility: { minAge: 18, maxAge: 50, genders: [], occupations: [] }
    },
    {
        id: 'meritScholarship',
        name: { 'hi': 'मेधावी छात्र छात्रवृत्ति योजना', 'en': 'Meritorious Student Scholarship Scheme', 'bn': 'মেধাবী ছাত্র বৃত্তি প্রকল্প', 'ta': 'திறமையான மாணவர் கல்வி உதவித்தொகை திட்டம்', 'te': 'ప్రతిభావంతులైన విద్యార్థి ఉపకారవేతన పథకం', 'mr': 'गुणवंत विद्यार्थी शिष्यवृत्ती योजना', 'gu': 'મેધાવી વિદ્યાર્થી શિષ્યવૃત્તિ યોજના', 'kn': 'ಪ್ರತಿಭಾವಂತ ವಿದ್ಯಾರ್ಥಿ ವೇತನ ಯೋಜನೆ', 'ml': 'മിടുക്കരായ വിദ്യാർത്ഥികൾക്കുള്ള സ്കോളർഷിപ്പ് പദ്ധതി' },
        description: { 'hi': 'उच्च शिक्षा प्राप्त करने वाले मेधावी छात्रों के लिए वित्तीय सहायता।', 'en': 'Financial assistance for meritorious students pursuing higher education.', 'bn': 'উচ্চশিক্ষা গ্রহণকারী মেধাবী ছাত্রদের জন্য আর্থিক সহায়তা।', 'ta': 'உயர்கல்வி கற்கும் திறமையான மாணவர்களுக்கான நிதி உதவி.', 'te': 'ఉన్నత విద్యను అభ్యసించే ప్రతిభావంతులైన విద్యార్థులకు ఆర్థిక సహాయం.', 'mr': 'उच्च शिक्षण घेणाऱ्या गुणवंत विद्यार्थ्यांना आर्थिक मदत.', 'gu': 'ઉચ્ચ શિક્ષણ મેળવતા મેધાવી વિદ્યાર્થીઓ માટે નાણાકીય સહાય.', 'kn': 'ಉನ್ನತ ಶಿಕ್ಷಣವನ್ನು ಪಡೆಯುತ್ತಿರುವ ಪ್ರತಿಭಾವಂತ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಆರ್ಥಿಕ ನೆರವು.', 'ml': 'ഉന്നത വിദ്യാഭ്യാസം നേടുന്ന മിടുക്കരായ വിദ്യാർത്ഥികൾക്ക് സാമ്പത്തിക സഹായം.' },
        eligibility: { minAge: 16, maxAge: 22, genders: [], occupations: ['विद्यार्थी', 'Student'] }
    },
    {
        id: 'youngEntrepreneurFund',
        name: { 'hi': 'युवा उद्यमी सहायता कोष', 'en': 'Young Entrepreneur Support Fund', 'bn': 'তরুণ উদ্যোক্তা সহায়তা তহবিল', 'ta': 'இளம் தொழில்முனைவோர் ஆதரவு நிதி', 'te': 'యువ పారిశ్రామికవేత్తల సహాయ నిధి', 'mr': 'युवा उद्योजक सहाय्यता निधी', 'gu': 'યુવા ઉદ્યોગસાહસિક સહાય ભંડોળ', 'kn': 'ಯುವ ಉದ್ಯಮಿಗಳ ಬೆಂಬಲ ನಿಧಿ', 'ml': 'യുവ സംരംഭക സഹായ നിധി' },
        description: { 'hi': 'युवा उद्यमियों को अपना व्यवसाय शुरू करने या विस्तार करने के लिए प्रारंभिक चरण की फंडिंग।', 'en': 'Seed funding for young entrepreneurs to start or expand their businesses.', 'bn': 'তরুণ উদ্যোক্তাদের তাদের ব্যবসা শুরু বা প্রসারিত করার জন্য প্রাথমিক পর্যায়ের অর্থায়ন।', 'ta': 'இளம் தொழில்முனைவோர்கள் தங்கள் தொழில்களைத் தொடங்க அல்லது விரிவுபடுத்த விதை நிதி.', 'te': 'యువ పారిశ్రామికవేత్తలు తమ వ్యాపారాలను ప్రారంభించడానికి లేదా విస్తరించడానికి సీడ్ ఫండింగ్.', 'mr': 'युवा उद्योजकांना त्यांचा व्यवसाय सुरू करण्यासाठी किंवा विस्तारित करण्यासाठी बीज निधी.', 'gu': 'યુવા ઉદ્યોગસાહસિકોને તેમના વ્યવસાય શરૂ કરવા અથવા વિસ્તારવા માટે પ્રારંભિક તબક્કાનું ભંડોળ.', 'kn': 'ಯುವ ಉದ್ಯಮಿಗಳಿಗೆ ತಮ್ಮ ವ್ಯವಹಾರಗಳನ್ನು ಪ್ರಾರಂಭಿಸಲು ಅಥವಾ ವಿಸ್ತರಿಸಲು ಬೀಜ ನಿಧಿ.', 'ml': 'യുവ സംരംഭകർക്ക് അവരുടെ ബിസിനസുകൾ ആരംഭിക്കുന്നതിനോ വികസിപ്പിക്കുന്നതിനോ ഉള്ള സീഡ് ഫണ്ടിംഗ്.' },
        eligibility: { minAge: 18, maxAge: 30, genders: [], occupations: ['उद्यमी', 'Entrepreneur'] }
    },
    {
        id: 'womenSkillDev',
        name: { 'hi': 'महिला कौशल विकास कार्यक्रम', 'en': 'Women Skill Development Program', 'bn': 'মহিলা দক্ষতা উন্নয়ন কর্মসূচি', 'ta': 'பெண்கள் திறன் மேம்பாட்டு திட்டம்', 'te': 'మహిళా నైపుణ్యాభివృద్ధి కార్యక్రమం', 'mr': 'महिला कौशल्य विकास कार्यक्रम', 'gu': 'મહિલા કૌશલ્ય વિકાસ કાર્યક્રમ', 'kn': 'ಮಹಿಳಾ ಕೌಶಲ್ಯ ಅಭಿವೃದ್ಧಿ ಕಾರ್ಯಕ್ರಮ', 'ml': 'വനിതാ നൈപുണ്യ വികസന പരിപാടി' },
        description: { 'hi': 'महिलाओं को रोजगार योग्य कौशल प्रदान करना और उनकी आर्थिक स्वतंत्रता को बढ़ावा देना।', 'en': 'Providing women with employable skills and promoting their economic independence.', 'bn': 'মহিলাদের কর্মসংস্থানযোগ্য দক্ষতা প্রদান এবং তাদের অর্থনৈতিক স্বাধীনতা প্রচার করা।', 'ta': 'பெண்களுக்கு வேலைவாய்ப்புத் திறன்களை வழங்குதல் மற்றும் அவர்களின் பொருளாதார சுதந்திரத்தை மேம்படுத்துதல்.', 'te': 'మహిళలకు ఉపాధి నైపుణ్యాలను అందించడం మరియు వారి ఆర్థిక స్వాతంత్ర్యాన్ని ప్రోత్సహించడం.', 'mr': 'महिलांना रोजगारक्षम कौशल्ये प्रदान करणे आणि त्यांच्या आर्थिक स्वातंत्र्याला प्रोत्साहन देणे.', 'gu': 'મહિલાઓને રોજગારી યોગ્ય કૌશલ્યો પૂરા પાડવા અને તેમની આર્થિક સ્વતંત્રતાને પ્રોત્સાહન આપવું.', 'kn': 'ಮಹಿಳೆಯರಿಗೆ ಉದ್ಯೋಗಾರ್ಹ ಕೌಶಲ್ಯಗಳನ್ನು ಒದಗಿಸುವುದು ಮತ್ತು ಅವರ ಆರ್ಥಿಕ ಸ್ವಾತಂತ್ರ್ಯವನ್ನು ಉತ್ತೇಜಿಸುವುದು.', 'ml': 'സ്ത്രീകൾക്ക് തൊഴിൽ നൈപുണ്യം നൽകുകയും അവരുടെ സാമ്പത്തിക സ്വാതന്ത്ര്യം പ്രോത്സാഹിപ്പിക്കുകയും ചെയ്യുക.' },
        eligibility: { minAge: 18, maxAge: 45, genders: ['महिला', 'Female'], occupations: ['गृहिणी', 'Homemaker', 'श्रमिक', 'Worker', 'उद्यमी', 'Entrepreneur', 'अन्य', 'Other'] }
    },
    {
        id: 'agriModernGrant',
        name: { 'hi': 'कृषि आधुनिकीकरण अनुदान', 'en': 'Agricultural Modernization Grant', 'bn': 'কৃষি আধুনিকীকরণ অনুদান', 'ta': 'வேளாண்மை நவீனமயமாக்கல் மானியம்', 'te': 'వ్యవసాయ ఆధునికీకరణ గ్రాంట్', 'mr': 'कृषी आधुनिकीकरण अनुदान', 'gu': 'કૃષિ આધુનિકીકરણ અનુદાન', 'kn': 'ಕೃಷಿ ಆಧುನೀಕರಣ ಅನುದಾನ', 'ml': 'കാർഷിക ആധുനികവൽക്കരണ ഗ്രാന്റ്' },
        description: { 'hi': 'किसानों को आधुनिक कृषि उपकरण और तकनीक अपनाने के लिए अनुदान।', 'en': 'Grants for farmers to adopt modern agricultural equipment and techniques.', 'bn': 'কৃষকদের আধুনিক কৃষি সরঞ্জাম ও কৌশল গ্রহণের জন্য অনুদান।', 'ta': 'நவீன வேளாண் உபகரணங்கள் மற்றும் நுட்பங்களை விவசாயிகள் பின்பற்றுவதற்கான மானியங்கள்.', 'te': 'ఆధునిక వ్యవసాయ పరికరాలు మరియు సాంకేతిక పరిజ్ఞానాన్ని అవలంబించడానికి రైతులకు గ్రాంట్లు.', 'mr': 'शेतकऱ्यांना आधुनिक कृषी उपकरणे आणि तंत्रज्ञान स्वीकारण्यासाठी अनुदान.', 'gu': 'ખેડૂતોને આધુનિક કૃષિ સાધનો અને તકનીકો અપનાવવા માટે અનુદાન.', 'kn': 'ರೈತರು ಆಧುನಿಕ ಕೃಷಿ ಉಪಕರಣಗಳು ಮತ್ತು ತಂತ್ರಗಳನ್ನು ಅಳವಡಿಸಿಕೊಳ್ಳಲು ಅನುದಾನ.', 'ml': 'ആധുനിക കാർഷിക ഉപകരണങ്ങളും സാങ്കേതിക വിദ്യകളും സ്വീകരിക്കുന്നതിന് കർഷകർക്കുള്ള ഗ്രാന്റുകൾ.' },
        eligibility: { minAge: 25, genders: [], occupations: ['किसान', 'Farmer'] }
    },
    {
        id: 'seniorHealthBenefit',
        name: { 'hi': 'वरिष्ठ नागरिक स्वास्थ्य लाभ योजना', 'en': 'Senior Citizen Health Benefit Scheme', 'bn': 'প্রবীণ নাগরিক স্বাস্থ্য সুবিধা প্রকল্প', 'ta': 'மூத்த குடிமக்கள் சுகாதார நலத் திட்டம்', 'te': 'సీనియర్ సిటిజన్ ఆరోగ్య ప్రయోజన పథకం', 'mr': 'ज्येष्ठ नागरिक आरोग्य लाभ योजना', 'gu': 'વરિષ્ઠ નાગરિક સ્વાસ્થ્ય લાભ યોજના', 'kn': 'ಹಿರಿಯ ನಾಗರಿಕರ ಆರೋಗ್ಯ ಪ್ರಯೋಜನ ಯೋಜನೆ', 'ml': 'മുതിർന്ന പൗരന്മാരുടെ ആരോഗ്യ ആനുകൂല്യ പദ്ധതി' },
        description: { 'hi': 'वरिष्ठ नागरिकों के लिए रियायती स्वास्थ्य सेवाएँ और चिकित्सा व्यय कवरेज।', 'en': 'Subsidized healthcare services and medical expense coverage for senior citizens.', 'bn': 'প্রবীণ নাগরিকদের জন্য ভর্তুকিযুক্ত স্বাস্থ্যসেবা এবং চিকিৎসা ব্যয় কভারেজ।', 'ta': 'மூத்த குடிமக்களுக்கான மானிய விலையில் சுகாதார சேவைகள் மற்றும் மருத்துவ செலவுக் பாதுகாப்பு.', 'te': 'సీనియర్ సిటిజన్లకు సబ్సిడీ ఆరోగ్య సంరక్షణ సేవలు మరియు వైద్య ఖర్చుల కవరేజ్.', 'mr': 'ज्येष्ठ नागरिकांसाठी अनुदानित आरोग्य सेवा आणि वैद्यकीय खर्च संरक्षण.', 'gu': 'વરિષ્ઠ નાગરિકો માટે સબસિડીવાળી આરોગ્યસંભાળ સેવાઓ અને તબીબી ખર્ચ કવરેજ.', 'kn': 'ಹಿರಿಯ ನಾಗರಿಕರಿಗೆ ಸಬ್ಸಿಡಿ ಸಹಿತ ಆರೋಗ್ಯ ಸೇವೆಗಳು ಮತ್ತು ವೈದ್ಯಕೀಯ ವೆಚ್ಚಗಳ ರಕ್ಷಣೆ.', 'ml': 'മുതിർന്ന പൗരന്മാർക്കുള്ള സബ്സിഡി ആരോഗ്യ സേവനങ്ങളും മെഡിക്കൽ ചെലവ് പരിരക്ഷയും.' },
        eligibility: { minAge: 60, genders: [], occupations: [] }
    },
    {
        id: 'unorgWorkerSupport',
        name: { 'hi': 'असंगठित क्षेत्र श्रमिक सहायता', 'en': 'Unorganized Sector Worker Support', 'bn': 'অসংগঠিত খাতের কর্মী সহায়তা', 'ta': 'ஒழுங்கமைக்கப்படாத துறை தொழிலாளர் ஆதரவு', 'te': 'అసంఘటిత రంగ కార్మికుల మద్దతు', 'mr': 'असंघटित क्षेत्र कामगार सहाय्यता', 'gu': 'અસંગઠિત ક્ષેત્ર કામદાર સહાય', 'kn': 'ಅಸಂಘಟಿತ ವಲಯದ ಕಾರ್ಮಿಕರ ಬೆಂಬಲ', 'ml': 'അസംഘടിത മേഖലയിലെ തൊഴിലാളികളുടെ പിന്തുണ' },
        description: { 'hi': 'असंगठित क्षेत्र के श्रमिकों के लिए सामाजिक सुरक्षा और कल्याणकारी लाभ।', 'en': 'Social security and welfare benefits for workers in the unorganized sector.', 'bn': 'অসংগঠিত খাতের কর্মীদের জন্য সামাজিক নিরাপত্তা এবং কল্যাণমূলক সুবিধা।', 'ta': 'ஒழுங்கமைக்கப்படாத துறையில் உள்ள தொழிலாளர்களுக்கான சமூகப் பாதுகாப்பு மற்றும் நலன்புரிப் பலன்கள்.', 'te': 'అసంఘటిత రంగంలోని కార్మికులకు సామాజిక భద్రత మరియు సంక్షేమ ప్రయోజనాలు.', 'mr': 'असंघटित क्षेत्रातील कामगारांसाठी सामाजिक सुरक्षा आणि कल्याणकारी लाभ.', 'gu': 'અસંગઠિત ક્ષેત્રના કામદારો માટે સામાજિક સુરક્ષા અને કલ્યાણકારી લાભો.', 'kn': 'ಅಸಂಘಟಿತ ವಲಯದ ಕಾರ್ಮಿಕರಿಗೆ ಸಾಮಾಜಿಕ ಭದ್ರತೆ ಮತ್ತು ಕಲ್ಯಾಣ ಪ್ರಯೋಜನಗಳು.', 'ml': 'അസംഘടിത മേഖലയിലെ തൊഴിലാളികൾക്കുള്ള സാമൂഹിക സുരക്ഷയും ക്ഷേമ ആനുകൂല്യങ്ങളും.' },
        eligibility: { minAge: 20, maxAge: 55, genders: [], occupations: ['श्रमिक', 'Worker', 'अन्य', 'Other'] }
    },
    {
        id: 'homemakerEmpower',
        name: { 'hi': 'गृहिणी सशक्तिकरण पहल', 'en': 'Homemaker Empowerment Initiative', 'bn': 'গৃহকর্ত্রী ক্ষমতায়ন উদ্যোগ', 'ta': 'இல்லத்தரசி வலுவூட்டல் முயற்சி', 'te': 'గృహిణి సాధికారత కార్యక్రమం', 'mr': 'गृहिणी सक्षमीकरण उपक्रम', 'gu': 'ગૃહિણી સશક્તિકરણ પહેલ', 'kn': 'ಗೃಹಿಣಿ ಸಬಲೀಕರಣ ಉಪಕ್ರಮ', 'ml': 'വീട്ടമ്മമാരുടെ ശാക്തീകരണ സംരംഭം' },
        description: { 'hi': 'गृहिणियों को आय-अर्जक गतिविधियों और उद्यमिता के लिए प्रशिक्षण और सहायता।', 'en': 'Training and support for homemakers for income-generating activities and entrepreneurship.', 'bn': 'গৃহকর্ত্রীদের আয়-উৎপাদনমূলক কার্যক্রম এবং উদ্যোক্তার জন্য প্রশিক্ষণ ও সহায়তা।', 'ta': 'வருமானம் ஈட்டும் நடவடிக்கைகள் மற்றும் தொழில்முனைவோருக்கான இல்லத்தரசிகளுக்குப் பயிற்சி மற்றும் ஆதரவு.', 'te': 'ఆదాయ-ఉత్పాదక కార్యకలాపాలు మరియు వ్యవస్థాపకత కోసం గృహిణులకు శిక్షణ మరియు మద్దతు.', 'mr': 'गृहिणींना उत्पन्न-निर्मिती उपक्रम आणि उद्योजकतेसाठी प्रशिक्षण आणि सहाय्य.', 'gu': 'ગૃહિણીઓને આવક-ઉત્પન્ન પ્રવૃત્તિઓ અને ઉદ્યોગસાહસિકતા માટે તાલીમ અને સહાય.', 'kn': 'ಗೃಹಿಣಿಯರಿಗೆ ಆದಾಯ-ಉತ್ಪಾದನಾ ಚಟುವಟಿಕೆಗಳು ಮತ್ತು ಉದ್ಯಮಶೀಲತೆಗಾಗಿ ತರಬೇತಿ ಮತ್ತು ಬೆಂಬಲ.', 'ml': 'വരുമാനം ഉണ്ടാക്കുന്ന പ്രവർത്തനങ്ങൾക്കും സംരംഭകത്വത്തിനുമുള്ള വീട്ടമ്മമാർക്കുള്ള പരിശീലനവും പിന്തുണയും.' },
        eligibility: { minAge: 25, maxAge: 55, genders: ['महिला', 'Female'], occupations: ['गृहिणी', 'Homemaker'] }
    },
    {
        id: 'digitalLiteracy',
        name: { 'hi': 'डिजिटल साक्षरता अभियान', 'en': 'Digital Literacy Drive', 'bn': 'ডিজিটাল সাক্ষরতা অভিযান', 'ta': 'டிஜிட்டல் கல்வி இயக்கம்', 'te': 'డిజిటల్ అక్షరాస్యత డ్రైవ్', 'mr': 'डिजिटल साक्षरता अभियान', 'gu': 'ડિજિટલ સાક્ષરતા અભિયાન', 'kn': 'ಡಿಜಿಟಲ್ ಸಾಕ್ಷರತಾ ಆಂದೋಲನ', 'ml': 'ഡിജിറ്റൽ സാക്ഷരതാ യജ്ഞം' },
        description: { 'hi': 'सभी आयु वर्ग के नागरिकों को बुनियादी डिजिटल कौशल प्रदान करना।', 'en': 'Providing basic digital skills to citizens of all age groups.', 'bn': 'সকল বয়সের নাগরিকদের মৌলিক ডিজিটাল দক্ষতা প্রদান করা।', 'ta': 'அனைத்து வயதினருக்கும் அடிப்படை டிஜிட்டல் திறன்களை வழங்குதல்.', 'te': 'అన్ని వయసుల పౌరులకు ప్రాథమిక డిజిటల్ నైపుణ్యాలను అందించడం.', 'mr': 'सर्व वयोगटातील नागरिकांना मूलभूत डिजिटल कौशल्ये प्रदान करणे.', 'gu': 'બધા વય જૂથોના નાગરિકોને મૂળભૂત ડિજિટલ કૌશલ્યો પૂરા પાડવા.', 'kn': 'ಎಲ್ಲಾ ವಯೋಮಾನದ ನಾಗರಿಕರಿಗೆ ಮೂಲಭೂತ ಡಿಜಿಟಲ್ ಕೌಶಲ್ಯಗಳನ್ನು ಒದಗಿಸುವುದು.', 'ml': 'എല്ലാ പ്രായത്തിലുമുള്ള പൗരന്മാർക്ക് അടിസ്ഥാന ഡിജിറ്റൽ കഴിവുകൾ നൽകുക.' },
        eligibility: { minAge: 15, maxAge: 60, genders: [], occupations: [] }
    },
    {
        id: 'ruralHousing',
        name: { 'hi': 'ग्रामीण आवास योजना', 'en': 'Rural Housing Scheme', 'bn': 'গ্রামীণ আবাসন প্রকল্প', 'ta': 'கிராமப்புற வீட்டு வசதித் திட்டம்', 'te': 'గ్రామీణ గృహనిర్మాణ పథకం', 'mr': 'ग्रामीण गृहनिर्माण योजना', 'gu': 'ગ્રામીણ આવાસ યોજના', 'kn': 'ಗ್ರಾಮೀಣ ವಸತಿ ಯೋಜನೆ', 'ml': 'ഗ്രാമീണ ഭവന പദ്ധതി' },
        description: { 'hi': 'ग्रामीण क्षेत्रों में पात्र परिवारों को किफायती आवास प्रदान करना।', 'en': 'Providing affordable housing to eligible families in rural areas.', 'bn': 'গ্রামীণ এলাকায় যোগ্য পরিবারগুলিকে সাশ্রয়ী মূল্যের আবাসন প্রদান করা।', 'ta': 'கிராமப்புறங்களில் தகுதியான குடும்பங்களுக்கு மலிவு விலையில் வீடுகளை வழங்குதல்.', 'te': 'గ్రామీణ ప్రాంతాల్లో అర్హతగల కుటుంబాలకు సరసమైన గృహాలను అందించడం.', 'mr': 'ग्रामीण भागातील पात्र कुटुंबांना परवडणारी घरे पुरवणे.', 'gu': 'ગ્રામીણ વિસ્તારોમાં પાત્ર પરિવારોને પોષણક્ષમ આવાસ પૂરા પાડવા.', 'kn': 'ಗ್ರಾಮೀಣ ಪ್ರದೇಶಗಳಲ್ಲಿ ಅರ್ಹ ಕುಟುಂಬಗಳಿಗೆ ಕೈಗೆಟುಕುವ ವಸತಿ ಒದಗಿಸುವುದು.', 'ml': 'ഗ്രാമീണ മേഖലകളിലെ യോഗ്യരായ കുടുംബങ്ങൾക്ക് മിതമായ നിരക്കിൽ ഭവനം നൽകുക.' },
        eligibility: { minAge: 21, genders: [], occupations: ['किसान', 'Farmer', 'श्रमिक', 'Worker', 'अन्य', 'Other'] }
    },
    {
        id: 'startupIncubation',
        name: { 'hi': 'स्टार्टअप इन्क्यूबेशन टेक स्नातक', 'en': 'Startup Incubation for Tech Graduates', 'bn': 'টেক স্নাতকদের জন্য স্টার্টআপ ইনকিউবেশন', 'ta': 'தொழில்நுட்ப பட்டதாரிகளுக்கான ஸ்டார்ட்அப் இன்குபேஷன்', 'te': 'టెక్ గ్రాడ్యుయేట్ల కోసం స్టార్టప్ ఇంక్యుబేషన్', 'mr': 'टेक पदवीधरांसाठी स्टार्टअप इनक्युबेशन', 'gu': 'ટેક સ્નાતકો માટે સ્ટાર્ટઅપ ઇન્ક્યુબેશન', 'kn': 'ಟೆಕ್ ಪದವೀಧರರಿಗೆ ಸ್ಟಾರ್ಟ್‌ಅಪ್ ಇನ್‌ಕ್ಯುಬೇಶನ್', 'ml': 'ടെക് ബിരുദധാരികൾക്കുള്ള സ്റ്റാർട്ടപ്പ് ഇൻകുബേഷൻ' },
        description: { 'hi': 'प्रौद्योगिकी स्नातकों को अपने स्टार्टअप विचारों को विकसित करने के लिए इन्क्यूबेशन सहायता।', 'en': 'Incubation support for technology graduates to develop their startup ideas.', 'bn': 'প্রযুক্তি স্নাতকদের তাদের স্টার্টআপ ধারণা বিকাশের জন্য ইনকিউবেশন সহায়তা।', 'ta': 'தொழில்நுட்ப பட்டதாரிகள் தங்கள் ஸ்டார்ட்அப் யோசனைகளை உருவாக்க இன்குபேஷன் ஆதரவு.', 'te': 'సాంకేతిక గ్రాడ్యుయేట్లు తమ స్టార్టప్ ఆలోచనలను అభివృద్ధి చేయడానికి ఇంక్యుబేషన్ మద్దతు.', 'mr': 'तंत्रज्ञान पदवीधरांना त्यांच्या स्टार्टअप कल्पना विकसित करण्यासाठी इनक्युबेशन सहाय्य.', 'gu': 'ટેક્નોલોજી સ્નાતકોને તેમના સ્ટાર્ટઅપ વિચારો વિકસાવવા માટે ઇન્ક્યુબેશન સહાય.', 'kn': 'ತಂತ್ರಜ್ಞಾನ ಪದವೀಧರರಿಗೆ ತಮ್ಮ ಸ್ಟಾರ್ಟ್‌ಅಪ್ ಕಲ್ಪನೆಗಳನ್ನು ಅಭಿವೃದ್ಧಿಪಡಿಸಲು ಇನ್‌ಕ್ಯುಬೇಶನ್ ಬೆಂಬಲ.', 'ml': 'സാങ്കേതിക ബിരുദധാരികൾക്ക് അവരുടെ സ്റ്റാർട്ടപ്പ് ആശയങ്ങൾ വികസിപ്പിക്കുന്നതിനുള്ള ഇൻകുബേഷൻ പിന്തുണ.' },
        eligibility: { minAge: 21, maxAge: 35, genders: [], occupations: ['विद्यार्थी', 'Student', 'उद्यमी', 'Entrepreneur', 'अन्य', 'Other'] }
    },
    {
        id: 'maternityBenefit',
        name: { 'hi': 'मातृत्व लाभ योजना', 'en': 'Maternity Benefit Scheme', 'bn': 'মাতৃত্বকালীন সুবিধা প্রকল্প', 'ta': 'மகப்பேறு நலத் திட்டம்', 'te': 'ప్రసూతి ప్రయోజన పథకం', 'mr': 'मातृत्व लाभ योजना', 'gu': 'માતૃત્વ લાભ યોજના', 'kn': 'ಮಾತೃತ್ವ ಪ್ರಯೋಜನ ಯೋಜನೆ', 'ml': 'പ്രസവാനുകൂല്യ പദ്ധതി' },
        description: { 'hi': 'गर्भवती और स्तनपान कराने वाली महिलाओं के लिए वित्तीय सहायता।', 'en': 'Financial assistance for pregnant and lactating women.', 'bn': 'গর্ভবতী এবং স্তন্যদানকারী মায়েদের জন্য আর্থিক সহায়তা।', 'ta': 'கர்ப்பிணி மற்றும் பாலூட்டும் பெண்களுக்கான நிதி உதவி.', 'te': 'గర్భిణీ మరియు పాలిచ్చే మహిళలకు ఆర్థిక సహాయం.', 'mr': 'गर्भवती आणि स्तनदा मातांसाठी आर्थिक मदत.', 'gu': 'સગર્ભા અને સ્તનપાન કરાવતી મહિલાઓ માટે નાણાકીય સહાય.', 'kn': 'ಗರ್ಭಿಣಿ ಮತ್ತು ಹಾಲುಣಿಸುವ ಮಹಿಳೆಯರಿಗೆ ಆರ್ಥಿಕ ನೆರವು.', 'ml': 'ഗർഭിണികൾക്കും മുലയൂട്ടുന്ന അമ്മമാർക്കുമുള്ള സാമ്പത്തിക സഹായം.' },
        eligibility: { minAge: 18, maxAge: 40, genders: ['महिला', 'Female'], occupations: [] }
    },
    {
        id: 'vocationalYouth',
        name: { 'hi': 'युवाओं के लिए व्यावसायिक प्रशिक्षण', 'en': 'Vocational Training for Youth', 'bn': 'যুবকদের জন্য বৃত্তিমূলক প্রশিক্ষণ', 'ta': 'இளைஞர்களுக்கான தொழிற்பயிற்சி', 'te': 'యువత కోసం వృత్తి శిక్షణ', 'mr': 'युवकांसाठी व्यावसायिक प्रशिक्षण', 'gu': 'યુવાનો માટે વ્યાવસાયિક તાલીમ', 'kn': 'ಯುವಕರಿಗೆ ವೃತ್ತಿಪರ ತರಬೇತಿ', 'ml': 'യുവാക്കൾക്കുള്ള തൊഴിലധിഷ്ഠിത പരിശീലനം' },
        description: { 'hi': 'युवाओं को रोजगार के अवसर बढ़ाने के लिए विभिन्न ट्रेडों में व्यावसायिक प्रशिक्षण।', 'en': 'Vocational training in various trades for youth to enhance employment opportunities.', 'bn': 'যুবকদের কর্মসংস্থানের সুযোগ বাড়ানোর জন্য বিভিন্ন ট্রেডে বৃত্তিমূলক প্রশিক্ষণ।', 'ta': 'வேலை வாய்ப்புகளை மேம்படுத்த இளைஞர்களுக்கு பல்வேறு வர்த்தகங்களில் தொழிற்பயிற்சி.', 'te': 'ఉపాధి అవకాశాలను పెంచడానికి యువతకు వివిధ ట్రేడ్‌లలో వృత్తి శిక్షణ.', 'mr': 'रोजगाराच्या संधी वाढवण्यासाठी युवकांना विविध व्यवसायांमध्ये व्यावसायिक प्रशिक्षण.', 'gu': 'રોજગારીની તકો વધારવા માટે યુવાનોને વિવિધ વેપારમાં વ્યાવસાયિક તાલીમ.', 'kn': 'ಉದ್ಯೋಗಾವಕಾಶಗಳನ್ನು ಹೆಚ್ಚಿಸಲು ಯುವಕರಿಗೆ ವಿವಿಧ ವೃತ್ತಿಗಳಲ್ಲಿ ವೃತ್ತಿಪರ ತರಬೇತಿ.', 'ml': 'തൊഴിലവസരങ്ങൾ വർദ്ധിപ്പിക്കുന്നതിനായി യുവാക്കൾക്ക് വിവിധ ട്രേഡുകളിൽ തൊഴിലധിഷ്ഠിത പരിശീലനം.' },
        eligibility: { minAge: 16, maxAge: 28, genders: [], occupations: ['विद्यार्थी', 'Student', 'श्रमिक', 'Worker', 'अन्य', 'Other'] }
    },
    {
        id: 'artisanSupport',
        name: { 'hi': 'कारीगर सहायता कोष', 'en': 'Artisan Support Fund', 'bn': 'কারিগর সহায়তা তহবিল', 'ta': 'கைவினைஞர் ஆதரவு நிதி', 'te': 'చేతివృత్తులవారి సహాయ నిధి', 'mr': 'कारागीर सहाय्यता निधी', 'gu': 'કારીગર સહાય ભંડોળ', 'kn': 'ಕಲಾಕಾರರ ಬೆಂಬಲ ನಿಧಿ', 'ml': 'കരകൗശല തൊഴിലാളി സഹായ നിധി' },
        description: { 'hi': 'पारंपरिक कारीगरों और शिल्पकारों को वित्तीय और विपणन सहायता।', 'en': 'Financial and marketing support for traditional artisans and craftsmen.', 'bn': 'ঐতিহ্যবাহী কারিগর এবং কারুশিল্পীদের জন্য আর্থিক ও বিপণন সহায়তা।', 'ta': 'பாரம்பரிய கைவினைஞர்கள் மற்றும் கைவினைஞர்களுக்கான நிதி மற்றும் சந்தைப்படுத்தல் ஆதரவு.', 'te': 'సాంప్రదాయ చేతివృత్తులవారు మరియు హస్తకళాకారులకు ఆర్థిక మరియు మార్కెటింగ్ మద్దతు.', 'mr': 'पारंपारिक कारागीर आणि हस्तकलाकारांना आर्थिक आणि विपणन सहाय्य.', 'gu': 'પારંપરિક કારીગરો અને શિલ્પકારોને નાણાકીય અને માર્કેટિંગ સહાય.', 'kn': 'ಸಾಂಪ್ರದಾಯಿಕ ಕಲಾಕಾರರು ಮತ್ತು ಕುಶಲಕರ್ಮಿಗಳಿಗೆ ಆರ್ಥಿಕ ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಬೆಂಬಲ.', 'ml': 'പരമ്പരാഗത കരകൗശല വിദഗ്ധർക്കും ശില്പികൾക്കുമുള്ള സാമ്പത്തികവും വിപണനപരവുമായ പിന്തുണ.' },
        eligibility: { minAge: 18, genders: [], occupations: ['श्रमिक', 'Worker', 'उद्यमी', 'Entrepreneur', 'अन्य', 'Other'] }
    },
    {
        id: 'higherEduFinance',
        name: { 'hi': 'उच्च शिक्षा वित्तीय सहायता', 'en': 'Financial Aid for Higher Education', 'bn': 'উচ্চশিক্ষার জন্য আর্থিক সহায়তা', 'ta': 'உயர்கல்விக்கான நிதி உதவி', 'te': 'ఉన్నత విద్య కోసం ఆర్థిక సహాయం', 'mr': 'उच्च शिक्षणासाठी आर्थिक मदत', 'gu': 'ઉચ્ચ શિક્ષણ માટે નાણાકીય સહાય', 'kn': 'ಉನ್ನತ ಶಿಕ್ಷಣಕ್ಕಾಗಿ ಆರ್ಥಿಕ ನೆರವು', 'ml': 'ഉന്നത വിദ്യാഭ്യാസത്തിനുള്ള സാമ്പത്തിക സഹായം' },
        description: { 'hi': 'जरूरतमंद छात्रों को स्नातक और स्नातकोत्तर अध्ययन के लिए वित्तीय सहायता।', 'en': 'Financial aid for needy students for undergraduate and postgraduate studies.', 'bn': 'স্নাতক এবং স্নাতকোত্তর পড়াশোনার জন্য অভাবী ছাত্রদের আর্থিক সহায়তা।', 'ta': 'இளங்கலை மற்றும் முதுகலை படிப்புகளுக்குத் தேவைப்படும் மாணவர்களுக்கு நிதி உதவி.', 'te': 'అండర్గ్రాడ్యుయేట్ మరియు పోస్ట్ గ్రాడ్యుయేట్ అధ్యయనాల కోసం అవసరమైన విద్యార్థులకు ఆర్థిక సహాయం.', 'mr': 'पदवी आणि पदव्युत्तर शिक्षणासाठी गरजू विद्यार्थ्यांना आर्थिक मदत.', 'gu': 'સ્નાતક અને અનુસ્નાતક અભ્યાસ માટે જરૂરિયાતમંદ વિદ્યાર્થીઓને નાણાકીય સહાય.', 'kn': 'ಪದವಿ ಮತ್ತು ಸ್ನಾತಕೋತ್ತರ ಅಧ್ಯಯನಕ್ಕಾಗಿ ಅಗತ್ಯವಿರುವ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಆರ್ಥಿಕ ನೆರವು.', 'ml': 'ബിരുദ, ബിരുദാനന്തര പഠനത്തിന് ആവശ്യക്കാരായ വിദ്യാർത്ഥികൾക്ക് സാമ്പത്തിക സഹായം.' },
        eligibility: { minAge: 17, maxAge: 28, genders: [], occupations: ['विद्यार्थी', 'Student'] }
    },
    {
        id: 'smallRetailerSupport',
        name: { 'hi': 'लघु खुदरा विक्रेता सहायता योजना', 'en': 'Support for Small Retailers', 'bn': 'ছোট খুচরা বিক্রেতাদের জন্য সহায়তা', 'ta': 'சிறு சில்லறை விற்பனையாளர்களுக்கான ஆதரவு', 'te': 'చిన్న రిటైలర్లకు మద్దతు', 'mr': 'लहान किरकोळ विक्रेत्यांसाठी सहाय्यता', 'gu': 'નાના છૂટક વિક્રેતાઓ માટે સહાય', 'kn': 'ಸಣ್ಣ ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿಗಳಿಗೆ ಬೆಂಬಲ', 'ml': 'ചെറുകിട റീട്ടെയിലർമാർക്കുള്ള പിന്തുണ' },
        description: { 'hi': 'छोटे खुदरा विक्रेताओं को अपने व्यवसाय को आधुनिक बनाने और विस्तारित करने के लिए ऋण और सब्सिडी।', 'en': 'Loans and subsidies for small retailers to modernize and expand their businesses.', 'bn': 'ছোট খুচরা বিক্রেতাদের তাদের ব্যবসা আধুনিকীকরণ এবং প্রসারিত করার জন্য ঋণ এবং ভর্তুকি।', 'ta': 'சிறு சில்லறை விற்பனையாளர்கள் தங்கள் வணிகங்களை நவீனமயமாக்க மற்றும் விரிவுபடுத்த கடன்கள் மற்றும் மானியங்கள்.', 'te': 'చిన్న రిటైలర్లు తమ వ్యాపారాలను ఆధునీకరించడానికి మరియు విస్తరించడానికి రుణాలు మరియు సబ్సిడీలు.', 'mr': 'लहान किरकोळ विक्रेत्यांना त्यांचा व्यवसाय आधुनिक करण्यासाठी आणि विस्तारित करण्यासाठी कर्ज आणि अनुदान.', 'gu': 'નાના છૂટક વિક્રેતાઓને તેમના વ્યવસાયને આધુનિક બનાવવા અને વિસ્તારવા માટે લોન અને સબસિડી.', 'kn': 'ಸಣ್ಣ ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿಗಳಿಗೆ ತಮ್ಮ ವ್ಯವಹಾರಗಳನ್ನು ಆಧುನೀಕರಿಸಲು ಮತ್ತು ವಿಸ್ತರಿಸಲು ಸಾಲಗಳು ಮತ್ತು ಸಬ್ಸಿಡಿಗಳು.', 'ml': 'ചെറുകിട റീട്ടെയിലർമാർക്ക് അവരുടെ ബിസിനസുകൾ നവീകരിക്കുന്നതിനും വികസിപ്പിക്കുന്നതിനുമുള്ള വായ്പകളും സബ്സിഡികളും.' },
        eligibility: { minAge: 22, maxAge: 60, genders: [], occupations: ['उद्यमी', 'Entrepreneur', 'अन्य', 'Other'] }
    },
    {
        id: 'youthSkillIndia',
        name: { 'hi': 'युवा कौशल भारत कार्यक्रम', 'en': 'Youth Skill India Program', 'bn': 'যুব দক্ষতা ভারত কর্মসূচি', 'ta': 'இளைஞர் திறன் இந்தியா திட்டம்', 'te': 'యువ నైపుణ్యం భారతదేశ కార్యక్రమం', 'mr': 'युवा कौशल्य भारत कार्यक्रम', 'gu': 'યુવા કૌશલ્ય ભારત કાર્યક્રમ', 'kn': 'ಯುವ ಕೌಶಲ್ಯ ಭಾರತ ಕಾರ್ಯಕ್ರಮ', 'ml': 'യുവ നൈപുണ്യ ഇന്ത്യ പ്രോഗ്രാം' },
        description: { 'hi': 'युवाओं को उद्योग-प्रासंगिक कौशल में प्रशिक्षित करना और उन्हें रोजगार के लिए तैयार करना।', 'en': 'Training youth in industry-relevant skills and making them job-ready.', 'bn': 'যুবকদের শিল্প-প্রাসঙ্গিক দক্ষতায় প্রশিক্ষণ দেওয়া এবং তাদের চাকরির জন্য প্রস্তুত করা।', 'ta': 'இளைஞர்களுக்கு தொழில்-தொடர்புடைய திறன்களில் பயிற்சி அளித்தல் மற்றும் அவர்களை வேலைக்குத் தயார்படுத்துதல்.', 'te': 'యువతకు పరిశ్రమ-సంబంధిత నైపుణ్యాలలో శిక్షణ ఇవ్వడం మరియు వారిని ఉద్యోగానికి సిద్ధం చేయడం.', 'mr': 'युवकांना उद्योग-संबंधित कौशल्यांमध्ये प्रशिक्षित करणे आणि त्यांना रोजगारासाठी तयार करणे.', 'gu': 'યુવાનોને ઉદ્યોગ-સંબંધિત કૌશલ્યોમાં તાલીમ આપવી અને તેમને રોજગારી માટે તૈયાર કરવા.', 'kn': 'ಯುವಕರಿಗೆ ಉದ್ಯಮ-ಸಂಬಂಧಿತ ಕೌಶಲ್ಯಗಳಲ್ಲಿ ತರಬೇತಿ ನೀಡುವುದು ಮತ್ತು ಅವರನ್ನು ಉದ್ಯೋಗಕ್ಕೆ ಸಿದ್ಧಪಡಿಸುವುದು.', 'ml': 'യുവാക്കൾക്ക് വ്യവസായ-അനുയോജ്യമായ കഴിവുകളിൽ പരിശീലനം നൽകുകയും അവരെ തൊഴിലിന് സജ്ജമാക്കുകയും ചെയ്യുക.' },
        eligibility: { minAge: 18, maxAge: 35, genders: [], occupations: ['विद्यार्थी', 'Student', 'श्रमिक', 'Worker', 'उद्यमी', 'Entrepreneur', 'अन्य', 'Other'] }
    },
    {
        id: 'farmerWeatherInsurance',
        name: { 'hi': 'किसान मौसम बीमा योजना', 'en': 'Farmers\' Weather Insurance Scheme', 'bn': 'কৃষক আবহাওয়া বীমা প্রকল্প', 'ta': 'விவசாயிகள் வானிலை காப்பீட்டுத் திட்டம்', 'te': 'రైతుల వాతావరణ బీమా పథకం', 'mr': 'शेतकरी हवामान विमा योजना', 'gu': 'ખેડૂત હવામાન વીમા યોજના', 'kn': 'ರೈತರ ಹವಾಮಾನ ವಿಮಾ ಯೋಜನೆ', 'ml': 'കർഷക കാലാവസ്ഥാ ഇൻഷുറൻസ് പദ്ധതി' },
        description: { 'hi': 'किसानों को प्रतिकूल मौसम की स्थिति के कारण फसल के नुकसान से बचाने के लिए बीमा।', 'en': 'Insurance for farmers to protect against crop loss due to adverse weather conditions.', 'bn': 'প্রতিকূল আবহাওয়ার কারণে ফসলের ক্ষতি থেকে কৃষকদের রক্ষা করার জন্য বীমা।', 'ta': 'பாதகமான வானிலை காரணமாக பயிர் இழப்புக்கு எதிராக விவசாயிகளைப் பாதுகாக்க காப்பீடு.', 'te': 'ప్రతికూల వాతావరణ పరిస్థితుల కారణంగా పంట నష్టం నుండి రైతులను రక్షించడానికి బీమా.', 'mr': 'प्रतिकूल हवामानामुळे होणाऱ्या पीक नुकसानापासून शेतकऱ्यांचे संरक्षण करण्यासाठी विमा.', 'gu': 'ખેડૂતોને પ્રતિકૂળ હવામાન પરિસ્થિતિઓને કારણે પાકના નુકસાનથી બચાવવા માટે વીમો.', 'kn': 'ಪ್ರತಿಕೂಲ ಹವಾಮಾನ ಪರಿಸ್ಥಿತಿಗಳಿಂದ ಉಂಟಾಗುವ ಬೆಳೆ ನಷ್ಟದಿಂದ ರೈತರನ್ನು ರಕ್ಷಿಸಲು ವಿಮೆ.', 'ml': 'പ്രതികൂല കാലാവസ്ഥ കാരണം ഉണ്ടാകുന്ന വിളനാശത്തിൽ നിന്ന് കർഷകരെ സംരക്ഷിക്കുന്നതിനുള്ള ഇൻഷുറൻസ്.' },
        eligibility: { minAge: 18, genders: [], occupations: ['किसान', 'Farmer'] }
    },
    {
        id: 'msmeGrowthFund',
        name: { 'hi': 'MSME विकास निधि', 'en': 'MSME Growth Fund', 'bn': 'এমএসএমই বৃদ্ধি তহবিল', 'ta': 'குறு, சிறு மற்றும் நடுத்தர நிறுவன வளர்ச்சி நிதி', 'te': 'MSME వృద్ధి నిధి', 'mr': 'MSME विकास निधी', 'gu': 'MSME વૃદ્ધિ ભંડોળ', 'kn': 'ಎಂಎಸ್‌ಎಂಇ ಬೆಳವಣಿಗೆ ನಿಧಿ', 'ml': 'എംഎസ്എംഇ വളർച്ചാ ഫണ്ട്' },
        description: { 'hi': 'मौजूदा सूक्ष्म, लघु और मध्यम उद्यमों के विकास और विस्तार के लिए वित्तीय सहायता।', 'en': 'Financial support for the growth and expansion of existing Micro, Small, and Medium Enterprises.', 'bn': 'বিদ্যমান মাইক্রো, ছোট এবং মাঝারি উদ্যোগগুলির বৃদ্ধি এবং সম্প্রসারণের জন্য আর্থিক সহায়তা।', 'ta': 'தற்போதுள்ள குறு, சிறு மற்றும் நடுத்தர நிறுவனங்களின் வளர்ச்சி மற்றும் விரிவாக்கத்திற்கான நிதி ஆதரவு.', 'te': 'ఇప్పటికే ఉన్న మైక్రో, స్మాల్ మరియు మీడియం ఎంటర్‌ప్రైజెస్ వృద్ధి మరియు విస్తరణ కోసం ఆర్థిక సహాయం.', 'mr': 'विद्यमान सूक्ष्म, लघु आणि मध्यम उद्योगांच्या वाढीसाठी आणि विस्तारासाठी आर्थिक सहाय्य.', 'gu': 'હાલના સૂક્ષ્મ, લઘુ અને મધ્યમ સાહસોના વિકાસ અને વિસ્તરણ માટે નાણાકીય સહાય.', 'kn': 'ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ ಸೂಕ್ಷ್ಮ, ಸಣ್ಣ ಮತ್ತು ಮಧ್ಯಮ ಉದ್ಯಮಗಳ ಬೆಳವಣಿಗೆ ಮತ್ತು ವಿಸ್ತರಣೆಗಾಗಿ ಆರ್ಥಿಕ ಬೆಂಬಲ.', 'ml': 'നിലവിലുള്ള മൈക്രോ, ചെറുകിട, ഇടത്തരം സംരംഭങ്ങളുടെ വളർച്ചയ്ക്കും വികാസത്തിനുമുള്ള സാമ്പത്തിക സഹായം.' },
        eligibility: { minAge: 21, genders: [], occupations: ['उद्यमी', 'Entrepreneur'] }
    },
    {
        id: 'singleMotherSupport',
        name: { 'hi': 'एकल माँ सहायता योजना', 'en': 'Single Mother Support Scheme', 'bn': 'একক মা সহায়তা প্রকল্প', 'ta': 'ஒற்றைத் தாய் ஆதரவுத் திட்டம்', 'te': 'ఒంటరి తల్లి సహాయ పథకం', 'mr': 'एकल माता सहाय्यता योजना', 'gu': 'એકલ માતા સહાય યોજના', 'kn': 'ಒಂಟಿ ತಾಯಿ ಬೆಂಬಲ ಯೋಜನೆ', 'ml': 'ഏക രക്ഷാകർതൃ സഹായ പദ്ധതി' },
        description: { 'hi': 'एकल माताओं को उनके बच्चों की परवरिश और शिक्षा के लिए वित्तीय और सामाजिक सहायता।', 'en': 'Financial and social support for single mothers for their children\'s upbringing and education.', 'bn': 'একক মায়েদের তাদের সন্তানদের লালনপালন এবং শিক্ষার জন্য আর্থিক ও সামাজিক সহায়তা।', 'ta': 'ஒற்றைத் தாய்மார்களுக்கு தங்கள் குழந்தைகளின் வளர்ப்பு மற்றும் கல்விக்கான நிதி மற்றும் சமூக ஆதரவு.', 'te': 'ఒంటరి తల్లులకు వారి పిల్లల పెంపకం మరియు విద్య కోసం ఆర్థిక మరియు సామాజిక మద్దతు.', 'mr': 'एकल मातांना त्यांच्या मुलांच्या संगोपनासाठी आणि शिक्षणासाठी आर्थिक आणि सामाजिक सहाय्य.', 'gu': 'એકલ માતાઓને તેમના બાળકોના ઉછેર અને શિક્ષણ માટે નાણાકીય અને સામાજિક સહાય.', 'kn': 'ಒಂಟಿ ತಾಯಂದಿರಿಗೆ ತಮ್ಮ ಮಕ್ಕಳ ಪಾಲನೆ ಮತ್ತು ಶಿಕ್ಷಣಕ್ಕಾಗಿ ಆರ್ಥಿಕ ಮತ್ತು ಸಾಮಾಜಿಕ ಬೆಂಬಲ.', 'ml': 'ഏക രക്ഷാകർത്താക്കൾക്ക് അവരുടെ കുട്ടികളുടെ വളർത്തലിനും വിദ്യാഭ്യാസത്തിനുമുള്ള സാമ്പത്തികവും സാമൂഹികവുമായ പിന്തുണ.' },
        eligibility: { minAge: 20, maxAge: 50, genders: ['महिला', 'Female'], occupations: ['गृहिणी', 'Homemaker', 'श्रमिक', 'Worker', 'अन्य', 'Other'] }
    },
    {
        id: 'sportsTalent',
        name: { 'hi': 'खेल प्रतिभा प्रोत्साहन योजना', 'en': 'Sports Talent Promotion Scheme', 'bn': 'ক্রীড়া প্রতিভা প্রচার প্রকল্প', 'ta': 'விளையாட்டுத் திறமை மேம்பாட்டுத் திட்டம்', 'te': 'క్రీడా ప్రతిభ ప్రోత్సాహక పథకం', 'mr': 'क्रीडा प्रतिभा प्रोत्साहन योजना', 'gu': 'રમતગમત પ્રતિભા પ્રોત્સાહન યોજના', 'kn': 'ಕ್ರೀಡಾ ಪ್ರತಿಭೆ ಪ್ರೋತ್ಸಾಹ ಯೋಜನೆ', 'ml': 'കായിക പ്രതിഭാ പ്രോത്സാഹന പദ്ധതി' },
        description: { 'hi': 'युवा खेल प्रतिभाओं की पहचान और उन्हें राष्ट्रीय और अंतर्राष्ट्रीय स्तर पर प्रशिक्षण के लिए सहायता।', 'en': 'Identifying young sports talents and supporting them for training at national and international levels.', 'bn': 'তরুণ ক্রীড়া প্রতিভা চিহ্নিতকরণ এবং জাতীয় ও আন্তর্জাতিক পর্যায়ে প্রশিক্ষণের জন্য তাদের সহায়তা করা।', 'ta': 'இளம் விளையாட்டுத் திறமைகளை அடையாளம் கண்டு, தேசிய மற்றும் சர்வதேச அளவில் பயிற்சிக்காக அவர்களை ஆதரித்தல்.', 'te': 'యువ క్రీడా ప్రతిభను గుర్తించడం మరియు జాతీయ మరియు అంతర్జాతీయ స్థాయిలో శిక్షణ కోసం వారికి మద్దతు ఇవ్వడం.', 'mr': 'युवा क्रीडा प्रतिभा ओळखणे आणि त्यांना राष्ट्रीय आणि आंतरराष्ट्रीय स्तरावर प्रशिक्षणासाठी सहाय्य करणे.', 'gu': 'યુવા રમતગમત પ્રતિભાઓને ઓળખવા અને તેમને રાષ્ટ્રીય અને આંતરરાષ્ટ્રીય સ્તરે તાલીમ માટે સહાય કરવી.', 'kn': 'ಯುವ ಕ್ರೀಡಾ ಪ್ರತಿಭೆಗಳನ್ನು ಗುರುತಿಸುವುದು ಮತ್ತು ರಾಷ್ಟ್ರೀಯ ಮತ್ತು ಅಂತರರಾಷ್ಟ್ರೀಯ ಮಟ್ಟದಲ್ಲಿ ತರಬೇತಿಗಾಗಿ ಅವರನ್ನು ಬೆಂಬಲಿಸುವುದು.', 'ml': 'യുവ കായിക പ്രതിഭകളെ കണ്ടെത്തുകയും ദേശീയ അന്തർദേശീയ തലങ്ങളിൽ പരിശീലനത്തിനായി അവരെ പിന്തുണയ്ക്കുകയും ചെയ്യുക.' },
        eligibility: { minAge: 10, maxAge: 25, genders: [], occupations: ['विद्यार्थी', 'Student', 'अन्य', 'Other'] }
    },
    {
        id: 'cleanEnergySubsidy',
        name: { 'hi': 'स्वच्छ ऊर्जा सब्सिडी योजना', 'en': 'Clean Energy Subsidy Scheme', 'bn': 'পরিষ্কার শক্তি ভর্তুকি প্রকল্প', 'ta': 'தூய்மையான எரிசக்தி மானியத் திட்டம்', 'te': 'క్లీన్ ఎనర్జీ సబ్సిడీ పథకం', 'mr': 'स्वच्छ ऊर्जा अनुदान योजना', 'gu': 'સ્વચ્છ ઉર્જા સબસિડી યોજના', 'kn': 'ಸ್ವಚ್ಛ ಇಂಧನ ಸಬ್ಸಿಡಿ ಯೋಜನೆ', 'ml': 'ശുദ്ധമായ ഊർജ്ജ സബ്സിഡി പദ്ധതി' },
        description: { 'hi': 'घरों में सौर पैनल और अन्य स्वच्छ ऊर्जा समाधान स्थापित करने के लिए सब्सिडी।', 'en': 'Subsidies for installing solar panels and other clean energy solutions in households.', 'bn': 'বাড়িতে সৌর প্যানেল এবং অন্যান্য পরিষ্কার শক্তি সমাধান স্থাপনের জন্য ভর্তুকি।', 'ta': 'வீடுகளில் சோலார் பேனல்கள் மற்றும் பிற தூய்மையான எரிசக்தி தீர்வுகளை நிறுவுவதற்கான மானியங்கள்.', 'te': 'గృహాలలో సౌర ఫలకాలు మరియు ఇతర స్వచ్ఛమైన శక్తి పరిష్కారాలను వ్యవస్థాపించడానికి సబ్సిడీలు.', 'mr': 'घरांमध्ये सौर पॅनेल आणि इतर स्वच्छ ऊर्जा उपाय स्थापित करण्यासाठी अनुदान.', 'gu': 'ઘરોમાં સોલાર પેનલ અને અન્ય સ્વચ્છ ઉર્જા ઉકેલો સ્થાપિત કરવા માટે સબસિડી.', 'kn': 'ಮನೆಗಳಲ್ಲಿ ಸೌರ ಫಲಕಗಳು ಮತ್ತು ಇತರ ಸ್ವಚ್ಛ ಇಂಧನ ಪರಿಹಾರಗಳನ್ನು ಸ್ಥಾಪಿಸಲು ಸಬ್ಸಿಡಿಗಳು.', 'ml': 'വീടുകളിൽ സോളാർ പാനലുകളും മറ്റ് ശുദ്ധമായ ഊർജ്ജ പരിഹാരങ്ങളും സ്ഥാപിക്കുന്നതിനുള്ള സബ്സിഡികൾ.' },
        eligibility: { minAge: 25, genders: [], occupations: [] } // General household scheme
    }
];


// --- Translation Function ---
function setLanguage(lang) {
    if (!translations[lang]) {
        console.warn(`Language ${lang} not found, defaulting to English.`);
        lang = 'en';
    }

    const currentTranslations = translations[lang] || translations['en'];
    const fallbackTranslations = translations['en'];

    document.querySelectorAll('[data-translate-key]').forEach(element => {
        const key = element.getAttribute('data-translate-key');
        let translation = currentTranslations[key] || fallbackTranslations[key];
        if (!translation && key) { 
            translation = `Missing: ${key}`;
        } else if (!translation && !key) { 
             translation = '';
        }
        element.innerHTML = translation;
    });

    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        element.placeholder = currentTranslations[key] || fallbackTranslations[key] || `Missing: ${key}`;
    });

    document.querySelectorAll('[data-translate-aria-label]').forEach(element => {
        const key = element.getAttribute('data-translate-aria-label');
        element.setAttribute('aria-label', currentTranslations[key] || fallbackTranslations[key] || `Missing: ${key}`);
    });
    
    document.querySelectorAll('[data-translate-alt]').forEach(element => {
        const key = element.getAttribute('data-translate-alt');
        element.alt = currentTranslations[key] || fallbackTranslations[key] || `Missing: ${key}`;
    });

    document.querySelectorAll('svg title[data-translate-key]').forEach(element => {
        const key = element.getAttribute('data-translate-key');
        element.textContent = currentTranslations[key] || fallbackTranslations[key] || `Missing: ${key}`;
    });

    document.documentElement.lang = lang;
    localStorage.setItem('selectedLanguage', lang);
    if (languageSwitcher) languageSwitcher.value = lang;

    const copyrightElement = document.getElementById('copyright-text');
    if (copyrightElement) {
        copyrightElement.innerHTML = currentTranslations['footer_copyright'] || fallbackTranslations['footer_copyright'];
    }
}

// --- Language Switcher Event Listener ---
if (languageSwitcher) {
    languageSwitcher.addEventListener('change', (event) => {
        setLanguage(event.target.value);
    });
}

// --- Load Saved Language or Default ---
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'hi';
    
    
    const portfolioLinkEl = document.getElementById('developer-portfolio-link');
    const githubLinkEl = document.getElementById('developer-github-link');
    const linkedinLinkEl = document.getElementById('developer-linkedin-link');

     
    const YOUR_PORTFOLIO_URL = "https://www.abhisheksinghshekhawat.com/"; 
    const YOUR_GITHUB_URL = "https://github.com/AbhishekSinghShekhawatSDE"; 
    const YOUR_LINKEDIN_URL = "https://www.linkedin.com/in/abhisheksinghshekhawat/"; 

    if (developerAvatar) developerAvatar.src = YOUR_AVATAR_URL;
    if (portfolioLinkEl) portfolioLinkEl.href = YOUR_PORTFOLIO_URL;
    if (githubLinkEl) githubLinkEl.href = YOUR_GITHUB_URL;
    if (linkedinLinkEl) linkedinLinkEl.href = YOUR_LINKEDIN_URL;
    
    setLanguage(savedLang); // Set language AFTER setting fixed URLs, but so dev name/bio get translated
    animateCounters();
});


// --- Function to find schemes locally (REVISED FOR NEW FORMAT) ---
function findLocalSchemes(userInfo, language) {
    const userAge = parseInt(userInfo.age, 10);
    const userGender = userInfo.gender; 
    const userOccupation = userInfo.occupation; 

    const currentTrans = translations[language] || translations['en'];
    const fallbackTrans = translations['en']; 

    const eligibleSchemes = localSchemesData.filter(scheme => {
        let isAgeEligible = true;
        if (scheme.eligibility.minAge !== undefined && userAge < scheme.eligibility.minAge) {
            isAgeEligible = false;
        }
        if (scheme.eligibility.maxAge !== undefined && userAge > scheme.eligibility.maxAge) {
            isAgeEligible = false;
        }

        let isGenderEligible = true;
        if (scheme.eligibility.genders && scheme.eligibility.genders.length > 0) {
            isGenderEligible = scheme.eligibility.genders.includes(userGender) ||
                               (userGender === 'अन्य' && scheme.eligibility.genders.includes('Other'));
        }

        let isOccupationEligible = true;
        if (scheme.eligibility.occupations && scheme.eligibility.occupations.length > 0) {
            isOccupationEligible = scheme.eligibility.occupations.includes(userOccupation);
        }
        
        return isAgeEligible && isGenderEligible && isOccupationEligible;
    });

    // --- Build User Profile Section ---
    let outputText = `${currentTrans['output_user_profile_title'] || fallbackTrans['output_user_profile_title']}\n`;
    outputText += "------------------------------------\n";
    outputText += `${currentTrans['output_name_label'] || fallbackTrans['output_name_label']}: ${userInfo.name}\n`;
    outputText += `${currentTrans['output_age_label'] || fallbackTrans['output_age_label']}: ${userInfo.age} ${(language === 'hi' ? 'वर्ष' : (language === 'bn' ? 'বছর' : (language === 'ta' ? 'ஆண்டுகள்' : (language === 'te' ? 'సంవత్సరాలు' : (language === 'mr' ? 'वर्षे' : (language === 'gu' ? 'વર્ષ' : (language === 'kn' ? 'ವರ್ಷಗಳು' : (language === 'ml' ? 'വർഷം' : 'years'))))))))}\n`;
    
    let translatedGender = userInfo.gender;
    const genderKey = `form_gender_${userInfo.gender.toLowerCase()}`;
    if (currentTrans[genderKey]) {
        translatedGender = currentTrans[genderKey];
    } else if (fallbackTrans[genderKey]) {
        translatedGender = fallbackTrans[genderKey];
    }
    outputText += `${currentTrans['output_gender_label'] || fallbackTrans['output_gender_label']}: ${translatedGender}\n`;

    let translatedOccupation = userInfo.occupation;
    const occupationKey = `form_occupation_${userInfo.occupation.toLowerCase().replace(/ /g, '_')}`;
    if (currentTrans[occupationKey]) {
        translatedOccupation = currentTrans[occupationKey];
    } else if (fallbackTrans[occupationKey]) {
        translatedOccupation = fallbackTrans[occupationKey];
    }
    outputText += `${currentTrans['output_occupation_label'] || fallbackTrans['output_occupation_label']}: ${translatedOccupation}\n`;
    outputText += "------------------------------------\n\n";

    // --- Build Eligible Schemes Section ---
    outputText += `${currentTrans['output_schemes_title'] || fallbackTrans['output_schemes_title']}\n`;
    outputText += "------------------------------------\n\n";

    if (eligibleSchemes.length === 0) {
        outputText += (currentTrans['no_schemes_found'] || fallbackTrans['no_schemes_found'] || 'No suitable schemes found matching your criteria. Please visit official government portals for more information.');
    } else {
        const schemesToShow = 6; 
        eligibleSchemes.slice(0, schemesToShow).forEach((scheme, index) => {
            const schemeName = scheme.name[language] || scheme.name['en'] || 'Unnamed Scheme';
            const schemeDesc = scheme.description[language] || scheme.description['en'] || 'No description available.';
            
            outputText += `${index + 1}. ${currentTrans['output_scheme_name_label'] || fallbackTrans['output_scheme_name_label']}: ${schemeName}\n`;
            outputText += `   ${currentTrans['output_description_label'] || fallbackTrans['output_description_label']}: ${schemeDesc}\n\n`;
        });

        if (eligibleSchemes.length > schemesToShow) {
            const remainingSchemes = eligibleSchemes.length - schemesToShow;
            outputText += `\n${currentTrans['output_more_schemes_1'] || fallbackTrans['output_more_schemes_1']}`;
            outputText += `${remainingSchemes}`;
            if (remainingSchemes === 1) {
                outputText += `${currentTrans['output_more_schemes_2_singular'] || fallbackTrans['output_more_schemes_2_singular']}`;
            } else {
                outputText += `${currentTrans['output_more_schemes_2_plural'] || fallbackTrans['output_more_schemes_2_plural']}`;
            }
            outputText += `${currentTrans['output_more_schemes_3'] || fallbackTrans['output_more_schemes_3']}`;
        }
    }
    return outputText;
}


// --- Form Submission ---
if (userInfoForm) {
    userInfoForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        if(loader) loader.style.display = 'block';
        if(schemesOutputDiv) schemesOutputDiv.style.display = 'none';
        if(apiResponsePre) apiResponsePre.textContent = '';
        if(submitBtn) submitBtn.disabled = true;
        
        const currentLang = localStorage.getItem('selectedLanguage') || 'hi';
        const loadingTextKey = 'form_submit_loading';
        const submitButtonTextKey = 'form_submit_button';
        
        const currentTrans = translations[currentLang] || translations['en'];
        const fallbackTrans = translations['en'];

        if(submitBtn) submitBtn.innerHTML = currentTrans[loadingTextKey] || fallbackTrans[loadingTextKey] || 'Loading...';

        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const gender = document.getElementById('gender').value; 
        const occupation = document.getElementById('occupation').value; 

        const userInfo = { name, age, gender, occupation };

        await new Promise(resolve => setTimeout(resolve, 500)); 

        try {
            const schemeResultsText = findLocalSchemes(userInfo, currentLang); 
            if(apiResponsePre) apiResponsePre.textContent = schemeResultsText;
            if(schemesOutputDiv) schemesOutputDiv.style.display = 'block';

        } catch (error) {
            console.error('Error finding local schemes:', error);
            if(apiResponsePre) apiResponsePre.textContent = "An error occurred while processing your request."; 
            if(schemesOutputDiv) schemesOutputDiv.style.display = 'block';
        } finally {
            if(loader) loader.style.display = 'none';
            if(submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = currentTrans[submitButtonTextKey] || fallbackTrans[submitButtonTextKey] || 'Get My Schemes';
            }
            if (schemesOutputDiv && schemesOutputDiv.style.display === 'block') {
                schemesOutputDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
}

// --- Smooth Scroll for Navigation ---
document.querySelectorAll('header nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// --- Animated Counters for Stats Section ---
function animateCounters() {
    const counters = document.querySelectorAll('.count-up');
    const speed = 200; 

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-count');
        counter.innerText = '0'; 

        const observer = new IntersectionObserver((entries, observerInstance) => {
            if(entries[0].isIntersecting) {
                let current = 0;
                const increment = target / speed;
                const updateCount = () => {
                    if (current < target) {
                        current += increment;
                        counter.innerText = Math.ceil(current);
                        setTimeout(updateCount, 15); 
                    } else {
                        counter.innerText = target; 
                    }
                };
                updateCount();
                observerInstance.unobserve(counter); 
            }
        }, { threshold: 0.5 }); 

        observer.observe(counter);
    });
}
