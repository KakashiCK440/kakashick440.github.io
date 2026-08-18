// Bilingual EN/AR toggle (full RTL flip) + scroll-reveal motion.
const AR = {
  nav_contact: 'تواصل',
  hero_name: 'أحمد محمد هاشم',
  hero_title: 'مهندس برمجيات — Flutter وتطوير متكامل',
  hero_sub: 'أبني أنظمة إنتاجية متكاملة — تطبيقات موبايل ولوحات تحكم ويب والأنظمة الخلفية وراءها — وأطلقها لمستخدمين حقيقيين.',
  hero_loc: 'صلالة، سلطنة عُمان',
  cta_work: 'شاهد المشاريع',
  cta_email: 'راسلني',
  about_title: 'من أنا',
  about_body: 'مهندس برمجيات حاصل على بكالوريوس علوم الحاسب (جامعة MTI، 2025)، مقيم في صلالة، عُمان. ما يميّزني كمهندس في بداية مسيرته: أدير فعلياً نظامين في بيئة الإنتاج بمستخدمين حقيقيين يومياً — منصة تشغيل متكاملة بنيتها للشركة التي أعمل بها، ومنتج Discord متعدد المستأجرين صممته وبنيته ونشرته بنفسي. أهتم بالصورة الكاملة: معمارية نظيفة، وأمان مُطبَّق بشكل صحيح، وواجهات عربية أولاً، وبرمجيات يستخدمها الناس فعلاً كل يوم.',
  proj_title: 'المشاريع',
  p1_name: 'لوحة تحكم مطلوب وبوابة الموظفين',
  p1_desc: 'منصة تشغيل متكاملة لشركة خدمات تنظيف: الطلبات والعقود، جدولة العمال، توجيه السائقين مع مراقبة سعة السيارات، المدفوعات والاسترجاعات والتقارير المالية — بالإضافة إلى بوابة خدمة ذاتية للموظفين بـ 7 لغات يرى فيها كل عامل وسائق جدوله فقط. عربية أولاً وقيد الاستخدام اليومي.',
  p1_note: 'مستودع خاص (إنتاج) — يسعدني استعراض الكود في المقابلة.',
  pill_prod: 'في الإنتاج',
  pill_live: 'يعمل الآن',
  pill_grad: 'مشروع التخرج',
  p4_name: 'موقع معهد التقوى للتدريب — ثنائي اللغة',
  p4_desc: 'موقع عربي أولاً بدعم RTL كامل لمعهد تدريبٍ مرخّص في صلالة، بُني وسُلّم لعميلٍ حقيقي. ثماني صفحات دورات تُولَّد من مصدر بيانات واحد بلغة بايثون بدلاً من تحريرها يدوياً، ونموذج استفسار ثنائي اللغة بالتحقق من المدخلات موصول بخدمة بريد، وتهيئة كاملة لمحركات البحث ببيانات schema.org المنظّمة. الصور والخطوط مستضافة ذاتياً بلا أي طلبات لجهات خارجية، وسياسة أمان محتوى صارمة، وتقييم 100/100 في Lighthouse للوصولية وأفضل الممارسات وتهيئة محركات البحث.',
  p4_link: 'زر الموقع',
  p2_name: 'بوت إدارة القيلدات على Discord مع لوحة تحكم ويب',
  p2_desc: 'بوت Discord متعدد المستأجرين يخدم عدة قيلدات: جدولة أحداث الحروب مع استطلاعات تلقائية وتذكيرات حسب المنطقة الزمنية، ملفات اللاعبين ولوحة الصدارة، ولوحة تحكم ويب متكاملة بتسجيل دخول Discord OAuth2 وجلسات موقّعة وتحديد معدل الطلبات واشتراكات مدفوعة.',
  p2_note: 'مستودع خاص — بنيته ونشرته وأديره بمفردي.',
  p3_name: 'كشف وتتبع الأجسام في الوقت الفعلي',
  p3_desc: 'كشف وتتبع متعدد الأجسام في الوقت الفعلي: خادم استدلال YOLO + DeepSORT عبر FastAPI (بحاويات Docker، منشور على Fly.io)، يستهلكه تطبيق Flutter — مع معرّفات تتبع ثابتة ورسم كامل لمسار الحركة.',
  p3_link: 'شاهده على GitHub',
  skills_title: 'المهارات',
  sk_mobile: 'الموبايل',
  sk_backend: 'الخلفية',
  sk_web: 'الويب',
  sk_rtl: 'RTL وتعدد اللغات',
  sk_other: 'أدوات',
  contact_title: 'لنبنِ شيئاً معاً.',
  contact_body: 'متاح لوظائف هندسة البرمجيات والمشاريع المميزة.',
  footer: '© 2026 أحمد محمد هاشم',
};

// English strings live in the HTML — captured on first load.
const EN = {};
document.querySelectorAll('[data-i18n]').forEach(el => { EN[el.dataset.i18n] = el.innerHTML; });

let lang = localStorage.getItem('pf_lang') || 'en';

function apply() {
  const dict = lang === 'ar' ? AR : EN;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = dict[el.dataset.i18n];
    if (v !== undefined) el.innerHTML = v;
  });
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.getElementById('lang-toggle').textContent = lang === 'ar' ? '[ English ]' : '[ عربي ]';
  document.title = lang === 'ar' ? 'أحمد هاشم — مهندس برمجيات' : 'Ahmed Hashim — Software Engineer';
}

document.getElementById('lang-toggle').addEventListener('click', () => {
  lang = lang === 'ar' ? 'en' : 'ar';
  localStorage.setItem('pf_lang', lang);
  apply();
});

apply();

// Reveal-on-scroll (respects prefers-reduced-motion via CSS; the observer
// just adds the class — with reduced motion the transition is disabled).
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Safety net: content must NEVER stay hidden. Hero reveals instantly, and if
// the observer hasn't fired for anything within 1.5s (old browser, hidden
// tab, JS quirk), reveal everything.
document.querySelectorAll('.hero .reveal').forEach(el => el.classList.add('in'));
setTimeout(() => {
  document.querySelectorAll('.reveal:not(.in)').forEach(el => el.classList.add('in'));
}, 1500);
