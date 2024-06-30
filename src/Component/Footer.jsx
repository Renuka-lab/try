import vector from '/Images/Vector.png';
import image from '/Images/euro.png';
import acces from '/Images/accessibility.png';
export default function Footer() {
    return (
        <>
            <section className="footerbg ">
                <div className="footersection">
                    <div className="footerbox">
                        <div className='titlefooter'>
                            <a class="footertitle text-decoration-none" href="#">mabi</a>
                        </div>
                        <div className='box'>
                            <ul className="list-unstyled">
                                <li>Product</li>
                                <li>Pricing</li>
                                <li>Overview</li>
                                <li>Browse</li>
                                <li>Accessibility</li>
                            </ul>
                        </div>
                        <div className='box'>
                            <ul className="list-unstyled">
                                <li>Solutions</li>
                                <li>Brainstorming</li>
                                <li>Ideation</li>
                                <li>Wireframing</li>
                                <li>Research</li>
                            </ul>
                        </div>
                        <div className='box'>
                            <ul className="list-unstyled">
                                <li>Resources</li>
                                <li>Help Center</li>
                                <li>Blog</li>
                                <li>Tutorials</li>
                                <li>FAQs</li>
                            </ul>
                        </div>
                        <div className='box'>
                            <ul className="list-unstyled">
                                <li>Support</li>
                                <li>Contact Us</li>
                                <li>Developers</li>
                                <li>Documentation</li>
                                <li>Integrations</li>
                            </ul>
                        </div>
                        <div className='box'>
                            <ul className="list-unstyled">
                                <li>Company</li>
                                <li>About</li>
                                <li>Press</li>
                                <li>Events</li>
                                <li>Request Demo <i class="fa-solid fa-arrow-right ms-2"></i></li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="footerbox">
                        <div className='my-auto'>
                            <p>@ 2023 Mabi. All rights reserved.</p>
                        </div>
                        <div className='fboxs'>
                            <ul className=" list-unstyled servicelist my-auto">
                                <li>Terms</li>
                                <li>Privacy</li> 
                                <li>Contact</li>
                            </ul>
                            <ul className=" list-unstyled servicelist my-auto ">
                                <li>
                                    <div><img src={vector} alt="" /> EN</div>
                                </li>
                                <li>
                                    <div><img src={image} alt="" />  EUR</div>
                                </li>
                                <li>
                                    <div>
                                        <img src={acces} alt="" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}