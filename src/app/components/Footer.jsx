"use client";
import { useState } from "react";
import { FacebookIcon, FooterLogo, InstaIcon, LinkdinIcon, Logo, TwitterIcon } from "./Icons";
const Footer = () => {
    const [formData, setFormData] = useState({
        name: "",
        name2: "",
        number: "",
        mail: "",
    });
    const [formErrors, setFormErrors] = useState({
        name: "",
        name2: "",
        number: "",
        mail: "",
    });

    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const regex = {
            name: /^[a-zA-Z\s]+$/,
            name2: /^[a-zA-Z\s]+$/,
            number: /^\d{10}$/,
            mail: /^[a-zA-Z\s]/,
        };
        const errors = {};
        if (!regex.name.test(formData.name)) {
            errors.name = "Name is invalid.";
        }
        if (!regex.name2.test(formData.name2)) {
            errors.name2 = "Name is invalid.";
        }
        if (!regex.number.test(formData.number)) {
            errors.number = "Number is invalid.";
        }
        if (!regex.mail.test(formData.mail)) {
            errors.mail = "Mail is invalid.";
        }

        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            setShowSuccessPopup(true);
        }
    };

    const handlePopupClose = () => {
        setShowSuccessPopup(false);
        setFormData({
            name: "",
            name2: "",
            number: "",
            mail: "",
        });
        setFormErrors({
            name: "",
            name2: "",
            number: "",
            mail: "",
        });
    };

    return (
        <div>
            <div className="form_bg d-flex min-vh-100 mt_2">
                <div className="container d-flex flex-column justify-content-center align-items-center">
                    <div className="row flex-grow-md-1 align-items-center justify-content-center">
                        <div className="col-lg-8 col-12">
                            <form className="registration-form " onSubmit={handleSubmit}>
                                <h2 className="pb-2 mb-3 text-white">Get updated with us</h2>
                                <div className="d-md-flex pb-2 gap-4 text-white justify-content-between">
                                    <div className="form-group max-w-310">
                                        <label className="fw-medium text-white " htmlFor="name">First Name:</label>
                                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                                        {formErrors.name && (<p className="error-message">{formErrors.name}</p>)}
                                    </div>
                                    <div className="form-group max-w-310">
                                        <label className="fw-medium text-white" htmlFor="name2">Last Name:</label>
                                        <input type="text" id="name2" name="name2" value={formData.name2} onChange={handleChange} />
                                        {formErrors.name2 && (<p className="error-message">{formErrors.name2}</p>)}
                                    </div>
                                </div>
                                <div className="d-md-flex pb-2 gap-4 justify-content-between">
                                    <div className="form-group max-w-310">
                                        <label className="fw-medium text-white" htmlFor="number">Phone Number:</label>
                                        <input type="text" id="number" name="number" value={formData.number} onChange={handleChange} className={formErrors.number ? "error" : ""} />
                                        {formErrors.number && (<p className="error-message">{formErrors.number}</p>)}
                                    </div>
                                    <div className="form-group max-w-310">
                                        <label className="fw-medium text-white " htmlFor="mail" >Email:</label>
                                        <input type="mail" id="mail" name="mail" value={formData.mail} onChange={handleChange} />
                                        {formErrors.mail && (<p className="error-message">{formErrors.mail}</p>)}
                                    </div>
                                </div>
                                <button type="submit" className="bg-button fw-medium  text-white rounded-pill px-32 py-3 border-0 fs-sm fw-medium" > Subscribe</button>
                            </form>
                            {showSuccessPopup && (
                                <div className="success-popup">
                                    <p className="fw-bold">Form submitted successfully!</p>
                                    <button onClick={handlePopupClose}>Close</button>
                                </div>
                            )}
                        </div>
                        <div className="col-lg-4 col-12">
                            <h5 className="fs-lg1 fw-normal text-white mb-2 pb-1">Stay updated</h5>
                            <p className="fs-sm fw-normal text-gray  mb-4"> At 248 Labs, our constant pursuit is to build engaging games that spared joy. Don’t hesitate to reach out to us with your thoughts and messages - we are all ears!</p>
                            <h5 className="fs-lg1 fw-normal text-white mb-2 pb-1"> Address</h5>
                            <p className="fs-sm fw-normal text-gray">390 Orchard Road, 03-07, Palais Renaissance.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black mt_2">
                <div className="container">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <span><FooterLogo /></span>
                        <ul className="gap-4 ps-0 d-flex align-items-center justify-content-center mt-3 mb-4">
                            <li><a href="#home" className="fs-sm fw-normal text-gray">Home</a></li>
                            <li><a href="#roadmap" className="fs-sm fw-normal text-gray">Roadmap</a></li>
                            <li><a href="#team" className="fs-sm fw-normal text-gray">Team</a></li>
                            <li><a href="#about" className="fs-sm fw-normal text-gray" >About Us</a></li>
                        </ul>
                        <div className="gap-3 d-flex align-items-center justify-content-center pb-5">
                            <a className="app_hover" href="https://twitter.com/?lang=en" target="_blank" rel='noreferrer'>
                                <TwitterIcon />
                            </a>
                            <a className="app_hover" href="https://www.facebook.com/" target="_blank" rel='noreferrer'>
                                <FacebookIcon />
                            </a>
                            <a className="app_hover" href="https://www.instagram.com/" target="_blank" rel='noreferrer'>
                                <InstaIcon />
                            </a>
                            <a className="app_hover" href="https://www.linkedin.com/feed/" target="_blank" rel='noreferrer'>
                                <LinkdinIcon />
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="w-100 bg-white" />
                <p className="fs-xs fw-normal text-gray text-center py-3 mb-0"> © 2024 248 Labs. All rights reserved
                </p>
            </div>
        </div>
    );
};

export default Footer;