'use client'

import { useEffect, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  Building2,
  CalendarDays,
  Check,
  ChevronLeft,
  Eye,
  EyeOff,
  GraduationCap,
  Hammer,
  Landmark,
  LockKeyhole,
  Mail,
  Menu,
  MoreHorizontal,
  Newspaper,
  Phone,
  Search,
  Settings2,
  Sparkles,
  Truck,
  User,
  UserRound,
  Wrench,
} from 'lucide-react'

const logo = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/06-logo02-zpn4z9RIrzK89KT9eyKqtjapuD44pa.jpg'
const splashImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01-9BGVOUtTyGvXJkJ8sRqCYJ1qNXGvCc.jpg'
const ironImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/02-ZnGq7jhWFZiA9JTfKqRPcPRqwFsGS.jpg'

const categories = [
  { label: 'الزراعة', icon: <Sparkles />, color: 'green' },
  { label: 'مواد البناء', icon: <Building2 />, color: 'red' },
  { label: 'الأسعار', icon: <Landmark />, color: 'gold' },
  { label: 'الأخبار', icon: <Newspaper />, color: 'blue' },
  { label: 'التعليم', icon: <GraduationCap />, color: 'purple' },
  { label: 'النقل', icon: <Truck />, color: 'cyan' },
  { label: 'الخدمات', icon: <Wrench />, color: 'orange' },
  { label: 'المزيد', icon: <MoreHorizontal />, color: 'teal' },
]

type Post = { id: string; title: string; tag: string; section: string; date: string; images: string[]; summary: string; content: string[] }

const postImages = {
  road: splashImage,
  school: ironImage,
  steel: ironImage,
  city: splashImage,
}

