import React from 'react'
import ProductRange from './ProductRange'

function Product({ name, bgColor, children, href, srcOne, srcTwo, reverse, products }) {
    return (
        <>
            <div className='m_t_max' style={{ background: bgColor }} id={`${href}Section`}>
                <div className='container'>
                    <div className={`row pt-5 pb-5 align-items-center justify-content-between flex-wrap-reverse ${reverse}`}>
                        <div className='col-lg mt-5 mb-5 fit_content'>
                            <h1 className='heading text-white mb-4'>{name}</h1>
                            <p className='text-white mb-5'>{children}</p>
                            <a href={"#" + href} className='btn_white_bg_2'>View Our Products</a>
                        </div>
                        <div className='col-lg-7'>
                            <div className='row'>
                                <div className='col'>
                                    <img src={`/assets/${srcOne}`} className='w-100' alt='' />
                                </div>
                                <div className='col'>
                                    <img src={`/assets/${srcTwo}`} className='w-100' alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ProductRange name={name} products={products} href={href} />
        </>
    )
}

export default Product
