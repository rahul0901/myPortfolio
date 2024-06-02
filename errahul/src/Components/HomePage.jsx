import { useState } from 'react';
import Certificate from './Certificates';
import Contact from './Contact';
import './HomePage.css';
import './MediaHomePage.css';
import ProfileSection from './ProfileSection';
import SideNavbar from './SideNavbar';
import AboutMe from './AboutMe';
import Resume from './Resume';
import Project from './Projects';

const HomePage = () => {

    const [currentPage, setCurrentPage] = useState('home')

    const handlePageChanges = (page) => {
        setCurrentPage(page)
    }

    const getPageComponent = () => {
        switch (currentPage) {
            case 'aboutme':
                return <AboutMe />;
            case 'resume':
                return <Resume />;
            case 'projects':
                return <Project />;
            case 'certificate':
                return <Certificate />;
            case 'contactme':
                return <Contact />;
            default:
                return (
                    <div className='intro-content'>
                        <h2>Hello Everyone 👋 </h2>
                        <h4> I'm a MERN maestro, expert in HTML, CSS, and JavaScript sorcery, with a flair for ReactJS.</h4>
                        <h4>Embark on a journey where every pixel matters, and user experience reigns supreme.</h4>
                        <h4>Ready to infuse innovation into your project? Explore my portfolio, and let's weave the extraordinary together.</h4>
                    </div>
                );
        }
    };


    return (
        <>
            <div className="screen-home">
                <div className="child-home">
                    <SideNavbar onPageChange={handlePageChanges} />
                    <ProfileSection />
                    {getPageComponent()}
                    {/* {pageChange?.length? <div>{pageChange.map((item, index)=>(
                        <div key={index}>
                            <div>{item.contactMe}</div>
                        </div>
                    ))}</div> : <div className='intro-content'>
                        <h2>Hello Everyone 👋 </h2>
                        <h4> I'm a MERN maestro, expert in HTML, CSS, and JavaScript sorcery, with a flair for ReactJS.</h4>
                        <h4>Embark on a journey where every pixel matters, and user experience reigns supreme.</h4>
                        <h4>Ready to infuse innovation into your project? Explore my portfolio, and let's weave the extraordinary together.</h4>
                    </div>} */}
                    {/* <div className='intro-content'>
                        <h2>Hello Everyone 👋 </h2>
                        <h4> I'm a MERN maestro, expert in HTML, CSS, and JavaScript sorcery, with a flair for ReactJS.</h4>
                        <h4>Embark on a journey where every pixel matters, and user experience reigns supreme.</h4>
                        <h4>Ready to infuse innovation into your project? Explore my portfolio, and let's weave the extraordinary together.</h4>
                    </div> */}
                </div>
            </div>
        </>
    )
}
export default HomePage;