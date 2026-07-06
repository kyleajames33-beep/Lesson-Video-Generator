// Rewrite the 15 flagged M1 scenes (6 FAIL + 9 WARN across 5 lessons) to
// gold-standard conversational pacing. Chemistry/numbers are identical;
// only fragment-stops become comma-joined flowing sentences. Each rewritten
// scene's audioFile + captions are cleared so a future regen pass picks them
// up. NO audio is generated here.

import {readFileSync, writeFileSync} from 'node:fs';

const REWRITES = {
	'm1-l7-periodic-trends': {
		'worked-example-1':
			"OK, example one. Arrange sodium, magnesium, and potassium in order of increasing atomic radius. Sodium sits in period three group one, magnesium in period three group two, and potassium in period four group one. Across a period the radius decreases, so magnesium is smaller than sodium, and down a group it increases, so potassium is larger than sodium. That puts them in order as magnesium smallest, then sodium, then potassium largest.",
		'quick-check':
			"Quick check. Rank these in order of increasing electronegativity, sodium, magnesium, silicon, and chlorine. Pause and think. All four are in period three, and electronegativity increases across a period, so sodium in group one has the lowest, magnesium is higher, silicon higher still, and chlorine in group seventeen has the highest. So the order is sodium, magnesium, silicon, then chlorine.",
	},
	'm1-l8-ionic-bonding': {
		definition:
			"A cation is a positively charged ion, formed when a metal loses electrons, so group one metals form one-plus cations and group two metals form two-plus cations. An anion is negatively charged, formed when a non-metal gains electrons, so group seventeen non-metals form one-minus anions. The crystal lattice is a repeating arrangement of alternating cations and anions, where each ion is surrounded by opposite charges. In sodium chloride, each sodium ion is surrounded by six chloride ions, which maximises attraction and minimises repulsion.",
		'worked-example-1':
			"OK, example one. Write the electron transfer for sodium chloride forming. Sodium has the configuration two, eight, one, and chlorine is two, eight, seven. Metals lose electrons to reach a stable octet while non-metals gain them, and here sodium has one valence electron while chlorine needs exactly one. So sodium gives its electron to chlorine, becoming Na plus, and chlorine becomes Cl minus. Those two ions are then held together by electrostatic attraction in a crystal lattice.",
		'worked-example-2':
			"Example two. Magnesium oxide melts at two thousand eight hundred and fifty-two degrees, while sodium chloride melts at eight hundred and one. Explain why. Magnesium oxide is made of Mg two plus and O two minus, whereas sodium chloride is Na plus and Cl minus, and lattice strength depends on both charge and radius. The ions in magnesium oxide carry double the charge and are both smaller, and higher charge with smaller size gives much stronger attraction. So magnesium oxide melts far higher because of its higher charge and smaller radius.",
	},
	'm1-l10-metallic-bonding': {
		'worked-example-1':
			"OK, example one. Explain why copper conducts electricity but sulfur doesn't. Copper is a metal with metallic bonding, while sulfur is a non-metal with covalent bonding, and conductivity needs mobile charge carriers. Metallic bonding provides a sea of delocalised electrons that move freely when a voltage is applied, but in sulfur every valence electron is locked into a covalent bond and can't move. So copper conducts because its delocalised electrons are mobile, and sulfur doesn't because its covalent electrons are fixed.",
		'worked-example-2':
			"Example two. Why can aluminium be rolled into sheets while sodium chloride shatters? Aluminium has metallic bonding and sodium chloride has ionic bonding, and the difference comes down to whether the bonding is directional. In aluminium, the ions are surrounded by a sea of delocalised electrons, so when layers slide the electron sea simply attracts the ions in their new positions. In sodium chloride, each ion is locked among opposite charges, so sliding brings like charges together and they repel. So aluminium is malleable because its non-directional bonding lets layers slide, while sodium chloride shatters because sliding forces like charges together.",
		'quick-check':
			"Quick check. Sodium conducts electricity and is soft, while diamond is hard and insulates. Explain why. Pause. Sodium has metallic bonding and diamond has a covalent network. Sodium conducts because its delocalised electrons move, while diamond insulates because its electrons are locked into bonds. And sodium is soft because its ion layers slide easily, while diamond is hard because of its rigid carbon network. So sodium conducts and is soft thanks to delocalised electrons, and diamond insulates and is hard thanks to its fixed covalent network.",
	},
	'm1-l11-intermolecular-forces': {
		'worked-example-1':
			"OK, example one. Arrange methane, ammonia, and water by boiling point. Methane is non-polar, ammonia has hydrogen bonded to nitrogen, and water has hydrogen bonded to oxygen, and stronger intermolecular forces mean a higher boiling point. Methane has only dispersion forces, ammonia adds dipole-dipole and hydrogen bonding, and water has extensive hydrogen bonding because each oxygen carries two lone pairs, allowing even more hydrogen bonds. So the order is methane at minus one hundred and sixty-one degrees, ammonia at minus thirty-three, and water at one hundred.",
		'worked-example-2':
			"Example two. Predict whether ethanol and hexane dissolve in water. Ethanol has an O-H group while hexane is non-polar, and water is polar with hydrogen bonding, so remember that like dissolves like. Ethanol has hydrogen bonded to oxygen, so it forms hydrogen bonds with water that replace the original ethanol and water bonds, which lets it dissolve. Hexane only has dispersion forces, so it can't match water's hydrogen bonding. So ethanol is soluble in water, while hexane is insoluble.",
		'quick-check':
			"Quick check. Which boils higher, hydrogen sulfide or water? Pause. Hydrogen sulfide has hydrogen bonded to sulfur, while water has hydrogen bonded to oxygen, and hydrogen bonding only happens when hydrogen is bonded to nitrogen, oxygen, or fluorine. Since sulfur is less electronegative than oxygen, hydrogen sulfide only has dipole-dipole and dispersion forces, whereas water has full hydrogen bonding. Stronger forces need more energy to break, so water boils higher because it forms hydrogen bonds and hydrogen sulfide doesn't.",
	},
	'm1-l12-module-summary': {
		concept:
			"Ionic bonding happens between a metal and a non-metal through electron transfer, creating a rigid lattice with high melting points that conducts only when molten or dissolved. Covalent bonding happens between non-metals through electron sharing, forming either small molecules with low melting points or giant networks like diamond that are extremely hard. Metallic bonding is metal atoms sharing delocalised electrons, which makes metals conduct, bend, and melt at high temperatures. And intermolecular forces are the weak attractions between molecules that set boiling points and solubility.",
		definition:
			"OK, here's the decision tree. Step one, identify the elements, because a metal with a non-metal is ionic, two non-metals are covalent, and a metal on its own is metallic. Step two, check the periodic position, since groups one and two lose one or two electrons while group seventeen gains one. Step three, work out the structure, whether that's an ionic lattice, small covalent molecules, a covalent network, or metal ions in a sea of electrons. And step four, predict the properties, because mobile charge carriers mean conductivity, rigid bonding means a high melting point, and weak forces mean a low boiling point.",
		'worked-example-1':
			"OK, example one. A solid contains magnesium and oxygen, and we need to predict its melting point, conductivity, and solubility. Magnesium is a group two metal and oxygen is a group sixteen non-metal, so a metal with a non-metal gives ionic bonding and a crystal lattice. Magnesium loses two electrons to form Mg two plus, and oxygen gains two to form O two minus, and that high charge with small radius makes a strong lattice and a high melting point. Because the solid lattice holds the ions in fixed positions, it won't conduct as a solid. So it has a high melting point of two thousand eight hundred and fifty-two degrees, no conductivity when solid, and it dissolves in water because polar water hydrates the ions.",
		'quick-check':
			"Quick check. A white solid melts at eight hundred and one degrees and conducts only when dissolved. Identify the bonding type and name a likely compound. Pause. A high melting point points to a strong lattice, and conducting only when dissolved tells you there are mobile ions in solution but not in the solid, which together indicate ionic bonding. Ionic compounds form between metals and non-metals, and a common one melting near eight hundred and one degrees is sodium chloride, with its Na plus and Cl minus ions in a crystal lattice. So the bonding is ionic, and the likely compound is sodium chloride.",
	},
};

let scenes = 0;
for (const [lesson, byScene] of Object.entries(REWRITES)) {
	const path = `src/data/chemistry-y11-${lesson}.json`;
	const d = JSON.parse(readFileSync(path, 'utf8'));
	for (const [id, text] of Object.entries(byScene)) {
		const s = d.scenes.find((x) => x.id === id);
		if (!s) { console.log(`MISS ${lesson} :: ${id}`); continue; }
		s.voiceover = s.voiceover || {};
		s.voiceover.text = text;
		delete s.voiceover.audioFile;
		delete s.captions;
		scenes++;
	}
	writeFileSync(path, JSON.stringify(d, null, 2) + '\n');
}
console.log(`Rewrote ${scenes} M1 scenes; audio + captions cleared for future regen.`);
