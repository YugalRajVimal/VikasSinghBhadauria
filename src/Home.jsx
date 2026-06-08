// import { useState, useEffect, useRef, useCallback, createContext, useContext } from "react";

// /* ═══════════════════════════════════════════════════════════════
//    THEME CONTEXT
// ═══════════════════════════════════════════════════════════════ */
// const ThemeCtx = createContext({ dark: true, toggle: () => {} });
// const useTheme = () => useContext(ThemeCtx);

// /* ═══════════════════════════════════════════════════════════════
//    CSS VARIABLES & GLOBAL STYLES
// ═══════════════════════════════════════════════════════════════ */
// const GLOBAL_CSS = `
// @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400;1,600&family=Rajdhani:wght@400;500;600;700&family=Mukta:wght@300;400;600;700&display=swap');

// *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
// html { scroll-behavior: smooth; }
// body { font-family: 'Mukta', sans-serif; overflow-x: hidden; cursor: none; transition: background 0.4s, color 0.4s; }
// ::selection { background: rgba(255,107,0,0.3); color: var(--clr-white); }

// /* ── THEME VARIABLES ── */
// [data-theme="dark"] {
//   --clr-bg:          #0A1628;
//   --clr-bg-mid:      #0D1D35;
//   --clr-bg-card:     rgba(255,255,255,0.03);
//   --clr-bg-card2:    rgba(255,255,255,0.05);
//   --clr-border:      rgba(255,255,255,0.07);
//   --clr-border-s:    rgba(255,107,0,0.15);
//   --clr-text:        #FFFFFF;
//   --clr-text-mid:    rgba(255,255,255,0.65);
//   --clr-text-low:    rgba(255,255,255,0.45);
//   --clr-text-faint:  rgba(255,255,255,0.25);
//   --clr-white:       #FFFFFF;
//   --clr-navy:        #0A1628;
//   --clr-navy-light:  #1B3060;
//   --clr-saffron:     #FF6B00;
//   --clr-saffron-d:   #E55A00;
//   --clr-gold:        #D4A843;
//   --clr-gold-l:      #F0C055;
//   --clr-overlay:     rgba(10,22,40,0.95);
//   --clr-portrait-bg: linear-gradient(160deg,#112240 0%,#1B3060 50%,#0F2040 100%);
//   --clr-grid:        rgba(255,107,0,0.03);
//   --clr-hero-rad1:   rgba(255,107,0,0.08);
//   --clr-hero-rad2:   rgba(212,168,67,0.05);
//   --shadow-card:     0 16px 40px rgba(0,0,0,0.3);
//   --shadow-btn:      0 8px 32px rgba(255,107,0,0.3);
//   --clr-toggle-bg:   rgba(255,255,255,0.08);
//   --clr-toggle-icon: #FFFFFF;
// }
// [data-theme="light"] {
//   --clr-bg:          #FDF8F3;
//   --clr-bg-mid:      #F5EDE0;
//   --clr-bg-card:     rgba(255,255,255,0.8);
//   --clr-bg-card2:    rgba(255,255,255,0.95);
//   --clr-border:      rgba(0,0,0,0.07);
//   --clr-border-s:    rgba(255,107,0,0.2);
//   --clr-text:        #1A0A00;
//   --clr-text-mid:    rgba(26,10,0,0.7);
//   --clr-text-low:    rgba(26,10,0,0.5);
//   --clr-text-faint:  rgba(26,10,0,0.3);
//   --clr-white:       #1A0A00;
//   --clr-navy:        #FDF8F3;
//   --clr-navy-light:  #EDE3D5;
//   --clr-saffron:     #E55A00;
//   --clr-saffron-d:   #CC4D00;
//   --clr-gold:        #B8891A;
//   --clr-gold-l:      #C89A25;
//   --clr-overlay:     rgba(253,248,243,0.97);
//   --clr-portrait-bg: linear-gradient(160deg,#F0E8DC 0%,#E8DACE 50%,#EDE0D0 100%);
//   --clr-grid:        rgba(229,90,0,0.04);
//   --clr-hero-rad1:   rgba(255,107,0,0.06);
//   --clr-hero-rad2:   rgba(212,168,67,0.04);
//   --shadow-card:     0 16px 40px rgba(0,0,0,0.08);
//   --shadow-btn:      0 8px 32px rgba(255,107,0,0.25);
//   --clr-toggle-bg:   rgba(0,0,0,0.06);
//   --clr-toggle-icon: #1A0A00;
// }

// /* ── CURSOR ── */
// .vsb-cursor { width:8px; height:8px; background:var(--clr-saffron); border-radius:50%; position:fixed; pointer-events:none; z-index:99999; mix-blend-mode:difference; }
// .vsb-cursor-ring { width:36px; height:36px; border:1.5px solid var(--clr-saffron); border-radius:50%; position:fixed; pointer-events:none; z-index:99998; transition:all 0.15s ease; opacity:0.5; }

// /* ── LAYOUT ── */
// .vsb-page { background: var(--clr-bg); color: var(--clr-text); min-height:100vh; transition: background 0.4s, color 0.4s; }
// .vsb-section { padding: 6rem 0; }
// .vsb-container { max-width: 1200px; margin: 0 auto; padding: 0 4rem; }

// /* ── SCROLL REVEAL ── */
// .reveal { opacity:0; transform:translateY(28px); transition:opacity 0.7s ease, transform 0.7s ease; }
// .reveal.in { opacity:1; transform:translateY(0); }
// .tl-item { opacity:0; transform:translateX(-20px); transition:all 0.7s ease; }
// .tl-item.in { opacity:1; transform:translateX(0); }

// /* ── TYPOGRAPHY ── */
// .sec-eye { font-family:'Rajdhani',sans-serif; font-size:0.78rem; font-weight:700; letter-spacing:0.35em; text-transform:uppercase; color:var(--clr-saffron); display:flex; align-items:center; gap:0.75rem; margin-bottom:0.75rem; }
// .sec-eye::before { content:''; width:24px; height:1.5px; background:var(--clr-saffron); flex-shrink:0; }
// .sec-title { font-family:'Cormorant Garamond',serif; font-size:clamp(2rem,4vw,3.2rem); font-weight:700; color:var(--clr-text); line-height:1.1; margin-bottom:1rem; }
// .sec-sub { font-size:1rem; color:var(--clr-text-mid); line-height:1.7; max-width:560px; }

// /* ── BUTTONS ── */
// .btn-pri { display:inline-flex; align-items:center; gap:0.5rem; background:var(--clr-saffron); color:#fff; padding:0.85rem 2rem; border-radius:2px; text-decoration:none; font-family:'Rajdhani',sans-serif; font-weight:700; font-size:0.9rem; letter-spacing:0.1em; text-transform:uppercase; transition:all 0.3s; border:2px solid var(--clr-saffron); cursor:pointer; }
// .btn-pri:hover { background:var(--clr-saffron-d); border-color:var(--clr-saffron-d); transform:translateY(-2px); box-shadow:var(--shadow-btn); }
// .btn-out { display:inline-flex; align-items:center; gap:0.5rem; background:transparent; color:var(--clr-text); padding:0.85rem 2rem; border-radius:2px; text-decoration:none; font-family:'Rajdhani',sans-serif; font-weight:700; font-size:0.9rem; letter-spacing:0.1em; text-transform:uppercase; transition:all 0.3s; border:2px solid var(--clr-border); cursor:pointer; }
// .btn-out:hover { border-color:var(--clr-saffron); color:var(--clr-saffron); transform:translateY(-2px); }

// /* ── CARDS ── */
// .vsb-card { background:var(--clr-bg-card); border:1px solid var(--clr-border); border-radius:4px; transition:all 0.3s; }
// .vsb-card:hover { border-color:var(--clr-border-s); box-shadow:var(--shadow-card); }
// .tag { background:rgba(255,107,0,0.1); border:1px solid rgba(255,107,0,0.2); color:var(--clr-saffron); padding:0.28rem 0.75rem; border-radius:2px; font-family:'Rajdhani',sans-serif; font-size:0.75rem; font-weight:600; letter-spacing:0.08em; text-transform:uppercase; }
// .divider { height:1px; background:linear-gradient(90deg,transparent,rgba(255,107,0,0.2),transparent); }
// .grid-overlay { position:absolute; inset:0; background-image:linear-gradient(var(--clr-grid) 1px,transparent 1px),linear-gradient(90deg,var(--clr-grid) 1px,transparent 1px); background-size:60px 60px; pointer-events:none; }

// /* ── NAVBAR ── */
// .vsb-nav { position:fixed; top:0; left:0; right:0; z-index:1000; padding:1.2rem 4rem; display:flex; align-items:center; justify-content:space-between; transition:all 0.4s ease; }
// .vsb-nav.scrolled { backdrop-filter:blur(20px); -webkit-backdrop-filter:blur(20px); padding:0.8rem 4rem; border-bottom:1px solid var(--clr-border-s); }
// [data-theme="dark"] .vsb-nav.scrolled { background:rgba(10,22,40,0.95); }
// [data-theme="light"] .vsb-nav.scrolled { background:rgba(253,248,243,0.95); }
// .nav-logo { font-family:'Cormorant Garamond',serif; font-size:1.6rem; font-weight:700; color:var(--clr-text); text-decoration:none; letter-spacing:0.02em; background:none; border:none; cursor:pointer; }
// .nav-logo span { color:var(--clr-saffron); }
// .nav-lnk { font-family:'Rajdhani',sans-serif; font-size:0.9rem; font-weight:600; letter-spacing:0.12em; text-transform:uppercase; color:var(--clr-text-mid); text-decoration:none; background:none; border:none; cursor:pointer; transition:color 0.3s; position:relative; padding:0; }
// .nav-lnk::after { content:''; position:absolute; bottom:-4px; left:0; width:0; height:1.5px; background:var(--clr-saffron); transition:width 0.3s; }
// .nav-lnk:hover, .nav-lnk.active { color:var(--clr-text); }
// .nav-lnk:hover::after, .nav-lnk.active::after { width:100%; }
// .theme-toggle { width:40px; height:40px; border-radius:2px; background:var(--clr-toggle-bg); border:1px solid var(--clr-border); cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all 0.3s; font-size:1.1rem; }
// .theme-toggle:hover { border-color:var(--clr-saffron); background:rgba(255,107,0,0.1); }

// /* ── FORMS ── */
// .vsb-input, .vsb-textarea { background:var(--clr-bg-card); border:1px solid var(--clr-border); border-radius:2px; padding:0.75rem 1rem; color:var(--clr-text); font-family:'Mukta',sans-serif; font-size:0.95rem; outline:none; transition:all 0.3s; width:100%; }
// .vsb-input:focus, .vsb-textarea:focus { border-color:rgba(255,107,0,0.4); background:rgba(255,107,0,0.04); }
// .vsb-input::placeholder, .vsb-textarea::placeholder { color:var(--clr-text-faint); }
// .vsb-textarea { resize:vertical; min-height:120px; }

// /* ── FILTER BTNS ── */
// .filter-btn { background:transparent; border:1px solid var(--clr-border); color:var(--clr-text-low); padding:0.45rem 1.1rem; border-radius:2px; font-family:'Rajdhani',sans-serif; font-size:0.82rem; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; cursor:pointer; transition:all 0.3s; }
// .filter-btn:hover, .filter-btn.active { background:var(--clr-saffron); border-color:var(--clr-saffron); color:#fff; }

// /* ── GALLERY ── */
// .gal-item { border-radius:4px; overflow:hidden; position:relative; border:1px solid var(--clr-border); transition:all 0.3s; cursor:pointer; }
// .gal-item:hover { transform:scale(1.02); border-color:var(--clr-border-s); box-shadow:var(--shadow-card); }
// .gal-overlay { position:absolute; inset:0; background:linear-gradient(transparent 40%,rgba(10,22,40,0.85)); opacity:0; transition:opacity 0.3s; display:flex; align-items:flex-end; padding:1rem; }
// .gal-item:hover .gal-overlay { opacity:1; }

// /* ── TIMELINE ── */
// .tl-card { background:var(--clr-bg-card); border:1px solid var(--clr-border); border-left:3px solid var(--clr-saffron); border-radius:2px; padding:1.2rem 1.5rem; transition:all 0.3s; }
// .tl-card:hover { background:var(--clr-bg-card2); }

// /* ── SOCIAL ── */
// .social-card { background:var(--clr-bg-card); border:1px solid var(--clr-border); border-radius:4px; padding:1.5rem 1rem; text-align:center; text-decoration:none; transition:all 0.3s; display:block; }
// .social-card:hover { border-color:var(--clr-border-s); transform:translateY(-3px); box-shadow:var(--shadow-card); }

// /* ── FOOTER ── */
// .vsb-footer { border-top:1px solid var(--clr-border-s); padding:4rem 0 2rem; }
// [data-theme="dark"] .vsb-footer { background:#050D1A; }
// [data-theme="light"] .vsb-footer { background:#EFE5D5; }

// /* ── TOAST ── */
// .vsb-toast { background:var(--clr-bg-card2); border:1px solid var(--clr-border-s); border-left:3px solid var(--clr-saffron); color:var(--clr-text); padding:0.75rem 1.5rem; border-radius:2px; font-family:'Rajdhani',sans-serif; font-size:0.9rem; font-weight:600; letter-spacing:0.05em; animation:fadeUp 0.3s ease; box-shadow:var(--shadow-card); }

// /* ── KEYFRAMES ── */
// @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
// @keyframes fadeLeft { from{opacity:0;transform:translateX(40px)} to{opacity:1;transform:translateX(0)} }
// @keyframes floatP { 0%{transform:translateY(100vh) rotate(0deg);opacity:0} 10%{opacity:1} 90%{opacity:1} 100%{transform:translateY(-100px) rotate(360deg);opacity:0} }
// @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
// @keyframes loadBar { from{width:0%} to{width:100%} }
// @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
// .ani-fu { opacity:0; animation:fadeUp 0.8s ease forwards; }
// .ani-fl { opacity:0; animation:fadeLeft 1s ease forwards; }
// .particle { position:absolute; border-radius:50%; animation:floatP linear infinite; opacity:0; }

// /* ── PAGE TRANSITION ── */
// .page-enter { animation:fadeUp 0.5s ease forwards; }

// /* ── RESPONSIVE ── */
// @media(max-width:1024px) { .vsb-container{padding:0 2rem} .vsb-section{padding:4rem 0} .vsb-nav{padding:1rem 2rem} .vsb-nav.scrolled{padding:0.7rem 2rem} .hide-md{display:none!important} .hamburger-show{display:flex!important} }
// @media(max-width:768px) { .vsb-container{padding:0 1.5rem} .grid-2-auto{grid-template-columns:1fr!important} .grid-3-auto{grid-template-columns:1fr 1fr!important} .grid-4-auto{grid-template-columns:1fr 1fr!important} }
// `;

// /* ═══════════════════════════════════════════════════════════════
//    DATA
// ═══════════════════════════════════════════════════════════════ */
// const TIMELINE = [
//   { year: "Early Years", title: "Student Leadership Begins", desc: "Took first steps in student activism and community engagement, developing a passion for youth empowerment and national development that would define his life's mission." },
//   { year: "IIT Guwahati Era", title: "IIT Guwahati — Academic Excellence", desc: "Associated with IIT Guwahati, building academic foundations and expanding networks across India's premier institutions. Developed strategic thinking and analytical capabilities." },
//   { year: "ABVP Chapter", title: "ABVP Membership & Activism", desc: "Joined the Akhil Bharatiya Vidyarthi Parishad (ABVP), India's largest student organisation. Led campaigns for education reform, youth rights, and nationalist values across campuses." },
//   { year: "MCU Bhopal", title: "President, MCU Bhopal", desc: "Elected as Former President of Makhanlal Chaturvedi National University (MCU), Bhopal. Implemented landmark programs transforming student welfare, academic culture, and community engagement." },
//   { year: "National Level", title: "Political Responsibilities & Public Engagement", desc: "Expanded from student leadership to broader political and social responsibilities. Became deeply involved in national discourse, policy advocacy, and public welfare initiatives." },
//   { year: "Present", title: "Personal Assistant to Anurag Thakur", desc: "Currently serving as Personal Assistant to the Honourable Anurag Thakur, contributing directly to national governance, policy implementation, and youth development programs." },
// ];
// const ACHIEVEMENTS = [
//   { icon: "★", title: "Student Leadership Excellence", desc: "Led multiple student wings with exemplary record of organisation building and youth mobilisation across central India's campuses." },
//   { icon: "🏛", title: "MCU Bhopal Presidency", desc: "As President of MCU Bhopal, implemented landmark programs that transformed student welfare, academic culture, and community engagement." },
//   { icon: "👥", title: "Youth Mobilisation", desc: "Connected over 10,000+ youth through leadership programs, skill development initiatives, and nationalist movement campaigns across multiple states." },
//   { icon: "🇮🇳", title: "National Political Service", desc: "Direct contribution to national governance as Personal Assistant to Anurag Thakur, supporting critical policy implementation and public programs." },
//   { icon: "✍", title: "ABVP Organisational Development", desc: "Pivotal role in strengthening ABVP's presence across central India, expanding membership and amplifying nationalist student voice." },
//   { icon: "✓", title: "Community & Social Initiatives", desc: "Organised and participated in 500+ community events, social welfare programs, and public service campaigns across Delhi and central India." },
// ];
// const AREAS = [
//   { icon: "🎯", label: "Youth Development" }, { icon: "📚", label: "Education" },
//   { icon: "🤝", label: "Public Service" }, { icon: "🏆", label: "Leadership Programs" },
//   { icon: "❤️", label: "Social Welfare" }, { icon: "💻", label: "Digital Governance" },
//   { icon: "🇮🇳", label: "Nation Building" }, { icon: "🌱", label: "Community Development" },
// ];
// const TESTIMONIALS = [
//   { text: "Vikas bhai's dedication to the youth of our nation is unparalleled. His ability to mobilise young people for constructive causes and his genuine care for their future sets him apart as a true leader of our generation.", name: "Rohit Sharma", role: "Student Leader, MCU Bhopal", initials: "RS" },
//   { text: "In my years of social work, I have rarely come across someone as committed to grassroots service as Vikas Singh Bhadauria. His presence at community events always brings energy, solutions, and a true servant's heart.", name: "Priya Mishra", role: "Social Worker, Bhopal", initials: "PM" },
//   { text: "As a fellow ABVP worker, I witnessed Vikas's transformative leadership firsthand. He doesn't just lead — he builds institutions, nurtures talent, and always puts the mission of national service above personal gain.", name: "Aditya Kumar", role: "ABVP Activist", initials: "AK" },
//   { text: "The youth programs Vikas organised in our community were life-changing for hundreds of young people. His vision for empowering the next generation and his hands-on approach to leadership is truly inspirational.", name: "Sunita Verma", role: "Community Leader, Delhi", initials: "SV" },
// ];
// const SOCIAL = [
//   { icon: "𝕏", name: "Twitter / X", handle: "@vikas7bhadauria", url: "https://twitter.com/vikas7bhadauria" },
//   { icon: "📸", name: "Instagram", handle: "@vikasbhadauria", url: "#" },
//   { icon: "🧵", name: "Threads", handle: "@vikasbhadauria", url: "#" },
//   { icon: "📘", name: "Facebook", handle: "Vikas Singh Bhadauria", url: "#" },
//   { icon: "💼", name: "LinkedIn", handle: "Vikas Bhadauria", url: "#" },
// ];
// const GALLERY_ITEMS = [
//   { icon: "🎤", label: "Addressing the Nation", category: "Public Events", size: "tall", desc: "Public address at a national youth leadership conclave, New Delhi." },
//   { icon: "🏛️", label: "Parliamentary Corridors", category: "Meetings", size: "normal", desc: "Official meeting with senior party leadership at Parliament House." },
//   { icon: "🎓", label: "Youth Empowerment Summit", category: "Youth Programs", size: "normal", desc: "Keynote address at MCU Bhopal's annual youth empowerment summit." },
//   { icon: "🤝", label: "Community Outreach", category: "Social Activities", size: "wide", desc: "Community service initiative connecting 500+ families with govt schemes." },
//   { icon: "🇮🇳", label: "Republic Day Celebration", category: "Public Events", size: "normal", desc: "Leading the Republic Day celebration parade in New Delhi." },
//   { icon: "📸", label: "ABVP National Convention", category: "Meetings", size: "normal", desc: "Representing MCU Bhopal at the ABVP National Convention, Mumbai." },
//   { icon: "🌱", label: "Green India Drive", category: "Social Activities", size: "normal", desc: "Tree plantation drive across 5 districts of Madhya Pradesh." },
//   { icon: "🏆", label: "Leadership Award Ceremony", category: "Public Events", size: "tall", desc: "Receiving the Young Leader of the Year award from dignitaries." },
//   { icon: "💡", label: "Digital India Workshop", category: "Youth Programs", size: "normal", desc: "Conducting digital literacy workshop for rural youth in MP." },
// ];
// const TYPING_ROLES = [
//   "Youth Leader • Swamsewak • Nationalist",
//   "Former President, MCU Bhopal",
//   "Personal Assistant to Anurag Thakur",
//   "ABVP Member • Proud Nationalist",
//   "Dedicated to Nation Building",
// ];

