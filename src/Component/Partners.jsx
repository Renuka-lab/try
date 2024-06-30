import logo from '/Images/Logos.png';
import logos from '/Images/Logos1.png';
export default function Partners() {
    return (
        <>
            <section className=' bg-light py-5'>
                <div className='partnersection'>
                    <div className=' heading'>
                        <h2>Our Top Partners</h2>
                    </div>
                    <div className='partnerimg py-5 '>
                        <img src={logo} alt="" />
                    </div>
                    <div className='partnerimg px-5'>
                        <img src={logos} alt="" />
                    </div>
                </div>
            </section>
        </>
    );
}