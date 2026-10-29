export type Lang = 'ar' | 'en';
export const translations = {
  ar: {
    brand: 'مكتبة الألعاب',
    subtitle: 'ألعابك في مكان واحد، بدون إنترنت',
    library: 'الألعاب المتاحة',
    play: 'العب الآن',
    back: 'العودة للمكتبة',
    restart: 'إعادة اللعب',
    won: 'فزت! أحسنت',
    moves: 'الحركات',
    instructions: 'رتّب الأرقام من 1 إلى 15 لإكمال اللغز.',
    offline: 'تعمل دون إنترنت بعد تحميل ملفات التطبيق لأول مرة',
    gameTitle: 'لغز الأرقام',
    gameDescription: 'لعبة تجريبية أصلية مدمجة',
    legal: 'النسخة التأسيسية: لا تتضمن ألعابًا تجارية أو ملفات من Lemon Web',
    language: 'English',
    theme: 'المظهر',
    dark: 'ليلي',
    light: 'فاتح'
  },
  en: {
    brand: 'Game Library',
    subtitle: 'Your games in one place, offline',
    library: 'Available games',
    play: 'Play now',
    back: 'Back to library',
    restart: 'Restart',
    won: 'You won! Well done',
    moves: 'Moves',
    instructions: 'Arrange tiles from 1 to 15 to solve the puzzle.',
    offline: 'Works offline after the application files are cached once',
    gameTitle: 'Sliding Puzzle',
    gameDescription: 'Original bundled demo game',
    legal: 'Starter release: no commercial games or Lemon Web files included',
    language: 'العربية',
    theme: 'Theme',
    dark: 'Dark',
    light: 'Light'
  }
} as const;
