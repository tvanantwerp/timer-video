import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

export const MyComposition = () => {
	const frame = useCurrentFrame();
	const {fps, height, width} = useVideoConfig();

	const rotation = interpolate(frame, [0, 5 * fps], [0, 360]) % 360;

	return (
		<div
			style={{
				backgroundImage: `linear-gradient(${rotation}deg, #051937 0%, #A8EB12 100%)`,
				height,
				width,
			}}
		/>
	);
};
