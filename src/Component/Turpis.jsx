import image from '/Images/Col.png'
export default function Turpis(){
    return(
        <>
        <section className='bg-light py-5'>
           <div className='turpissection '>
           <div className="row">
                <div className="col-lg-6 col-12 my-auto">
                    <div className='turpis'>
                        <h2>Turpis risus facilisi</h2>
                        <p>Augue feugiat mi, massa amet. Id purus aliquam bibendum purus dictum elementum nullam odio tellus. Imperdiet feugiat est odio fames magna orci. Augue purus aliquam, placerat vestibulum dictum pellentesque molestie. Facilisis pretium porta congue proin.</p>
                    </div>

                </div>
                <div className="col-lg-6 col-12">
                    <div className='turpisimg'>
                        <img src={image} alt="" />
                    </div>

                </div>
            </div>
           </div>
        </section>
        </>
    );
}