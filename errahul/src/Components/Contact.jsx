import './Contact.css';
import './MediaContact.css'

function Contact() {
    return (
        <>
            <div className="parent">
                <div className='screen-contactme'>
                    <div className="contactme-child">
                        <div className="contactme-bc-1">
                            <h2>Contact Me <span>🤝</span></h2>
                        </div>
                        <div className="contactme-bc-2">
                            <div className="contactme-bc-2-left">
                                <div className="bc-2-left-box1">
                                <i class="fa-solid fa-location-dot fa-2x"></i>
                                    <p>Thane, Mumbai</p>
                                </div>
                                <div className="bc-2-left-box2">
                                <i class="fa-solid fa-envelope fa-2x"></i>
                                    <p>er.rahulnshinde09@gmail.com</p>
                                </div>
                                <div className="bc-2-left-box3">
                                    <i class="fa-solid fa-phone fa-2x"></i>
                                    <p>932-576-3993</p>
                                </div>
                                <div className="bc-2-left-box4">
                                <i class="fa-solid fa-handshake-angle fa-2x"></i>
                                    <p>Freelance Available</p>
                                </div>
                            </div>
                            <div className="contactme-bc-2-right">
                                <div className="bc-2-right-1">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d235.48692769861626!2d73.20498424205611!3d19.204335629500886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1701378259781!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                                <div className="bc-2-right-2">
                                    <div className="bc-2-right-2-1">
                                        <h4>How Can I Help You?</h4>
                                    </div>
                                    <div className="bc-2-right-2-2">
                                        <form>
                                            <div className="bc-2-right-2-2-left">
                                                <input type="text" name="" id="" placeholder='Full Name' />
                                                <input type="email" name="" id="" placeholder='Email Address' />
                                                <input type="text" name="" id="" placeholder='Subject' />
                                            </div>
                                            <textarea name="" id="" cols="20" rows="6" placeholder='Message'></textarea>
                                        </form>
                                    </div>
                                    <div className="bc-2-right-2-3">
                                        <button>Send Message</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2nd for example */}
                {/* <div className='screen-contactme-2'>
                    <div className="contactme-child">
                        <div className="contactme-bc-1">
                            <h2>Contact Me <span>🤝</span></h2>
                        </div>
                        <div className="contactme-bc-2">
                            <div className="contactme-bc-2-left">
                                <div className="bc-2-left-box1">
                                    <p>Thane, Mumbai</p>
                                </div>
                                <div className="bc-2-left-box2">
                                    <p>er.rahulnshinde09@gmail.com</p>
                                </div>
                                <div className="bc-2-left-box3">
                                    <p>932-576-3993</p>
                                </div>
                                <div className="bc-2-left-box4">
                                    <p>Freelance Available</p>
                                </div>
                            </div>
                            <div className="contactme-bc-2-right">
                                <div className="bc-2-right-1">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d235.48692769861626!2d73.20498424205611!3d19.204335629500886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1701378259781!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                                <div className="bc-2-right-2">
                                    <div className="bc-2-right-2-1">
                                        <h4>How Can I Help You?</h4>
                                    </div>
                                    <div className="bc-2-right-2-2">
                                        <form>
                                            <div className="bc-2-right-2-2-left">
                                                <input type="text" name="" id="" placeholder='Full Name' />
                                                <input type="email" name="" id="" placeholder='Email Address' />
                                                <input type="text" name="" id="" placeholder='Subject' />
                                            </div>
                                            <textarea name="" id="" cols="20" rows="6" placeholder='Message'></textarea>
                                        </form>
                                    </div>
                                    <div className="bc-2-right-2-3">
                                        <button>Send Message</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Contact;
