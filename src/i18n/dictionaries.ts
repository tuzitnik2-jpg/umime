import type { Locale } from "./config";
import type { CategorySlug, LanguageCode } from "@/lib/taxonomy";

export type Dictionary = {
  nav: {
    login: string;
    register: string;
  };
  home: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    browseCourses: string;
    createAccount: string;
    pickSection: string;
    pointsTitle: string;
    pointsDesc: string;
    pointsBadge: string;
  };
  categories: Record<CategorySlug, { label: string; description: string }>;
  kurzyPage: {
    title: string;
    subtitle: string;
    openCourse: string;
  };
  category: {
    allLanguages: string;
    noCourses: string;
    noCoursesFiltered: string;
    viewLevels: string;
  };
  languages: Record<LanguageCode, string>;
  course: {
    backToCategory: string;
    levelsTitle: string;
    levelsSubtitle: string;
    level: string;
    comingSoon: string;
    locked: string;
    moreLevelsSoon: string;
    notFound: string;
  };
  auth: {
    login: {
      title: string;
      subtitle: string;
      email: string;
      password: string;
      submit: string;
      submitting: string;
      error: string;
    };
    register: {
      title: string;
      subtitle: string;
      name: string;
      email: string;
      password: string;
      submit: string;
      submitting: string;
      genericError: string;
    };
  };
  footer: {
    rights: string;
  };
};

const cs: Dictionary = {
  nav: { login: "Přihlásit se", register: "Registrace" },
  home: {
    badge: "🚀 Nová platforma pro přípravu",
    titleLine1: "Připrav se na",
    titleLine2: "základku, střední, přijímačky i maturitu",
    subtitle:
      "Sbírej body za dokončené lekce, sleduj svůj postup a uč se v jazyce, který právě potřebuješ.",
    browseCourses: "Prohlédnout kurzy",
    createAccount: "Vytvořit účet",
    pickSection: "Vyber si svou sekci",
    pointsTitle: "Bodový systém",
    pointsDesc:
      "Za každou dokončenou lekci nebo cvičení získáš body. Sleduj svůj postup a odemykej další odměny, jak budou přibývat.",
    pointsBadge: "bodů",
  },
  categories: {
    zakladni: {
      label: "Základní škola",
      description: "Kurzy a procvičování pro žáky základních škol.",
    },
    stredni: {
      label: "Střední škola",
      description: "Látka a příprava pro studenty středních škol.",
    },
    prijimacky: {
      label: "Přijímačky",
      description: "Příprava na přijímací zkoušky na střední školy.",
    },
    maturita: {
      label: "Maturita",
      description: "Příprava na maturitní zkoušku ze všech předmětů.",
    },
  },
  kurzyPage: {
    title: "Kurzy",
    subtitle: "Vyber si sekci, kterou se chceš učit.",
    openCourse: "Zobrazit levely",
  },
  category: {
    allLanguages: "Všechny jazyky",
    noCourses: "V téhle sekci zatím nejsou žádné publikované kurzy.",
    noCoursesFiltered:
      "V téhle sekci zatím nejsou žádné publikované kurzy pro zvolený jazyk.",
    viewLevels: "Zobrazit levely →",
  },
  languages: { CJ: "Čeština", NJ: "Němčina", RS: "Ruština", AJ: "Angličtina" },
  course: {
    backToCategory: "Zpět na sekci",
    levelsTitle: "Levely",
    levelsSubtitle:
      "Kurz je rozdělený na levely, kterými postupně projdeš. Obsah se bude průběžně doplňovat.",
    level: "Level",
    comingSoon: "Obsah brzy přibude",
    locked: "Uzamčeno",
    moreLevelsSoon: "Další levely přibydou postupně ✨",
    notFound: "Kurz nebyl nalezen.",
  },
  auth: {
    login: {
      title: "Přihlášení",
      subtitle: "Vítej zpátky! Pokračuj tam, kde jsi skončil.",
      email: "Email",
      password: "Heslo",
      submit: "Přihlásit se",
      submitting: "Přihlašování…",
      error: "Nesprávný email nebo heslo.",
    },
    register: {
      title: "Registrace",
      subtitle: "Založ si účet a začni sbírat body hned od první lekce.",
      name: "Jméno",
      email: "Email",
      password: "Heslo",
      submit: "Vytvořit účet",
      submitting: "Vytváření účtu…",
      genericError: "Registrace se nezdařila.",
    },
  },
  footer: { rights: "Umíme" },
};

