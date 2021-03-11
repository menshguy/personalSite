import React, {useState, useEffect} from 'react';
import { HomeDoodle } from 'doodles';
import { makeStyles } from '@material-ui/core';
import { ASketch } from 'components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SKETCH_FRUIT from 'assets/sketches/fruit.png';
import SKETCH_HANDS from 'assets/sketches/hands.png';
import SKETCH_WOOT from 'assets/sketches/woot.png';
import SNOWY_TREES2_MOV from 'assets/snowyTrees2/snowyTrees2.mp4';
import SNOWY_TREES2_GIF from 'assets/snowyTrees2/snowyTrees2.gif';
import SNOWY_TREES_MOV from 'assets/snowyTrees/snowy_trees.mp4';
import SNOWY_TREES_GIF from 'assets/snowyTrees/snowy_trees.gif';
import {
	useEventListener,
    useWindowSize
} from 'helpers';


export default function HomePage (props) {
	const [DOMReady, setDOMReady] = useState(false);
	const [isTransitioning, setTransitioning] = useState(false);
	const windowSize = useWindowSize();
	const isMobile = windowSize.width <= 480;
	const showVerticalNavigation = false;
	const showHorizontalNavigation = true;
	const classes = useStyles({ windowSize, isMobile });

	// Listens for dom ready - can use SVGs
	useEventListener('load', function() {
		setDOMReady(true);
	});

	// Code that runs on DOMReady should go here
	useEffect(() => {
		console.log("DOMReady:", DOMReady)
	}, [DOMReady]);

	const handleSlideChangeTransitionStart = () => {
		setTransitioning(true);
	};
	
	const handleSlideChangeTransitionEnd = () => {
		setTransitioning(false);
	};
	
	return (
        <Swiper
			className={classes.swiperContainer}
            spaceBetween={0}
			slidesPerView={1}
            direction='vertical'
			navigation={showVerticalNavigation}
			scrollbar={{ draggable: true }}
			grabCursor
			onSlideChangeTransitionStart={handleSlideChangeTransitionStart}
			onSlideChangeTransitionEnd={handleSlideChangeTransitionEnd}
        >
            <SwiperSlide className={classes.homeSlide} >
				{({ isActive }) => (
					<HomeDoodle
						isTransitioning={isTransitioning}
						isActive={isActive}
						isMobile={isMobile}
					/>
				)}
			</SwiperSlide>
			<SwiperSlide> 
				{({ isActive }) => (
					isActive && 
					<Swiper
						className={classes.swiperContainer}
						navigation={showHorizontalNavigation}
						spaceBetween={0}
						slidesPerView={1}
					>
						<SwiperSlide>
							<ASketch
								type={isMobile ? 'gif' : 'video'}
								date={'3/06/20'}
								SKETCH={isMobile ? SNOWY_TREES_GIF : SNOWY_TREES_MOV}
							/>
						</SwiperSlide>
						<SwiperSlide>
							<ASketch
								type={isMobile ? 'gif' : 'video'}
								date={'3/07/20'}
								SKETCH={isMobile ? SNOWY_TREES2_GIF : SNOWY_TREES2_MOV}
							/>
						</SwiperSlide>
					</Swiper>
				)}
			</SwiperSlide>
            <SwiperSlide>
				<Swiper
					className={classes.swiperContainer}
					navigation={showHorizontalNavigation}
					spaceBetween={50}
					slidesPerView={1}
				>
					<SwiperSlide>
						<ASketch type={'image'} date={'3/08/20'} SKETCH={SKETCH_WOOT} />
					</SwiperSlide>
					<SwiperSlide>
						<ASketch type={'image'} date={'3/09/20'} SKETCH={SKETCH_FRUIT} />
					</SwiperSlide>
					<SwiperSlide>
						<ASketch type={'image'} date={'3/10/20'} SKETCH={SKETCH_HANDS} />
					</SwiperSlide>
				</Swiper>
			</SwiperSlide>
			<SwiperSlide className={classes.slide}> Slide 3 </SwiperSlide>
			<SwiperSlide className={classes.slide}> Slide 4 </SwiperSlide>
			<SwiperSlide className={classes.slide}> Slide 5 </SwiperSlide>
		</Swiper>
	)
}

const useStyles = makeStyles(theme => ({
	homeSlide: {
		overflow: 'hidden'
	},
	swiperContainer: {
		height: '100%',
		overflow: 'hidden'
	},
	slide: ({ windowSize, isMobile }) => ({
		width: '100%',
		height: '100%',
		overflow: 'hidden'
	}),
	snowyTreesSlide: {
		backgroundColor: '#cecdce'
	}
}));