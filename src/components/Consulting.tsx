import doctor from '/doctor_main.png'

export const Consulting = () => {
    return (
        <div className="consulting">
            <div className="container">
                <h3 className="consulting_title">Prioritize professionalism and seriousness in 
                    order to assist you in every consultation.
                </h3>
                <h4 className="consulting_subtitle">
                    Prioritize professionalism and seriousness in 
                </h4>
                <h4 className="consulting_subtitle">
                    order to assist you in every consultation.
                </h4>
                <div className="consulting_item">
                    <div className="consulting_item_cua_1"/>
                    <h5 className="consulting_item_text">VIP Lounges</h5>
                </div>
                <div className="consulting_item">
                    <div className="consulting_item_cua_2"/>
                    <h5 className="consulting_item_text">Express exams</h5>
                </div>
                <div className="consulting_item">
                    <div className="consulting_item_cua_3"/>
                    <h5 className="consulting_item_text">Personalized doctor</h5>
                </div>
                <div className="consulting_recuadro"/>
                <img className='consulting_img' src = { doctor } alt="En esta seccion se puede ver un doctor" />
            </div>
        </div>
    )
}
