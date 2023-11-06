import './HomePage.css';

const HomePage = () => {
    const navIcons = [{ iclass: <i class="fa-solid fa-house"></i>, title: 'Home' }, { iclass: <i class="fa-solid fa-user"></i>, title: 'Home' }, { iclass: <i class="fa-solid fa-graduation-cap"></i>, title: 'Home' }, { iclass: <i class="fa-solid fa-briefcase"></i>, title: 'Home' }, { iclass: <i class="fa-solid fa-book"></i>, title: 'Home' }, { iclass: <i class="fa-regular fa-handshake"></i>, title: 'Home' }]
    return (
        <>
            <div className="screen-home">
                <div className="home-side-navbar">
                    {navIcons?.length ? <div className='side-nav-parent'>{navIcons.map((item, index) => (
                        <div key={index} className='side-nav-child'>
                            <a>{item.iclass}</a>
                            <a>{item.title}</a>
                        </div>
                    ))}</div> : <div>Loading</div>}
                </div>
            </div>
        </>
    )
}
export default HomePage;