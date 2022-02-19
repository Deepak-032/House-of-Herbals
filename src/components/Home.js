import React, { useState } from 'react'
import { Carousel, Card } from 'react-bootstrap'
import { combos } from '../productsData'

function Home() {
    const [readMore, setReadMore] = useState({ one: false, two: false, three: false })
    const ourStories = [
        "Here is our story. Most of us remember those ayurvedic treatments that our grandparents used to give us when we were kids. And yes we also remember that they did work! We have been obsessed about these miracles of nature and hence we decided to get those herbs in use. To begin with, first thing we needed was an ayurvedic expert. And fortunately, we found an ayurvedic doctor who not only have a vast experience of 40 years in the field but also was equally passionate to work day and night to create those state of the art cosmetic products. There were hundreds of herbs which were thought upon, various permutations and combinations involving variety of herbs, and years of time before we got that magical formula that meets all our expectations. But having the product is only half our aim, getting the product to each and every household is the other. To get the relevant experience, simultaneously we took up distributions of other cosmetic products and starting selling them. Apart from various challenges and feedback, what hit us the most was that the best of herbal products were so expensive that a common man cannot even think of purchasing them. And with much deliberation, we bring you the best of herbal cosmetic range at the most economical pricing. So what are you waiting for, place your order now and experience the magic of nature first hand."
    ]

    return (
        <>
            <div className='container'>
                <div className='m_t_max'>
                    <h1 className='heading margin_left mb-5 text-center'>Our Combos</h1>
                    <div className='row justify-content-lg-center'>
                        {
                            combos.map((product, i) =>
                                <Card key={i} className='col-lg-3 col-6'>
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
            <div className='m_t_max our_story position-relative' id='our_story_section'>
                <div className='bg_our_stories'></div>
                <Carousel>
                    <Carousel.Item>
                        <div className='container'>
                            <div className='row our_stories flex-wrap-reverse'>
                                <div className='col-lg-8 m_t_max mb-5'>
                                    <h1 className='heading mb-4'>Our Story</h1>
                                    <p>{ourStories[0].substring(0, readMore.one ? undefined : 400)}{!readMore.one && "..."}</p>
                                    <button className='btn_contact' onClick={() => setReadMore({ ...readMore, one: !readMore.one })}>{readMore.one ? <>Read Less</> : <>Read More</>}</button>
                                </div>
                                <div className='col-lg-4 position-relative'>
                                    <img src='/assets/OurStory.jpg' alt="" className='our_stories_img w-100 pb-5' />
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