// /* ═══════════════════════════════════════════════════════════════
//    HOOKS
// ═══════════════════════════════════════════════════════════════ */
// function useReveal(threshold = 0.08) {
//   const ref = useRef(null);
//   const [visible, setVisible] = useState(false);
//   useEffect(() => {
//     const el = ref.current; if (!el) return;
//     const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, [threshold]);
//   return [ref, visible];
// }

// function useCounter(target, started) {
//   const [val, setVal] = useState(0);
//   useEffect(() => {
//     if (!started) return;
//     let cur = 0;
//     const step = target / (2000 / 16);
//     const t = setInterval(() => {
//       cur += step;
//       if (cur >= target) { setVal(target); clearInterval(t); }
//       else setVal(Math.floor(cur));
//     }, 16);
//     return () => clearInterval(t);
//   }, [started, target]);
//   return val;
// }

// function useTyping(roles, delay = 1800) {
//   const [text, setText] = useState("");
//   const s = useRef({ idx: 0, ch: 0, del: false });
//   useEffect(() => {
//     const init = setTimeout(() => {
//       function loop() {
//         const { idx, ch, del } = s.current;
//         const cur = roles[idx];
//         if (!del) { setText(cur.slice(0, ch + 1)); s.current.ch++; if (s.current.ch === cur.length) { s.current.del = true; setTimeout(loop, 2500); return; } }
//         else { setText(cur.slice(0, ch)); s.current.ch--; if (s.current.ch === 0) { s.current.del = false; s.current.idx = (idx + 1) % roles.length; } }
//         setTimeout(loop, del ? 40 : 80);
//       }
//       loop();
//     }, delay);
//     return () => clearTimeout(init);
//   }, []);
//   return text;
// }

// /* ═══════════════════════════════════════════════════════════════
//    SHARED COMPONENTS
// ═══════════════════════════════════════════════════════════════ */
// function RevealDiv({ children, className = "", style, delay = 0 }) {
//   const [ref, visible] = useReveal();
//   return <div ref={ref} className={`reveal ${visible ? "in" : ""} ${className}`} style={{ transitionDelay: delay + "ms", ...style }}>{children}</div>;
// }

// function Eyebrow({ children, center }) {
//   return <p className="sec-eye" style={center ? { justifyContent: "center" } : {}}>{children}</p>;
// }

// function StatCounter({ target, label }) {
//   const [ref, vis] = useReveal(0.5);
//   const val = useCounter(target, vis);
//   return (
//     <div ref={ref} style={{ textAlign: "center" }}>
//       <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "3.5rem", fontWeight: 700, color: "var(--clr-saffron)", lineHeight: 1, display: "block" }}>{val.toLocaleString()}+</span>
//       <span style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--clr-text-low)", marginTop: "0.5rem", display: "block" }}>{label}</span>
//     </div>
//   );
// }

// function HeroStatCard({ count, label }) {
//   const [ref, vis] = useReveal(0.5);
//   const val = useCounter(count, vis);
//   return (
//     <div ref={ref} style={{ background: "var(--clr-bg-card)", border: "1px solid var(--clr-border-s)", borderRadius: "4px", padding: "1.5rem", textAlign: "center", position: "relative", overflow: "hidden", transition: "all 0.3s" }}>
//       <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg,var(--clr-saffron),var(--clr-gold))" }} />
//       <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2.5rem", fontWeight: 700, color: "var(--clr-saffron)", lineHeight: 1 }}>{val.toLocaleString()}+</div>
//       <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--clr-text-low)", marginTop: "0.4rem" }}>{label}</div>
//     </div>
//   );
// }

// function TimelineItem({ item, index }) {
//   const [ref, vis] = useReveal(0.12);
//   return (
//     <div ref={ref} className={`tl-item ${vis ? "in" : ""}`} style={{ position: "relative", marginBottom: "3rem", transitionDelay: index * 120 + "ms" }}>
//       <div style={{ position: "absolute", left: "-3.45rem", top: "0.5rem", width: "12px", height: "12px", borderRadius: "50%", background: "var(--clr-saffron)", border: "2px solid var(--clr-bg)", boxShadow: "0 0 0 3px rgba(255,107,0,0.3)" }} />
//       <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.2em", color: "var(--clr-saffron)", marginBottom: "0.4rem", textTransform: "uppercase" }}>{item.year}</div>
//       <div className="tl-card">
//         <h4 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.25rem", fontWeight: 600, color: "var(--clr-text)", marginBottom: "0.4rem" }}>{item.title}</h4>
//         <p style={{ fontSize: "0.9rem", color: "var(--clr-text-mid)", lineHeight: 1.7 }}>{item.desc}</p>
//       </div>
//     </div>
//   );
// }

// /* ═══════════════════════════════════════════════════════════════
//    NAVBAR
// ═══════════════════════════════════════════════════════════════ */
// function Navbar({ page, setPage }) {
//   const { dark, toggle } = useTheme();
//   const [scrolled, setScrolled] = useState(false);
//   const [mob, setMob] = useState(false);
//   useEffect(() => {
//     const h = () => setScrolled(window.scrollY > 80);
//     window.addEventListener("scroll", h);
//     return () => window.removeEventListener("scroll", h);
//   }, []);
//   const navItems = [
//     { label: "Home", page: "home" }, { label: "About", page: "about" },
//     { label: "Gallery", page: "gallery" },
//   ];
//   const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };
//   return (
//     <>
//       <nav className={`vsb-nav ${scrolled ? "scrolled" : ""}`}>
//         <button className="nav-logo" onClick={() => { setPage("home"); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
//           Vikas<span>.</span>
//         </button>
//         <ul style={{ display: "flex", gap: "2rem", listStyle: "none", alignItems: "center" }} className="hide-md">
//           {navItems.map(n => (
//             <li key={n.page}>
//               <button className={`nav-lnk ${page === n.page ? "active" : ""}`} onClick={() => { setPage(n.page); window.scrollTo({ top: 0, behavior: "smooth" }); }}>{n.label}</button>
//             </li>
//           ))}
//           {/* {page === "home" && (
//             <>
//               <li><button className="nav-lnk" onClick={() => scrollTo("journey")}>Journey</button></li>
//               <li><button className="nav-lnk" onClick={() => scrollTo("achievements")}>Achievements</button></li>
//             </>
//           )} */}
//           {/* <li>
//             <button className="theme-toggle" onClick={toggle} title={dark ? "Switch to Light" : "Switch to Dark"}>
//               {dark ? "☀️" : "🌙"}
//             </button>
//           </li> */}
//           <li><button className="btn-pri" style={{ padding: "0.5rem 1.4rem" }} onClick={() => { setPage("home"); setTimeout(() => scrollTo("contact"), 100); }}>Connect</button></li>
//         </ul>
//         <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
//           <button className="theme-toggle hide-md-show" onClick={toggle}>{dark ? "☀️" : "🌙"}</button>
//           <button onClick={() => setMob(true)} className="hamburger-show" style={{ display: "none", flexDirection: "column", gap: "5px", background: "none", border: "none", cursor: "pointer", padding: "4px" }}>
//             {[0,1,2].map(i => <span key={i} style={{ display: "block", width: "24px", height: "2px", background: "var(--clr-text)" }} />)}
//           </button>
//         </div>
//       </nav>
//       {/* Mobile Menu */}
//       <div style={{ position: "fixed", inset: 0, background: "var(--clr-overlay)", zIndex: 999, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2rem", opacity: mob ? 1 : 0, visibility: mob ? "visible" : "hidden", transition: "all 0.4s" }}>
//         <button onClick={() => setMob(false)} style={{ position: "absolute", top: "1.5rem", right: "2rem", background: "none", border: "none", color: "var(--clr-text)", fontSize: "2rem", cursor: "pointer" }}>✕</button>
//         {["home","about","gallery"].map(p => (
//           <button key={p} onClick={() => { setPage(p); setMob(false); window.scrollTo({ top: 0 }); }} style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2.2rem", fontWeight: 600, color: "var(--clr-text)", background: "none", border: "none", cursor: "pointer", textTransform: "capitalize" }}>{p}</button>
//         ))}
//       </div>
//     </>
//   );
// }

// /* ═══════════════════════════════════════════════════════════════
//    LOADING SCREEN
// ═══════════════════════════════════════════════════════════════ */
// function LoadingScreen({ done }) {
//   return (
//     <div style={{ position: "fixed", inset: 0, background: "var(--clr-bg)", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", zIndex: 99990, transition: "opacity 0.6s ease, visibility 0.6s ease", opacity: done ? 0 : 1, visibility: done ? "hidden" : "visible" }}>
//       <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "3rem", fontWeight: 700, color: "var(--clr-saffron)", animation: "pulse 1.5s ease-in-out infinite" }}>VSB</div>
//       <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.85rem", letterSpacing: "0.3em", color: "var(--clr-text-low)", marginTop: "12px", textTransform: "uppercase" }}>Loading Experience</div>
//       <div style={{ width: "200px", height: "2px", background: "var(--clr-border)", borderRadius: "2px", marginTop: "2rem", overflow: "hidden" }}>
//         <div style={{ height: "100%", background: "linear-gradient(90deg,var(--clr-saffron),var(--clr-gold))", animation: "loadBar 1.8s ease-in-out forwards" }} />
//       </div>
//     </div>
//   );
// }

// /* ═══════════════════════════════════════════════════════════════
//    FOOTER
// ═══════════════════════════════════════════════════════════════ */
// function Footer({ setPage }) {
//   const quickLinks = ["About","Journey","Achievements","Vision","Gallery","Contact"];
//   const workAreas = ["Youth Development","Education","Public Service","Nation Building","Social Welfare"];
//   return (
//     <footer className="vsb-footer">
//       <div className="vsb-container">
//         <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "3rem", marginBottom: "3rem" }} className="grid-4-auto">
//           <div>
//             <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.8rem", fontWeight: 700, color: "var(--clr-text)", marginBottom: "1rem" }}>Vikas Singh <span style={{ color: "var(--clr-saffron)" }}>Bhadauria</span></div>
//             <p style={{ color: "var(--clr-text-low)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.2rem", maxWidth: "280px" }}>Youth Leader | Swamsewak | Nationalist | Personal Assistant to Anurag Thakur | New Delhi, India</p>
//             <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1rem", fontStyle: "italic", color: "var(--clr-gold-l)", borderLeft: "2px solid rgba(255,107,0,0.3)", paddingLeft: "0.8rem" }}>"Dedicated to Nation Building and Public Service"</p>
//           </div>
//           <div>
//             <h4 style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--clr-saffron)", marginBottom: "1.2rem" }}>Quick Links</h4>
//             <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
//               {quickLinks.map(l => <li key={l}><button onClick={() => { if (l === "Gallery") { setPage("gallery"); window.scrollTo({ top: 0 }); } else if (l === "About") { setPage("about"); window.scrollTo({ top: 0 }); } else { setPage("home"); setTimeout(() => document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: "smooth" }), 100); } }} style={{ color: "var(--clr-text-low)", background: "none", border: "none", cursor: "pointer", fontSize: "0.9rem", padding: 0, textAlign: "left", fontFamily: "'Mukta',sans-serif" }}>{l}</button></li>)}
//             </ul>
//           </div>
//           <div>
//             <h4 style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--clr-saffron)", marginBottom: "1.2rem" }}>Work Areas</h4>
//             <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
//               {workAreas.map(l => <li key={l}><span style={{ color: "var(--clr-text-low)", fontSize: "0.9rem" }}>{l}</span></li>)}
//             </ul>
//           </div>
//           <div>
//             <h4 style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--clr-saffron)", marginBottom: "1.2rem" }}>Connect</h4>
//             <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
//               {["𝕏","📸","📘","💼","🧵"].map((icon, i) => (
//                 <a key={i} href="#" style={{ width: "36px", height: "36px", background: "var(--clr-bg-card)", border: "1px solid var(--clr-border)", borderRadius: "2px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", textDecoration: "none", transition: "all 0.3s" }}
//                   onMouseEnter={e => { e.currentTarget.style.background = "var(--clr-saffron)"; e.currentTarget.style.borderColor = "var(--clr-saffron)"; }}
//                   onMouseLeave={e => { e.currentTarget.style.background = "var(--clr-bg-card)"; e.currentTarget.style.borderColor = "var(--clr-border)"; }}
//                 >{icon}</a>
//               ))}
//             </div>
//             <div style={{ marginTop: "1.5rem" }}>
//               <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1rem", fontStyle: "italic", color: "var(--clr-gold-l)" }}>"वीर भोग्य वसुंधरा"</div>
//               <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "0.9rem", fontStyle: "italic", color: "var(--clr-text-faint)", marginTop: "0.5rem" }}>"अंतः अस्ति प्रारंभः"</div>
//             </div>
//           </div>
//         </div>
//         <div style={{ borderTop: "1px solid var(--clr-border)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//           <div style={{ fontSize: "0.82rem", color: "var(--clr-text-faint)" }}>© 2024 <span style={{ color: "var(--clr-saffron)" }}>Vikas Singh Bhadauria</span>. All rights reserved.</div>
//           <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "0.9rem", fontStyle: "italic", color: "var(--clr-text-faint)" }}>जय हिन्द 🇮🇳</div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// /* ═══════════════════════════════════════════════════════════════
//    PAGE 1 — LANDING / HOME
// ═══════════════════════════════════════════════════════════════ */
// function HeroSection({ setPage }) {
//   const typed = useTyping(TYPING_ROLES);
//   const particlesRef = useRef(null);
//   useEffect(() => {
//     const el = particlesRef.current; if (!el) return;
//     el.innerHTML = "";
//     for (let i = 0; i < 30; i++) {
//       const p = document.createElement("div");
//       p.className = "particle";
//       const size = Math.random() * 3 + 1;
//       p.style.cssText = `width:${size}px;height:${size}px;left:${Math.random()*100}%;background:${Math.random()>0.6?"var(--clr-gold)":"var(--clr-saffron)"};animation-duration:${Math.random()*20+15}s;animation-delay:${Math.random()*20}s;opacity:0.6`;
//       el.appendChild(p);
//     }
//   }, []);
//   return (
//     <section id="home" style={{ minHeight: "100vh", position: "relative", display: "flex", alignItems: "center", overflow: "hidden" }}>
//       <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 70% 40%,var(--clr-hero-rad1) 0%,transparent 60%),radial-gradient(ellipse 60% 80% at 20% 80%,var(--clr-hero-rad2) 0%,transparent 50%)" }} />
//       <div className="grid-overlay" />
//       <div ref={particlesRef} style={{ position: "absolute", inset: 0, overflow: "hidden" }} />
//       <div style={{ width: "100%", position: "relative", zIndex: 10, paddingTop: "60px" }}>
 
