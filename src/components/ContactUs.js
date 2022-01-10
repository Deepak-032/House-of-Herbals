import React, { useRef, useEffect, useReducer } from 'react'
import './styles/ContactUs.css'
import axios from 'axios'

const initialState = {
    name: '',
    email: '',
    _subject: '',
    phone: '',
    message: ''
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'ON_CHANGE':
            const { name, value } = action.payload
            return { ...state, [name]: value, }
        case 'RESET':
            return initialState
        default:
            return state
    }
}

function ContactUs({ contactClass, wrapper = false }) {
    const wrapperRef = useRef(null)
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target) && event.target.getAttribute('class') !== 'btn_contact') {
                document.getElementById("pop_box").style.display = "none"
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [wrapperRef])

    const submit = e => {
        e.preventDefault()
        axios.defaults.headers.post['Content-Type'] = 'application/json'
        axios.post('', state)
            .then(() => alert("Your response has been submitted, Thank you!"))
            .catch(() => alert("Your response has not been submitted, please try again."))
        dispatch({ type: 'RESET' })
    }
    return (
        <div className={` ${contactClass} position-relative`} id="pop_box">
            <div className='container animate__animated animate__slideInDown animate__fast'>
                <div className={`row pop_up`} ref={wrapper ? wrapperRef : null}>
                    <div className="col-12 col-lg pop_up_img" style={{ padding: "0" }}>
                        <div className="position-relative">
                            <img
                                className="contact_img"
                                src="/assets/contactus.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col-12 col-lg form_container">
                        <div className="contact_form">
                            <h1 className="text-center heading">Get in touch with us!</h1>
                            <form onSubmit={submit} method="POST">
                                <div className="d-flex">
                                    <input type="text" value={state.name} onChange={event => dispatch({ type: 'ON_CHANGE', payload: event.target })} name="name" placeholder="Name" required />
                                    <input type="email" value={state.email} onChange={event => dispatch({ type: 'ON_CHANGE', payload: event.target })} name="email" placeholder="Email" required />
                                </div>
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="text" value={state._subject} onChange={event => dispatch({ type: 'ON_CHANGE', payload: event.target })} name="_subject" placeholder="Subject" required />
                                <input type="text" value={state.phone} onChange={event => dispatch({ type: 'ON_CHANGE', payload: event.target })} name="phone" placeholder="Contact number" required />
                                <textarea value={state.message} onChange={event => dispatch({ type: 'ON_CHANGE', payload: event.target })} name="message" placeholder="Your Message" required />
                                <button type="submit" className="btn_contact">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