const posts: Post[] = [
  { id: 'steel-market', title: 'ارتفاع جديد في أسعار الحديد اليوم في الأسواق المحلية', tag: 'أسعار', section: 'الأسعار', date: 'منذ 3 ساعات', images: [postImages.steel, postImages.city], summary: 'قراءة تحليلية لحركة سوق الحديد والعوامل التي تقود تغير الأسعار.', content: ['شهدت أسواق مواد البناء اليوم حركة ملحوظة في أسعار الحديد، وسط متابعة واسعة من التجار والمستهلكين وأصحاب المشروعات الصغيرة. ولا تأتي هذه الحركة بمعزل عن المشهد الاقتصادي؛ فتكلفة النقل والطاقة وتوافر الخامات كلها عناصر تتداخل لتحديد السعر النهائي الذي يصل إلى السوق المحلي.', 'يهم القارئ أن يفرّق بين السعر المعلن والسعر الفعلي عند الشراء. فقد تتغير القيمة بحسب المحافظة، وحجم الطلب، وموعد التسليم، كما قد تضيف مصروفات النقل والتخزين فرقًا واضحًا بين عرض وآخر. لذلك يُنصح بمقارنة أكثر من مصدر قبل اتخاذ قرار الشراء، والاحتفاظ بفاتورة واضحة تتضمن النوع والوزن وتاريخ التوريد.', 'على المدى القريب، يتوقع المتابعون استمرار التذبذب المحدود مع تحسن حركة المشروعات وتغير تكاليف التشغيل. أما القرار الأذكى للمستهلك فهو بناء خطة شراء مرنة، وتجنب التخزين العشوائي، ومتابعة تحديثات الأسعار بصورة دورية بدل الاعتماد على معلومة قديمة متداولة عبر الرسائل.', 'هذه القراءة معلوماتية وليست توصية مالية. تُحدّث بيانات السوق باستمرار، وقد تختلف الأرقام بين الموردين. استخدم صفحة الأسعار لمقارنة آخر التحديثات، وشارك المنشور مع من يحتاج إلى رؤية أكثر وضوحًا قبل بدء مشروعه.'] },
  { id: 'education-calendar', title: 'وزارة التعليم تعلن جدول امتحانات الثانوية العامة 2026', tag: 'تعليم', section: 'التعليم', date: 'منذ ساعتين', images: [postImages.school, postImages.city], summary: 'دليل هادئ لتنظيم المذاكرة وفهم الجدول دون ضغط أو ارتباك.', content: ['مع إعلان جدول امتحانات الثانوية العامة يبدأ موسم جديد من التخطيط، وتتحول الأيام المتبقية إلى وحدات صغيرة يمكن إدارتها بدل النظر إليها كفترة طويلة ومقلقة. أفضل نقطة بداية هي كتابة المواد بالترتيب، ثم تحديد المواد التي تحتاج إلى مراجعة عميقة والمواد التي يكفيها تدريب يومي قصير.', 'لا يعتمد الاستعداد الجيد على عدد ساعات الجلوس فقط. فالجلسة المركزة التي تنتهي باختبار قصير وتصحيح الأخطاء أكثر فائدة من قراءة متواصلة بلا قياس. اجعل لكل يوم هدفًا قابلًا للإنجاز، واترك مساحة للنوم والراحة؛ لأن استعادة التركيز جزء من المذاكرة وليست وقتًا ضائعًا.', 'قبل كل امتحان، جهّز الأدوات والمكان وراجع تعليمات الحضور. وفي يوم الاختبار اقرأ الأسئلة كاملة قبل توزيع الوقت، وابدأ بما تعرفه لتبني ثقة هادئة، ثم عد إلى الأسئلة التي تحتاج إلى تفكير أطول. التنظيم يقلل المفاجآت ويمنح الطالب قدرة أفضل على إظهار ما تعلمه.', 'تابع أي تحديث رسمي من مصادر الوزارة أو المدرسة، وتجنب الاعتماد على صور مجهولة المصدر. هذا المنشور يقدّم طريقة للتعامل مع الجدول، بينما تبقى المواعيد النهائية والقرارات الرسمية مرجعها الجهة التعليمية المختصة.'] },
  { id: 'desert-road', title: 'حالة الطقس على الطريق الصحراوي تستدعي عدة احتياطات', tag: 'حوادث', section: 'الأخبار', date: 'منذ 15 دقيقة', images: [postImages.road, postImages.city], summary: 'إرشادات عملية للسفر الآمن عند تغير الرؤية أو نشاط الرياح.', content: ['تتغير حالة الطريق الصحراوي بسرعة عند نشاط الرياح أو تشكل الشبورة، ولذلك يحتاج المسافر إلى قرار مبكر قبل التحرك لا إلى رد فعل متأخر أثناء القيادة. راجع النشرات الرسمية، وافحص الإطارات والإضاءة، وتأكد من شحن الهاتف ووجود وسيلة تواصل احتياطية قبل الخروج.', 'عند انخفاض الرؤية، خفف السرعة تدريجيًا واترك مسافة أمان أكبر من المعتاد. لا تستخدم إشارات الانتظار في منتصف الطريق إلا عند الضرورة، وتجنب الوقوف المفاجئ في المسارات السريعة. إذا أصبحت القيادة غير آمنة، ابحث عن مكان توقف قانوني وواضح بعيدًا عن حركة المركبات.', 'تساعد القيادة الهادئة على حماية السائق ومن معه، كما تمنح الآخرين وقتًا كافيًا للتصرف. لا تنشغل بالهاتف أو التصوير، ولا تتعامل مع تحذيرات الطقس باعتبارها مبالغة؛ فدقائق التأخير أقل تكلفة من مجازفة قد تغير الرحلة كاملة.', 'نذكّر بأن هذه إرشادات عامة وليست بديلًا عن تعليمات المرور أو الجهات المختصة. تحقق من آخر تحديث قبل السفر، وأبلغ عن أي عائق واضح عبر القنوات الرسمية دون الاقتراب من موقع الخطر.'] },
]

const news = posts.map(({ id, title, tag, section, date, images }) => ({ id, title, tag, section, date, image: images[0] }))

function Brand({ compact = false }: { compact?: boolean }) {
  return <div className={`brand ${compact ? 'brand-compact' : ''}`}><img src={logo} alt="شعار أسعار جيشو" /><span><b>أسعار</b> <strong>جيشو</strong></span></div>
}

function PhoneShell({ children }: { children: React.ReactNode }) {
  return <div className="phone-wrap"><div className="phone-shell"><div className="status-bar"><span>9:41</span><span className="status-icons">▮▮▮ ◔ ▰</span></div>{children}</div></div>
}

