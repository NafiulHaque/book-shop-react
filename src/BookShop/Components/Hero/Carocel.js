import React from 'react'

const Carocel = () => {
    return (
        <div className="row">
            <div className="col-md-8  p-4">

                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="images/3.jpg" alt="First slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <button className="btn btn-outline-primary hvr-pulse-grow">
                                    <h5>Shop Now</h5>
                                </button>

                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="images/2.jpg" alt="Second slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <button className="btn btn-outline-primary hvr-pulse-grow">
                                    <h5>Shop Now</h5>
                                </button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="images/1.jpg" alt="Third slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <button className="btn btn-outline-primary hvr-pulse-grow">
                                    <h5>Shop Now</h5>
                                </button>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>

                </div>
            </div>


            <div className="col-md-4 p-4 offset-md-4 ml-auto">


                <div className="cap slider">
                    <div className="item cardcap">
                        <div className="row">

                            <div className="col-lg ">
                                <div className="p-5 ">
                                    <div className="row">
                                        <div className="col"><img className="cardl" src="images/book-5.png" style={{ height: "130px", width: "100px" }} />
                                        </div>
                                        <div className="col" style={{ height: "130px" }}>
                                            <a href="#">
                                                <h5>Genesis Last</h5>
                                            </a>
                                            <p className="">Genesis Team
                                                Ed: 7th (New).</p>
                                            <strong>
                                                <p className="" align="center">Tk. 790.00 </p>
                                            </strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="bg-danger" />
                            <div className="w-100 d-none d-md-block"></div>
                            <div className="col-lg ">
                                <div className="p-5 ">
                                    <div className="row">
                                        <div className="col "><img className="cardl" src="images/book-binded-512.png"
                                            style={{ height: "130px", width: "100px" }} /></div>
                                        <div className="col" style={{ height: "130px" }}>
                                            <a href="#">
                                                <h5>Genesis Last</h5>
                                            </a>
                                            <p className="">Genesis Team
                                                Ed: 7th (New).</p>
                                            <strong>
                                                <p className="" align="center">Tk. 790.00 </p>
                                            </strong>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="item cardcap">
                        <div className="row">

                            <div className="col-lg ">
                                <div className="p-5 ">
                                    <div className="row">
                                        <div className="col"><img className="cardl" src="images/9.jpg" style={{ height: "130px", width: "100px" }} /></div>
                                        <div className="col" style={{ height: "130px" }}>
                                            <a href="#">
                                                <h5>Genesis Last</h5>
                                            </a>
                                            <p className="">Genesis Team
                                                Ed: 7th (New).</p>
                                            <strong>
                                                <p className="" align="center">Tk. 790.00 </p>
                                            </strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="bg-danger" />
                            <div className="w-100 d-none d-md-block"></div>
                            <div className="col-lg ">
                                <div className="p-5 ">
                                    <div className="row">
                                        <div className="col"><img className="cardl" src="images/9.jpg" style={{ height: "130px", width: "100px" }} /></div>
                                        <div className="col" style={{ height: "130px" }}>
                                            <a href="#">
                                                <h5>Genesis Last</h5>
                                            </a>
                                            <p className="">Genesis Team
                                                Ed: 7th (New).</p>
                                            <strong>
                                                <p className="" align="center">Tk. 790.00 </p>
                                            </strong>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                    <div className="item cardcap">
                        <div className="row">

                            <div className="col-md ">
                                <div className="p-5 ">
                                    <div className="row">
                                        <div className="col"><img className="cardl" src="images/9.jpg" style={{ height: "130px", width: "100px" }} /></div>
                                        <div className="col" style={{ height: "130px" }}>
                                            <a href="#">
                                                <h5>Genesis Last</h5>
                                            </a>
                                            <p className="">Genesis Team
                                                Ed: 7th (New).</p>
                                            <strong>
                                                <p className="" align="center">Tk. 790.00 </p>
                                            </strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="bg-danger" />
                            <div className="w-100 d-none d-md-block"></div>
                            <div className="col-md ">
                                <div className="p-5 ">
                                    <div className="row">
                                        <div className="col "><img className="cardl" src="images/9.jpg" style={{ height: "130px", width: "100px" }} /></div>
                                        <div className="col" style={{ height: "130px" }}>
                                            <a href="#">
                                                <h5>Genesis Last</h5>
                                            </a>
                                            <p className="">Genesis Team
                                                Ed: 7th (New).</p>
                                            <strong>
                                                <p className="" align="center">Tk. 790.00 </p>
                                            </strong>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Carocel
