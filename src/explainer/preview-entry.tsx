import React from 'react';
import {createRoot} from 'react-dom/client';
import {Player, type PlayerRef} from '@remotion/player';
import {ExplainerVideo} from './ExplainerVideo';
import {explainers} from './registry';
import {totalFrames} from './types';

const el = document.getElementById('explainer-root');
const id = el?.getAttribute('data-explainer-id');
const config = explainers.find(e => e.id === id);

const App: React.FC = () => {
	const ref = React.useRef<PlayerRef>(null);
	if (!config) return <p>Unknown explainer {String(id)}</p>;
	let t = 0;
	const starts = config.lesson.scenes.map(s => { const v = t; t += s.durationInFrames; return v; });
	return (
		<>
			<div style={{width: 1100, maxWidth: '100%', aspectRatio: '16 / 9', boxShadow: '0 4px 20px rgba(0,0,0,0.15)'}}>
				<Player ref={ref} component={ExplainerVideo} inputProps={{config}} durationInFrames={totalFrames(config)} fps={30} compositionWidth={1920} compositionHeight={1080} controls style={{width: '100%', height: '100%'}} />
			</div>
			<div className="controls">
				{config.lesson.scenes.map((s, i) => (
					<button key={s.id} onClick={() => { ref.current?.seekTo(starts[i]); }}>{i + 1}. {s.id}</button>
				))}
			</div>
		</>
	);
};

if (el) createRoot(el).render(<App />);