//         <div className="vsb-container" style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: "4rem", alignItems: "center", paddingTop: "80px" }} id="heroGrid">
//           <div>
//             <p style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--clr-saffron)", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.75rem", opacity: 0, animation: "fadeUp 0.8s ease 0.8s forwards" }}>
//               <span style={{ width: "32px", height: "1.5px", background: "var(--clr-saffron)", display: "block" }} />Personal Assistant to Anurag Thakur
//             </p>
//             <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(3rem,6vw,5.5rem)", fontWeight: 700, lineHeight: 1.05, color: "var(--clr-text)", marginBottom: "1.2rem", opacity: 0, animation: "fadeUp 0.8s ease 1s forwards" }}>
//               Vikas Singh<br /><span style={{ color: "var(--clr-saffron)" }}>Bhadauria</span>
//             </h1>
//             <p style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "1.05rem", fontWeight: 500, color: "var(--clr-text-mid)", letterSpacing: "0.05em", marginBottom: "1.5rem", minHeight: "1.6em", opacity: 0, animation: "fadeUp 0.8s ease 1.2s forwards" }}>
//               {typed}<span style={{ borderRight: "2px solid var(--clr-saffron)", paddingRight: "2px", animation: "blink 1s step-end infinite" }} />
//             </p>
//             <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.4rem", fontStyle: "italic", color: "var(--clr-gold-l)", marginBottom: "2.5rem", borderLeft: "2px solid var(--clr-saffron)", paddingLeft: "1.2rem", opacity: 0, animation: "fadeUp 0.8s ease 1.4s forwards" }}>"वीर भोग्य वसुंधरा"</p>
//             <div style={{ display: "flex", gap: "1rem", opacity: 0, animation: "fadeUp 0.8s ease 1.6s forwards", flexWrap: "wrap" }}>
//               <button className="btn-pri" onClick={() => { setPage("about"); window.scrollTo({ top: 0 }); }}>About Me ↓</button>
//               <button className="btn-out" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>Connect</button>
//             </div>
//           </div>
//           {/* Portrait */}
//           <div style={{ opacity: 0, animation: "fadeLeft 1s ease 0.5s forwards", position: "relative" }}>
//             <div style={{ width: "100%", aspectRatio: "3/4", borderRadius: "4px", overflow: "hidden", border: "1px solid var(--clr-border-s)", background: "var(--clr-portrait-bg)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem", position: "relative" }}>
//               <img 
//                 src="/profile.jpg" 
//                 alt="Vikas Singh Bhadauria Portrait" 
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                   borderRadius: "4px 4px 4px 4px",
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                 }}
//               />
//               <div style={{ position: "relative", zIndex: 1, pointerEvents: "none", width: "100%", height: "100%" }}>
//                 {/* overlay label (if needed), or keep this div for stacking other content */}
//               </div>
//               <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "50%", background: "linear-gradient(transparent,rgba(10,22,40,0.5))", zIndex: 2 }} />
//             </div>
//             <div style={{ position: "absolute", top: "-20px", right: "-20px", width: "80px", height: "80px", borderTop: "2px solid var(--clr-saffron)", borderRight: "2px solid var(--clr-saffron)", opacity: 0.5 }} />
//             <div style={{ position: "absolute", bottom: "-20px", left: "-20px", width: "80px", height: "80px", borderBottom: "2px solid var(--clr-gold)", borderLeft: "2px solid var(--clr-gold)", opacity: 0.5 }} />
//             <div
//               className="z-50"
//               style={{
//                 position: "absolute",
//                 bottom: "-16px",
//                 right: "20px",
//                 background: "var(--clr-saffron)",
//                 color: "#fff",
//                 padding: "0.6rem 1.2rem",
//                 borderRadius: "2px",
//                 fontFamily: "'Rajdhani',sans-serif",
//                 fontSize: "0.8rem",
//                 fontWeight: 700,
//                 letterSpacing: "0.1em",
//                 textTransform: "uppercase",
//                 zIndex: 100, // brings it on top of all siblings
//               }}
//             >
//               New Delhi, India
//             </div>
//           </div>
    
    
//         </div>
//         {/* Stats */}
//         <div className="vsb-container" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1.5rem", paddingTop: "3rem", paddingBottom: "5rem", opacity: 0, animation: "fadeUp 0.8s ease 2s forwards" }}>
//           <HeroStatCard count={500} label="Events Participated" />
//           <HeroStatCard count={10000} label="Youth Connected" />
//           <HeroStatCard count={8} label="Years of Service" />
//           <HeroStatCard count={50} label="Programs Organized" />
//         </div>
//       </div>
//     </section>
//   );
// }

// function VisionSection() {
//   return (
//     <section id="vision" className="vsb-section" style={{ position: "relative", overflow: "hidden" }}>
//       <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle,rgba(255,107,0,0.04) 0%,transparent 70%)", pointerEvents: "none" }} />
//       <div className="vsb-container" style={{ position: "relative", zIndex: 1 }}>
//         <RevealDiv style={{ textAlign: "center" }}><Eyebrow center>Vision & Mission</Eyebrow><h2 className="sec-title" style={{ textAlign: "center" }}>Driving Force Behind Every Action</h2></RevealDiv>
//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem", marginTop: "3.5rem" }} className="grid-2-auto">
//           <RevealDiv>
//             <div style={{ background: "linear-gradient(135deg,rgba(255,107,0,0.1) 0%,rgba(255,107,0,0.03) 100%)", border: "1px solid rgba(255,107,0,0.22)", borderRadius: "4px", padding: "2.5rem", height: "100%" }}>
//               <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "3.5rem", lineHeight: 1, marginBottom: "1rem", opacity: 0.5, color: "var(--clr-saffron)" }}>◈</div>
//               <p style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--clr-saffron)", marginBottom: "0.6rem" }}>Vision</p>
//               <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.7rem", fontWeight: 700, color: "var(--clr-text)", lineHeight: 1.2, marginBottom: "1rem" }}>Nation Building Through Youth Leadership</h3>
//               <p style={{ color: "var(--clr-text-mid)", lineHeight: 1.8, fontSize: "0.95rem" }}>A strong, prosperous, and inclusive India where every young citizen has the opportunity to contribute meaningfully to the nation's progress.</p>
//               <ul style={{ listStyle: "none", marginTop: "1.2rem" }}>
//                 {["Empowered youth as drivers of national transformation","Technology-driven, transparent governance","Cultural heritage with modern progress"].map(p => (
//                   <li key={p} style={{ display: "flex", gap: "0.75rem", padding: "0.5rem 0", color: "var(--clr-text-mid)", fontSize: "0.88rem", borderBottom: "1px solid var(--clr-border)" }}>
//                     <span style={{ color: "var(--clr-saffron)", fontSize: "0.5rem", marginTop: "6px", flexShrink: 0 }}>◆</span>{p}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </RevealDiv>
//           <RevealDiv delay={100}>
//             <div style={{ background: "linear-gradient(135deg,rgba(212,168,67,0.08) 0%,rgba(212,168,67,0.02) 100%)", border: "1px solid rgba(212,168,67,0.2)", borderRadius: "4px", padding: "2.5rem", height: "100%" }}>
//               <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "3.5rem", lineHeight: 1, marginBottom: "1rem", opacity: 0.5, color: "var(--clr-gold-l)" }}>◇</div>
//               <p style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--clr-gold)", marginBottom: "0.6rem" }}>Mission</p>
//               <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.7rem", fontWeight: 700, color: "var(--clr-text)", lineHeight: 1.2, marginBottom: "1rem" }}>Serving Society, Strengthening Values</h3>
//               <p style={{ color: "var(--clr-text-mid)", lineHeight: 1.8, fontSize: "0.95rem" }}>Active engagement in youth empowerment programs and social welfare activities that translate vision into tangible impact for communities.</p>
//               <ul style={{ listStyle: "none", marginTop: "1.2rem" }}>
//                 {["Youth leadership and skill development programs","Bridging communities with government initiatives","Promoting education and digital literacy","Advocating for welfare of marginalised sections"].map(p => (
//                   <li key={p} style={{ display: "flex", gap: "0.75rem", padding: "0.5rem 0", color: "var(--clr-text-mid)", fontSize: "0.88rem", borderBottom: "1px solid var(--clr-border)" }}>
//                     <span style={{ color: "var(--clr-gold)", fontSize: "0.5rem", marginTop: "6px", flexShrink: 0 }}>◆</span>{p}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </RevealDiv>
//         </div>
//       </div>
//     </section>
//   );
// }

// function AreasSection() {
//   return (
//     <section id="areas" className="vsb-section" style={{ background: "var(--clr-bg-mid)" }}>
//       <div className="vsb-container">
//         <RevealDiv style={{ textAlign: "center" }}><Eyebrow center>Areas of Work</Eyebrow><h2 className="sec-title" style={{ textAlign: "center" }}>Pillars of Service</h2></RevealDiv>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1.25rem", marginTop: "3rem" }} className="grid-4-auto">
//           {AREAS.map((a, i) => (
//             <RevealDiv key={i} delay={i * 60}>
//               <div style={{ background: "var(--clr-bg-card)", border: "1px solid var(--clr-border)", borderRadius: "4px", padding: "1.8rem 1.4rem", textAlign: "center", transition: "all 0.3s", cursor: "default" }}
//                 onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,107,0,0.06)"; e.currentTarget.style.borderColor = "rgba(255,107,0,0.25)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
//                 onMouseLeave={e => { e.currentTarget.style.background = "var(--clr-bg-card)"; e.currentTarget.style.borderColor = "var(--clr-border)"; e.currentTarget.style.transform = "translateY(0)"; }}>
//                 <div style={{ fontSize: "2rem", marginBottom: "0.8rem" }}>{a.icon}</div>
//                 <h4 style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.95rem", fontWeight: 700, letterSpacing: "0.08em", color: "var(--clr-text)" }}>{a.label}</h4>
//               </div>
//             </RevealDiv>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function ImpactSection() {
//   return (
//     <section style={{ padding: "5rem 0", background: "linear-gradient(135deg,rgba(255,107,0,0.07) 0%,transparent 50%,rgba(212,168,67,0.05) 100%)", borderTop: "1px solid var(--clr-border-s)", borderBottom: "1px solid var(--clr-border-s)" }}>
//       <div className="vsb-container">
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "2rem" }} className="grid-4-auto">
//           <StatCounter target={500} label="Events Participated" />
//           <StatCounter target={10000} label="Youth Connected" />
//           <StatCounter target={50} label="Programs Organized" />
//           <StatCounter target={100} label="Community Initiatives" />
//         </div>
//       </div>
//     </section>
//   );
// }

// function TestimonialsSection() {
//   const [idx, setIdx] = useState(0);
//   const max = Math.max(0, TESTIMONIALS.length - 2);
//   return (
//     <section id="testimonials" className="vsb-section">
//       <div className="vsb-container">
//         <RevealDiv><Eyebrow>Testimonials</Eyebrow><h2 className="sec-title">Words of Those Served</h2></RevealDiv>
//         <div style={{ overflow: "hidden", marginTop: "3rem" }}>
//           <div style={{ display: "flex", gap: "1.5rem", transition: "transform 0.5s ease", transform: `translateX(calc(-${idx} * (calc(50% - 12px) + 1.5rem)))` }}>
//             {TESTIMONIALS.map((t, i) => (
//               <div key={i} style={{ minWidth: "calc(50% - 12px)", background: "var(--clr-bg-card)", border: "1px solid var(--clr-border)", borderRadius: "4px", padding: "2rem", position: "relative" }}>
//                 <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "5rem", color: "rgba(255,107,0,0.12)", position: "absolute", top: "0.5rem", left: "1.2rem", lineHeight: 1 }}>"</div>
//                 <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.1rem", fontStyle: "italic", color: "var(--clr-text-mid)", lineHeight: 1.7, marginBottom: "1.5rem", marginTop: "1.5rem" }}>{t.text}</p>
//                 <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
//                   <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "rgba(255,107,0,0.12)", border: "1px solid rgba(255,107,0,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, color: "var(--clr-saffron)", fontSize: "0.9rem" }}>{t.initials}</div>
//                   <div>
//                     <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "var(--clr-text)", letterSpacing: "0.05em" }}>{t.name}</div>
//                     <div style={{ fontSize: "0.8rem", color: "var(--clr-text-low)" }}>{t.role}</div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div style={{ display: "flex", gap: "0.75rem", marginTop: "2rem" }}>
//           <button className="filter-btn" onClick={() => setIdx(i => Math.max(0, i - 1))}>←</button>
//           <button className="filter-btn" onClick={() => setIdx(i => Math.min(max, i + 1))}>→</button>
//         </div>
//       </div>
//     </section>
//   );
// }

// function SocialSection() {
//   return (
//     <section style={{ padding: "5rem 0", background: "var(--clr-bg-mid)" }}>
//       <div className="vsb-container">
//         <RevealDiv style={{ textAlign: "center" }}><Eyebrow center>Social Media</Eyebrow><h2 className="sec-title" style={{ textAlign: "center" }}>Stay Connected</h2></RevealDiv>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: "1rem", marginTop: "3rem" }} className="grid-4-auto">
//           {SOCIAL.map((s, i) => (
//             <RevealDiv key={i} delay={i * 60}>
//               <a href={s.url} target="_blank" rel="noopener noreferrer" className="social-card">
//                 <div style={{ fontSize: "2rem", marginBottom: "0.7rem" }}>{s.icon}</div>
//                 <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.1em", color: "var(--clr-text)", textTransform: "uppercase" }}>{s.name}</div>
//                 <div style={{ fontSize: "0.76rem", color: "var(--clr-text-low)", marginTop: "0.25rem" }}>{s.handle}</div>
//               </a>
//             </RevealDiv>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function ContactSection({ showToast }) {
//   const [form, setForm] = useState({ fn: "", ln: "", email: "", phone: "", subject: "", msg: "" });
//   const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));
//   const submit = (e) => { e.preventDefault(); showToast("✓ Message sent! We'll respond shortly."); setForm({ fn: "", ln: "", email: "", phone: "", subject: "", msg: "" }); };
//   const Label = ({ t }) => <label style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--clr-text-low)" }}>{t}</label>;
//   return (
//     <section id="contact" className="vsb-section">
//       <div className="vsb-container">
//         <RevealDiv><Eyebrow>Contact</Eyebrow><h2 className="sec-title">Get In Touch</h2></RevealDiv>
//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "5rem", marginTop: "3rem", alignItems: "start" }} className="grid-2-auto">
//           <RevealDiv>
//             <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.8rem", fontWeight: 600, color: "var(--clr-text)", marginBottom: "0.75rem" }}>Let's Connect for a Stronger India</h3>
//             <p style={{ color: "var(--clr-text-mid)", lineHeight: 1.8, marginBottom: "2rem" }}>Whether you represent an organisation, community group, or are an individual seeking assistance — reach out. Every connection is an opportunity to serve.</p>
//             {[{ icon: "📍", l: "Location", v: "New Delhi, India" }, { icon: "✉", l: "Email", v: "contact@vikasbhadauria.in" }, { icon: "📞", l: "Phone", v: "+91 XXXXX XXXXX" }, { icon: "𝕏", l: "Twitter", v: "@vikas7bhadauria" }].map(x => (
//               <div key={x.l} style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1.2rem" }}>
//                 <div style={{ width: "40px", height: "40px", background: "rgba(255,107,0,0.1)", border: "1px solid rgba(255,107,0,0.2)", borderRadius: "2px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{x.icon}</div>
//                 <div><div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--clr-text-low)" }}>{x.l}</div><div style={{ fontSize: "0.95rem", color: "var(--clr-text-mid)" }}>{x.v}</div></div>
//               </div>
//             ))}
//             <div style={{ height: "180px", background: "var(--clr-bg-card)", border: "1px solid var(--clr-border)", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "1.5rem", position: "relative", overflow: "hidden" }}>
//               <div className="grid-overlay" style={{ backgroundSize: "30px 30px" }} />
//               <div style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
//                 <div style={{ fontSize: "2rem" }}>📍</div>
//                 <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.1em", color: "var(--clr-saffron)", textTransform: "uppercase" }}>New Delhi, India</div>
//               </div>
//             </div>
//           </RevealDiv>
//           <RevealDiv delay={100}>
//             <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
//               <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
//                 <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}><Label t="First Name" /><input className="vsb-input" placeholder="Rahul" value={form.fn} onChange={set("fn")} required /></div>
//                 <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}><Label t="Last Name" /><input className="vsb-input" placeholder="Sharma" value={form.ln} onChange={set("ln")} /></div>
//               </div>
//               <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}><Label t="Email" /><input className="vsb-input" type="email" placeholder="you@example.com" value={form.email} onChange={set("email")} required /></div>
//               <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}><Label t="Phone" /><input className="vsb-input" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={set("phone")} /></div>
//               <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}><Label t="Subject" /><input className="vsb-input" placeholder="How can we help?" value={form.subject} onChange={set("subject")} /></div>
//               <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}><Label t="Message" /><textarea className="vsb-textarea" placeholder="Your message..." value={form.msg} onChange={set("msg")} required /></div>
//               <button type="submit" className="btn-pri" style={{ width: "100%", justifyContent: "center", border: "none" }}>Send Message →</button>
//             </form>
//           </RevealDiv>
//         </div>
//       </div>
//     </section>
//   );
// }

// function HomePage({ setPage, showToast }) {
//   return (
//     <div className="page-enter">
//       <HeroSection setPage={setPage} />
//       <div className="divider" />
//       <VisionSection />
//       <AreasSection />
//       <ImpactSection />
//       <div className="divider" />
//       <TestimonialsSection />
//       <SocialSection />
//       <ContactSection showToast={showToast} />
//     </div>
//   );
// }

// /* ═══════════════════════════════════════════════════════════════
//    PAGE 2 — ABOUT
// ═══════════════════════════════════════════════════════════════ */
// function AboutPage({ setPage }) {
//   return (
//     <div className="page-enter">
//       {/* Hero Banner */}
//       <section style={{ minHeight: "55vh", position: "relative", display: "flex", alignItems: "center", overflow: "hidden", paddingTop: "80px" }}>
//         <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 60% 50%,var(--clr-hero-rad1) 0%,transparent 65%)" }} />
//         <div className="grid-overlay" />
//         <div className="vsb-container" style={{ position: "relative", zIndex: 1, paddingTop: "4rem", paddingBottom: "4rem" }}>
//           <div style={{ maxWidth: "700px" }}>
//             <p style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--clr-saffron)", display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.2rem", opacity: 0, animation: "fadeUp 0.8s ease 0.3s forwards" }}>
//               <span style={{ width: "24px", height: "1.5px", background: "var(--clr-saffron)", display: "block" }} />About Page
//             </p>
//             <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2.5rem,6vw,5rem)", fontWeight: 700, color: "var(--clr-text)", lineHeight: 1.05, marginBottom: "1.2rem", opacity: 0, animation: "fadeUp 0.8s ease 0.5s forwards" }}>
//               Vikas Singh<br /><span style={{ color: "var(--clr-saffron)" }}>Bhadauria</span>
//             </h1>
//             <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.25rem", fontStyle: "italic", color: "var(--clr-gold-l)", borderLeft: "2px solid var(--clr-saffron)", paddingLeft: "1rem", opacity: 0, animation: "fadeUp 0.8s ease 0.7s forwards" }}>"अंतः अस्ति प्रारंभः" — In the end is the beginning</p>
//           </div>
//         </div>
//         {/* Decorative year block */}
//         <div style={{ position: "absolute", right: "4rem", bottom: "2rem", fontFamily: "'Cormorant Garamond',serif", fontSize: "8rem", fontWeight: 700, color: "rgba(255,107,0,0.06)", lineHeight: 1, userSelect: "none" }}>VSB</div>
//       </section>

//       <div className="divider" />

