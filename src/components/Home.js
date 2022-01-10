import React, { useState } from 'react'
import { Carousel, Card } from 'react-bootstrap'

function Home() {
    const [readMore, setReadMore] = useState({ one: false, two: false, three: false })
    const ourStories = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. end"
    ]
    const bestSellers = [
        {
            src: "/assets/hq67x_512.jpg",
            name: "Buy Combo",
            price: 129,
            href: "/"
        },
        {
            src: "/assets/npbmi_512.jpg",
            name: "Buy Combo",
            price: 129,
            href: "/"
        },
        {
            src: "/assets/hq67x_512.jpg",
            name: "Buy Combo",
            price: 129,
            href: "/"
        },
        {
            src: "/assets/npbmi_512.jpg",
            name: "Buy Combo",
            price: 129,
            href: "/"
        },
    ]
    return (
        <>
            <div className='container'>
                <div className='m_t_max'>
                    <h1 className='heading margin_left mb-4 text-center'>Our Combos</h1>
                    <div className='row'>
                        {
                            bestSellers.map(product =>
                                <Card className='col-lg-3 col-6'>
                                    <Card.Img variant="top" src={product.src} />
                                    <Card.Body>
                                        <p className='card_heading'>{product.name}</p>
                                        <a href={product.href} className='btn_contact'>Buy Now &#8377;{product.price}</a>
                                    </Card.Body>
                                </Card>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className='m_t_max position-relative'>
                <div className='bg_our_stories'></div>
                <Carousel>
                    <Carousel.Item>
                        <div className='container'>
                            <div className='row our_stories flex-wrap-reverse'>
                                <div className='col-lg-8 m_t_max mb-5'>
                                    <h1 className='heading mb-4'>Our Stories</h1>
                                    <p>{ourStories[0].substring(0, readMore.one ? undefined : 400)}{!readMore.one && "..."}</p>
                                    <button className='btn_contact' onClick={() => setReadMore({ ...readMore, one: !readMore.one })}>{readMore.one ? <>Read Less</> : <>Read More</>}</button>
                                </div>
                                <div className='col-lg-4 position-relative'>
                                    <img src='/assets/cocoa_moisturizer1_thumbnail.jpg' alt="" className='our_stories_img w-100 pb-5' />
                                    <div className='box_element_stories d-none d-lg-block box_element'></div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='container'>
                            <div className='row our_stories flex-wrap-reverse'>
                                <div className='col-lg-8 m_t_max mb-5'>
                                    <h1 className='heading mb-4'>Our Stories</h1>
                                    <p>{ourStories[0].substring(0, readMore.two ? undefined : 400)}{!readMore.two && "..."}</p>
                                    <button className='btn_contact' onClick={() => setReadMore({ ...readMore, two: !readMore.two })}>{readMore.two ? <>Read Less</> : <>Read More</>}</button>
                                </div>
                                <div className='col-lg-4 position-relative'>
                                    <img src='/assets/cocoa_moisturizer1_thumbnail.jpg' alt="" className='our_stories_img w-100 pb-5' />
                                    <div className='box_element_stories d-none d-lg-block box_element'></div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='container'>
                            <div className='row our_stories flex-wrap-reverse'>
                                <div className='col-lg-8 m_t_max mb-5'>
                                    <h1 className='heading mb-4'>Our Stories</h1>
                                    <p>{ourStories[0].substring(0, readMore.three ? undefined : 400)}{!readMore.three && "..."}</p>
                                    <button className='btn_contact' onClick={() => setReadMore({ ...readMore, three: !readMore.three })}>{readMore.three ? <>Read Less</> : <>Read More</>}</button>
                                </div>
                                <div className='col-lg-4 position-relative'>
                                    <img src='/assets/cocoa_moisturizer1_thumbnail.jpg' alt="" className='our_stories_img w-100 pb-5' />
                                    <div className='box_element_stories d-none d-lg-block box_element'></div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}

export default Home
