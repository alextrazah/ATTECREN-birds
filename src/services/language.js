import {
  birdsDataEn,
  birdsDataRu,
  categoriesEn,
  categoriesRu,
} from '../data/birds-data';

const lng = {
  rss: 'rss',
  github: 'github',
  portfolio: 'portfolio',
  welcome: 'welcome',
  quiz: 'quiz',
  library: 'library',
  en: 'en',
  enHint: 'enHint',
  ru: 'ru',
  ruHint: 'ruHint',
  playHint: 'playHint',
  pauseHint: 'pauseHint',
  emptyCard: 'emptyCard',
  nextButton: 'nextButton',
  showResults: 'showResults',
  score: 'score',
  resultsTitle: 'resultsTitle',
  resultsMessage: 'resultsMessage',
  tryAgain: 'tryAgain',
  resultsMaximumMessage: 'resultsMaximumMessage',
  welcomeTitle: 'welcomeTitle',
  welcomeMessage: 'welcomeMessage',
  welcomePlay: 'welcomePlay',
  welcomeLibrary: 'welcomeLibrary',
  confirmQuizEnd: 'confirmQuizEnd',

  birdsData: 'birdsData',
  birdsCategires: 'birdsCategires',
};

const strings = {
  en: {
    [lng.rss]: 'École RS',
    [lng.github]: 'Github',
    [lng.portfolio]: 'Portfolio',
    [lng.welcome]: 'Bienvenue',
    [lng.quiz]: 'Quiz',
    [lng.library]: 'Galerie',
    [lng.en]: 'Francais',
    [lng.enHint]: 'Francais',
    [lng.ru]: 'عربي',
    [lng.ruHint]: 'عربي',
    [lng.playHint]: 'Jouer',
    [lng.pauseHint]: 'Pause',
    [lng.emptyCard]:
      "Veuillez jouer la chanson et sélectionner le nom de l'oiseau.",
    [lng.nextButton]: 'Question suivante',
    [lng.showResults]: 'Afficher les résultats',
    [lng.score]: 'Score',
    [lng.resultsTitle]: 'Félicitations !',
    [lng.resultsMessage]:
      'Vous avez terminé le quiz et marqué xxx points sur yyy possibles.',
    [lng.resultsMaximumMessage]:
      'Vous avez obtenu le score maximum de yyy points dans ce quiz. Bravo !',
    [lng.tryAgain]: 'Réessayer',
    [lng.welcomeTitle]: 'Bienvenue sur ATEECREN !',
    [lng.welcomeMessage]: `On vous présente une application de quiz qui teste votre capacité à reconnaître 
                          les chants d'oiseaux communs. Veuillez sélectionner une des options ci-dessous.`,
    [lng.welcomePlay]: 'Commencer le quiz',
    [lng.welcomeLibrary]: 'Voir tous les oiseaux',

    [lng.confirmQuizEnd]:
      'Êtes-vous sûr de vouloir naviguer vers une autre page ? \nCela réinitialisera la progression du quiz.',

    [lng.birdsData]: birdsDataEn,
    [lng.birdsCategires]: categoriesEn,
  },

  ru: {
    [lng.welcome]: 'ابدأ',
    [lng.quiz]: 'اختبار',
    [lng.library]: 'المعرض',
    [lng.playHint]: 'تشغيل',
    [lng.pauseHint]: 'إيقاف',
    [lng.emptyCard]: 'استمع إلى المشغل واختر الطائر من القائمة',
    [lng.nextButton]: 'السؤال التالي',
    [lng.showResults]: 'إظهار النتائج',
    [lng.score]: 'النتيجة',
    [lng.resultsTitle]: 'تهانينا!',
    [lng.resultsMessage]: 'لقد أكملت الاختبار وحصلت على xxx من أصل yyy نقطة ممكنة.',
    [lng.resultsMaximumMessage]: 'رائع! لقد حصلت على الحد الأقصى من النقاط (yyy) في هذا الاختبار!',
    [lng.tryAgain]: 'حاول مرة أخرى',

    [lng.welcomeTitle]: 'ATEECREN مرحبًا بك في',
    [lng.welcomeMessage]: ` نقدم لكم تطبيق مه خلال اختبار يتيح لك التعرف على أصوات الطيور. 
                          للبدء، اختر أحد الخيارات أدناه.`,
    [lng.welcomePlay]: 'ابدأ الاختبار',
    [lng.welcomeLibrary]: 'شاهد معرض الطيور',

    [lng.confirmQuizEnd]: 'هل أنت متأكد أنك تريد الانتقال إلى صفحة أخرى؟ \nسيتم إعادة تعيين التقدم الحالي.',
    [lng.birdsData]: birdsDataRu,
    [lng.birdsCategires]: categoriesRu,
  },
};

const availableLanguages = Object.keys(strings);

const LANGUAGE_KEY = 'lang-eacdad80-d24a-4ff2';

class Language {
  constructor() {
    this.callbacks = [];
    const userLangauge = navigator && navigator.language ? navigator.language.slice(0, 2) : 'en';
    this.currentLanguage = localStorage.getItem(LANGUAGE_KEY) || userLangauge;
  }

  change(callback, call = true) {
    this.callbacks.push(callback);
    if (call) callback(this.currentLanguage);
  }

  get current() {
    return this.currentLanguage;
  }

  set current(lang) {
    if (this.currentLanguage !== lang) {
      this.currentLanguage = lang;
      localStorage.setItem(LANGUAGE_KEY, lang);
      this.callbacks.forEach((callback) => callback(lang));
    }
  }

  getText(item) {
    const items = strings[this.currentLanguage] || strings.en;
    return items[item] || strings.en[item];
  }

  get birdCategiroes() {
    return this.getText(lng.birdsCategires);
  }
}

const lang = new Language();

export { lang, lng, availableLanguages };
