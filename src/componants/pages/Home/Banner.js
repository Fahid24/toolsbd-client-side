import React from 'react';
import banner1 from '../../images/70780130-.webp'
import banner2 from '../../images/construction-tools-shop-service-banner-template_38901-507.webp'
import banner3 from '../../images/top-view-set-hand-tools-wooden-background-copy-space-suitable-header-banner-top-view-set-hand-tools-190212508.jpg'

const Banner = () => {
    return (
        <div class="carousel w-full h-[500px]">
            <div id="slide1" class="carousel-item relative w-full">
                <img src={banner3} alt='' class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" class="btn btn-circle">❮</a>
                    <a href="#slide2" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full">
                <img src={banner2} alt='' class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" class="btn btn-circle">❮</a>
                    <a href="#slide3" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" class="carousel-item relative w-full">
                <img src={banner1} alt='' class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" class="btn btn-circle">❮</a>
                    <a href="#slide4" class="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;