//       {/* Biography */}
//       <section className="vsb-section">
//         <div className="vsb-container">
//           <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: "5rem", alignItems: "start" }} className="grid-2-auto">
//             <RevealDiv>
//               <div style={{ position: "sticky", top: "100px" }}>
//                 <div style={{ background: "var(--clr-bg-card)", border: "1px solid var(--clr-border-s)", borderRadius: "4px", padding: "2.5rem", marginBottom: "1.5rem" }}>
//                   <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.8rem", fontWeight: 700, color: "var(--clr-text)", marginBottom: "0.3rem" }}>Vikas Singh Bhadauria</div>
//                   <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.82rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--clr-saffron)", marginBottom: "1.5rem" }}>Youth Leader & Public Servant</div>
//                   <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
//                     {["Swamsewak","ABVP","MCU President","IIT Guwahati","Nationalist","Rajput","Strategist"].map(t => <span key={t} className="tag">{t}</span>)}
//                   </div>
//                   <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
//                     {[{ icon: "📍", l: "Location", v: "New Delhi, India" }, { icon: "🎓", l: "Education", v: "IIT Guwahati" }, { icon: "🏛", l: "Former Role", v: "President, MCU Bhopal" }, { icon: "⚡", l: "Current Role", v: "PA to Anurag Thakur" }].map(x => (
//                       <div key={x.l} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.6rem 0", borderBottom: "1px solid var(--clr-border)" }}>
//                         <span style={{ fontSize: "1rem" }}>{x.icon}</span>
//                         <div><div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--clr-text-low)" }}>{x.l}</div><div style={{ fontSize: "0.9rem", color: "var(--clr-text-mid)" }}>{x.v}</div></div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//                 <div style={{ background: "linear-gradient(135deg,rgba(255,107,0,0.1),rgba(255,107,0,0.04))", border: "1px solid rgba(255,107,0,0.2)", borderRadius: "4px", padding: "1.5rem" }}>
//                   <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.2rem", fontStyle: "italic", color: "var(--clr-gold-l)", lineHeight: 1.6 }}>"वीर भोग्य वसुंधरा — The brave inherit the earth."</div>
//                 </div>
//               </div>
//             </RevealDiv>

//             <div>
//               <RevealDiv>
//                 <Eyebrow>Biography</Eyebrow>
//                 <h2 className="sec-title">A Life Dedicated to Nation & Youth</h2>
//                 <p style={{ color: "var(--clr-text-mid)", lineHeight: 1.85, marginBottom: "1.2rem", fontSize: "1rem" }}>Vikas Singh Bhadauria is a dedicated youth leader, nationalist, and public servant from New Delhi. Born with an innate sense of duty towards the nation and its people, Vikas has built a remarkable career in public service and political leadership that has touched thousands of lives across India.</p>
//                 <p style={{ color: "var(--clr-text-mid)", lineHeight: 1.85, marginBottom: "1.2rem", fontSize: "1rem" }}>His journey began in the student corridors of India's premier institutions, where his natural leadership abilities and unwavering commitment to nationalist values made him a standout figure. Associated with IIT Guwahati, he developed the academic rigour and analytical capabilities that would later distinguish him as a strategic political thinker.</p>
//                 <p style={{ color: "var(--clr-text-mid)", lineHeight: 1.85, fontSize: "1rem" }}>As a Swamsewak, ABVP member, and former President of Makhanlal Chaturvedi National University (MCU), Bhopal, Vikas has consistently championed the cause of youth empowerment, quality education, and the strengthening of India's national fabric. Today, as Personal Assistant to the Honourable Anurag Thakur, he continues this mission at the highest levels of national governance.</p>
//               </RevealDiv>

//               <RevealDiv delay={80} style={{ marginTop: "3rem" }}>
//                 <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.6rem", fontWeight: 600, color: "var(--clr-text)", marginBottom: "1.5rem" }}>Core Values</h3>
//                 <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
//                   {[["🇮🇳","Nationalism","Unwavering love for Bharat above all else"],["⚡","Dedication","Total commitment to assigned duties and responsibilities"],["🤝","Service","Selfless service to the citizens and communities"],["📚","Education","Belief in education as the foundation of national progress"],["👥","Youth First","Empowering the next generation of Indian leaders"],["🛡","Integrity","Transparent, honest, and accountable in all actions"]].map(([icon,title,desc]) => (
//                     <div key={title} style={{ display: "flex", gap: "1rem", padding: "1.2rem", background: "var(--clr-bg-card)", border: "1px solid var(--clr-border)", borderRadius: "4px", transition: "all 0.3s" }}
//                       onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,107,0,0.25)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
//                       onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--clr-border)"; e.currentTarget.style.transform = "translateY(0)"; }}>
//                       <span style={{ fontSize: "1.4rem" }}>{icon}</span>
//                       <div><div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.88rem", fontWeight: 700, color: "var(--clr-text)" }}>{title}</div><div style={{ fontSize: "0.8rem", color: "var(--clr-text-low)", marginTop: "0.2rem" }}>{desc}</div></div>
//                     </div>
//                   ))}
//                 </div>
//               </RevealDiv>
//             </div>
//           </div>
//         </div>
//       </section>

//       <div className="divider" />

//       {/* Achievements strip */}
//       <section className="vsb-section" style={{ background: "var(--clr-bg-mid)" }}>
//         <div className="vsb-container">
//           <RevealDiv style={{ textAlign: "center" }}><Eyebrow center>Achievements</Eyebrow><h2 className="sec-title" style={{ textAlign: "center" }}>Milestones of Service & Leadership</h2></RevealDiv>
//           <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem", marginTop: "3rem" }} className="grid-3-auto">
//             {ACHIEVEMENTS.map((a, i) => (
//               <RevealDiv key={i} delay={i * 70}>
//                 <div style={{ background: "var(--clr-bg-card)", border: "1px solid var(--clr-border)", borderRadius: "4px", padding: "2rem", height: "100%", transition: "all 0.3s" }}
//                   onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,107,0,0.3)"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "var(--shadow-card)"; }}
//                   onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--clr-border)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
//                   <div style={{ width: "52px", height: "52px", background: "rgba(255,107,0,0.1)", border: "1px solid rgba(255,107,0,0.2)", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.2rem", fontSize: "1.4rem" }}>{a.icon}</div>
//                   <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.25rem", fontWeight: 600, color: "var(--clr-text)", marginBottom: "0.6rem" }}>{a.title}</h3>
//                   <p style={{ fontSize: "0.87rem", color: "var(--clr-text-mid)", lineHeight: 1.7 }}>{a.desc}</p>
//                 </div>
//               </RevealDiv>
//             ))}
//           </div>
//         </div>
//       </section>

//       <div className="divider" />

//       {/* Timeline */}
//       <section id="journey" className="vsb-section">
//         <div className="vsb-container">
//           <RevealDiv><Eyebrow>Leadership Journey</Eyebrow><h2 className="sec-title">A Path of Dedication & Service</h2><p className="sec-sub">From student activism to national political responsibilities — a journey defined by purpose and service to the nation.</p></RevealDiv>
//           <div style={{ position: "relative", paddingLeft: "3rem", maxWidth: "800px", margin: "3rem auto 0" }}>
//             <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "1.5px", background: "linear-gradient(180deg,var(--clr-saffron),var(--clr-gold),rgba(212,168,67,0.1))" }} />
//             {TIMELINE.map((item, i) => <TimelineItem key={i} item={item} index={i} />)}
//           </div>
//         </div>
//       </section>

//       {/* Impact counters */}
//       <ImpactSection />

//       {/* CTA */}
//       <section className="vsb-section" style={{ background: "var(--clr-bg-mid)" }}>
//         <div className="vsb-container" style={{ textAlign: "center" }}>
//           <RevealDiv>
//             <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, color: "var(--clr-text)", marginBottom: "1rem" }}>Ready to Connect?</h2>
//             <p style={{ color: "var(--clr-text-mid)", marginBottom: "2rem", maxWidth: "500px", margin: "0 auto 2rem" }}>Reach out for collaborations, community programs, or simply to discuss ideas for a stronger India.</p>
//             <button className="btn-pri" onClick={() => { setPage("home"); setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 100); }}>Get In Touch →</button>
//           </RevealDiv>
//         </div>
//       </section>
//     </div>
//   );
// }

// /* ═══════════════════════════════════════════════════════════════
//    PAGE 3 — GALLERY
// ═══════════════════════════════════════════════════════════════ */
// function GalleryPage() {
//   const [active, setActive] = useState("All");
//   const [selected, setSelected] = useState(null);
//   const cats = ["All", "Public Events", "Meetings", "Youth Programs", "Social Activities"];
//   const filtered = active === "All" ? GALLERY_ITEMS : GALLERY_ITEMS.filter(g => g.category === active);

//   return (
//     <div className="page-enter">
//       {/* Hero Banner */}
//       <section style={{ minHeight: "45vh", position: "relative", display: "flex", alignItems: "center", overflow: "hidden", paddingTop: "80px" }}>
//         <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 70% at 40% 50%,var(--clr-hero-rad1) 0%,transparent 65%)" }} />
//         <div className="grid-overlay" />
//         <div className="vsb-container" style={{ position: "relative", zIndex: 1, paddingTop: "4rem", paddingBottom: "4rem" }}>
//           <p style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--clr-saffron)", display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.2rem", opacity: 0, animation: "fadeUp 0.8s ease 0.3s forwards" }}>
//             <span style={{ width: "24px", height: "1.5px", background: "var(--clr-saffron)", display: "block" }} />Gallery
//           </p>
//           <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2.5rem,6vw,5rem)", fontWeight: 700, color: "var(--clr-text)", lineHeight: 1.05, marginBottom: "1rem", opacity: 0, animation: "fadeUp 0.8s ease 0.5s forwards" }}>
//             Moments in <span style={{ color: "var(--clr-saffron)" }}>Service</span>
//           </h1>
//           <p style={{ color: "var(--clr-text-mid)", fontSize: "1.05rem", maxWidth: "560px", opacity: 0, animation: "fadeUp 0.8s ease 0.7s forwards" }}>A visual chronicle of leadership, service, and unwavering dedication to the nation's youth and communities.</p>
//         </div>
//         <div style={{ position: "absolute", right: "4rem", bottom: "1rem", fontFamily: "'Cormorant Garamond',serif", fontSize: "7rem", fontWeight: 700, color: "rgba(255,107,0,0.05)", lineHeight: 1, userSelect: "none" }}>2024</div>
//       </section>

//       <div className="divider" />

//       {/* Gallery grid */}
//       <section className="vsb-section">
//         <div className="vsb-container">
//           {/* Stats bar */}
//           <RevealDiv>
//             <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1rem", marginBottom: "3rem" }}>
//               {[{ n: "9+", l: "Total Photos" }, { n: "5", l: "Categories" }, { n: "2024", l: "Latest Year" }, { n: "500+", l: "Events Covered" }].map(x => (
//                 <div key={x.l} style={{ background: "var(--clr-bg-card)", border: "1px solid var(--clr-border-s)", borderRadius: "4px", padding: "1.2rem 1.5rem", borderBottom: "2px solid var(--clr-saffron)" }}>
//                   <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2rem", fontWeight: 700, color: "var(--clr-saffron)" }}>{x.n}</div>
//                   <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--clr-text-low)", marginTop: "0.2rem" }}>{x.l}</div>
//                 </div>
//               ))}
//             </div>
//           </RevealDiv>

//           {/* Filters */}
//           <RevealDiv>
//             <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "2.5rem", alignItems: "center" }}>
//               <span style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--clr-text-low)", marginRight: "0.5rem" }}>Filter:</span>
//               {cats.map(c => <button key={c} className={`filter-btn ${active === c ? "active" : ""}`} onClick={() => setActive(c)}>{c}</button>)}
//             </div>
//           </RevealDiv>

//           {/* Masonry-style grid */}
//           <div style={{ columns: "3", columnGap: "1rem" }}>
//             {filtered.map((g, i) => (
//               <RevealDiv key={`${active}-${i}`} delay={i * 60} style={{ breakInside: "avoid", marginBottom: "1rem" }}>
//                 <div className="gal-item" style={{ cursor: "pointer" }} onClick={() => setSelected(g)}>
//                   <div style={{
//                     background: `linear-gradient(135deg,var(--clr-bg-card) 0%,var(--clr-bg-mid) 100%)`,
//                     aspectRatio: i % 3 === 1 ? "3/4" : "4/3",
//                     display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.75rem", padding: "2rem"
//                   }}>
//                     <span style={{ fontSize: "3rem", opacity: 0.25 }}>{g.icon}</span>
//                     <span style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.72rem", letterSpacing: "0.2em", color: "var(--clr-text-faint)", textTransform: "uppercase" }}>{g.category}</span>
//                   </div>
//                   {/* Category badge */}
//                   <div style={{ position: "absolute", top: "0.75rem", left: "0.75rem", background: "var(--clr-saffron)", color: "#fff", padding: "0.2rem 0.6rem", borderRadius: "2px", fontFamily: "'Rajdhani',sans-serif", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>{g.category}</div>
//                   <div className="gal-overlay">
//                     <div>
//                       <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.1em", color: "#fff", textTransform: "uppercase" }}>{g.label}</div>
//                       <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.6)", marginTop: "0.25rem" }}>Click to view details</div>
//                     </div>
//                   </div>
//                 </div>
//               </RevealDiv>
//             ))}
//           </div>

//           {filtered.length === 0 && (
//             <div style={{ textAlign: "center", padding: "4rem", color: "var(--clr-text-low)" }}>
//               <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📷</div>
//               <p style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.9rem", letterSpacing: "0.1em" }}>No items in this category yet.</p>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Lightbox */}
//       {selected && (
//         <div style={{ position: "fixed", inset: 0, background: "rgba(5,13,26,0.95)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }} onClick={() => setSelected(null)}>
//           <div style={{ background: "var(--clr-bg-mid)", border: "1px solid var(--clr-border-s)", borderRadius: "4px", maxWidth: "560px", width: "100%", overflow: "hidden", animation: "fadeUp 0.3s ease" }} onClick={e => e.stopPropagation()}>
//             <div style={{ aspectRatio: "16/9", background: "linear-gradient(135deg,var(--clr-bg-card),var(--clr-bg-mid))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "4rem", opacity: 0.4 }}>{selected.icon}</div>
//             <div style={{ padding: "2rem" }}>
//               <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--clr-saffron)", marginBottom: "0.5rem" }}>{selected.category}</div>
//               <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.6rem", fontWeight: 700, color: "var(--clr-text)", marginBottom: "0.75rem" }}>{selected.label}</h3>
//               <p style={{ color: "var(--clr-text-mid)", lineHeight: 1.7, fontSize: "0.95rem", marginBottom: "1.5rem" }}>{selected.desc}</p>
//               <button className="btn-out" onClick={() => setSelected(null)}>Close ✕</button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Upload CTA */}
//       <section style={{ padding: "5rem 0", background: "var(--clr-bg-mid)" }}>
//         <div className="vsb-container">
//           <div style={{ background: "linear-gradient(135deg,rgba(255,107,0,0.08),rgba(212,168,67,0.05))", border: "1px solid var(--clr-border-s)", borderRadius: "4px", padding: "3.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem", flexWrap: "wrap" }}>
//             <div>
//               <Eyebrow>Media & Press</Eyebrow>
//               <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2rem", fontWeight: 700, color: "var(--clr-text)", lineHeight: 1.2 }}>Press Kit & High-Res Photos</h3>
//               <p style={{ color: "var(--clr-text-mid)", marginTop: "0.5rem", maxWidth: "450px" }}>For media organisations requiring high-resolution photographs or press materials, reach out via the contact form.</p>
//             </div>
//             <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
//               <button className="btn-pri">Download Press Kit</button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// /* ═══════════════════════════════════════════════════════════════
//    ROOT APP
// ═══════════════════════════════════════════════════════════════ */
// export default function VikasBhadauria() {
//   const [dark, setDark] = useState(true);
//   const [loaded, setLoaded] = useState(false);
//   const [page, setPage] = useState("home");
//   const [toasts, setToasts] = useState([]);
//   const [scrollY, setScrollY] = useState(0);
//   const cursorRef = useRef(null);
//   const ringRef = useRef(null);
//   const mouse = useRef({ x: 0, y: 0 });
//   const ring = useRef({ x: 0, y: 0 });

//   // Inject global CSS once
//   useEffect(() => {
//     const id = "vsb-global";
//     if (!document.getElementById(id)) {
//       const s = document.createElement("style");
//       s.id = id; s.textContent = GLOBAL_CSS;
//       document.head.appendChild(s);
//     }
//     // Responsive helpers
//     const rid = "vsb-resp";
//     let el = document.getElementById(rid);
//     if (!el) { el = document.createElement("style"); el.id = rid; document.head.appendChild(el); }
//     el.textContent = `
//       @media(max-width:1024px){ .hide-md{display:none!important} .hamburger-show{display:flex!important} }
//       #heroGrid { grid-template-columns: 1fr !important; }
//       @media(min-width:900px){ #heroGrid { grid-template-columns: 1fr 420px !important; } }
//     `;
//   }, []);

//   // Theme
//   useEffect(() => {
//     document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
//   }, [dark]);

//   // Loading
//   useEffect(() => { const t = setTimeout(() => setLoaded(true), 2000); return () => clearTimeout(t); }, []);

//   // Cursor
//   useEffect(() => {
//     const onMove = (e) => {
//       mouse.current = { x: e.clientX, y: e.clientY };
//       if (cursorRef.current) { cursorRef.current.style.left = e.clientX - 4 + "px"; cursorRef.current.style.top = e.clientY - 4 + "px"; }
//     };
//     document.addEventListener("mousemove", onMove);
//     let raf;
//     const animate = () => {
//       ring.current.x += (mouse.current.x - ring.current.x - 18) * 0.12;
//       ring.current.y += (mouse.current.y - ring.current.y - 18) * 0.12;
//       if (ringRef.current) { ringRef.current.style.left = ring.current.x + "px"; ringRef.current.style.top = ring.current.y + "px"; }
//       raf = requestAnimationFrame(animate);
//     };
//     animate();
//     return () => { document.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
//   }, []);

//   // Scroll
//   useEffect(() => {
//     const h = () => setScrollY(window.scrollY);
//     window.addEventListener("scroll", h, { passive: true });
//     return () => window.removeEventListener("scroll", h);
//   }, []);

//   // Scroll to top on page change
//   useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [page]);

//   const showToast = useCallback((msg) => {
//     const id = Date.now();
//     setToasts(t => [...t, { id, msg }]);
//     setTimeout(() => setToasts(t => t.filter(x => x.id !== id)), 3200);
//   }, []);

//   const scrollPct = (scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight)) * 100;

//   return (
//     <ThemeCtx.Provider value={{ dark, toggle: () => setDark(d => !d) }}>
//       {/* Global UI */}
//       <div className="vsb-cursor" ref={cursorRef} style={{ position: "fixed", pointerEvents: "none", zIndex: 99999 }} />
//       <div className="vsb-cursor-ring" ref={ringRef} style={{ position: "fixed", pointerEvents: "none", zIndex: 99998 }} />
//       <div style={{ position: "fixed", top: 0, left: 0, height: "3px", background: "linear-gradient(90deg,var(--clr-saffron),var(--clr-gold))", width: scrollPct + "%", zIndex: 99997, transition: "width 0.1s", pointerEvents: "none" }} />
//       <LoadingScreen done={loaded} />

