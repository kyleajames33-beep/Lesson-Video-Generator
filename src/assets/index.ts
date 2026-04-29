import {staticFile} from 'remotion';

export const ASSETS = {
	// ── Science illustrations ──────────────────────────────────────────────
	waterMolecule:        staticFile('assets/water-molecule.png'),
	waterMoleculeClassic: staticFile('assets/water-molecule-classic.png'),
	dnaHelix:             staticFile('assets/dna-helix.png'),
	dnaHelixPurple:       staticFile('assets/dna-helix-purple.png'),
	bubbles:              staticFile('assets/bubbles.png'),
	elementC:             staticFile('assets/element-c.png'),

	// ── World / nature ─────────────────────────────────────────────────────
	sun:     staticFile('assets/sun.png'),
	volcano: staticFile('assets/volcano.png'),
	earth:   staticFile('assets/earth.png'),
	leaf:    staticFile('assets/leaf.png'),

	// ── Biology ────────────────────────────────────────────────────────────
	virus:     staticFile('assets/virus.png'),
	plantCell: staticFile('assets/plant-cell.png'),
	neuron:    staticFile('assets/neuron.png'),

	// ── Backgrounds ────────────────────────────────────────────────────────
	waterDropletsBg: staticFile('assets/water-droplets-bg.png'),

	// ── Lab equipment ──────────────────────────────────────────────────────
	beaker:          staticFile('assets/Beaker.png'),
	flask:           staticFile('assets/Flask.png'),
	volumetricFlask: staticFile('assets/Volumetric flask.png'),
	bunsenBurner:    staticFile('assets/bunsen burner.png'),
	testtube:        staticFile('assets/testtube.png'),
	testtubeRack:    staticFile('assets/testtube in mini rack.png'),
	scale:           staticFile('assets/scale.png'),
	magnifyingGlass: staticFile('assets/magnifying glass.png'),
	microPipette:    staticFile('assets/micro pipette.png'),
	metalCoil:       staticFile('assets/metal coil.png'),
	tripodGauze:     staticFile('assets/tripod with gauze.png'),
	goldCoin:        staticFile('assets/gold coin.png'),
	pendulum:        staticFile('assets/pendulum.png'),
	mole:            staticFile('assets/mole.png'),
	salt:            staticFile('assets/Salt.png'),
	rice:            staticFile('assets/Rice.png'),
	character:       staticFile('assets/Character.png'),
} as const;

export type AssetName = keyof typeof ASSETS;
