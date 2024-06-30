// import shape from '/Images/Shape2.png'
import desk from '/Images/Desktop.png'
export default function Launch() {
    return (
        <>
            <section className='bg-light '>
                <div className='launchimg '>
                    <div className=' turpissection py-5 '>
                        <div className="row py-5">
                            <div className="col-lg-6 col-12 ">
                                <div className='turpisimg'>
                                    <img src={desk} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-12 my-auto">
                                <div className='turpis'>
                                    <h2>Launch Your App Today</h2>
                                    <p>Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar.</p>
                                    <div className='launchbtn'><button className="btn btn-outline-light rounded-5 px-5 py-2 ">Free Launch</button></div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}