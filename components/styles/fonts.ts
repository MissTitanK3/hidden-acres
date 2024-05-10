import { Open_Sans } from 'next/font/google';

// define your variable fonts with the 'latin' subset
const openSans = Open_Sans({ subsets: ['latin'] });
// define 2 weights of a non-variable font with the 'latin' subset
const openSans400 = Open_Sans({ weight: '400', subsets: ['latin'] });
const openSans700 = Open_Sans({ weight: '700', subsets: ['latin'] });

export { openSans, openSans400, openSans700 };
