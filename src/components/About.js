import React from 'react'

function About() {
    return (
        <div className='container' id='know_more'>
            <div className='row m_t_max mt_mobile'>
                <div className='col-lg-5 col-12 me-4 position-relative'>
                    <img src='/assets/left_picture.jpg' alt="" className='w-100' />
                    <div className='box_element_1 d-none d-lg-block box_element'></div>
                </div>
                <div className='col'>
                    <div className='position-relative'>
                        <img src='/assets/right_picture.jpg' alt="" className='w-50 d-none d-lg-block' />
                        <div className='box_element_2 d-none d-lg-block box_element'></div>
                    </div>
                    <div className='mt-5 about_content'>
                        <h1 className='heading mb-4'>What makes US different</h1>
                        <p className='para'>Well to start with, our aim. At HoH, we aim to bring the best of the herbal products at the most affordable prices to your home. We leverage the amazing herbs that the nature offers us across the world and combine them with our expertise in cosmetics to create wonders. And not just the products, we are way too thoughtful in our packaging as well. Once you start using our products. You will realize how they are designed to be as convenient as possible. One thing we can promise is that we genuinely care and we are focused to get the best care of your skin. So don’t wait, place your first order now.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
