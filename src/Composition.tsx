import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

export const MyComposition = () => {
	const frame = useCurrentFrame();
	const {fps, height, width} = useVideoConfig();

	const rotation = interpolate(frame, [0, 5 * fps], [0, 360]) % 360;

	return (
		<div
			style={{
				backgroundImage: `linear-gradient(${rotation}deg, #051937 0%, #A8EB12 100%)`,
				display: 'grid',
				placeItems: 'center',
				height,
				width,
			}}
		>
			<p
				style={{
					color: 'white',
					fontFamily: 'sans-serif',
					fontSize: `${height * 0.25}px`,
				}}
			>
				{Math.floor(frame / fps)}
			</p>
		</div>
	);
};