function Splash({ onDone }: { onDone: () => void }) {
  useEffect(() => { const timer = window.setTimeout(onDone, 1700); return () => window.clearTimeout(timer) }, [onDone])
  return <PhoneShell><div className="splash"><div className="splash-photo" style={{ backgroundImage: `url(${splashImage})` }} /><div className="splash-shade" /><div className="splash-content"><Brand /><p>كل ما تحتاجه من أخبار وأسعار وخدمات<br />في مكان واحد</p></div><div className="loading">جاري التحميل ...<div className="loading-track"><i /></div></div></div></PhoneShell>
}

function TextField({ icon, placeholder, type = 'text', value, onChange, password = false }: { icon: React.ReactNode; placeholder: string; type?: string; value: string; onChange: (v: string) => void; password?: boolean }) {
  const [visible, setVisible] = useState(false)
  return <label className="field"><span className="field-icon" aria-hidden="true">{icon}</span><input aria-label={placeholder} type={password && !visible ? 'password' : type} placeholder={placeholder} value={value} onChange={e => onChange(e.target.value)} dir="rtl" />{password ? <button type="button" className="field-action" onClick={() => setVisible(!visible)} aria-label={visible ? 'إخفاء كلمة المرور' : 'إظهار كلمة المرور'}>{visible ? <EyeOff /> : <Eye />}</button> : null}</label>
}

function AuthHeader({ title, subtitle }: { title: string; subtitle: string }) { return <><Brand /><h1>{title}</h1><p className="subtitle">{subtitle}</p></> }

function Login({ goSignup, goHome }: { goSignup: () => void; goHome: () => void }) {
  const [email, setEmail] = useState(''); const [password, setPassword] = useState(''); const [remember, setRemember] = useState(true); const [error, setError] = useState(''); const [notice, setNotice] = useState('')

  const submit = (e: React.FormEvent) => { e.preventDefault(); if (!email.trim() || password.length < 4) { setError('أدخل البريد أو الهاتف وكلمة مرور من 4 أحرف على الأقل'); return }; setError(''); goHome() }
  return <PhoneShell><main className="auth-screen login-screen"><AuthHeader title="مرحباً بعودتك" subtitle="سجل الدخول للوصول إلى حسابك" /><form onSubmit={submit} noValidate><TextField icon={<Mail />} placeholder="البريد الإلكتروني أو رقم الهاتف" value={email} onChange={setEmail} /><TextField icon={<LockKeyhole />} placeholder="كلمة المرور" password value={password} onChange={setPassword} />{error && <p className="form-error" role="alert">{error}</p>}<div className="form-meta"><label><input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} /><span className="check">{remember && <Check />}</span> تذكرني</label><button type="button" className="link" onClick={() => setNotice('سنرسل رابط إعادة التعيين إلى بريدك الإلكتروني')}>نسيت كلمة المرور؟</button></div>{notice && <p className="form-notice" role="status">{notice}</p>}<button className="primary-btn" type="submit">تسجيل الدخول <ArrowLeft /></button></form><div className="or"><span>أو</span></div><button type="button" className="social-btn" onClick={goHome}><span className="google">G</span> تسجيل الدخول باستخدام Google</button><div className="new-account">ليس لديك حساب؟<button className="link" onClick={goSignup}>إنشاء حساب جديد</button></div><div className="egypt-ribbon" /></main></PhoneShell>
}

