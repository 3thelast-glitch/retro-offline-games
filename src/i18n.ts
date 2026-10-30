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
    offline: 'يمكن تشغيل لعبة اللغز دون إنترنت بعد تخزين ملفات الموقع. إصدار Android قيد التطوير.',
    legal: 'لا تتضمن النسخة الحالية ملفات ألعاب تجارية أو ألعاب PSP.',
    language: 'English',
    theme: 'المظهر',
    dark: 'ليلي',
    light: 'فاتح',
    emptyTile: 'خانة فارغة',
    saving: 'يُحفظ تقدم اللغز على هذا الجهاز عند توفر التخزين المحلي.'
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
    offline: 'The puzzle can work offline after site assets are cached. Android development is pending.',
    legal: 'The current version includes no commercial game files or PSP games.',
    language: 'العربية',
    theme: 'Theme',
    dark: 'Dark',
    light: 'Light',
    emptyTile: 'Empty tile',
    saving: 'Puzzle progress is stored on this device when local storage is available.'
  }
} as const;
