import {Composition} from 'remotion';
import {MyComposition} from './Composition';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="MyComp"
				component={MyComposition}
				durationInFrames={30 * 10}
				fps={30}
				width={1280}
				height={720}
			/>
		</>
	);
};