const en: Dictionary = {
  nav: { login: "Log in", register: "Sign up" },
  home: {
    badge: "🚀 A new way to prep",
    titleLine1: "Get ready for",
    titleLine2: "primary school, high school, entrance exams and finals",
    subtitle:
      "Earn points for finished lessons, track your progress, and learn in the language you need right now.",
    browseCourses: "Browse courses",
    createAccount: "Create an account",
    pickSection: "Pick your section",
    pointsTitle: "Points system",
    pointsDesc:
      "Earn points for every finished lesson or exercise. Track your progress and unlock more rewards as they roll out.",
    pointsBadge: "points",
  },
  categories: {
    zakladni: {
      label: "Primary school",
      description: "Courses and practice for primary school students.",
    },
    stredni: {
      label: "High school",
      description: "Material and prep for high school students.",
    },
    prijimacky: {
      label: "Entrance exams",
      description: "Prep for high school entrance exams.",
    },
    maturita: {
      label: "Final exams",
      description: "Prep for final exams (maturita) in every subject.",
    },
  },
  kurzyPage: {
    title: "Courses",
    subtitle: "Pick the section you want to learn.",
    openCourse: "View levels",
  },
  category: {
    allLanguages: "All languages",
    noCourses: "There are no published courses in this section yet.",
    noCoursesFiltered:
      "There are no published courses in this section for the selected language yet.",
    viewLevels: "View levels →",
  },
  languages: { CJ: "Czech", NJ: "German", RS: "Russian", AJ: "English" },
  course: {
    backToCategory: "Back to section",
    levelsTitle: "Levels",
    levelsSubtitle:
      "The course is split into levels you'll work through step by step. Content will be added gradually.",
    level: "Level",
    comingSoon: "Content coming soon",
    locked: "Locked",
    moreLevelsSoon: "More levels are coming, one at a time ✨",
    notFound: "Course not found.",
  },
  auth: {
    login: {
      title: "Log in",
      subtitle: "Welcome back! Pick up right where you left off.",
      email: "Email",
      password: "Password",
      submit: "Log in",
      submitting: "Logging in…",
      error: "Incorrect email or password.",
    },
    register: {
      title: "Sign up",
      subtitle: "Create an account and start earning points from lesson one.",
      name: "Name",
      email: "Email",
      password: "Password",
      submit: "Create account",
      submitting: "Creating account…",
      genericError: "Registration failed.",
    },
  },
  footer: { rights: "Umíme" },
};

const de: Dictionary = {
  nav: { login: "Anmelden", register: "Registrieren" },
  home: {
    badge: "🚀 Eine neue Plattform zum Lernen",
    titleLine1: "Bereite dich vor auf",
    titleLine2: "Grundschule, Mittelschule, Aufnahmeprüfungen und Abitur",
    subtitle:
      "Sammle Punkte für abgeschlossene Lektionen, verfolge deinen Fortschritt und lerne in der Sprache, die du gerade brauchst.",
    browseCourses: "Kurse ansehen",
    createAccount: "Konto erstellen",
    pickSection: "Wähle deinen Bereich",
    pointsTitle: "Punktesystem",
    pointsDesc:
      "Für jede abgeschlossene Lektion oder Übung erhältst du Punkte. Verfolge deinen Fortschritt und schalte weitere Belohnungen frei.",
    pointsBadge: "Punkte",
  },
  categories: {
    zakladni: {
      label: "Grundschule",
      description: "Kurse und Übungen für Grundschüler.",
    },
    stredni: {
      label: "Mittelschule",
      description: "Lernstoff und Vorbereitung für Mittelschüler.",
    },
    prijimacky: {
      label: "Aufnahmeprüfungen",
      description: "Vorbereitung auf die Aufnahmeprüfungen weiterführender Schulen.",
    },
    maturita: {
      label: "Abitur",
      description: "Vorbereitung auf die Abiturprüfung in allen Fächern.",
    },
  },
  kurzyPage: {
    title: "Kurse",
    subtitle: "Wähle den Bereich, in dem du lernen möchtest.",
    openCourse: "Levels ansehen",
  },
  category: {
    allLanguages: "Alle Sprachen",
    noCourses: "In diesem Bereich gibt es noch keine veröffentlichten Kurse.",
    noCoursesFiltered:
      "In diesem Bereich gibt es noch keine veröffentlichten Kurse für die gewählte Sprache.",
    viewLevels: "Levels ansehen →",
  },
  languages: { CJ: "Tschechisch", NJ: "Deutsch", RS: "Russisch", AJ: "Englisch" },
  course: {
    backToCategory: "Zurück zum Bereich",
    levelsTitle: "Levels",
    levelsSubtitle:
      "Der Kurs ist in Levels unterteilt, die du nach und nach durchgehst. Inhalte werden laufend ergänzt.",
    level: "Level",
    comingSoon: "Inhalt folgt bald",
    locked: "Gesperrt",
    moreLevelsSoon: "Weitere Levels folgen nach und nach ✨",
    notFound: "Kurs nicht gefunden.",
  },
  auth: {
    login: {
      title: "Anmelden",
      subtitle: "Willkommen zurück! Mach dort weiter, wo du aufgehört hast.",
      email: "E-Mail",
      password: "Passwort",
      submit: "Anmelden",
      submitting: "Anmeldung läuft…",
      error: "Falsche E-Mail oder falsches Passwort.",
    },
    register: {
      title: "Registrieren",
      subtitle: "Erstelle ein Konto und sammle Punkte schon ab der ersten Lektion.",
      name: "Name",
      email: "E-Mail",
      password: "Passwort",
      submit: "Konto erstellen",
      submitting: "Konto wird erstellt…",
      genericError: "Registrierung fehlgeschlagen.",
    },
  },
  footer: { rights: "Umíme" },
};

