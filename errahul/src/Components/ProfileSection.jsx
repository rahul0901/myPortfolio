import React from 'react';
import './ProfileSection.css';
import './MediaProfileSection.css';
import profileimage from './Kaagaz_20220730_112839814547-1 (2).jpg'
import resumeFile from './RahulShindeITEngineer.pdf'
const ProfileSection = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resumeFile;
        link.setAttribute('download', 'RahulShindeResume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <div className="profile-section">
                <div className="profile-bc-1">
                    <div className="profile-image">
                        <img src={profileimage} alt="" />
                    </div>
                    <div className="profile-designation">
                        <h2>Rahul Shinde</h2>
                        <h4>Full Stack Developer</h4>
                    </div>
                </div>

                <div className="profile-socials">
                    {/* <i class="fa-brands fa-linkedin fa-xl"></i>
                    <i class="fa-brands fa-github fa-xl"></i>
                    <i class="fa-solid fa-phone fa-xl"></i> */}
                    <a href="https://www.linkedin.com/in/er-rahul-shinde/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin fa-xl"></i>
                    </a>
                    <a href="https://github.com/rahul0901" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github fa-xl"></i>
                    </a>
                    <a href="tel:9325763993">
                        <i className="fas fa-phone fa-xl"></i>
                    </a>
                </div>

                <div className="resume-cta">
                    <button onClick={handleDownload}>Downlaod CV</button>
                </div>
            </div>
        </>
    )
}

export default ProfileSection