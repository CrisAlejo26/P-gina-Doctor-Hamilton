import { UseScrollNavigate } from "../hooks/UseScrollNavigate"
import NavResposive from "./NavResposive"

export const Nav = () => {

    const { scrollToAbout } = UseScrollNavigate();

    return (
        <>
            <NavResposive className="NavResposive"/>
            <div id='home' className="container_nav">
                <nav className="nav">
                    <h3 className="nav_hamilton">Hamilton</h3>
                    <a onClick={() => scrollToAbout('about') } className="nav_a_white">About</a>
                    <a onClick={() => scrollToAbout('Services') } className="nav_a_white">Services</a>
                    <a onClick={() => scrollToAbout('Testimonials') } className="nav_a">Testimonials</a>
                    <a onClick={() => scrollToAbout('Calendar') } className="nav_a">Schedule</a>
                </nav>
                <div className="forms">
                </div>
                <div className="forms_2">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 1440 320">
                        <path 
                            fill="#F8B143" 
                            fill-opacity="1" 
                            d="M0,0L60,32C120,64,240,128,360,154.7C480,181,600,171,720,160C840,149,960,139,1080,138.7C1200,139,1320,149,1380,154.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z">
                        </path>
                    </svg>
                </div>
            </div>
        </>
    )
}
