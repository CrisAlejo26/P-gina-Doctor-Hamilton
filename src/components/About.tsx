import vacuna from '/vacuna.svg'
import fonoculo from '/fonoculo.svg'
import heard from '/corazon.svg'
import ambulance from '/ambulancia.svg'

export const About = () => {
    return (
        <div id='about' className="container about">
            <h2 className="container_title">About</h2>
            <p className="container_paragraph">I am a highly trained and experienced general practitioner with a passion for provide 
exceptional medical care to each of my patients. I have more After 8 years 
of experience in the field of general medicine, I have developed a wide range
of skills and knowledge to treat a variety of diseases and conditions.</p>
            <div className='container_images'>
                <div className='container_images_containerItem'>
                    <img className='container_images_img' src={ vacuna } alt="Vacunas especializadas para tratamientos de la salud" />
                    <h4>Vaccination</h4>
                </div>
                <div className='container_images_containerItem'>
                    <img className='container_images_img' src={ fonoculo } alt="Vacunas especializadas para tratamientos de la salud" />
                    <h4>Standard eye exam</h4>
                </div>
                <div className='container_images_containerItem'>
                    <img className='container_images_img' src={ heard } alt="Vacunas especializadas para tratamientos de la salud" />
                    <h4>Electrocardiograms</h4>
                </div>
                <div className='container_images_containerItem'>
                    <img className='container_images_img' src={ ambulance } alt="Vacunas especializadas para tratamientos de la salud" />
                    <h4>Ambulance Service</h4>
                </div>
            </div>
        </div>
    )
}
