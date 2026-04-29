import {ASSETS, type AssetName} from '../../assets';

// Maps legacy icon names (used in slides) to asset keys
const ICON_TO_ASSET: Record<string, AssetName> = {
	flask:          'flask',
	beaker:         'beaker',
	volumetricFlask:'volumetricFlask',
	bunsenBurner:   'bunsenBurner',
	testtube:       'testtube',
	testtubeRack:   'testtubeRack',
	scale:          'scale',
	magnifyingGlass:'magnifyingGlass',
	microPipette:   'microPipette',
	metalCoil:      'metalCoil',
	tripodGauze:    'tripodGauze',
	goldCoin:       'goldCoin',
	pendulum:       'pendulum',
	mole:           'mole',
	salt:           'salt',
	rice:           'rice',
	character:      'character',
};

export type IconName = keyof typeof ICON_TO_ASSET;

type SpriteIconProps = {
	name: IconName;
	className?: string;
};

export const SpriteIcon = ({name, className}: SpriteIconProps) => {
	const assetKey = ICON_TO_ASSET[name] as AssetName | undefined;
	if (!assetKey) return null;

	return (
		<img
			src={ASSETS[assetKey]}
			alt={name}
			className={`sprite-icon${className ? ` ${className}` : ''}`}
		/>
	);
};
