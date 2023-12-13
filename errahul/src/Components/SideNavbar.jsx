import './SideNavbar.css';

const SideNavbar = ({ onPageChange }) => {
    const navIcons = [
        { iclass: <i className="fa-solid fa-house"></i>, title: 'Home', page: 'home' },
        { iclass: <i className="fa-solid fa-user"></i>, title: 'About Me', page: 'aboutme' },
        { iclass: <i className="fa-solid fa-graduation-cap"></i>, title: 'Resume', page: 'resume' },
        { iclass: <i className="fa-solid fa-briefcase"></i>, title: 'Projects', page: 'projects' },
        { iclass: <i className="fa-solid fa-book"></i>, title: 'Certificates', page: 'certificate' },
        { iclass: <i className="fa-regular fa-handshake"></i>, title: 'Contact', page: 'contactme' }]
    return (
        <>
            <div className="home-side-navbar">
                {navIcons?.length ? <div className='side-nav-parent'>{navIcons.map((item, index) => (
                    <div key={index} className='side-nav-child'>
                        <a onClick={() => onPageChange(item.page)} >{item.iclass}</a>
                        <a onClick={() => onPageChange(item.page)} >{item.title}</a>
                    </div>
                ))}</div> : <div>Loading</div>}
            </div>
        </>
    )
}

export default SideNavbar;