import testimonio1 from '/testimonio_1.png'
import testimonio2 from '/testimonio_2.png'
import testimonio3 from '/testimonio_3.png'

export const Testimonials = () => {
    return (
        <>
            <div id='Testimonials' className="container testimonials">
                <h3 className="testimonials_title">Feedback from some patients</h3>
                <div className='testimonials_testimonios'>
                    <div className='testimonials_testimonio'>
                        <img className='testimonials_testimonio_image' src= { testimonio1 } alt="Testimonio 1" />
                        <p className='testimonials_paragraph'>I had been suffering from chronic back pain for years and had seen multiple doctors without any relief. That all changed when I saw Dr. Hamilton. She was able to diagnose the root cause of my pain and provided me with a treatment plan that has significantly improved my quality of life. I am so grateful for her expertise and compassion.</p>
                    </div>
                    <div className='testimonials_testimonio'>
                        <img className='testimonials_testimonio_image' src= { testimonio2 } alt="Testimonio 2" />
                        <p className='testimonials_paragraph'>I recently visited Dr. Hamilton for a routine check-up and was blown away by the level of care and attention I received. Dr. Hamilton took the time to listen to my concerns and provided me with helpful advice and guidance. I left feeling reassured and well taken care of.</p>
                    </div>
                    <div className='testimonials_testimonio'>
                        <img className='testimonials_testimonio_image' src= { testimonio3 } alt="Testimonio 3" />
                        <p className='testimonials_paragraph'>Dr. Hamilton performed surgery on my knee and I couldn’t be happier with the results. The entire process, from the initial consultation to the post-op follow-up, was smooth and stress-free. Dr. Hamilton is skill as a surgeon is matched only by his kindness and bedside manner. I highly recommend him to anyone in need of orthopedic care.</p>
                    </div>
                </div>
            </div>
            <div className='recuadro_test'>
                <div className='recuadro_testimonials1'/>
                <div className='recuadro_testimonials2'/>
                <div className='recuadro_testimonials3'/>
                <div className='recuadro_testimonials4'/>
                <div className='recuadro_testimonials5'/>
            </div>
        </>
    )
}
