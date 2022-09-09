import Slider from 'react-slick';

import styles from './StageView.module.css';

import audioDisabledIcon from '../../../static/images/audioDisabled.svg';
import audioEnabledIcon from '../../../static/images/audioEnabled.svg';
import more from '../../../static/images/more.svg';

import { useState } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const StageView = ({
	name,
	audioEnabled,
	toggleAudioControl,
}: {
	name: string;
	audioEnabled: boolean;
	toggleAudioControl: () => void;
}) => {
	const responsive = [
		{
			breakpoint: 1424,
			settings: {
				slidesToShow: 6,
				slidesToScroll: 6,
			},
		},
		{
			breakpoint: 1224,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 5,
			},
		},
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4,
			},
		},
		{
			breakpoint: 800,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
	];

	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 7,
		slidesToScroll: 4,
		responsive,
	};

	return (
		<div className={styles.stageView}>
			<Slider {...settings} className={styles.participants}>
				<div className={styles.outer}>
					<div className={styles.inner}>Participant</div>
				</div>
				<div className={styles.outer}>
					<div className={styles.inner}>Participant</div>
				</div>
				<div className={styles.outer}>
					<div className={styles.inner}>Participant</div>
				</div>
				<div className={styles.outer}>
					<div className={styles.inner}>Participant</div>
				</div>
				<div className={styles.outer}>
					<div className={styles.inner}>Participant</div>
				</div>
				<div className={styles.outer}>
					<div className={styles.inner}>Participant</div>
				</div>
				<div className={styles.outer}>
					<div className={styles.inner}>Participant</div>
				</div>
				<div className={styles.outer}>
					<div className={styles.inner}>Participant</div>
				</div>
				<div className={styles.outer}>
					<div className={styles.inner}>Participant</div>
				</div>
				<div className={styles.outer}>
					<div className={styles.inner}>Participant</div>
				</div>
			</Slider>
			<div className={styles.stage}>
				<div className={`unselectable ${styles.stageControls}`}>
					<span className={styles.name}>{name}</span>
					<span
						onClick={() => toggleAudioControl()}
						className={styles.icon}
					>
						<img
							width={16}
							src={
								audioEnabled
									? audioEnabledIcon
									: audioDisabledIcon
							}
							alt={
								audioEnabled
									? 'Audio Enabled'
									: 'Audio Disabled'
							}
						/>
					</span>
					<span className={styles.icon}>
						<img src={more} alt='More' />
					</span>
				</div>
				Focused Stage
			</div>
		</div>
	);
};

export default StageView;
