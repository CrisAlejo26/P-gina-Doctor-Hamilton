import pildora from '/pildora.svg'
import hear from '/oido.svg'
import fonoculo from '/fonoculo.svg'

export const Services = () => {
    return (
        <div id='Services' className="container services">
            <h2 className="services_title">Why Choose Dr. Hamilton's Services?</h2>
            <div className='services_items'>
                <div className='services_items_item'>
                    <img src= { pildora } alt="Estamos vendiendo pildoras" />
                    <h4 className='services_items_item_text'>Recipe what is best for your <br/>Health</h4>
                </div>
                <div className='services_items_item'>
                    <img src= { hear } alt="Estamos vendiendo pildoras" />
                    <h4 className='services_items_item_text'>Listen to each symptom to reach <br/>The definitive diagnosis</h4>
                </div>
                <div className='services_items_item'>
                    <img src= { fonoculo } alt="Estamos vendiendo pildoras" />
                    <h4 className='services_items_item_text'>Take the exams that are <br/>Needed</h4>
                </div>
            </div>
        </div>
    )
}
