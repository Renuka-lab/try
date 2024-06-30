import image from '/Images/Col1.png';
export default function Nonec() {
    return (
        <>
            <section className='py-5 bg-light'>
                <div className='nonecsection'>
                    <div className="row">
                        <div className="col-lg-8 col-12 my-auto mx-auto">
                            <div className='nonec'>
                                <h2>Non commodo nec</h2>
                                <p>Laoreet amet, lacus sed faucibus. Nec, natoque semper rutrum dui. Curabitur in commodo pretium lacinia feugiat. A ultricies quis commodo, nisl, vestibulum, feugiat dolor. Tincidunt orci consequat, pellentesque leo dui nunc ac, amet. A proin pulvinar nec nibh bibendum. Nec mi mattis vulputate dictum platea pharetra, id id.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 mx-auto ">
                            <div className='nonecimg'>
                                <img src={image} alt="" />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}