function Signup({ goLogin, goHome }: { goLogin: () => void; goHome: () => void }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '', confirm: '' }); const [error, setError] = useState('')
  const set = (key: keyof typeof form) => (value: string) => setForm(prev => ({ ...prev, [key]: value }))
  const submit = (e: React.FormEvent) => { e.preventDefault(); if (Object.values(form).some(value => !value.trim())) { setError('يرجى إكمال جميع الحقول'); return }; if (form.password.length < 4 || form.password !== form.confirm) { setError('تأكد من تطابق كلمتي المرور'); return }; setError(''); goHome() }
  return <PhoneShell><main className="auth-screen signup-screen"><AuthHeader title="إنشاء حساب جديد" subtitle="انضم إلى آلاف المستخدمين الآن" /><form onSubmit={submit} noValidate><TextField icon={<UserRound />} placeholder="الاسم الكامل" value={form.name} onChange={set('name')} /><TextField icon={<Mail />} placeholder="البريد الإلكتروني" value={form.email} onChange={set('email')} type="email" /><TextField icon={<Phone />} placeholder="رقم الهاتف" value={form.phone} onChange={set('phone')} type="tel" /><TextField icon={<LockKeyhole />} placeholder="كلمة المرور" password value={form.password} onChange={set('password')} /><TextField icon={<LockKeyhole />} placeholder="تأكيد كلمة المرور" password value={form.confirm} onChange={set('confirm')} />{error && <p className="form-error" role="alert">{error}</p>}<button className="primary-btn" type="submit">إنشاء حساب</button></form><div className="or"><span>أو التسجيل باستخدام</span></div><div className="social-row"><button type="button" className="social-btn" onClick={goHome}><span className="google">G</span> Google</button><button type="button" className="social-btn" onClick={goHome}><span className="facebook">f</span> Facebook</button></div><p className="terms">بالتسجيل، أنت توافق على<br /><button type="button" className="link">شروط الاستخدام</button> و <button type="button" className="link">سياسة الخصوصية</button></p><button type="button" className="back-link" onClick={goLogin}><ArrowRight /> العودة لتسجيل الدخول</button></main></PhoneShell>
}

function PostDetails({ post, onBack, onSection }: { post: Post; onBack: () => void; onSection: (section: string) => void }) {
  return <PhoneShell><main className="reading-screen"><button type="button" className="reading-back" onClick={onBack}><ArrowRight /> العودة إلى {post.section}</button><div className="reading-cover"><img src={post.images[0]} alt="" /><span>{post.section}</span></div><article className="reading-article"><p className="reading-kicker">{post.tag} · {post.date}</p><h1>{post.title}</h1><p className="reading-summary">{post.summary}</p>{post.content.map((paragraph, index) => <div key={paragraph}><h2>{index === 0 ? 'الصورة الكاملة' : index === 1 ? 'ما الذي يعنيه ذلك؟' : index === 2 ? 'خطوات عملية' : 'خلاصة مهمة'}</h2><p>{paragraph}</p>{index < post.images.length && <img src={post.images[index]} alt="" className="reading-inline-image" />}</div>)}</article><button type="button" className="reading-section-link" onClick={() => onSection(post.section)}>استكشف المزيد من قسم {post.section}</button></main></PhoneShell>
}