//       {/* Toasts */}
//       <div style={{ position: "fixed", bottom: "2rem", left: "50%", transform: "translateX(-50%)", zIndex: 10000, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
//         {toasts.map(t => <div key={t.id} className="vsb-toast">{t.msg}</div>)}
//       </div>

//       {/* Back to top */}
//       <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ position: "fixed", bottom: "2rem", right: "2rem", width: "44px", height: "44px", background: "var(--clr-saffron)", border: "none", borderRadius: "2px", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", opacity: scrollY > 500 ? 1 : 0, visibility: scrollY > 500 ? "visible" : "hidden", transition: "all 0.3s", zIndex: 998, fontFamily: "sans-serif" }}>↑</button>

//       {/* App */}
//       <div className="vsb-page">
//         <Navbar page={page} setPage={setPage} />
//         {page === "home" && <HomePage setPage={setPage} showToast={showToast} />}
//         {page === "about" && <AboutPage setPage={setPage} />}
//         {page === "gallery" && <GalleryPage />}
//         <Footer setPage={setPage} />
//       </div>
//     </ThemeCtx.Provider>
//   );
// }

import { useState, useEffect, useRef, useCallback, createContext, useContext } from "react";

/* ═══════════════════════════════════════════════════════════════
   THEME CONTEXT
═══════════════════════════════════════════════════════════════ */
const ThemeCtx = createContext({ dark: true, toggle: () => {} });
const useTheme = () => useContext(ThemeCtx);

/* ═══════════════════════════════════════════════════════════════
   CSS VARIABLES & GLOBAL STYLES
═══════════════════════════════════════════════════════════════ */
const GLOBAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400;1,600&family=Rajdhani:wght@400;500;600;700&family=Mukta:wght@300;400;600;700&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body { font-family: 'Mukta', sans-serif; overflow-x: hidden; transition: background 0.4s, color 0.4s; }
::selection { background: rgba(255,107,0,0.3); color: var(--clr-white); }

