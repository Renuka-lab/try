import frame from'/Images/Frame50.png';
export default function Navigation() {
    return (
        <>
            <section className="bgnav bg-light">
                <header>
                <div className="navigationmain">
                    <nav class="navbar navbar-expand-lg">
                        <div class="container-fluid navsection my-auto">
                            <a class="navbar-brand " href="#">mabi</a>
                            <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon "></span>
                            </button>

                            <div class="collapse navbar-collapse ms-4 " id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-lg-0 my-auto">

                                    <li class="nav-item">
                                        <a class="nav-link " aria-current="page" href="#">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link " aria-current="page" href="#">Solutions</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" aria-current="page" href="#">Pricing</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Resources
                                        </a>
                                        <ul class="dropdown-menu bg-dark">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <div class="navform my-auto">
                                    <div><button class="btn btn-outline-light rounded-5 button1" type="submit">Log In</button></div>
                                    <div><button className="btn btn-light rounded-5 button1">Free Launch</button></div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="main">
                    <div className="row">
                        <div className="col-lg-6 col-12 my-auto">
                           <div className='ctaboxes'>
                           <div className='ctabox text-white'>
                                <h1>Launch Your App</h1>
                                <h2>Grow Your Business</h2>
                                <p>Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar.</p>
                                <div className='ctabtn'><button className="btn btn-outline-light rounded-5 button2">Free Launch</button></div>
                            </div>
                           </div>

                        </div>
                        <div className="col-lg-6 col-12">
                            <div className='ctaimg'>
                            <img src={frame} alt="" />
                            </div>
                        </div>
                       
                    </div>
                </div>
                </header>
            </section>
        </>
    );
}