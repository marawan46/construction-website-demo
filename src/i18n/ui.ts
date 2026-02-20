export const languages = {
  en: 'English',
  ar: 'العربية',
};

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.service': 'Service',
    'nav.project': 'Projects',
    'nav.freequote': 'Get Free Quote',
    'nav.ourteam': 'Our Team',

    'hero.head1': 'Precision Engineering.',
    'hero.head2': 'Masterful Execution.',

    'hero.sub': 'Your ideas & Dreams Are Transformed By Us Into Long-Lasting, Engineered Buildings        From commercial skyscrapers to luxury residential builds, we bring blueprints to life with uncompromising safety and industry-leading innovation.',
    'hero.btn1': 'Get Start',
    'hero.btn2': 'Our Service',
    'hero.exp.num': '25+',
    'hero.exp': 'Years.exp',
    'hero.projects.num': '200+',
    'hero.projects': 'Projects done',

    'whyus.title': "Why Choose MM Builds",


    'test.title':"What Our Clients Say",


    "contact.title": "Get A Free Quote",
    "contact.name": "Full Name",
    "contact.email": "Email Address",
    "contact.phone": "Phone Number",
    "contact.service": "Select Service",
    "contact.message": "Message",
    "contact.submit": "Send Request",
    "contact.info": "Contact Info",



    'nav.lang': 'العربية',
    'nav.langLink': '/ar/',
  },
ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.service': 'خدماتنا',
    'nav.project': 'المشاريع',
    'nav.freequote': 'استشارة مجانية',
    'nav.ourteam': 'فريقنا',

    'hero.head1': 'هندسة دقيقة.',
    'hero.head2': 'تنفيذ احترافي.',

    'hero.sub': 'نحول أفكارك وأحلامك إلى مباني هندسية مستدامة. من ناطحات السحاب التجارية إلى المباني السكنية الفاخرة، نحول المخططات إلى واقع مع سلامة لا تهاون فيها وابتكار رائد في الصناعة.',
    'hero.btn1': 'ابدأ الآن',
    'hero.btn2': 'خدماتنا',
    'hero.exp.num': '+25',
    'hero.exp': 'سنوات خبرة',
    'hero.projects.num': '+300',
    'hero.projects': 'مشروع مكتمل',

    'whyus.title':"لماذا تختار MM Builds",

    'test.title':"What Our Clients Say",


   "contact.title": "احصل على عرض سعر مجاني",
    "contact.name": "الاسم الكامل",
    "contact.email": "البريد الإلكتروني",
    "contact.phone": "رقم الهاتف",
    "contact.service": "اختر الخدمة",
    "contact.message": "الرسالة",
    "contact.submit": "إرسال الطلب",
    "contact.info": "معلومات التواصل",




    'nav.lang': 'English',
    'nav.langLink': '/',
  },
} as const;

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui['en']) {
    return ui[lang][key] || ui['en'][key];
  };
}