/* ── THEME VARIABLES ── */
[data-theme="dark"] {
  --clr-bg:          #0A1628;
  --clr-bg-mid:      #0D1D35;
  --clr-bg-card:     rgba(255,255,255,0.03);
  --clr-bg-card2:    rgba(255,255,255,0.05);
  --clr-border:      rgba(255,255,255,0.07);
  --clr-border-s:    rgba(255,107,0,0.15);
  --clr-text:        #FFFFFF;
  --clr-text-mid:    rgba(255,255,255,0.65);
  --clr-text-low:    rgba(255,255,255,0.45);
  --clr-text-faint:  rgba(255,255,255,0.25);
  --clr-white:       #FFFFFF;
  --clr-navy:        #0A1628;
  --clr-navy-light:  #1B3060;
  --clr-saffron:     #FF6B00;
  --clr-saffron-d:   #E55A00;
  --clr-gold:        #D4A843;
  --clr-gold-l:      #F0C055;
  --clr-overlay:     rgba(10,22,40,0.97);
  --clr-portrait-bg: linear-gradient(160deg,#112240 0%,#1B3060 50%,#0F2040 100%);
  --clr-grid:        rgba(255,107,0,0.03);
  --clr-hero-rad1:   rgba(255,107,0,0.08);
  --clr-hero-rad2:   rgba(212,168,67,0.05);
  --shadow-card:     0 16px 40px rgba(0,0,0,0.3);
  --shadow-btn:      0 8px 32px rgba(255,107,0,0.3);
  --clr-toggle-bg:   rgba(255,255,255,0.08);
  --clr-toggle-icon: #FFFFFF;
}
[data-theme="light"] {
  --clr-bg:          #FDF8F3;
  --clr-bg-mid:      #F5EDE0;
  --clr-bg-card:     rgba(255,255,255,0.8);
  --clr-bg-card2:    rgba(255,255,255,0.95);
  --clr-border:      rgba(0,0,0,0.07);
  --clr-border-s:    rgba(255,107,0,0.2);
  --clr-text:        #1A0A00;
  --clr-text-mid:    rgba(26,10,0,0.7);
  --clr-text-low:    rgba(26,10,0,0.5);
  --clr-text-faint:  rgba(26,10,0,0.3);
  --clr-white:       #1A0A00;
  --clr-navy:        #FDF8F3;
  --clr-navy-light:  #EDE3D5;
  --clr-saffron:     #E55A00;
  --clr-saffron-d:   #CC4D00;
  --clr-gold:        #B8891A;
  --clr-gold-l:      #C89A25;
  --clr-overlay:     rgba(253,248,243,0.97);
  --clr-portrait-bg: linear-gradient(160deg,#F0E8DC 0%,#E8DACE 50%,#EDE0D0 100%);
  --clr-grid:        rgba(229,90,0,0.04);
  --clr-hero-rad1:   rgba(255,107,0,0.06);
  --clr-hero-rad2:   rgba(212,168,67,0.04);
  --shadow-card:     0 16px 40px rgba(0,0,0,0.08);
  --shadow-btn:      0 8px 32px rgba(255,107,0,0.25);
  --clr-toggle-bg:   rgba(0,0,0,0.06);
  --clr-toggle-icon: #1A0A00;
}

/* ── CURSOR (desktop only) ── */
@media(pointer:fine){
  .vsb-cursor { width:8px; height:8px; background:var(--clr-saffron); border-radius:50%; position:fixed; pointer-events:none; z-index:99999; mix-blend-mode:difference; }
  .vsb-cursor-ring { width:36px; height:36px; border:1.5px solid var(--clr-saffron); border-radius:50%; position:fixed; pointer-events:none; z-index:99998; transition:all 0.15s ease; opacity:0.5; }
  body { cursor: none; }
}

/* ── LAYOUT ── */
.vsb-page { background: var(--clr-bg); color: var(--clr-text); min-height:100vh; transition: background 0.4s, color 0.4s; }
.vsb-section { padding: 5rem 0; }
.vsb-container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }

/* ── SCROLL REVEAL ── */
.reveal { opacity:0; transform:translateY(28px); transition:opacity 0.7s ease, transform 0.7s ease; }
.reveal.in { opacity:1; transform:translateY(0); }
.tl-item { opacity:0; transform:translateX(-20px); transition:all 0.7s ease; }
.tl-item.in { opacity:1; transform:translateX(0); }

/* ── TYPOGRAPHY ── */
.sec-eye { font-family:'Rajdhani',sans-serif; font-size:0.78rem; font-weight:700; letter-spacing:0.35em; text-transform:uppercase; color:var(--clr-saffron); display:flex; align-items:center; gap:0.75rem; margin-bottom:0.75rem; }
.sec-eye::before { content:''; width:24px; height:1.5px; background:var(--clr-saffron); flex-shrink:0; }
.sec-title { font-family:'Cormorant Garamond',serif; font-size:clamp(1.8rem,4vw,3.2rem); font-weight:700; color:var(--clr-text); line-height:1.1; margin-bottom:1rem; }
.sec-sub { font-size:1rem; color:var(--clr-text-mid); line-height:1.7; max-width:560px; }

/* ── BUTTONS ── */
.btn-pri { display:inline-flex; align-items:center; gap:0.5rem; background:var(--clr-saffron); color:#fff; padding:0.85rem 2rem; border-radius:2px; text-decoration:none; font-family:'Rajdhani',sans-serif; font-weight:700; font-size:0.9rem; letter-spacing:0.1em; text-transform:uppercase; transition:all 0.3s; border:2px solid var(--clr-saffron); cursor:pointer; }
.btn-pri:hover { background:var(--clr-saffron-d); border-color:var(--clr-saffron-d); transform:translateY(-2px); box-shadow:var(--shadow-btn); }
.btn-out { display:inline-flex; align-items:center; gap:0.5rem; background:transparent; color:var(--clr-text); padding:0.85rem 2rem; border-radius:2px; text-decoration:none; font-family:'Rajdhani',sans-serif; font-weight:700; font-size:0.9rem; letter-spacing:0.1em; text-transform:uppercase; transition:all 0.3s; border:2px solid var(--clr-border); cursor:pointer; }
.btn-out:hover { border-color:var(--clr-saffron); color:var(--clr-saffron); transform:translateY(-2px); }

/* ── CARDS ── */
.vsb-card { background:var(--clr-bg-card); border:1px solid var(--clr-border); border-radius:4px; transition:all 0.3s; }
.vsb-card:hover { border-color:var(--clr-border-s); box-shadow:var(--shadow-card); }
.tag { background:rgba(255,107,0,0.1); border:1px solid rgba(255,107,0,0.2); color:var(--clr-saffron); padding:0.28rem 0.75rem; border-radius:2px; font-family:'Rajdhani',sans-serif; font-size:0.75rem; font-weight:600; letter-spacing:0.08em; text-transform:uppercase; }
.divider { height:1px; background:linear-gradient(90deg,transparent,rgba(255,107,0,0.2),transparent); }
.grid-overlay { position:absolute; inset:0; background-image:linear-gradient(var(--clr-grid) 1px,transparent 1px),linear-gradient(90deg,var(--clr-grid) 1px,transparent 1px); background-size:60px 60px; pointer-events:none; }

/* ── NAVBAR ── */
.vsb-nav { position:fixed; top:0; left:0; right:0; z-index:1000; padding:1.2rem 2rem; display:flex; align-items:center; justify-content:space-between; transition:all 0.4s ease; }
.vsb-nav.scrolled { backdrop-filter:blur(20px); -webkit-backdrop-filter:blur(20px); padding:0.8rem 2rem; border-bottom:1px solid var(--clr-border-s); }
[data-theme="dark"] .vsb-nav.scrolled { background:rgba(10,22,40,0.95); }
[data-theme="light"] .vsb-nav.scrolled { background:rgba(253,248,243,0.95); }
.nav-logo { font-family:'Cormorant Garamond',serif; font-size:1.6rem; font-weight:700; color:var(--clr-text); text-decoration:none; letter-spacing:0.02em; background:none; border:none; cursor:pointer; }
.nav-logo span { color:var(--clr-saffron); }
.nav-lnk { font-family:'Rajdhani',sans-serif; font-size:0.9rem; font-weight:600; letter-spacing:0.12em; text-transform:uppercase; color:var(--clr-text-mid); text-decoration:none; background:none; border:none; cursor:pointer; transition:color 0.3s; position:relative; padding:0; }
.nav-lnk::after { content:''; position:absolute; bottom:-4px; left:0; width:0; height:1.5px; background:var(--clr-saffron); transition:width 0.3s; }
.nav-lnk:hover, .nav-lnk.active { color:var(--clr-text); }
.nav-lnk:hover::after, .nav-lnk.active::after { width:100%; }
.theme-toggle { width:40px; height:40px; border-radius:2px; background:var(--clr-toggle-bg); border:1px solid var(--clr-border); cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all 0.3s; font-size:1.1rem; }
.theme-toggle:hover { border-color:var(--clr-saffron); background:rgba(255,107,0,0.1); }
.nav-desktop { display:flex; gap:2rem; list-style:none; align-items:center; }
.nav-mobile-btns { display:none; gap:0.75rem; align-items:center; }
@media(max-width:900px){
  .nav-desktop { display:none !important; }
  .nav-mobile-btns { display:flex !important; }
}

/* ── FORMS ── */
.vsb-input, .vsb-textarea { background:var(--clr-bg-card); border:1px solid var(--clr-border); border-radius:2px; padding:0.75rem 1rem; color:var(--clr-text); font-family:'Mukta',sans-serif; font-size:0.95rem; outline:none; transition:all 0.3s; width:100%; }
.vsb-input:focus, .vsb-textarea:focus { border-color:rgba(255,107,0,0.4); background:rgba(255,107,0,0.04); }
.vsb-input::placeholder, .vsb-textarea::placeholder { color:var(--clr-text-faint); }
.vsb-textarea { resize:vertical; min-height:120px; }

/* ── FILTER BTNS ── */
.filter-btn { background:transparent; border:1px solid var(--clr-border); color:var(--clr-text-low); padding:0.45rem 1.1rem; border-radius:2px; font-family:'Rajdhani',sans-serif; font-size:0.82rem; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; cursor:pointer; transition:all 0.3s; }
.filter-btn:hover, .filter-btn.active { background:var(--clr-saffron); border-color:var(--clr-saffron); color:#fff; }

/* ── GALLERY ── */
.gal-item { border-radius:4px; overflow:hidden; position:relative; border:1px solid var(--clr-border); transition:all 0.3s; cursor:pointer; }
.gal-item:hover { transform:scale(1.02); border-color:var(--clr-border-s); box-shadow:var(--shadow-card); }
.gal-overlay { position:absolute; inset:0; background:linear-gradient(transparent 40%,rgba(10,22,40,0.85)); opacity:0; transition:opacity 0.3s; display:flex; align-items:flex-end; padding:1rem; }
.gal-item:hover .gal-overlay { opacity:1; }
/* Touch devices show overlay always */
@media(hover:none){ .gal-overlay { opacity:1; background:linear-gradient(transparent 50%,rgba(10,22,40,0.7)); } }

/* ── TIMELINE ── */
.tl-card { background:var(--clr-bg-card); border:1px solid var(--clr-border); border-left:3px solid var(--clr-saffron); border-radius:2px; padding:1.2rem 1.5rem; transition:all 0.3s; }
.tl-card:hover { background:var(--clr-bg-card2); }

/* ── SOCIAL ── */
.social-card { background:var(--clr-bg-card); border:1px solid var(--clr-border); border-radius:4px; padding:1.5rem 1rem; text-align:center; text-decoration:none; transition:all 0.3s; display:block; }
.social-card:hover { border-color:var(--clr-border-s); transform:translateY(-3px); box-shadow:var(--shadow-card); }

/* ── FOOTER ── */
.vsb-footer { border-top:1px solid var(--clr-border-s); padding:4rem 0 2rem; }
[data-theme="dark"] .vsb-footer { background:#050D1A; }
[data-theme="light"] .vsb-footer { background:#EFE5D5; }

/* ── TOAST ── */
.vsb-toast { background:var(--clr-bg-card2); border:1px solid var(--clr-border-s); border-left:3px solid var(--clr-saffron); color:var(--clr-text); padding:0.75rem 1.5rem; border-radius:2px; font-family:'Rajdhani',sans-serif; font-size:0.9rem; font-weight:600; letter-spacing:0.05em; animation:fadeUp 0.3s ease; box-shadow:var(--shadow-card); white-space:nowrap; }

/* ── RESPONSIVE GRID HELPERS ── */
.grid-r-2 { display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; }
.grid-r-3 { display:grid; grid-template-columns:repeat(3,1fr); gap:1.5rem; }
.grid-r-4 { display:grid; grid-template-columns:repeat(4,1fr); gap:1.5rem; }
.grid-r-5 { display:grid; grid-template-columns:repeat(5,1fr); gap:1rem; }
@media(max-width:1024px){
  .grid-r-4 { grid-template-columns:1fr 1fr; }
  .grid-r-5 { grid-template-columns:1fr 1fr; }
}
@media(max-width:768px){
  .grid-r-2 { grid-template-columns:1fr; }
  .grid-r-3 { grid-template-columns:1fr 1fr; }
  .grid-r-4 { grid-template-columns:1fr 1fr; }
  .grid-r-5 { grid-template-columns:1fr 1fr; }
  .vsb-section { padding:3.5rem 0; }
}
@media(max-width:480px){
  .grid-r-3 { grid-template-columns:1fr; }
  .grid-r-4 { grid-template-columns:1fr; }
  .grid-r-5 { grid-template-columns:1fr 1fr; }
  .vsb-section { padding:2.5rem 0; }
  .vsb-container { padding:0 1.25rem; }
}

/* ── HERO GRID ── */
.hero-grid { display:grid; grid-template-columns:1fr 400px; gap:4rem; align-items:center; }
@media(max-width:900px){
  .hero-grid { grid-template-columns:1fr; gap:2.5rem; }
  .hero-portrait { max-width:320px; margin:0 auto; }
}
@media(max-width:480px){
  .hero-portrait { max-width:260px; }
}

/* ── ABOUT GRID ── */
.about-bio-grid { display:grid; grid-template-columns:1fr 1.3fr; gap:5rem; align-items:start; }
.about-contact-grid { display:grid; grid-template-columns:1fr 1.2fr; gap:5rem; align-items:start; }
@media(max-width:900px){
  .about-bio-grid { grid-template-columns:1fr; gap:2.5rem; }
  .about-contact-grid { grid-template-columns:1fr; gap:2.5rem; }
  .about-sticky { position:static !important; }
}

/* ── VISION GRID ── */
.vision-grid { display:grid; grid-template-columns:1fr 1fr; gap:2.5rem; }
@media(max-width:768px){ .vision-grid { grid-template-columns:1fr; } }

/* ── STATS GRID (hero) ── */
.hero-stats { display:grid; grid-template-columns:repeat(4,1fr); gap:1.5rem; }
@media(max-width:900px){ .hero-stats { grid-template-columns:1fr 1fr; } }
@media(max-width:480px){ .hero-stats { grid-template-columns:1fr 1fr; gap:0.75rem; } }

/* ── IMPACT STATS ── */
.impact-stats { display:grid; grid-template-columns:repeat(4,1fr); gap:2rem; }
@media(max-width:900px){ .impact-stats { grid-template-columns:1fr 1fr; gap:1.5rem; } }
@media(max-width:480px){ .impact-stats { grid-template-columns:1fr 1fr; gap:1rem; } }

/* ── FOOTER GRID ── */
.footer-grid { display:grid; grid-template-columns:2fr 1fr 1fr 1fr; gap:3rem; }
@media(max-width:1024px){ .footer-grid { grid-template-columns:1fr 1fr; gap:2rem; } }
@media(max-width:640px){ .footer-grid { grid-template-columns:1fr; gap:1.75rem; } }

/* ── GALLERY COLUMNS ── */
.gallery-columns { columns:3; column-gap:1rem; }
@media(max-width:900px){ .gallery-columns { columns:2; } }
@media(max-width:480px){ .gallery-columns { columns:1; } }

/* ── GALLERY STATS BAR ── */
.gallery-stats { display:grid; grid-template-columns:repeat(4,1fr); gap:1rem; }
@media(max-width:768px){ .gallery-stats { grid-template-columns:1fr 1fr; } }

/* ── TESTIMONIALS SLIDER ── */
.test-track { display:flex; gap:1.5rem; transition:transform 0.5s ease; }
.test-card { min-width:calc(50% - 12px); }
@media(max-width:768px){
  .test-card { min-width:calc(100% - 0px); }
}

/* ── CONTACT MINI MAP ── */
@media(max-width:900px){ .contact-map { display:none; } }

/* ── FORM GRID ── */
.form-name-grid { display:grid; grid-template-columns:1fr 1fr; gap:1rem; }
@media(max-width:480px){ .form-name-grid { grid-template-columns:1fr; } }

/* ── CTA STRIP ── */
.cta-strip { display:flex; align-items:center; justify-content:space-between; gap:2rem; flex-wrap:wrap; }

/* ── KEYFRAMES ── */
@keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
@keyframes fadeLeft { from{opacity:0;transform:translateX(40px)} to{opacity:1;transform:translateX(0)} }
@keyframes floatP { 0%{transform:translateY(100vh) rotate(0deg);opacity:0} 10%{opacity:1} 90%{opacity:1} 100%{transform:translateY(-100px) rotate(360deg);opacity:0} }
@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
@keyframes loadBar { from{width:0%} to{width:100%} }
@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
.ani-fu { opacity:0; animation:fadeUp 0.8s ease forwards; }
.ani-fl { opacity:0; animation:fadeLeft 1s ease forwards; }
.particle { position:absolute; border-radius:50%; animation:floatP linear infinite; opacity:0; }
.page-enter { animation:fadeUp 0.5s ease forwards; }

/* ── MOBILE HERO TWEAKS ── */
@media(max-width:900px){
  .hero-portrait-wrap { order:-1; }
}
@media(max-width:480px){
  .vsb-nav { padding:1rem 1.25rem; }
  .vsb-nav.scrolled { padding:0.7rem 1.25rem; }
}
`;

/* ═══════════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════════ */
const TIMELINE = [
  { year: "Early Years", title: "Student Leadership Begins", desc: "Took first steps in student activism and community engagement, developing a passion for youth empowerment and national development that would define his life's mission." },
  { year: "IIT Guwahati Era", title: "IIT Guwahati — Academic Excellence", desc: "Associated with IIT Guwahati, building academic foundations and expanding networks across India's premier institutions. Developed strategic thinking and analytical capabilities." },
  { year: "ABVP Chapter", title: "ABVP Membership & Activism", desc: "Joined the Akhil Bharatiya Vidyarthi Parishad (ABVP), India's largest student organisation. Led campaigns for education reform, youth rights, and nationalist values across campuses." },
  { year: "MCU Bhopal", title: "President, MCU Bhopal", desc: "Elected as Former President of Makhanlal Chaturvedi National University (MCU), Bhopal. Implemented landmark programs transforming student welfare, academic culture, and community engagement." },
  { year: "National Level", title: "Political Responsibilities & Public Engagement", desc: "Expanded from student leadership to broader political and social responsibilities. Became deeply involved in national discourse, policy advocacy, and public welfare initiatives." },
  { year: "Present", title: "Personal Assistant to Anurag Thakur", desc: "Currently serving as Personal Assistant to the Honourable Anurag Thakur, contributing directly to national governance, policy implementation, and youth development programs." },
];
const ACHIEVEMENTS = [
  { icon: "★", title: "Student Leadership Excellence", desc: "Led multiple student wings with exemplary record of organisation building and youth mobilisation across central India's campuses." },
  { icon: "🏛", title: "MCU Bhopal Presidency", desc: "As President of MCU Bhopal, implemented landmark programs that transformed student welfare, academic culture, and community engagement." },
  { icon: "👥", title: "Youth Mobilisation", desc: "Connected over 10,000+ youth through leadership programs, skill development initiatives, and nationalist movement campaigns across multiple states." },
  { icon: "🇮🇳", title: "National Political Service", desc: "Direct contribution to national governance as Personal Assistant to Anurag Thakur, supporting critical policy implementation and public programs." },
  { icon: "✍", title: "ABVP Organisational Development", desc: "Pivotal role in strengthening ABVP's presence across central India, expanding membership and amplifying nationalist student voice." },
  { icon: "✓", title: "Community & Social Initiatives", desc: "Organised and participated in 500+ community events, social welfare programs, and public service campaigns across Delhi and central India." },
];
const AREAS = [
  { icon: "🎯", label: "Youth Development" }, { icon: "📚", label: "Education" },
  { icon: "🤝", label: "Public Service" }, { icon: "🏆", label: "Leadership Programs" },
  { icon: "❤️", label: "Social Welfare" }, { icon: "💻", label: "Digital Governance" },
  { icon: "🇮🇳", label: "Nation Building" }, { icon: "🌱", label: "Community Development" },
];
const TESTIMONIALS = [
  { text: "Vikas bhai's dedication to the youth of our nation is unparalleled. His ability to mobilise young people for constructive causes and his genuine care for their future sets him apart as a true leader of our generation.", name: "Rohit Sharma", role: "Student Leader, MCU Bhopal", initials: "RS" },
  { text: "In my years of social work, I have rarely come across someone as committed to grassroots service as Vikas Singh Bhadauria. His presence at community events always brings energy, solutions, and a true servant's heart.", name: "Priya Mishra", role: "Social Worker, Bhopal", initials: "PM" },
  { text: "As a fellow ABVP worker, I witnessed Vikas's transformative leadership firsthand. He doesn't just lead — he builds institutions, nurtures talent, and always puts the mission of national service above personal gain.", name: "Aditya Kumar", role: "ABVP Activist", initials: "AK" },
  { text: "The youth programs Vikas organised in our community were life-changing for hundreds of young people. His vision for empowering the next generation and his hands-on approach to leadership is truly inspirational.", name: "Sunita Verma", role: "Community Leader, Delhi", initials: "SV" },
];
const SOCIAL = [
  { icon: "𝕏", name: "Twitter / X", handle: "@vikas7bhadauria", url: "https://twitter.com/vikas7bhadauria" },
  { icon: "📸", name: "Instagram", handle: "@vikasbhadauria", url: "#" },
  { icon: "🧵", name: "Threads", handle: "@vikasbhadauria", url: "#" },
  { icon: "📘", name: "Facebook", handle: "Vikas Singh Bhadauria", url: "#" },
  { icon: "💼", name: "LinkedIn", handle: "Vikas Bhadauria", url: "#" },
];
const GALLERY_ITEMS = [
  { icon: "🎤", label: "Addressing the Nation", category: "Public Events", desc: "Public address at a national youth leadership conclave, New Delhi." },
  { icon: "🏛️", label: "Parliamentary Corridors", category: "Meetings", desc: "Official meeting with senior party leadership at Parliament House." },
  { icon: "🎓", label: "Youth Empowerment Summit", category: "Youth Programs", desc: "Keynote address at MCU Bhopal's annual youth empowerment summit." },
  { icon: "🤝", label: "Community Outreach", category: "Social Activities", desc: "Community service initiative connecting 500+ families with govt schemes." },
  { icon: "🇮🇳", label: "Republic Day Celebration", category: "Public Events", desc: "Leading the Republic Day celebration parade in New Delhi." },
  { icon: "📸", label: "ABVP National Convention", category: "Meetings", desc: "Representing MCU Bhopal at the ABVP National Convention, Mumbai." },
  { icon: "🌱", label: "Green India Drive", category: "Social Activities", desc: "Tree plantation drive across 5 districts of Madhya Pradesh." },
  { icon: "🏆", label: "Leadership Award Ceremony", category: "Public Events", desc: "Receiving the Young Leader of the Year award from dignitaries." },
  { icon: "💡", label: "Digital India Workshop", category: "Youth Programs", desc: "Conducting digital literacy workshop for rural youth in MP." },
];
const TYPING_ROLES = [
  "Youth Leader • Swamsewak • Nationalist",
  "Former President, MCU Bhopal",
  "Personal Assistant to Anurag Thakur",
  "ABVP Member • Proud Nationalist",
  "Dedicated to Nation Building",
];

/* ═══════════════════════════════════════════════════════════════
   HOOKS
═══════════════════════════════════════════════════════════════ */
function useReveal(threshold = 0.08) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function useCounter(target, started) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!started) return;
    let cur = 0;
    const step = target / (2000 / 16);
    const t = setInterval(() => {
      cur += step;
      if (cur >= target) { setVal(target); clearInterval(t); }
      else setVal(Math.floor(cur));
    }, 16);
    return () => clearInterval(t);
  }, [started, target]);
  return val;
}

function useTyping(roles, delay = 1800) {
  const [text, setText] = useState("");
  const s = useRef({ idx: 0, ch: 0, del: false });
  useEffect(() => {
    const init = setTimeout(() => {
      function loop() {
        const { idx, ch, del } = s.current;
        const cur = roles[idx];
        if (!del) { setText(cur.slice(0, ch + 1)); s.current.ch++; if (s.current.ch === cur.length) { s.current.del = true; setTimeout(loop, 2500); return; } }
        else { setText(cur.slice(0, ch)); s.current.ch--; if (s.current.ch === 0) { s.current.del = false; s.current.idx = (idx + 1) % roles.length; } }
        setTimeout(loop, del ? 40 : 80);
      }
      loop();
    }, delay);
    return () => clearTimeout(init);
  }, []);
  return text;
}

/* ═══════════════════════════════════════════════════════════════
   SHARED COMPONENTS
═══════════════════════════════════════════════════════════════ */
function RevealDiv({ children, className = "", style, delay = 0 }) {
  const [ref, visible] = useReveal();
  return <div ref={ref} className={`reveal ${visible ? "in" : ""} ${className}`} style={{ transitionDelay: delay + "ms", ...style }}>{children}</div>;
}

function Eyebrow({ children, center }) {
  return <p className="sec-eye" style={center ? { justifyContent: "center" } : {}}>{children}</p>;
}

function StatCounter({ target, label }) {
  const [ref, vis] = useReveal(0.5);
  const val = useCounter(target, vis);
  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2.2rem,4vw,3.5rem)", fontWeight: 700, color: "var(--clr-saffron)", lineHeight: 1, display: "block" }}>{val.toLocaleString()}+</span>
      <span style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.82rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--clr-text-low)", marginTop: "0.5rem", display: "block" }}>{label}</span>
    </div>
  );
}

function HeroStatCard({ count, label }) {
  const [ref, vis] = useReveal(0.5);
  const val = useCounter(count, vis);
  return (
    <div ref={ref} style={{ background: "var(--clr-bg-card)", border: "1px solid var(--clr-border-s)", borderRadius: "4px", padding: "1.2rem 1rem", textAlign: "center", position: "relative", overflow: "hidden", transition: "all 0.3s" }}>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg,var(--clr-saffron),var(--clr-gold))" }} />
      <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1.8rem,3vw,2.5rem)", fontWeight: 700, color: "var(--clr-saffron)", lineHeight: 1 }}>{val.toLocaleString()}+</div>
      <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--clr-text-low)", marginTop: "0.4rem" }}>{label}</div>
    </div>
  );
}

function TimelineItem({ item, index }) {
  const [ref, vis] = useReveal(0.12);
  return (
    <div ref={ref} className={`tl-item ${vis ? "in" : ""}`} style={{ position: "relative", marginBottom: "3rem", transitionDelay: index * 120 + "ms" }}>
      <div style={{ position: "absolute", left: "-3.45rem", top: "0.5rem", width: "12px", height: "12px", borderRadius: "50%", background: "var(--clr-saffron)", border: "2px solid var(--clr-bg)", boxShadow: "0 0 0 3px rgba(255,107,0,0.3)" }} />
      <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.2em", color: "var(--clr-saffron)", marginBottom: "0.4rem", textTransform: "uppercase" }}>{item.year}</div>
      <div className="tl-card">
        <h4 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.25rem", fontWeight: 600, color: "var(--clr-text)", marginBottom: "0.4rem" }}>{item.title}</h4>
        <p style={{ fontSize: "0.9rem", color: "var(--clr-text-mid)", lineHeight: 1.7 }}>{item.desc}</p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   NAVBAR
═══════════════════════════════════════════════════════════════ */
function Navbar({ page, setPage }) {
  const { dark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mob, setMob] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };
  const navItems = [
    { label: "Home", page: "home" }, { label: "About", page: "about" }, { label: "Gallery", page: "gallery" },
  ];
  return (
    <>
      <nav className={`vsb-nav ${scrolled ? "scrolled" : ""}`}>
        <button className="nav-logo" onClick={() => { setPage("home"); window.scrollTo({ top: 0, behavior: "smooth" }); setMob(false); }}>
          <span className="logo-text">
            <span className="logo-vikas">Vikas Singh Bhadauria</span>
            <span className="logo-dot">.</span>
          </span>
     
        </button>
        {/* Desktop links */}
        <ul className="nav-desktop">
          {navItems.map(n => (
            <li key={n.page}>
              <button className={`nav-lnk ${page === n.page ? "active" : ""}`} onClick={() => { setPage(n.page); window.scrollTo({ top: 0, behavior: "smooth" }); }}>{n.label}</button>
            </li>
          ))}
          <li><button className="theme-toggle" onClick={toggle} title={dark ? "Switch to Light" : "Switch to Dark"}>{dark ? "☀️" : "🌙"}</button></li>
          <li><button className="btn-pri" style={{ padding: "0.5rem 1.4rem" }} onClick={() => { setPage("home"); setTimeout(() => scrollTo("contact"), 100); }}>Connect</button></li>
        </ul>
        {/* Mobile buttons */}
        <div className="nav-mobile-btns">
          <button className="theme-toggle" onClick={toggle}>{dark ? "☀️" : "🌙"}</button>
          <button onClick={() => setMob(true)} style={{ display: "flex", flexDirection: "column", gap: "5px", background: "none", border: "1px solid var(--clr-border)", borderRadius: "2px", cursor: "pointer", padding: "8px 10px" }}>
            {[0,1,2].map(i => <span key={i} style={{ display: "block", width: "22px", height: "2px", background: "var(--clr-text)" }} />)}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div style={{ position: "fixed", inset: 0, background: "var(--clr-overlay)", zIndex: 9999, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2rem", opacity: mob ? 1 : 0, visibility: mob ? "visible" : "hidden", transition: "all 0.4s" }}>
        <button onClick={() => setMob(false)} style={{ position: "absolute", top: "1.5rem", right: "1.5rem", background: "none", border: "none", color: "var(--clr-text)", fontSize: "2rem", cursor: "pointer", lineHeight: 1 }}>✕</button>
        {navItems.map(n => (
          <button key={n.page} onClick={() => { setPage(n.page); setMob(false); window.scrollTo({ top: 0 }); }} style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2.5rem", fontWeight: 600, color: page === n.page ? "var(--clr-saffron)" : "var(--clr-text)", background: "none", border: "none", cursor: "pointer", textTransform: "capitalize", transition: "color 0.3s" }}>{n.page}</button>
        ))}
        <button className="btn-pri" onClick={() => { setPage("home"); setMob(false); setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 200); }}>Connect</button>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   LOADING SCREEN
═══════════════════════════════════════════════════════════════ */
function LoadingScreen({ done }) {
  return (
    <div style={{ position: "fixed", inset: 0, background: "var(--clr-bg)", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", zIndex: 99990, transition: "opacity 0.6s ease, visibility 0.6s ease", opacity: done ? 0 : 1, visibility: done ? "hidden" : "visible" }}>
      <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "3rem", fontWeight: 700, color: "var(--clr-saffron)", animation: "pulse 1.5s ease-in-out infinite" }}>VSB</div>
      <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.85rem", letterSpacing: "0.3em", color: "var(--clr-text-low)", marginTop: "12px", textTransform: "uppercase" }}>Loading Experience</div>
      <div style={{ width: "180px", height: "2px", background: "var(--clr-border)", borderRadius: "2px", marginTop: "2rem", overflow: "hidden" }}>
        <div style={{ height: "100%", background: "linear-gradient(90deg,var(--clr-saffron),var(--clr-gold))", animation: "loadBar 1.8s ease-in-out forwards" }} />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════════════════════════ */
function Footer({ setPage }) {
  const quickLinks = ["About","Journey","Achievements","Vision","Gallery","Contact"];
  const workAreas = ["Youth Development","Education","Public Service","Nation Building","Social Welfare"];
  return (
    <footer className="vsb-footer">
      <div className="vsb-container">
        <div className="footer-grid" style={{ marginBottom: "3rem" }}>
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.7rem", fontWeight: 700, color: "var(--clr-text)", marginBottom: "1rem" }}>Vikas Singh <span style={{ color: "var(--clr-saffron)" }}>Bhadauria</span></div>
            <p style={{ color: "var(--clr-text-low)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.2rem", maxWidth: "280px" }}>Youth Leader | Swamsewak | Nationalist | Personal Assistant to Anurag Thakur | New Delhi, India</p>
            <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1rem", fontStyle: "italic", color: "var(--clr-gold-l)", borderLeft: "2px solid rgba(255,107,0,0.3)", paddingLeft: "0.8rem" }}>"Dedicated to Nation Building and Public Service"</p>
          </div>
          <div>
            <h4 style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--clr-saffron)", marginBottom: "1.2rem" }}>Quick Links</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {quickLinks.map(l => <li key={l}><button onClick={() => { if (l === "Gallery") { setPage("gallery"); window.scrollTo({ top: 0 }); } else if (l === "About") { setPage("about"); window.scrollTo({ top: 0 }); } else { setPage("home"); setTimeout(() => document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: "smooth" }), 100); } }} style={{ color: "var(--clr-text-low)", background: "none", border: "none", cursor: "pointer", fontSize: "0.9rem", padding: 0, textAlign: "left", fontFamily: "'Mukta',sans-serif" }}>{l}</button></li>)}
            </ul>
          </div>
          <div>
            <h4 style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--clr-saffron)", marginBottom: "1.2rem" }}>Work Areas</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {workAreas.map(l => <li key={l}><span style={{ color: "var(--clr-text-low)", fontSize: "0.9rem" }}>{l}</span></li>)}
            </ul>
          </div>
          <div>
            <h4 style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--clr-saffron)", marginBottom: "1.2rem" }}>Connect</h4>
            <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
              {["𝕏","📸","📘","💼","🧵"].map((icon, i) => (
                <a key={i} href="#" style={{ width: "36px", height: "36px", background: "var(--clr-bg-card)", border: "1px solid var(--clr-border)", borderRadius: "2px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", textDecoration: "none", transition: "all 0.3s" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "var(--clr-saffron)"; e.currentTarget.style.borderColor = "var(--clr-saffron)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "var(--clr-bg-card)"; e.currentTarget.style.borderColor = "var(--clr-border)"; }}
                >{icon}</a>
              ))}
            </div>
            <div style={{ marginTop: "1.5rem" }}>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1rem", fontStyle: "italic", color: "var(--clr-gold-l)" }}>"वीर भोग्य वसुंधरा"</div>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "0.9rem", fontStyle: "italic", color: "var(--clr-text-faint)", marginTop: "0.5rem" }}>"अंतः अस्ति प्रारंभः"</div>
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid var(--clr-border)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.75rem" }}>
          <div style={{ fontSize: "0.82rem", color: "var(--clr-text-faint)" }}>© 2024 <span style={{ color: "var(--clr-saffron)" }}>Vikas Singh Bhadauria</span>. All rights reserved.</div>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "0.9rem", fontStyle: "italic", color: "var(--clr-text-faint)" }}>जय हिन्द 🇮🇳</div>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HOME PAGE SECTIONS
═══════════════════════════════════════════════════════════════ */
function HeroSection({ setPage }) {
  const typed = useTyping(TYPING_ROLES);
  const particlesRef = useRef(null);
  useEffect(() => {
    const el = particlesRef.current; if (!el) return;
    el.innerHTML = "";
    for (let i = 0; i < 20; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      const size = Math.random() * 3 + 1;
      p.style.cssText = `width:${size}px;height:${size}px;left:${Math.random()*100}%;background:${Math.random()>0.6?"var(--clr-gold)":"var(--clr-saffron)"};animation-duration:${Math.random()*20+15}s;animation-delay:${Math.random()*20}s;opacity:0.6`;
      el.appendChild(p);
    }
  }, []);

  return (
    <section id="home" style={{ minHeight: "100vh", position: "relative", display: "flex", alignItems: "center", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 70% 40%,var(--clr-hero-rad1) 0%,transparent 60%),radial-gradient(ellipse 60% 80% at 20% 80%,var(--clr-hero-rad2) 0%,transparent 50%)" }} />
      <div className="grid-overlay" />
      <div ref={particlesRef} style={{ position: "absolute", inset: 0, overflow: "hidden" }} />

      <div style={{ width: "100%", position: "relative", zIndex: 10 }}>
        <div className="vsb-container hero-grid" style={{ paddingTop: "100px", paddingBottom: "2rem" }}>
          {/* Text */}
          <div>
            <p style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--clr-saffron)", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.75rem", opacity: 0, animation: "fadeUp 0.8s ease 0.8s forwards" }}>
              <span style={{ width: "28px", height: "1.5px", background: "var(--clr-saffron)", display: "block", flexShrink: 0 }} />
              <span>Personal Assistant to Anurag Thakur</span>
            </p>
            <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2.8rem,7vw,5.5rem)", fontWeight: 700, lineHeight: 1.05, color: "var(--clr-text)", marginBottom: "1.2rem", opacity: 0, animation: "fadeUp 0.8s ease 1s forwards" }}>
              Vikas Singh<br /><span style={{ color: "var(--clr-saffron)" }}>Bhadauria</span>
            </h1>
            <p style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "clamp(0.9rem,2vw,1.05rem)", fontWeight: 500, color: "var(--clr-text-mid)", letterSpacing: "0.05em", marginBottom: "1.5rem", minHeight: "1.6em", opacity: 0, animation: "fadeUp 0.8s ease 1.2s forwards" }}>
              {typed}<span style={{ borderRight: "2px solid var(--clr-saffron)", paddingRight: "2px", animation: "blink 1s step-end infinite" }} />
            </p>
            <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1.1rem,2.5vw,1.4rem)", fontStyle: "italic", color: "var(--clr-gold-l)", marginBottom: "2.5rem", borderLeft: "2px solid var(--clr-saffron)", paddingLeft: "1.2rem", opacity: 0, animation: "fadeUp 0.8s ease 1.4s forwards" }}>"वीर भोग्य वसुंधरा"</p>
            <div style={{ display: "flex", gap: "1rem", opacity: 0, animation: "fadeUp 0.8s ease 1.6s forwards", flexWrap: "wrap" }}>
              <button className="btn-pri" onClick={() => { setPage("about"); window.scrollTo({ top: 0 }); }}>About Me ↓</button>
              <button className="btn-out" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>Connect</button>
            </div>
          </div>

          {/* Portrait */}
          <div className="hero-portrait-wrap" style={{ opacity: 0, animation: "fadeLeft 1s ease 0.5s forwards" }}>
            <div className="hero-portrait" style={{ position: "relative" }}>
              <div style={{ width: "100%", aspectRatio: "3/4", borderRadius: "4px", overflow: "hidden", border: "1px solid var(--clr-border-s)", background: "var(--clr-portrait-bg)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                <img src="/profile.jpg" alt="Vikas Singh Bhadauria" style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "50%", background: "linear-gradient(transparent,rgba(10,22,40,0.5))", zIndex: 2 }} />
              </div>
              <div style={{ position: "absolute", top: "-16px", right: "-16px", width: "60px", height: "60px", borderTop: "2px solid var(--clr-saffron)", borderRight: "2px solid var(--clr-saffron)", opacity: 0.5 }} />
              <div style={{ position: "absolute", bottom: "-16px", left: "-16px", width: "60px", height: "60px", borderBottom: "2px solid var(--clr-gold)", borderLeft: "2px solid var(--clr-gold)", opacity: 0.5 }} />
              <div style={{ position: "absolute", bottom: "-14px", right: "16px", background: "var(--clr-saffron)", color: "#fff", padding: "0.5rem 1rem", borderRadius: "2px", fontFamily: "'Rajdhani',sans-serif", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", zIndex: 10 }}>
                New Delhi, India
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="vsb-container" style={{ paddingTop: "2rem", paddingBottom: "4rem", opacity: 0, animation: "fadeUp 0.8s ease 2s forwards" }}>
          <div className="hero-stats">
            <HeroStatCard count={500} label="Events Participated" />
            <HeroStatCard count={10000} label="Youth Connected" />
            <HeroStatCard count={8} label="Years of Service" />
            <HeroStatCard count={50} label="Programs Organized" />
          </div>
        </div>
      </div>
    </section>
  );
}

function VisionSection() {
  return (
    <section id="vision" className="vsb-section" style={{ position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle,rgba(255,107,0,0.04) 0%,transparent 70%)", pointerEvents: "none" }} />
      <div className="vsb-container" style={{ position: "relative", zIndex: 1 }}>
        <RevealDiv style={{ textAlign: "center" }}><Eyebrow center>Vision & Mission</Eyebrow><h2 className="sec-title" style={{ textAlign: "center" }}>Driving Force Behind Every Action</h2></RevealDiv>
        <div className="vision-grid" style={{ marginTop: "3.5rem" }}>
          <RevealDiv>
            <div style={{ background: "linear-gradient(135deg,rgba(255,107,0,0.1) 0%,rgba(255,107,0,0.03) 100%)", border: "1px solid rgba(255,107,0,0.22)", borderRadius: "4px", padding: "2.5rem", height: "100%" }}>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "3rem", lineHeight: 1, marginBottom: "1rem", opacity: 0.5, color: "var(--clr-saffron)" }}>◈</div>
              <p style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--clr-saffron)", marginBottom: "0.6rem" }}>Vision</p>
              <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1.3rem,2.5vw,1.7rem)", fontWeight: 700, color: "var(--clr-text)", lineHeight: 1.2, marginBottom: "1rem" }}>Nation Building Through Youth Leadership</h3>
              <p style={{ color: "var(--clr-text-mid)", lineHeight: 1.8, fontSize: "0.95rem" }}>A strong, prosperous, and inclusive India where every young citizen has the opportunity to contribute meaningfully to the nation's progress.</p>
              <ul style={{ listStyle: "none", marginTop: "1.2rem" }}>
                {["Empowered youth as drivers of national transformation","Technology-driven, transparent governance","Cultural heritage with modern progress"].map(p => (
                  <li key={p} style={{ display: "flex", gap: "0.75rem", padding: "0.5rem 0", color: "var(--clr-text-mid)", fontSize: "0.88rem", borderBottom: "1px solid var(--clr-border)" }}>
                    <span style={{ color: "var(--clr-saffron)", fontSize: "0.5rem", marginTop: "6px", flexShrink: 0 }}>◆</span>{p}
                  </li>
                ))}
              </ul>
            </div>
          </RevealDiv>
          <RevealDiv delay={100}>
            <div style={{ background: "linear-gradient(135deg,rgba(212,168,67,0.08) 0%,rgba(212,168,67,0.02) 100%)", border: "1px solid rgba(212,168,67,0.2)", borderRadius: "4px", padding: "2.5rem", height: "100%" }}>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "3rem", lineHeight: 1, marginBottom: "1rem", opacity: 0.5, color: "var(--clr-gold-l)" }}>◇</div>
              <p style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--clr-gold)", marginBottom: "0.6rem" }}>Mission</p>
              <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1.3rem,2.5vw,1.7rem)", fontWeight: 700, color: "var(--clr-text)", lineHeight: 1.2, marginBottom: "1rem" }}>Serving Society, Strengthening Values</h3>
              <p style={{ color: "var(--clr-text-mid)", lineHeight: 1.8, fontSize: "0.95rem" }}>Active engagement in youth empowerment programs and social welfare activities that translate vision into tangible impact for communities.</p>
              <ul style={{ listStyle: "none", marginTop: "1.2rem" }}>
                {["Youth leadership and skill development programs","Bridging communities with government initiatives","Promoting education and digital literacy","Advocating for welfare of marginalised sections"].map(p => (
                  <li key={p} style={{ display: "flex", gap: "0.75rem", padding: "0.5rem 0", color: "var(--clr-text-mid)", fontSize: "0.88rem", borderBottom: "1px solid var(--clr-border)" }}>
                    <span style={{ color: "var(--clr-gold)", fontSize: "0.5rem", marginTop: "6px", flexShrink: 0 }}>◆</span>{p}
                  </li>
                ))}
              </ul>
            </div>
          </RevealDiv>
        </div>
      </div>
    </section>
  );
}

function AreasSection() {
  return (
    <section id="areas" className="vsb-section" style={{ background: "var(--clr-bg-mid)" }}>
      <div className="vsb-container">
        <RevealDiv style={{ textAlign: "center" }}><Eyebrow center>Areas of Work</Eyebrow><h2 className="sec-title" style={{ textAlign: "center" }}>Pillars of Service</h2></RevealDiv>
        <div className="grid-r-4" style={{ marginTop: "3rem" }}>
          {AREAS.map((a, i) => (
            <RevealDiv key={i} delay={i * 60}>
              <div style={{ background: "var(--clr-bg-card)", border: "1px solid var(--clr-border)", borderRadius: "4px", padding: "1.8rem 1.4rem", textAlign: "center", transition: "all 0.3s", cursor: "default" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,107,0,0.06)"; e.currentTarget.style.borderColor = "rgba(255,107,0,0.25)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "var(--clr-bg-card)"; e.currentTarget.style.borderColor = "var(--clr-border)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.8rem" }}>{a.icon}</div>
                <h4 style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.95rem", fontWeight: 700, letterSpacing: "0.08em", color: "var(--clr-text)" }}>{a.label}</h4>
              </div>
            </RevealDiv>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImpactSection() {
  return (
    <section style={{ padding: "5rem 0", background: "linear-gradient(135deg,rgba(255,107,0,0.07) 0%,transparent 50%,rgba(212,168,67,0.05) 100%)", borderTop: "1px solid var(--clr-border-s)", borderBottom: "1px solid var(--clr-border-s)" }}>
      <div className="vsb-container">
        <div className="impact-stats">
          <StatCounter target={500} label="Events Participated" />
          <StatCounter target={10000} label="Youth Connected" />
          <StatCounter target={50} label="Programs Organized" />
          <StatCounter target={100} label="Community Initiatives" />
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [idx, setIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  const cardsVisible = isMobile ? 1 : 2;
  const max = Math.max(0, TESTIMONIALS.length - cardsVisible);

  return (
    <section id="testimonials" className="vsb-section">
      <div className="vsb-container">
        <RevealDiv><Eyebrow>Testimonials</Eyebrow><h2 className="sec-title">Words of Those Served</h2></RevealDiv>
        <div style={{ overflow: "hidden", marginTop: "3rem" }}>
          <div className="test-track" style={{ transform: `translateX(calc(-${idx} * (${isMobile ? "100%" : "calc(50% + 12px)"})))` }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="test-card" style={{ background: "var(--clr-bg-card)", border: "1px solid var(--clr-border)", borderRadius: "4px", padding: "2rem", position: "relative", flexShrink: 0 }}>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "5rem", color: "rgba(255,107,0,0.12)", position: "absolute", top: "0.5rem", left: "1.2rem", lineHeight: 1 }}>"</div>
                <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.05rem", fontStyle: "italic", color: "var(--clr-text-mid)", lineHeight: 1.7, marginBottom: "1.5rem", marginTop: "1.5rem" }}>{t.text}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "rgba(255,107,0,0.12)", border: "1px solid rgba(255,107,0,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, color: "var(--clr-saffron)", fontSize: "0.9rem", flexShrink: 0 }}>{t.initials}</div>
                  <div>
                    <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "var(--clr-text)", letterSpacing: "0.05em" }}>{t.name}</div>
                    <div style={{ fontSize: "0.8rem", color: "var(--clr-text-low)" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", gap: "0.75rem", marginTop: "2rem", alignItems: "center" }}>
          <button className="filter-btn" onClick={() => setIdx(i => Math.max(0, i - 1))} disabled={idx === 0} style={{ opacity: idx === 0 ? 0.4 : 1 }}>←</button>
          <button className="filter-btn" onClick={() => setIdx(i => Math.min(max, i + 1))} disabled={idx === max} style={{ opacity: idx === max ? 0.4 : 1 }}>→</button>
          <span style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.78rem", color: "var(--clr-text-low)", marginLeft: "0.5rem" }}>{idx + 1} / {max + 1}</span>
        </div>
      </div>
    </section>
  );
}

function SocialSection() {
  return (
    <section style={{ padding: "5rem 0", background: "var(--clr-bg-mid)" }}>
      <div className="vsb-container">
        <RevealDiv style={{ textAlign: "center" }}><Eyebrow center>Social Media</Eyebrow><h2 className="sec-title" style={{ textAlign: "center" }}>Stay Connected</h2></RevealDiv>
        <div className="grid-r-5" style={{ marginTop: "3rem" }}>
          {SOCIAL.map((s, i) => (
            <RevealDiv key={i} delay={i * 60}>
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="social-card">
                <div style={{ fontSize: "2rem", marginBottom: "0.7rem" }}>{s.icon}</div>
                <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.1em", color: "var(--clr-text)", textTransform: "uppercase" }}>{s.name}</div>
                <div style={{ fontSize: "0.76rem", color: "var(--clr-text-low)", marginTop: "0.25rem" }}>{s.handle}</div>
              </a>
            </RevealDiv>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection({ showToast }) {
  const [form, setForm] = useState({ fn: "", ln: "", email: "", phone: "", subject: "", msg: "" });
  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));
  const submit = (e) => { e.preventDefault(); showToast("✓ Message sent! We'll respond shortly."); setForm({ fn: "", ln: "", email: "", phone: "", subject: "", msg: "" }); };
  const Label = ({ t }) => <label style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--clr-text-low)" }}>{t}</label>;

  return (
    <section id="contact" className="vsb-section">
      <div className="vsb-container">
        <RevealDiv><Eyebrow>Contact</Eyebrow><h2 className="sec-title">Get In Touch</h2></RevealDiv>
        <div className="about-contact-grid" style={{ marginTop: "3rem" }}>
          <RevealDiv>
            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1.4rem,3vw,1.8rem)", fontWeight: 600, color: "var(--clr-text)", marginBottom: "0.75rem" }}>Let's Connect for a Stronger India</h3>
            <p style={{ color: "var(--clr-text-mid)", lineHeight: 1.8, marginBottom: "2rem" }}>Whether you represent an organisation, community group, or are an individual seeking assistance — reach out.</p>
            {[{ icon: "📍", l: "Location", v: "New Delhi, India" }, { icon: "✉", l: "Email", v: "contact@vikasbhadauria.in" }, { icon: "📞", l: "Phone", v: "+91 XXXXX XXXXX" }, { icon: "𝕏", l: "Twitter", v: "@vikas7bhadauria" }].map(x => (
              <div key={x.l} style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1.2rem" }}>
                <div style={{ width: "40px", height: "40px", background: "rgba(255,107,0,0.1)", border: "1px solid rgba(255,107,0,0.2)", borderRadius: "2px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{x.icon}</div>
                <div><div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--clr-text-low)" }}>{x.l}</div><div style={{ fontSize: "0.95rem", color: "var(--clr-text-mid)" }}>{x.v}</div></div>
              </div>
            ))}
            <div className="contact-map" style={{ height: "160px", background: "var(--clr-bg-card)", border: "1px solid var(--clr-border)", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "1.5rem", position: "relative", overflow: "hidden" }}>
              <div className="grid-overlay" style={{ backgroundSize: "30px 30px" }} />
              <div style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
                <div style={{ fontSize: "2rem" }}>📍</div>
                <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.1em", color: "var(--clr-saffron)", textTransform: "uppercase" }}>New Delhi, India</div>
              </div>
            </div>
          </RevealDiv>
          <RevealDiv delay={100}>
            <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div className="form-name-grid">
                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}><Label t="First Name" /><input className="vsb-input" placeholder="Rahul" value={form.fn} onChange={set("fn")} required /></div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}><Label t="Last Name" /><input className="vsb-input" placeholder="Sharma" value={form.ln} onChange={set("ln")} /></div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}><Label t="Email" /><input className="vsb-input" type="email" placeholder="you@example.com" value={form.email} onChange={set("email")} required /></div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}><Label t="Phone" /><input className="vsb-input" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={set("phone")} /></div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}><Label t="Subject" /><input className="vsb-input" placeholder="How can we help?" value={form.subject} onChange={set("subject")} /></div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}><Label t="Message" /><textarea className="vsb-textarea" placeholder="Your message..." value={form.msg} onChange={set("msg")} required /></div>
              <button type="submit" className="btn-pri" style={{ width: "100%", justifyContent: "center", border: "none" }}>Send Message →</button>
            </form>
          </RevealDiv>
        </div>
      </div>
    </section>
  );
}

function HomePage({ setPage, showToast }) {
  return (
    <div className="page-enter">
      <HeroSection setPage={setPage} />
      <div className="divider" />
      <VisionSection />
      <AreasSection />
      <ImpactSection />
      <div className="divider" />
      <TestimonialsSection />
      <SocialSection />
      <ContactSection showToast={showToast} />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ABOUT PAGE
═══════════════════════════════════════════════════════════════ */
function AboutPage({ setPage }) {
  return (
    <div className="page-enter">
      {/* Hero Banner */}
      <section style={{ minHeight: "45vh", position: "relative", display: "flex", alignItems: "center", overflow: "hidden", paddingTop: "80px" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 60% 50%,var(--clr-hero-rad1) 0%,transparent 65%)" }} />
        <div className="grid-overlay" />
        <div className="vsb-container" style={{ position: "relative", zIndex: 1, paddingTop: "3rem", paddingBottom: "3rem" }}>
          <div style={{ maxWidth: "700px" }}>
            <p style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--clr-saffron)", display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.2rem", opacity: 0, animation: "fadeUp 0.8s ease 0.3s forwards" }}>
              <span style={{ width: "24px", height: "1.5px", background: "var(--clr-saffron)", display: "block" }} />About Page
            </p>
            <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2.2rem,6vw,5rem)", fontWeight: 700, color: "var(--clr-text)", lineHeight: 1.05, marginBottom: "1.2rem", opacity: 0, animation: "fadeUp 0.8s ease 0.5s forwards" }}>
              Vikas Singh<br /><span style={{ color: "var(--clr-saffron)" }}>Bhadauria</span>
            </h1>
            <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1rem,2.5vw,1.25rem)", fontStyle: "italic", color: "var(--clr-gold-l)", borderLeft: "2px solid var(--clr-saffron)", paddingLeft: "1rem", opacity: 0, animation: "fadeUp 0.8s ease 0.7s forwards" }}>"अंतः अस्ति प्रारंभः" — In the end is the beginning</p>
          </div>
        </div>
        <div style={{ position: "absolute", right: "2rem", bottom: "1rem", fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(4rem,10vw,8rem)", fontWeight: 700, color: "rgba(255,107,0,0.05)", lineHeight: 1, userSelect: "none" }}>VSB</div>
      </section>

      <div className="divider" />

      {/* Biography */}
      <section className="vsb-section">
        <div className="vsb-container">
          <div className="about-bio-grid">
            <RevealDiv>
              <div className="about-sticky" style={{ position: "sticky", top: "100px" }}>
                <div style={{ background: "var(--clr-bg-card)", border: "1px solid var(--clr-border-s)", borderRadius: "4px", padding: "2rem", marginBottom: "1.5rem" }}>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.6rem", fontWeight: 700, color: "var(--clr-text)", marginBottom: "0.3rem" }}>Vikas Singh Bhadauria</div>
                  <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.82rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--clr-saffron)", marginBottom: "1.5rem" }}>Youth Leader & Public Servant</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
                    {["Swamsewak","ABVP","MCU President","IIT Guwahati","Nationalist","Rajput","Strategist"].map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {[{ icon: "📍", l: "Location", v: "New Delhi, India" }, { icon: "🎓", l: "Education", v: "IIT Guwahati" }, { icon: "🏛", l: "Former Role", v: "President, MCU Bhopal" }, { icon: "⚡", l: "Current Role", v: "PA to Anurag Thakur" }].map(x => (
                      <div key={x.l} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.6rem 0", borderBottom: "1px solid var(--clr-border)" }}>
                        <span style={{ fontSize: "1rem", flexShrink: 0 }}>{x.icon}</span>
                        <div><div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--clr-text-low)" }}>{x.l}</div><div style={{ fontSize: "0.9rem", color: "var(--clr-text-mid)" }}>{x.v}</div></div>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ background: "linear-gradient(135deg,rgba(255,107,0,0.1),rgba(255,107,0,0.04))", border: "1px solid rgba(255,107,0,0.2)", borderRadius: "4px", padding: "1.5rem" }}>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.15rem", fontStyle: "italic", color: "var(--clr-gold-l)", lineHeight: 1.6 }}>"वीर भोग्य वसुंधरा — The brave inherit the earth."</div>
                </div>
              </div>
            </RevealDiv>

            <div>
              <RevealDiv>
                <Eyebrow>Biography</Eyebrow>
                <h2 className="sec-title">A Life Dedicated to Nation & Youth</h2>
                <p style={{ color: "var(--clr-text-mid)", lineHeight: 1.85, marginBottom: "1.2rem", fontSize: "1rem" }}>Vikas Singh Bhadauria is a dedicated youth leader, nationalist, and public servant from New Delhi. Born with an innate sense of duty towards the nation and its people, Vikas has built a remarkable career in public service and political leadership that has touched thousands of lives across India.</p>
                <p style={{ color: "var(--clr-text-mid)", lineHeight: 1.85, marginBottom: "1.2rem", fontSize: "1rem" }}>His journey began in the student corridors of India's premier institutions, where his natural leadership abilities and unwavering commitment to nationalist values made him a standout figure. Associated with IIT Guwahati, he developed the academic rigour and analytical capabilities that would later distinguish him as a strategic political thinker.</p>
                <p style={{ color: "var(--clr-text-mid)", lineHeight: 1.85, fontSize: "1rem" }}>As a Swamsewak, ABVP member, and former President of Makhanlal Chaturvedi National University (MCU), Bhopal, Vikas has consistently championed the cause of youth empowerment, quality education, and the strengthening of India's national fabric.</p>
              </RevealDiv>

              <RevealDiv delay={80} style={{ marginTop: "3rem" }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.6rem", fontWeight: 600, color: "var(--clr-text)", marginBottom: "1.5rem" }}>Core Values</h3>
                <div className="grid-r-2">
                  {[["🇮🇳","Nationalism","Unwavering love for Bharat above all else"],["⚡","Dedication","Total commitment to assigned duties and responsibilities"],["🤝","Service","Selfless service to the citizens and communities"],["📚","Education","Belief in education as the foundation of national progress"],["👥","Youth First","Empowering the next generation of Indian leaders"],["🛡","Integrity","Transparent, honest, and accountable in all actions"]].map(([icon,title,desc]) => (
                    <div key={title} style={{ display: "flex", gap: "1rem", padding: "1.2rem", background: "var(--clr-bg-card)", border: "1px solid var(--clr-border)", borderRadius: "4px", transition: "all 0.3s" }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,107,0,0.25)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--clr-border)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                      <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{icon}</span>
                      <div><div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.88rem", fontWeight: 700, color: "var(--clr-text)" }}>{title}</div><div style={{ fontSize: "0.8rem", color: "var(--clr-text-low)", marginTop: "0.2rem" }}>{desc}</div></div>
                    </div>
                  ))}
                </div>
              </RevealDiv>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Achievements */}
      <section className="vsb-section" style={{ background: "var(--clr-bg-mid)" }}>
        <div className="vsb-container">
          <RevealDiv style={{ textAlign: "center" }}><Eyebrow center>Achievements</Eyebrow><h2 className="sec-title" style={{ textAlign: "center" }}>Milestones of Service & Leadership</h2></RevealDiv>
          <div className="grid-r-3" style={{ marginTop: "3rem" }}>
            {ACHIEVEMENTS.map((a, i) => (
              <RevealDiv key={i} delay={i * 70}>
                <div style={{ background: "var(--clr-bg-card)", border: "1px solid var(--clr-border)", borderRadius: "4px", padding: "2rem", height: "100%", transition: "all 0.3s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,107,0,0.3)"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "var(--shadow-card)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--clr-border)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                  <div style={{ width: "52px", height: "52px", background: "rgba(255,107,0,0.1)", border: "1px solid rgba(255,107,0,0.2)", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.2rem", fontSize: "1.4rem" }}>{a.icon}</div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.25rem", fontWeight: 600, color: "var(--clr-text)", marginBottom: "0.6rem" }}>{a.title}</h3>
                  <p style={{ fontSize: "0.87rem", color: "var(--clr-text-mid)", lineHeight: 1.7 }}>{a.desc}</p>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Timeline */}
      <section id="journey" className="vsb-section">
        <div className="vsb-container">
          <RevealDiv><Eyebrow>Leadership Journey</Eyebrow><h2 className="sec-title">A Path of Dedication & Service</h2><p className="sec-sub">From student activism to national political responsibilities — a journey defined by purpose and service.</p></RevealDiv>
          <div style={{ position: "relative", paddingLeft: "3rem", maxWidth: "800px", margin: "3rem auto 0" }}>
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "1.5px", background: "linear-gradient(180deg,var(--clr-saffron),var(--clr-gold),rgba(212,168,67,0.1))" }} />
            {TIMELINE.map((item, i) => <TimelineItem key={i} item={item} index={i} />)}
          </div>
        </div>
      </section>

      <ImpactSection />

      {/* CTA */}
      <section className="vsb-section" style={{ background: "var(--clr-bg-mid)" }}>
        <div className="vsb-container" style={{ textAlign: "center" }}>
          <RevealDiv>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 700, color: "var(--clr-text)", marginBottom: "1rem" }}>Ready to Connect?</h2>
            <p style={{ color: "var(--clr-text-mid)", maxWidth: "500px", margin: "0 auto 2rem" }}>Reach out for collaborations, community programs, or to discuss ideas for a stronger India.</p>
            <button className="btn-pri" onClick={() => { setPage("home"); setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 100); }}>Get In Touch →</button>
          </RevealDiv>
        </div>
      </section>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   GALLERY PAGE
═══════════════════════════════════════════════════════════════ */
function GalleryPage() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);
  const cats = ["All", "Public Events", "Meetings", "Youth Programs", "Social Activities"];
  const filtered = active === "All" ? GALLERY_ITEMS : GALLERY_ITEMS.filter(g => g.category === active);

  return (
    <div className="page-enter">
      {/* Hero Banner */}
      <section style={{ minHeight: "40vh", position: "relative", display: "flex", alignItems: "center", overflow: "hidden", paddingTop: "80px" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 70% at 40% 50%,var(--clr-hero-rad1) 0%,transparent 65%)" }} />
        <div className="grid-overlay" />
        <div className="vsb-container" style={{ position: "relative", zIndex: 1, paddingTop: "3rem", paddingBottom: "3rem" }}>
          <p style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--clr-saffron)", display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.2rem", opacity: 0, animation: "fadeUp 0.8s ease 0.3s forwards" }}>
            <span style={{ width: "24px", height: "1.5px", background: "var(--clr-saffron)", display: "block" }} />Gallery
          </p>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2.2rem,6vw,5rem)", fontWeight: 700, color: "var(--clr-text)", lineHeight: 1.05, marginBottom: "1rem", opacity: 0, animation: "fadeUp 0.8s ease 0.5s forwards" }}>
            Moments in <span style={{ color: "var(--clr-saffron)" }}>Service</span>
          </h1>
          <p style={{ color: "var(--clr-text-mid)", fontSize: "1.05rem", maxWidth: "560px", opacity: 0, animation: "fadeUp 0.8s ease 0.7s forwards" }}>A visual chronicle of leadership, service, and unwavering dedication to the nation's youth and communities.</p>
        </div>
        <div style={{ position: "absolute", right: "2rem", bottom: "1rem", fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(4rem,10vw,7rem)", fontWeight: 700, color: "rgba(255,107,0,0.05)", lineHeight: 1, userSelect: "none" }}>2024</div>
      </section>

      <div className="divider" />

      <section className="vsb-section">
        <div className="vsb-container">
          {/* Stats bar */}
          <RevealDiv>
            <div className="gallery-stats" style={{ marginBottom: "3rem" }}>
              {[{ n: "9+", l: "Total Photos" }, { n: "5", l: "Categories" }, { n: "2024", l: "Latest Year" }, { n: "500+", l: "Events Covered" }].map(x => (
                <div key={x.l} style={{ background: "var(--clr-bg-card)", border: "1px solid var(--clr-border-s)", borderRadius: "4px", padding: "1.2rem 1.5rem", borderBottom: "2px solid var(--clr-saffron)" }}>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2rem", fontWeight: 700, color: "var(--clr-saffron)" }}>{x.n}</div>
                  <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--clr-text-low)", marginTop: "0.2rem" }}>{x.l}</div>
                </div>
              ))}
            </div>
          </RevealDiv>

          {/* Filters — scrollable on mobile */}
          <RevealDiv>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "2.5rem", alignItems: "center", overflowX: "auto", paddingBottom: "0.5rem" }}>
              <span style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--clr-text-low)", marginRight: "0.5rem", flexShrink: 0 }}>Filter:</span>
              {cats.map(c => <button key={c} className={`filter-btn ${active === c ? "active" : ""}`} onClick={() => setActive(c)} style={{ flexShrink: 0 }}>{c}</button>)}
            </div>
          </RevealDiv>

          {/* Gallery grid */}
          <div className="gallery-columns">
            {filtered.map((g, i) => (
              <RevealDiv key={`${active}-${i}`} delay={i * 60} style={{ breakInside: "avoid", marginBottom: "1rem" }}>
                <div className="gal-item" onClick={() => setSelected(g)}>
                  <div style={{ background: "linear-gradient(135deg,var(--clr-bg-card) 0%,var(--clr-bg-mid) 100%)", aspectRatio: i % 3 === 1 ? "3/4" : "4/3", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.75rem", padding: "2rem" }}>
                    <span style={{ fontSize: "3rem", opacity: 0.25 }}>{g.icon}</span>
                    <span style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.72rem", letterSpacing: "0.2em", color: "var(--clr-text-faint)", textTransform: "uppercase" }}>{g.category}</span>
                  </div>
                  <div style={{ position: "absolute", top: "0.75rem", left: "0.75rem", background: "var(--clr-saffron)", color: "#fff", padding: "0.2rem 0.6rem", borderRadius: "2px", fontFamily: "'Rajdhani',sans-serif", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>{g.category}</div>
                  <div className="gal-overlay">
                    <div>
                      <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.1em", color: "#fff", textTransform: "uppercase" }}>{g.label}</div>
                      <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.6)", marginTop: "0.25rem" }}>Tap to view details</div>
                    </div>
                  </div>
                </div>
              </RevealDiv>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "4rem", color: "var(--clr-text-low)" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📷</div>
              <p style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.9rem", letterSpacing: "0.1em" }}>No items in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selected && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(5,13,26,0.95)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem" }} onClick={() => setSelected(null)}>
          <div style={{ background: "var(--clr-bg-mid)", border: "1px solid var(--clr-border-s)", borderRadius: "4px", maxWidth: "540px", width: "100%", overflow: "hidden", animation: "fadeUp 0.3s ease" }} onClick={e => e.stopPropagation()}>
            <div style={{ aspectRatio: "16/9", background: "linear-gradient(135deg,var(--clr-bg-card),var(--clr-bg-mid))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "4rem", opacity: 0.4 }}>{selected.icon}</div>
            <div style={{ padding: "2rem" }}>
              <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--clr-saffron)", marginBottom: "0.5rem" }}>{selected.category}</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.6rem", fontWeight: 700, color: "var(--clr-text)", marginBottom: "0.75rem" }}>{selected.label}</h3>
              <p style={{ color: "var(--clr-text-mid)", lineHeight: 1.7, fontSize: "0.95rem", marginBottom: "1.5rem" }}>{selected.desc}</p>
              <button className="btn-out" onClick={() => setSelected(null)}>Close ✕</button>
            </div>
          </div>
        </div>
      )}

      {/* Media CTA */}
      <section style={{ padding: "5rem 0", background: "var(--clr-bg-mid)" }}>
        <div className="vsb-container">
          <div className="cta-strip" style={{ background: "linear-gradient(135deg,rgba(255,107,0,0.08),rgba(212,168,67,0.05))", border: "1px solid var(--clr-border-s)", borderRadius: "4px", padding: "3rem 2.5rem" }}>
            <div>
              <Eyebrow>Media & Press</Eyebrow>
              <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 700, color: "var(--clr-text)", lineHeight: 1.2 }}>Press Kit & High-Res Photos</h3>
              <p style={{ color: "var(--clr-text-mid)", marginTop: "0.5rem", maxWidth: "450px" }}>For media organisations requiring high-resolution photographs or press materials, reach out via the contact form.</p>
            </div>
            <button className="btn-pri" style={{ flexShrink: 0 }}>Download Press Kit</button>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ROOT APP
═══════════════════════════════════════════════════════════════ */
export default function VikasBhadauria() {
  const [dark, setDark] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [page, setPage] = useState("home");
  const [toasts, setToasts] = useState([]);
  const [scrollY, setScrollY] = useState(0);
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const id = "vsb-global";
    if (!document.getElementById(id)) {
      const s = document.createElement("style"); s.id = id; s.textContent = GLOBAL_CSS;
      document.head.appendChild(s);
    }
  }, []);

  useEffect(() => { document.documentElement.setAttribute("data-theme", dark ? "dark" : "light"); }, [dark]);
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 2000); return () => clearTimeout(t); }, []);

  // Cursor (pointer devices only)
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) { cursorRef.current.style.left = e.clientX - 4 + "px"; cursorRef.current.style.top = e.clientY - 4 + "px"; }
    };
    document.addEventListener("mousemove", onMove);
    let raf;
    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x - 18) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y - 18) * 0.12;
      if (ringRef.current) { ringRef.current.style.left = ring.current.x + "px"; ringRef.current.style.top = ring.current.y + "px"; }
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => { document.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);

  useEffect(() => {
    const h = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [page]);

  const showToast = useCallback((msg) => {
    const id = Date.now();
    setToasts(t => [...t, { id, msg }]);
    setTimeout(() => setToasts(t => t.filter(x => x.id !== id)), 3200);
  }, []);

  const scrollPct = (scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight)) * 100;

  return (
    <ThemeCtx.Provider value={{ dark, toggle: () => setDark(d => !d) }}>
      <div className="vsb-cursor" ref={cursorRef} style={{ position: "fixed", pointerEvents: "none", zIndex: 99999 }} />
      <div className="vsb-cursor-ring" ref={ringRef} style={{ position: "fixed", pointerEvents: "none", zIndex: 99998 }} />
      <div style={{ position: "fixed", top: 0, left: 0, height: "3px", background: "linear-gradient(90deg,var(--clr-saffron),var(--clr-gold))", width: scrollPct + "%", zIndex: 99997, transition: "width 0.1s", pointerEvents: "none" }} />
      <LoadingScreen done={loaded} />

      {/* Toasts */}
      <div style={{ position: "fixed", bottom: "2rem", left: "50%", transform: "translateX(-50%)", zIndex: 10000, display: "flex", flexDirection: "column", gap: "0.5rem", width: "max-content", maxWidth: "calc(100vw - 2rem)" }}>
        {toasts.map(t => <div key={t.id} className="vsb-toast">{t.msg}</div>)}
      </div>

      {/* Back to top */}
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ position: "fixed", bottom: "1.5rem", right: "1.5rem", width: "44px", height: "44px", background: "var(--clr-saffron)", border: "none", borderRadius: "2px", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", opacity: scrollY > 500 ? 1 : 0, visibility: scrollY > 500 ? "visible" : "hidden", transition: "all 0.3s", zIndex: 998 }}>↑</button>

      <div className="vsb-page">
        <Navbar page={page} setPage={setPage} />
        {page === "home" && <HomePage setPage={setPage} showToast={showToast} />}
        {page === "about" && <AboutPage setPage={setPage} />}
        {page === "gallery" && <GalleryPage />}
        <Footer setPage={setPage} />
      </div>
    </ThemeCtx.Provider>
  );
}