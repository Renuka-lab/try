import img from '/Images/Col2.png';
export default function Sagitis(){
    return(
        <>
        <section className='py-5 bg-light'>
           <div className='sagitissection'>
           <div className="row">
                <div className="col-lg-4 col-12 my-auto d-lg-block d-none">
                    <div className='sagitisimg'>
                        <img src={img} alt="" />
                    </div>
                </div>
                <div className="col-lg-8 col-12 my-auto mx-auto">
                    <div className='sagitis'>
                        <h2>Sagittis sapien viverra</h2>
                        <p>Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor tellus. Diam fringilla sed volutpat facilisi. Pulvinar vulputate facilisis vel eros. Auctor metus sed auctor tortor sed nulla. Urna massa eu vel blandit sed nisi gravida. Imperdiet parturient at purus bibendum risus auctor lacus tristique arcu. Arcu hac cursus faucibus id. Eu integer parturient risus magna eget massa. Risus molestie tempor, faucibus non ultricies. Nam vel mattis quis dui, condimentum mi volutpat ut aliquam.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-12 my-auto d-lg-none">
                    <div className='sagitisimg'>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
           </div>
        </section>
        </>
    );
}