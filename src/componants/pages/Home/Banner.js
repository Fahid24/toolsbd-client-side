import React from 'react';
import banner1 from '../../images/70780130-.webp'
import banner2 from '../../images/construction-tools-shop-service-banner-template_38901-507.webp'
import banner3 from '../../images/top-view-set-hand-tools-wooden-background-copy-space-suitable-header-banner-top-view-set-hand-tools-190212508.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[200px] lg:h-[500px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner3} alt='' className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} alt='' className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner1} alt='' className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;