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

const news = [
  { title: 'حالة الطقس على الطريق الصحراوي يسفر عن عدة عظمى', tag: 'حوادث', date: 'منذ 15 دقيقة', image: 'https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&w=240&q=80' },
  { title: 'وزارة التعليم تعلن جدول امتحانات الثانوية العامة 2026', tag: 'تعليم', date: 'منذ ساعتين', image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=240&q=80' },
  { title: 'ارتفاع جديد في أسعار الحديد اليوم في الأسواق المحلية', tag: 'أسعار', date: 'منذ 3 ساعات', image: ironImage },
]

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
  const [email, setEmail] = useState(''); const [password, setPassword] = useState(''); const [remember, setRemember] = useState(true); const [error, setError] = useState('')
  const submit = (e: React.FormEvent) => { e.preventDefault(); if (!email.trim() || password.length < 4) { setError('أدخل البريد أو الهاتف وكلمة مرور من 4 أحرف على الأقل'); return }; setError(''); goHome() }
  return <PhoneShell><main className="auth-screen login-screen"><AuthHeader title="مرحباً بعودتك" subtitle="سجل الدخول للوصول إلى حسابك" /><form onSubmit={submit} noValidate><TextField icon={<Mail />} placeholder="البريد الإلكتروني أو رقم الهاتف" value={email} onChange={setEmail} /><TextField icon={<LockKeyhole />} placeholder="كلمة المرور" password value={password} onChange={setPassword} />{error && <p className="form-error" role="alert">{error}</p>}<div className="form-meta"><label><input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} /><span className="check">{remember && <Check />}</span> تذكرني</label><button type="button" className="link">نسيت كلمة المرور؟</button></div><button className="primary-btn" type="submit">تسجيل الدخول <ArrowLeft /></button></form><div className="or"><span>أو</span></div><button className="social-btn" onClick={goHome}><span className="google">G</span> تسجيل الدخول باستخدام Google</button><div className="new-account">ليس لديك حساب؟<button className="link" onClick={goSignup}>إنشاء حساب جديد</button></div><div className="egypt-ribbon" /></main></PhoneShell>
}

function Signup({ goLogin, goHome }: { goLogin: () => void; goHome: () => void }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '', confirm: '' }); const [error, setError] = useState('')
  const set = (key: keyof typeof form) => (value: string) => setForm(prev => ({ ...prev, [key]: value }))
  const submit = (e: React.FormEvent) => { e.preventDefault(); if (Object.values(form).some(value => !value.trim())) { setError('يرجى إكمال جميع الحقول'); return }; if (form.password.length < 4 || form.password !== form.confirm) { setError('تأكد من تطابق كلمتي المرور'); return }; setError(''); goHome() }
  return <PhoneShell><main className="auth-screen signup-screen"><AuthHeader title="إنشاء حساب جديد" subtitle="انضم إلى آلاف المستخدمين الآن" /><form onSubmit={submit} noValidate><TextField icon={<UserRound />} placeholder="الاسم الكامل" value={form.name} onChange={set('name')} /><TextField icon={<Mail />} placeholder="البريد الإلكتروني" value={form.email} onChange={set('email')} type="email" /><TextField icon={<Phone />} placeholder="رقم الهاتف" value={form.phone} onChange={set('phone')} type="tel" /><TextField icon={<LockKeyhole />} placeholder="كلمة المرور" password value={form.password} onChange={set('password')} /><TextField icon={<LockKeyhole />} placeholder="تأكيد كلمة المرور" password value={form.confirm} onChange={set('confirm')} />{error && <p className="form-error" role="alert">{error}</p>}<button className="primary-btn" type="submit">إنشاء حساب</button></form><div className="or"><span>أو التسجيل باستخدام</span></div><div className="social-row"><button className="social-btn" onClick={goHome}><span className="google">G</span> Google</button><button className="social-btn" onClick={goHome}><span className="facebook">f</span> Facebook</button></div><p className="terms">بالتسجيل، أنت توافق على<br /><button className="link">شروط الاستخدام</button> و <button className="link">سياسة الخصوصية</button></p><button className="back-link" onClick={goLogin}><ArrowRight /> العودة لتسجيل الدخول</button></main></PhoneShell>
}

function Home() {
  const [activeTab, setActiveTab] = useState('الرئيسية')
  const [query, setQuery] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const tabs = [{ label: 'الرئيسية', icon: <Landmark /> }, { label: 'الأسعار', icon: <CalendarDays /> }, { label: 'الأخبار', icon: <Newspaper /> }, { label: 'المزيد', icon: <Settings2 /> }]
  const filteredNews = news.filter(item => `${item.title} ${item.tag}`.includes(query.trim()))
  return <PhoneShell><main className="home-screen"><header className="home-header"><button type="button" aria-label="القائمة" aria-expanded={menuOpen} onClick={() => setMenuOpen(open => !open)}><Menu /></button><Brand compact /><button type="button" aria-label="الإشعارات" className="bell"><Bell /><i>1</i></button></header>{menuOpen && <div className="quick-menu" role="menu"><button type="button" onClick={() => setMenuOpen(false)}>الإعدادات</button><button type="button" onClick={() => setMenuOpen(false)}>تسجيل الخروج</button></div>}<div className="search"><Search /><input aria-label="البحث في الأخبار" value={query} onChange={e => setQuery(e.target.value)} placeholder="إبحث عن منتج أو سعر أو خبر..." /></div><section className="hero-card"><img src={ironImage} alt="أسعار الحديد والأسمنت" /><div className="hero-copy"><h2>أسعار الحديد والأسمنت</h2><p>تحديث لحظي لأسعار مواد البناء في جميع المحافظات</p><button type="button" onClick={() => { setActiveTab('الأسعار'); setQuery('حديد') }}>عرض الأسعار <ChevronLeft /></button></div></section><div className="category-grid">{categories.map(c => <button type="button" className={`category ${activeTab === c.label ? 'selected' : ''}`} key={c.label} onClick={() => setActiveTab(c.label)}><span className={`category-icon ${c.color}`}>{c.icon}</span><span>{c.label}</span></button>)}</div><section className="news-section"><div className="section-title"><h2>{activeTab === 'الأخبار' ? 'كل الأخبار' : 'أحدث الأخبار'}</h2><button type="button" onClick={() => setActiveTab('الأخبار')}>عرض الكل <ChevronLeft /></button></div><div className="news-list">{filteredNews.length ? filteredNews.map(item => <article className="news-item" key={item.title}><img src={item.image} alt={item.title} /><div><span className={`tag ${item.tag === 'حوادث' ? 'danger' : item.tag === 'أسعار' ? 'success' : 'info'}`}>{item.tag}</span><h3>{item.title}</h3><small>{item.date}</small></div><ChevronLeft className="news-arrow" /></article>) : <p className="empty-state">لا توجد نتائج مطابقة للبحث</p>}</div></section><nav className="bottom-nav">{tabs.map(tab => <button type="button" key={tab.label} className={activeTab === tab.label ? 'active' : ''} onClick={() => setActiveTab(tab.label)}>{tab.icon}<span>{tab.label}</span></button>)}</nav></main></PhoneShell>
}

export default function Page() {
  const [screen, setScreen] = useState<'splash' | 'login' | 'signup' | 'home'>('splash')
  if (screen === 'splash') return <Splash onDone={() => setScreen('login')} />
  if (screen === 'login') return <Login goSignup={() => setScreen('signup')} goHome={() => setScreen('home')} />
  if (screen === 'signup') return <Signup goLogin={() => setScreen('login')} goHome={() => setScreen('home')} />
  return <Home />
}
