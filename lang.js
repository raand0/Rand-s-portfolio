let currentLang = 'en'; // default language

const translations = {
  en: {
    "lg-name": "Rand Jamal",
    "h": "Home",
    "a": "About",
    "p": "Projects",
    "e": "Experience",
    "c": "Contact",
    "title-Text": "Hey, I'm Rand Jamal",
    "title-info": "Backend Developer & IT Student at Sulaimani Polytechnic University",
    "bed": "Backend Development",
    "s": "Security",
    "ps": "Problem Solving",
    "aboutme": "About Me",
    "abt1": "I'm a 20-year-old Information Technology student at Sulaimani Polytechnic University with a deep passion for technology and problem-solving. My primary interest lies in backend development, where I focus on building the logic, structure, and functionality behind applications, websites, tools, and systems.",
    "abt2": "I enjoy understanding how things work under the hood and take pride in writing clean, efficient, and secure backend code. While I have a working knowledge of front-end development and design, my strengths are in backend logic and systems architecture. I prioritize implementing reliable functionality and robust security in everything I build.",
    "abt3": "I'm also highly adaptable and a fast learner — if there's something I don't know yet, I'm confident in my ability to pick it up quickly and apply it effectively.",
    "projectss": "Projects",
    "git": "🚀 GitHub Portfolio",
    "git-text": "Explore my coding projects and contributions on GitHub.",
    "vgit": "View GitHub →",
    "leet": "🧩 LeetCode Solutions",
    "leet-text": "Check out my problem-solving skills and algorithmic thinking through my LeetCode profile and solutions.",
    "vleet": "View LeetCode →",
    "skill": "Technical Skills",
    "plangs": "💻 Programming Languages",
    "tt": "🛠️ Tools & Technologies",
    "get": "Get In Touch",
    "get-text": "Let's connect and discuss opportunities or collaborations!"
  },
  ku: {
    "lg-name": "ڕەند جەمال",
    "h": "سەرەکی",
    "a": "دەربارە",
    "p": "پڕۆژەکان",
    "e": "ئەزموون",
    "c": "پەیوەندی",
    "title-Text": "سڵاو، من ڕەند جەمالم",
    "title-info":"باکئێند دێڤڵۆپەر و خوێندکاری زانکۆی پۆلیتەکنیکی سلێمانی",
    "bed": "پەرەپێدانی باکئێند",
    "s": "ئاسایشی سیستەم",
    "ps": "چارەسەرکەری کێشە",
    "aboutme": "دەربارەی من",
    "abt1": "خوێندکاری تەکنەلۆجیای زانیاری تەمەن ٢٠ ساڵم لە زانکۆی پۆلیتەکنیکی سلێمانی و خولیای قووڵم بۆ تەکنەلۆجیا و چارەسەرکردنی کێشەکان هەیە. بەرژەوەندی سەرەکی من لە پەرەپێدانی باکئێنددایە، کە تیایدا سەرنج دەدەم لەسەر بنیاتنانی لۆژیک و پێکهاتە و کارایی لە پشت بەرنامە و ماڵپەڕ و ئامراز و سیستەمەکانەوە",
    "abt2": "چێژ لە تێگەیشتن لە چۆنیەتی کارکردنی شتەکان لە ژێر پەردەوە وەردەگرم و شانازی بە نووسینی کۆدی ڕێک و پێک و کارا و پارێزراو دەکەم. لە کاتێکدا من زانیارییەکی سەرەتایم هەیە لەسەر پەرەپێدان و دیزاینی فرۆنتئێند، بەڵام خاڵە بەهێزەکانم لە لۆژیکی باکئێند و سیستەمەکاندایە. من گرنگی بە دانانی لۆژیکی متمانەپێکراو و ئاسایشی بەهێز دەدەم لە هەموو شتێکدا کە دروستی دەکەم",
    "abt3": "هەروەها من توانای خۆگونجاندن و فێربوونی خێرام هەیە — ئەگەر شتێک هەبێت کە نەیزانم لە ئێستادا، متمانەم بە توانای خۆم هەیە بۆ ئەوەی بە خێرایی فێری ببم و بە شێوەیەکی باش جێبەجێی بکەم",
    "projectss": "پڕۆژەکان",
    "git": "گیتهەب 🚀",
    "git-text": "سەیری پرۆژەکان و کارەکانم بکە کە پێشتر دروستم کردوون و بە چیەوە خەریکم لە گیتهەبەکەم",
    "vgit": "→ بینینی گیتهەب",
    "leet": "لیتکۆد 🧩",
    "leet-text": "سەیری چارەسەری کێشە و دروستکردنی ئەلگۆریتمەکان و باشترکردنی کۆد بکە لە لیتکۆدەکەم",
    "vleet": "→ بینینی لیتکۆد",
    "skill": "کارامەییەکانی من",
    "plangs": "زمانەکانی پڕۆگرامینگ 💻",
    "tt": "تەکنەلۆژیا و ئامرازەکان 🛠️",
    "get": "پەیوەندی بکە",
    "get-text": "با پەیوەندی بکەین و باسی هەلەکان و هاوکاری یەکتر بین"
  }
};

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'ku' : 'en';
  updateText();
  document.getElementById("lang-btn").textContent = currentLang.toUpperCase();
}

function updateText() {
  const texts = translations[currentLang];
  for (let id in texts) {
    const el = document.getElementById(id);
    if (el) el.textContent = texts[id];
  }
}

document.getElementById("lang-btn").addEventListener("click", toggleLanguage);
