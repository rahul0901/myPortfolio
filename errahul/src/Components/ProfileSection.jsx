import React from 'react';
import './ProfileSection.css';
import profileimage from './Kaagaz_20220730_112839814547-1 (2).jpg'
const ProfileSection = () => {
    return (
        <>
            <div className="profile-section">
                <div className="profile-bc-1">
                    <div className="profile-image">
                        <img src={profileimage} alt="" />
                    </div>
                    <div className="profile-designation">
                        <h2>Rahul Shinde</h2>
                        <h4>Frontend Developer</h4>
                    </div>
                </div>

                <div className="profile-socials">
                    <i class="fa-brands fa-linkedin fa-xl"></i>
                    <i class="fa-brands fa-github fa-xl"></i>
                    <i class="fa-solid fa-phone fa-xl"></i>
                </div>

                <div className="resume-cta">
                    <button>Downlaod CV</button>
                </div>
            </div>
        </>
    )
}

export default ProfileSection