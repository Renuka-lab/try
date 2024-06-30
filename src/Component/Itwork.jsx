import time from '/Images/timer.png';
import turn from '/Images/tournament.png';
// import iconn from 'Images/Icon.jpg';

export default function Itwork(){
    return(
        <>
        <section className='itworksection py-5'>
            <div className=' heading'>
                <h2>How it works</h2>
            </div>
            <div className='cardbox py-5'>
                <div className="card">
                    <div className='cardimg'>
                        <img src={time} alt="" />
                    </div>
                    <p>Dui consectetur gravida platea ut dis diam. Enim morbi proin auctor et nisl phasellus. Ultricies pharetra, id quam facilisis urna, enim.</p>
                </div>
                <div className="card">
                    <div className='cardimg'>
                        <img src={turn} alt=""  />
                    </div>
                    <p>Et sit duis vestibulum proin. Sollicitudin velit, etiam a feugiat sagittis. Imperdiet ipsum urna ornare vitae tempus sed massa.</p>
                </div>
                <div className="card">
                    <div className='cardimg'>
                        <img src={turn} alt="" />
                    </div>
                    <p>Elit purus magna donec mattis amet, leo varius sed. Ut metus sed convallis pretium sollicitudin turpis semper vulputate.</p>
                </div>
                
            </div>


        </section>
        </>
    );
}