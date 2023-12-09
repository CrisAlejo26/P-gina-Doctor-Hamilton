import { UseScrollNavigate } from '../hooks/UseScrollNavigate';
import facebook from '/facebook.svg'
import instagram from '/instagram.svg'
import twitter from '/twitter.svg'

export const Footer = () => {

    const { scrollToAbout } = UseScrollNavigate();

    return (
        <>
            <div className="footer">
                <svg className="footer_form" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path style = {{zIndex: '1'}} fill="#0046A6" fill-opacity="1" d="M0,0L26.7,5.3C53.3,11,107,21,160,69.3C213.3,117,267,203,320,202.7C373.3,203,427,117,480,106.7C533.3,96,587,160,640,202.7C693.3,245,747,267,800,256C853.3,245,907,203,960,170.7C1013.3,139,1067,117,1120,133.3C1173.3,149,1227,203,1280,240C1333.3,277,1387,299,1413,309.3L1440,320L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
            </div>
            <div className="container footer_contend">
                <div className='footer_contend_title'>
                    <h3 className='footer_contend_title_name'>Hamilton</h3>
                    <h6 className='footer_contend_title_services'>Services & Consultations</h6>
                </div>
                <nav className='footer_contend_nav'>
                    <a onClick={() => scrollToAbout('home') } className="nav_a_white">Home</a>
                    <a onClick={() => scrollToAbout('about') } className="nav_a_white">About</a>
                    <a onClick={() => scrollToAbout('Calendar') } className="nav_a">Schedule</a>
                </nav>
                <div className='footer_contend_logos'>
                    <img className='footer_contend_logos_logo' src= { facebook } alt="Facebook" />
                    <img className='footer_contend_logos_logo' src= { instagram } alt="instagram" />
                    <img className='footer_contend_logos_logo' src= { twitter } alt="twitter" />
                </div>
            </div>
            <div className='footer_res'>
                <div className='footer_res_container'>
                    <h3 className='footer_contend_title_name'>Hamilton</h3>
                    <nav className='footer_contend_nav'>
                        <a onClick={() => scrollToAbout('home') } className="nav_a_white">Home</a>
                        <a onClick={() => scrollToAbout('about') } className="nav_a_white">About</a>
                        <a onClick={() => scrollToAbout('Calendar') } className="nav_a">Schedule</a>
                    </nav>
                </div>
            </div>
        </>
    )
}
