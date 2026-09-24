// Self-hosted fonts. Loaded from public/fonts/ so renders never depend on
// fonts.googleapis.com — a slow or blocked request there silently swaps in a
// fallback face for that frame. Rendering is held (delayRender) until every
// face has loaded.
//
// Files: latin + latin-ext + greek subsets from @fontsource(-variable), SIL OFL
// (public/fonts/OFL-LICENSE.txt). Variable fonts cover the in-between weights
// the type scale uses (760, 820, 840...). Glyphs outside these subsets (e.g.
// subscript digits) fall back per-glyph, exactly as with Google Fonts.

import {continueRender, delayRender, staticFile} from 'remotion';

type FontFile = {family: string; file: string; weight: string; unicodeRange: string};

const FONT_FILES: FontFile[] = [
	{family: 'Inter Tight', file: 'inter-tight-greek-wght-normal.woff2', weight: '100 900', unicodeRange: 'U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF'},
	{family: 'Inter Tight', file: 'inter-tight-latin-ext-wght-normal.woff2', weight: '100 900', unicodeRange: 'U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF'},
	{family: 'Inter Tight', file: 'inter-tight-latin-wght-normal.woff2', weight: '100 900', unicodeRange: 'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD'},
	{family: 'JetBrains Mono', file: 'jetbrains-mono-greek-wght-normal.woff2', weight: '100 800', unicodeRange: 'U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF'},
	{family: 'JetBrains Mono', file: 'jetbrains-mono-latin-ext-wght-normal.woff2', weight: '100 800', unicodeRange: 'U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF'},
	{family: 'JetBrains Mono', file: 'jetbrains-mono-latin-wght-normal.woff2', weight: '100 800', unicodeRange: 'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD'},
	{family: 'Caveat', file: 'caveat-latin-ext-wght-normal.woff2', weight: '400 700', unicodeRange: 'U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF'},
	{family: 'Caveat', file: 'caveat-latin-wght-normal.woff2', weight: '400 700', unicodeRange: 'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD'},
	{family: 'Outfit', file: 'outfit-latin-ext-wght-normal.woff2', weight: '100 900', unicodeRange: 'U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF'},
	{family: 'Outfit', file: 'outfit-latin-wght-normal.woff2', weight: '100 900', unicodeRange: 'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD'},
	{family: 'Kalam', file: 'kalam-latin-ext-400-normal.woff2', weight: '400', unicodeRange: 'U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF'},
	{family: 'Kalam', file: 'kalam-latin-ext-700-normal.woff2', weight: '700', unicodeRange: 'U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF'},
	{family: 'Kalam', file: 'kalam-latin-400-normal.woff2', weight: '400', unicodeRange: 'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD'},
	{family: 'Kalam', file: 'kalam-latin-700-normal.woff2', weight: '700', unicodeRange: 'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD'},
];

let loaded = false;

export const loadFonts = () => {
	if (loaded || typeof document === 'undefined') return;
	loaded = true;
	const handle = delayRender('Loading self-hosted fonts');
	Promise.all(
		FONT_FILES.map(({family, file, weight, unicodeRange}) => {
			const face = new FontFace(family, `url(${staticFile(`fonts/${file}`)}) format('woff2')`, {
				weight,
				unicodeRange,
				display: 'block',
			});
			document.fonts.add(face);
			return face.load();
		}),
	)
		.then(() => continueRender(handle))
		.catch((err) => {
			console.error('Font load failed', err);
			continueRender(handle);
		});
};

loadFonts();
