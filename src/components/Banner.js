import React from 'react'
import { Carousel } from 'react-bootstrap'
import './styles/Banner.css'

function Banner() {
    return (
        <div className='position-relative'>
            <div className='banner_btn_position'>
                <a href='#know_more' className='btn_white_bg d-none d-sm-inline-block'>Know More</a>
            </div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/assets/banner1.webp"
                        alt=""
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/assets/banner2.webp"
                        alt=""
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/assets/banner3.webp"
                        alt=""
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Banner