const ru: Dictionary = {
  nav: { login: "Войти", register: "Регистрация" },
  home: {
    badge: "🚀 Новая платформа для подготовки",
    titleLine1: "Готовься к",
    titleLine2: "начальной, средней школе, вступительным экзаменам и выпускным",
    subtitle:
      "Получай баллы за пройденные уроки, следи за прогрессом и учись на том языке, который нужен именно сейчас.",
    browseCourses: "Посмотреть курсы",
    createAccount: "Создать аккаунт",
    pickSection: "Выбери свой раздел",
    pointsTitle: "Система баллов",
    pointsDesc:
      "За каждый пройденный урок или упражнение ты получаешь баллы. Следи за прогрессом и открывай новые награды по мере их появления.",
    pointsBadge: "баллов",
  },
  categories: {
    zakladni: {
      label: "Начальная школа",
      description: "Курсы и упражнения для учеников начальной школы.",
    },
    stredni: {
      label: "Средняя школа",
      description: "Материал и подготовка для учеников средней школы.",
    },
    prijimacky: {
      label: "Вступительные экзамены",
      description: "Подготовка к вступительным экзаменам в среднюю школу.",
    },
    maturita: {
      label: "Выпускные экзамены",
      description: "Подготовка к выпускным экзаменам по всем предметам.",
    },
  },
  kurzyPage: {
    title: "Курсы",
    subtitle: "Выбери раздел, который хочешь изучать.",
    openCourse: "Смотреть уровни",
  },
  category: {
    allLanguages: "Все языки",
    noCourses: "В этом разделе пока нет опубликованных курсов.",
    noCoursesFiltered:
      "В этом разделе пока нет опубликованных курсов для выбранного языка.",
    viewLevels: "Смотреть уровни →",
  },
  languages: { CJ: "Чешский", NJ: "Немецкий", RS: "Русский", AJ: "Английский" },
  course: {
    backToCategory: "Назад к разделу",
    levelsTitle: "Уровни",
    levelsSubtitle:
      "Курс разделён на уровни, которые ты проходишь по порядку. Контент будет добавляться постепенно.",
    level: "Уровень",
    comingSoon: "Контент скоро появится",
    locked: "Заблокировано",
    moreLevelsSoon: "Новые уровни будут добавляться постепенно ✨",
    notFound: "Курс не найден.",
  },
  auth: {
    login: {
      title: "Вход",
      subtitle: "С возвращением! Продолжи с того места, где остановился.",
      email: "Email",
      password: "Пароль",
      submit: "Войти",
      submitting: "Выполняется вход…",
      error: "Неверный email или пароль.",
    },
    register: {
      title: "Регистрация",
      subtitle: "Создай аккаунт и начни получать баллы с первого урока.",
      name: "Имя",
      email: "Email",
      password: "Пароль",
      submit: "Создать аккаунт",
      submitting: "Создание аккаунта…",
      genericError: "Регистрация не удалась.",
    },
  },
  footer: { rights: "Umíme" },
};

const dictionaries: Record<Locale, Dictionary> = { cs, en, de, ru };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
