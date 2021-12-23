import React from 'react'

const Countdown = () => {
    return (
        <div className="row">
            <div className="col card6l">
                <h1 className="text-warning bg-dark text-center">Special offer</h1>
                <div className="row">
                    <div className="col" align="center">
                        <img className="" style={{ height: "300px" }} src="images/medical/7.jpg" alt="Card image" />
                    </div>
                    <div className="w-100">
                        <hr />
                    </div>
                    {/* <!-- <hr className="bg-primary" style="height:5px; position: relative; bottom:20px"> --> */}
                    <div className="col" style={{
                        height: "px", padding: "none!important", margin: "none"
                    }}>
                        <div className="row">
                            <div className="col m-2">
                                <a href="#">
                                    <h6 className="card-title" style={{ padding: "none" }}>Obstetrics & Gynecology</h6>
                                </a>
                                <p className="card-text">Hiralal Konar</p>
                            </div>

                            <div className="col">
                                <strong>
                                    <p className="p-4" align="center">Tk. 390.00 </p>
                                </strong>
                            </div>
                            <div className="col">

                                <h4 className="badge bg-warning p-4">60%off</h4>
                            </div>
                        </div>
                    </div>
                    <div className="w-100">
                        <hr />
                    </div>
                </div>
                <div align="center">
                    <div id="registerBy" className="flipdown"></div>
                    <button className="btn btn-outline-info m-5 hvr-glow hvr-wobble-vertical">Shop Now</button>
                </div>
            </div>



            <div className="col card6l">
                <h1 className="text-warning bg-dark text-center">Special offer</h1>
                <div className="row">
                    <div className="col" align="center">
                        <img className="" style={{ height: "300px" }} src="images/engineering/5.jpg" alt="Card image" />
                    </div>
                    <div className="w-100">
                        <hr />
                    </div>
                    {/* <!-- <hr className="bg-primary" style="height:5px; position: relative; bottom:20px"> --> */}
                    <div className="col" style={{
                        padding: "none!important", margin: "none"
                    }}>
                        <div className="row">
                            <div className="col m-2">
                                <a href="#">
                                    <h6 className="card-title" style={{ padding: "none" }}>Data and Computer Communications</h6>
                                </a>
                                <p className="card-text">William Stallings</p>
                            </div>

                            <div className="col">
                                <strong>
                                    <p className="p-4" align="center">Tk. 115.00 </p>
                                </strong>
                            </div>
                            <div className="col">

                                <h4 className="badge bg-warning p-4">70%off</h4>
                            </div>
                        </div>
                    </div>
                    <div className="w-100">
                        <hr />
                    </div>
                </div>
                <div align="center">
                    <div id="seregisterBy" className="flipdown"></div>
                    <button className="btn btn-outline-info m-5 hvr-glow hvr-wobble-vertical">Shop Now</button>
                </div>
            </div>



            {/* <!--  <div className="col card6c">
                <h1 className="text-warning bg-danger">70% OFF NOW</h1>
                <div align="center">
                    <button className="btn m-5">Shop Now</button>
                </div>
            </div > --> */}
        </div>
    )
}

export default Countdown