function Home({ onOpenPost }: { onOpenPost: (post: Post) => void }) {
  const [activeTab, setActiveTab] = useState('الرئيسية')
  const [query, setQuery] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const tabs = [{ label: 'الرئيسية', icon: <Landmark /> }, { label: 'الأسعار', icon: <CalendarDays /> }, { label: 'الأخبار', icon: <Newspaper /> }, { label: 'المزيد', icon: <Settings2 /> }]
  const filteredNews = news.filter(item => `${item.title} ${item.tag} ${item.section}`.includes(query.trim()))
  const selectedCategory = categories.find(category => category.label === activeTab)?.label
  return <PhoneShell><main className="home-screen"><header className="home-header"><button type="button" aria-label="القائمة" aria-expanded={menuOpen} onClick={() => setMenuOpen(open => !open)}><Menu /></button><Brand compact /><button type="button" aria-label="الإشعارات" className="bell"><Bell /><i>1</i></button></header>{menuOpen && <div className="quick-menu" role="menu"><button type="button" onClick={() => setMenuOpen(false)}>الإعدادات</button><button type="button" onClick={() => setMenuOpen(false)}>تسجيل الخروج</button></div>}<div className="search"><Search /><input aria-label="البحث في الأخبار" value={query} onChange={e => setQuery(e.target.value)} placeholder="إبحث عن منتج أو سعر أو خبر..." /></div><section className="hero-card"><img src={ironImage} alt="أسعار الحديد والأسمنت" /><div className="hero-copy"><h2>أسعار الحديد والأسمنت</h2><p>تحديث لحظي لأسعار مواد البناء في جميع المحافظات</p><button type="button" onClick={() => { setActiveTab('الأسعار'); setQuery('حديد') }}>عرض الأسعار <ChevronLeft /></button></div></section><div className="category-grid">{categories.map(c => <button type="button" className={`category ${activeTab === c.label ? 'selected' : ''}`} key={c.label} onClick={() => { setActiveTab(c.label); setQuery(c.label === 'الأسعار' ? 'حديد' : '') }}><span className={`category-icon ${c.color}`}>{c.icon}</span><span>{c.label}</span></button>)}</div><section className="section-panel" aria-live="polite"><div className="section-title"><h2>{selectedCategory === 'الرئيسية' ? 'الرئيسية' : selectedCategory}</h2><button type="button" onClick={() => setActiveTab('الرئيسية')}>العودة للرئيسية</button></div><p>{selectedCategory === 'الأسعار' ? 'تابع أحدث أسعار الحديد والأسمنت في الأسواق المحلية.' : selectedCategory === 'الأخبار' ? 'اقرأ الأخبار العاجلة والتحديثات اليومية من مصادرنا.' : selectedCategory === 'المزيد' ? 'الإعدادات والتنبيهات والخدمات الإضافية متاحة هنا.' : `استكشف قسم ${selectedCategory || 'الرئيسية'} واختر ما تريد متابعته.`}</p></section><section className="news-section"><div className="section-title"><h2>{activeTab === 'الأخبار' ? 'كل الأخبار' : 'أحدث الأخبار'}</h2><button type="button" onClick={() => setActiveTab('الأخبار')}>عرض الكل <ChevronLeft /></button></div><div className="news-list">{filteredNews.length ? filteredNews.map(item => <button type="button" className="news-item" key={item.title} onClick={() => onOpenPost(posts.find(post => post.id === item.id)!)}><img src={item.image} alt={item.title} /><div><span className={`tag ${item.tag === 'حوادث' ? 'danger' : item.tag === 'أسعار' ? 'success' : 'info'}`}>{item.tag}</span><h3>{item.title}</h3><small>{item.date}</small></div><ChevronLeft className="news-arrow" /></button>) : <p className="empty-state">لا توجد نتائج مطابقة للبحث</p>}</div></section><nav className="bottom-nav">{tabs.map(tab => <button type="button" key={tab.label} className={activeTab === tab.label ? 'active' : ''} onClick={() => setActiveTab(tab.label)}>{tab.icon}<span>{tab.label}</span></button>)}</nav></main></PhoneShell>
}

export default function Page() {
  const [screen, setScreen] = useState<'splash' | 'login' | 'signup' | 'home' | 'post'>('splash')
  const [activePost, setActivePost] = useState<Post | null>(null)
  const goHome = () => { window.history.pushState({}, '', '/'); setActivePost(null); setScreen('home') }
  const openPost = (post: Post) => { window.history.pushState({}, '', `/section/${encodeURIComponent(post.section)}/post/${post.id}`); setActivePost(post); setScreen('post') }
  const goSection = (section: string) => { window.history.pushState({}, '', `/section/${encodeURIComponent(section)}`); setActivePost(null); setScreen('home') }
  useEffect(() => { const path = window.location.pathname; const postId = path.match(/\/post\/([^/]+)/)?.[1]; const initialPost = postId ? posts.find(post => post.id === postId) : null; if (initialPost) { setActivePost(initialPost); setScreen('post') } else if (path.startsWith('/section/')) setScreen('home'); const onPop = () => { const currentId = window.location.pathname.match(/\/post\/([^/]+)/)?.[1]; const currentPost = currentId ? posts.find(post => post.id === currentId) : null; setActivePost(currentPost || null); setScreen(currentPost ? 'post' : 'home') }; window.addEventListener('popstate', onPop); return () => window.removeEventListener('popstate', onPop) }, [])
  if (screen === 'splash') return <Splash onDone={() => setScreen('login')} />
  if (screen === 'login') return <Login goSignup={() => setScreen('signup')} goHome={goHome} />
  if (screen === 'signup') return <Signup goLogin={() => setScreen('login')} goHome={goHome} />
  if (screen === 'post' && activePost) return <PostDetails post={activePost} onBack={() => { window.history.back() }} onSection={goSection} />
  return <Home onOpenPost={openPost} />
}
