import React, { useState } from 'react'
import { Card } from 'react-bootstrap'

function ProductRange({ name, products, href }) {
    const [viewAll, setViewAll] = useState(false)

    const viewHandler = () => {
        let offset = document.getElementById(`${href}Section`)
        let pos = offset.offsetTop + offset.offsetHeight
        setViewAll(prevState => {
            prevState && window.scrollTo(0, pos)
            return !prevState
        })
    }
    return (
        <div className='m_t_max' id={href}>
            <div className='container'>
                <h1 className='heading text-center mb-5'>{name} Products Range</h1>
                <div className='row'>
                    {products?.slice(0, viewAll ? undefined : 4).map(product =>
                        <Card className='col-lg-3 col-6'>
                            <Card.Img variant="top" src={`/assets/${product.src}`} />
                            <Card.Body>
                                <p className='card_heading'>{product.name}</p>
                                <a href={product.href} className='btn_contact'>Buy Now &#8377;{product.price}</a>
                            </Card.Body>
                        </Card>
                    )}
                </div>
                <button className='btn_white_bg_2 btn_white_bg_3 mt-4' onClick={viewHandler}>{viewAll ? <>View Less</> : <>View More</>}</button>
            </div>
        </div>
    )
}

export default ProductRange
