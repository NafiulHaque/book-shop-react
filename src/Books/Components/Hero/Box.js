import React from 'react';

const Box = () => {
    return (
        <div className="row m-auto">
            <div className="col box">

                <div className="row">
                    <div className="col-md-4">
                        <i className="fas fa-truck hicon p-2"></i>
                    </div>
                    <div className="col-md-8 p-1">
                        <p style={{ fontSize: "1.3vw" }}>Free Shipping Item
                            Orders over Tk.1500</p>
                    </div>


                </div>
            </div>
            <div className="col box">

                <div className="row">
                    <div className="col-md-4">
                        <i className="fas fa-hand-holding-usd hicon p-2"></i>
                    </div>
                    <div className="col-md-8 p-1">
                        <p style={{ fontSize: "1.3vw" }}>Money Back Guarantee
                            100% money back</p>
                    </div>


                </div>
            </div>


            <div className="col box">

                <div className="row">
                    <div className="col-md-4">
                        <i className="fas fa-hands-helping hicon p-2"></i>
                    </div>
                    <div className="col-md-8 p-1">
                        <p style={{ fontSize: "1.3vw" }}>Cash On Delivery & 24 hour services
                        </p>
                    </div>


                </div>
            </div>


            <div className="col box">

                <div className="row">
                    <div className="col-md-4">
                        <i className="fas fa-life-ring hicon p-2"></i>
                    </div>
                    <div className="col-md-8 p-1">
                        <p style={{ fontSize: "1.3vw" }}>Help & Support
                            Call us : + 0123.4567.89</p>
                    </div>


                </div>
            </div>


        </div >
    )
}

export default Box
