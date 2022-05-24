import React, { useState } from 'react';
import classes from './SliderSection.module.css';
import slider1 from '../../Assets/ProductImg/logo2-2.webp';
import slider2 from '../../Assets/kungFu2.png';
import slider3 from '../../Assets/kungFu3.png';
import Slider from '../Slider/Slider';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const SliderSection = (props) => {
    const sliderData = [slider1, slider2, slider3];
    const [current, setCurrent] = useState(0);
    const [imgHover, setImgHover] = useState(false);
    const maxSlide = sliderData.length - 1;

    const nextSlideHandler = () => {
        setCurrent(current === maxSlide ? 0 : current + 1);
    };
    const prevSlideHandler = () => {
        setCurrent(current === 0 ? maxSlide : current - 1);
    };

    if (!Array.isArray(sliderData) || sliderData.length <= 0) {
        return null;
    }

    return (
        <header>
            <div className={classes.slider}>
                <AiOutlineArrowLeft className={classes['slider--btn__left']} onClick={prevSlideHandler} />
                <AiOutlineArrowRight className={classes['slider--btn__right']} onClick={nextSlideHandler} />
                {sliderData.map((image, index) => {
                    return (
                        <div className={`${classes.slide} ${index === current ? `${classes.active}` : ''}`} key={index}>
                            {index === current && <Slider src={image} className={classes.picture}/>}
                        </div>
                    );
                })}
            </div>
        </header>
    );
};

export default SliderSection;
