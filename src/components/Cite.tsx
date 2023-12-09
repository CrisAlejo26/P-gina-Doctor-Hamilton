import CustomizedButtons from './Button'
import doctorFooter from '/doctor_footer.png'

export const Cite = () => {
    return (
        <div id='Calendar' className="cite">
            <div className="container cite_flex">
                <img className='cite_flex_img' src= { doctorFooter } alt="Imagen de doctor Hamilton" />
                <div className="cite_flex_textYbutton">
                    <h3 className="cite_flex_textYbutton_text">
                        If you want to have unique and personalized attention, this is your opportunity
                    </h3>
                    <CustomizedButtons/>
                </div>
            </div>
        </div>
    )
}
