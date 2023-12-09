import svgDoctor from '/doctor.svg'

export const Header = () => {

    return (
        <>
        <div className="header">
            <div>
                <h1 className="header_title">Quality Service</h1>
                <p className="header_parrafo">
                    If you are looking for more personalized
                    <br/>
                    attention for you and your loved ones, you 
                    <br/>
                    are in the right place.
                </p>
                {/* <Link to="/services">Call Now</Link> */}
                <button onClick={() => window.open('https://calendar.google.com/calendar', '_blank')} className="header_button">Call Now</button>
            </div>
            <img className="header_svg" src={ svgDoctor } alt="Doctor Hamilton" />
        </div>
        <div className="recuadro_one"></div>
        <div className="recuadro_two"></div>
        <div className="recuadro_tree"></div>
        <div className="recuadro_four"></div>
        <div className="recuadro_five"></div>
        <div className="recuadro_six"></div>
        <div className="recuadro_seven"></div>
        </>
    )
}
