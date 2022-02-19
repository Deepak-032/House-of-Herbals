import React from 'react'
import './styles/Footer.css'

function Footer({ displayHandler }) {
    return (
        <>
            <div className='page_end_img d-flex flex-column justify-content-center align-items-center m_t_max'>
                <div className='container'>
                    <h1 className='heading text-center text-light'>Get in touch with us!</h1>
                    <button className='btn_contact_footer mt-4 d-block ms-auto me-auto' onClick={displayHandler}>Contact Us</button>
                </div>
            </div>
            <footer className="main_footer pt-5 pb-1">
                <div className="container">
                    <div className='row mb-4 heading'>
                        <a href="/">
                            <img
                                className="navbar_logo"
                                src="/assets/logo.png"
                                alt="logo"
                            />
                        </a>
                    </div>
                    <div className="footer row justify-content-between">
                        <div className="col-12 col-lg-6">
                            <div className="footer_headings">About Company</div>
                            <div className='mb-4 footer_para'>
                                HOH is started by a group of young people to get the world class skin care products available at the economical pricing. We aim to bring the best natural products in this age of chemical cosmetics for taking care of your skin.
                            </div>
                        </div>
                        <div className="col-6 col-lg">
                            <div className="footer_headings">Social Media Links</div>
                            <div><a target="blank" href="https://www.instagram.com/houseofherbals.hoh/"><i className="bi bi-instagram social_icon"></i>Instagram</a></div>
                            <div><a target="blank" href="https://www.facebook.com/houseofherbals.hoh"><i className="bi bi-facebook social_icon"></i>Facebook</a></div>
                            <div><a target="blank" href="https://meesho.com/hoh"><img className="social_icon" src="/assets/meesho.png" alt="" />Meesho</a></div>
                            <div><a target="blank" href="http://shop.houseofherbals.in"><i className="bi bi-shop social_icon"></i>Shop</a></div>
                        </div>
                        <div className="col-6 col-lg">
                            <div className="footer_headings">Products</div>
                            <div><a href="#aloveraSection">Aloevera Products</a></div>
                            <div><a href="#avocadoSection">Avocado Products</a></div>
                            <div><a href="#cocoaSection">Cocoa Products</a></div>
                        </div>
                        <div className="col-6 col-lg fit_content">
                            <div className="footer_headings">Information</div>
                            <div><a href="https://shop.houseofherbals.in/index.php?route=information/information&information_id=5">Terms & Conditions</a></div>
                            <div><a href="https://shop.houseofherbals.in/index.php?route=information/information&information_id=3">Privacy Policy</a></div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
