import {cancelRender, continueRender, delayRender, staticFile} from 'remotion';

if (typeof document !== 'undefined') {
	const handle = delayRender('Physics kit font', {timeoutInMilliseconds: 120000});
	const face = new FontFace('Inter Tight', `url(${staticFile('fonts/inter-tight-latin-wght-normal.woff2')})`, {weight: '100 900'});
	face.load().then(font => {document.fonts.add(font); continueRender(handle);}, error => cancelRender(error));
}
