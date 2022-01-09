import React from 'react';
import Books from '../../../Books/Components/Books';

const SilkCaroucel_1 = () => {



    return (
        <div style={{
            border: "2px solid  #007bff",
            borderRadius: "10px",
            boxShadow: " 0px 5px 5px 0px #007bff",
            backgroundColor: "#f1f2f4"
        }} id="engineering">

            <button className="btn btn-primary float-md-right m-1">See all</button>
            <h1 className="m-3">ইঞ্জিনিয়ারিং</h1>
             <Books />
        </div >
    )
}

export default SilkCaroucel_1;
//    <div className="regular slider">
               
//                 <div className="item ">
//                     <div className="card hvr-grow-shadow" >
//                         <img className="card-img-bottom p-3" src="images/engineering/1.jpg" alt="Card image" />
//                         {/* <!-- <hr className="bg-primary" style="height:5px; position: relative; bottom:20px"> --> */}
//                         <div className="card-body" style={{
//                             height: "px",
//                             padding: "none!important", margin: "none"
//                         }}>
//                             <a href="#">
//                                 <h6 className="card-title" style={{ padding: "none" }}>Introduction to Electric Circuits</h6>
//                             </a>
//                             <p className="card-text">Richard C. Dorf</p>
//                             <div className="row">
//                                 <div className="col">
//                                     <strong>
//                                         <p className="" align="center">Tk. 490.00 </p>
//                                     </strong>
//                                 </div>
//                                 <div className="col">

//                                     <p className="badge bg-warning">20%off</p>
//                                 </div>
//                             </div>
//                             <a href="#" className="btn btn-primary hvr-buzz hvr-icon-forward" style={{
//                                 position: "relative",
//                                 left: "18%"
//                             }}>Add to Cart</a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="item">

//                     <div className="card hvr-grow-shadow" >
//                         <img className="card-img-bottom p-3" src="images/engineering/2.jpg" alt="Card image" />
//                         {/* <!-- <hr className="bg-primary" style="height:5px; position: relative; bottom:20px"> --> */}
//                         <div className="card-body" style={{
//                             height: "px",
//                             padding: "none!important", margin: "none"
//                         }}>
//                             <a href="#">
//                                 <h6 className="card-title" style={{ padding: "none" }}>Power Electronics Ed. 1st, 2010</h6>
//                             </a>
//                             <p className="card-text">Daniel W. Hart</p>
//                             <div className="row">
//                                 <div className="col">
//                                     <strong>
//                                         <p className="" align="center">Tk. 300.00 </p>
//                                     </strong>
//                                 </div>
//                                 <div className="col">

//                                     <p className="badge bg-warning">20%off</p>
//                                 </div>
//                             </div>
//                             <a href="#" className="btn btn-primary hvr-buzz hvr-icon-forward" style={{
//                                 position: "relative",
//                                 left: "18%"
//                             }}>Add to Cart</a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="item ">
//                     <div className="card hvr-grow-shadow" >
//                         <img className="card-img-bottom p-3" src="images/engineering/3.jpg" alt="Card image" />
//                         {/* <!-- <hr className="bg-primary" style="height:5px; position: relative; bottom:20px"> --> */}
//                         <div className="card-body" style={{
//                             height: "px",
//                             padding: "none!important", margin: "none"
//                         }}>
//                             <a href="#">
//                                 <h6 className="card-title" style={{ padding: "none" }}>Strategic Management of Technological Innovation</h6>
//                             </a>
//                             <p className="card-text">Melissa A. Schilling</p>
//                             <div className="row">
//                                 <div className="col">
//                                     <strong>
//                                         <p className="" align="center">Tk. 390.00 </p>
//                                     </strong>
//                                 </div>
//                                 <div className="col">

//                                     <p className="badge bg-warning">20%off</p>
//                                 </div>
//                             </div>
//                             <a href="#" className="btn btn-primary hvr-buzz hvr-icon-forward" style={{
//                                 position: "relative",
//                                 left: "18%"
//                             }}>Add to Cart</a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="item">
//                     <div className="card hvr-grow-shadow" >
//                         <img className="card-img-bottom p-3" src="images/engineering/4.jpg" alt="Card image" />
//                         {/* <!-- <hr className="bg-primary" style="height:5px; position: relative; bottom:20px"> --> */}
//                         <div className="card-body" style={{
//                             height: "px",
//                             padding: "none!important", margin: "none"
//                         }}>
//                             <a href="#">
//                                 <h6 className="card-title" style={{ padding: "none" }}>Principle of Power System 4th ed</h6>
//                             </a>
//                             <p className="card-text">V.K. Mehta</p>
//                             <div className="row">
//                                 <div className="col">
//                                     <strong>
//                                         <p className="" align="center">Tk. 190.00 </p>
//                                     </strong>
//                                 </div>
//                                 <div className="col">

//                                     <p className="badge bg-warning">20%off</p>
//                                 </div>
//                             </div>
//                             <a href="#" className="btn btn-primary hvr-buzz hvr-icon-forward" style={{
//                                 position: "relative",
//                                 left: "18%"
//                             }}>Add to Cart</a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="item">
//                     <div className="card hvr-grow-shadow" >
//                         <img className="card-img-bottom p-3" src="images/engineering/5.jpg" alt="Card image" />
//                         {/* <!-- <hr className="bg-primary" style="height:5px; position: relative; bottom:20px"> --> */}
//                         <div className="card-body" style={{
//                             height: "px",
//                             padding: "none!important", margin: "none"
//                         }}>
//                             <a href="#">
//                                 <h6 className="card-title" style={{ padding: "none" }}>Data and Computer Communications </h6>
//                             </a>
//                             <p className="card-text">William Stallings</p>
//                             <div className="row">
//                                 <div className="col">
//                                     <strong>
//                                         <p className="" align="center">Tk. 350.00 </p>
//                                     </strong>
//                                 </div>
//                                 <div className="col">

//                                     <p className="badge bg-warning">20%off</p>
//                                 </div>
//                             </div>
//                             <a href="#" className="btn btn-primary hvr-buzz hvr-icon-forward" style={{
//                                 position: "relative",
//                                 left: "18%"
//                             }}>Add to Cart</a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="item">
//                     <div className="card hvr-grow-shadow" >
//                         <img className="card-img-bottom p-3" src="images/engineering/6.jpg" alt="Card image" />
//                         {/* <!-- <hr className="bg-primary" style="height:5px; position: relative; bottom:20px"> --> */}
//                         <div className="card-body" style={{
//                             height: "px",
//                             padding: "none!important", margin: "none"
//                         }}>
//                             <a href="#">
//                                 <h6 className="card-title" style={{ padding: "none" }}>Cryptography and Network Security</h6>
//                             </a>
//                             <p className="card-text">William Stallings</p>
//                             <div className="row">
//                                 <div className="col">
//                                     <strong>
//                                         <p className="" align="center">Tk. 250.00 </p>
//                                     </strong>
//                                 </div>
//                                 <div className="col">

//                                     <p className="badge bg-warning">20%off</p>
//                                 </div>
//                             </div>
//                             <a href="#" className="btn btn-primary hvr-buzz hvr-icon-forward" style={{
//                                 position: "relative",
//                                 left: "18%"
//                             }}>Add to Cart</a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="item">
//                     <div className="card hvr-grow-shadow" >
//                         <img className="card-img-bottom p-3" src="images/engineering/7.jpg" alt="Card image" />
//                         {/* <!-- <hr className="bg-primary" style="height:5px; position: relative; bottom:20px"> --> */}
//                         <div className="card-body" style={{
//                             height: "px",
//                             padding: "none!important", margin: "none"
//                         }}>
//                             <a href="#">
//                                 <h6 className="card-title" style={{ padding: "none" }}>Problem Solving and Program Design in C</h6>
//                             </a>
//                             <p className="card-text">Jeri R. Hanly</p>
//                             <div className="row">
//                                 <div className="col">
//                                     <strong>
//                                         <p className="" align="center">Tk. 390.00 </p>
//                                     </strong>
//                                 </div>
//                                 <div className="col">

//                                     <p className="badge bg-warning">20%off</p>
//                                 </div>
//                             </div>
//                             <a href="#" className="btn btn-primary hvr-buzz hvr-icon-forward" style={{
//                                 position: "relative",
//                                 left: "18%"
//                             }}>Add to Cart</a>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="item">
//                     <div className="card hvr-grow-shadow" >
//                         <img className="card-img-bottom p-3" src="images/engineering/8.jpg" alt="Card image" />
//                         {/* <!-- <hr className="bg-primary" style="height:5px; position: relative; bottom:20px"> -->? */}
//                         <div className="card-body" style={{
//                             height: "px",
//                             padding: "none!important", margin: "none"
//                         }}>
//                             <a href="#">
//                                 <h6 className="card-title" style={{ padding: "none" }}>File System Forensic Analysis 3rd ed</h6>
//                             </a>
//                             <p className="card-text">Brian Carier.</p>
//                             <div className="row">
//                                 <div className="col">
//                                     <strong>
//                                         <p className="" align="center">Tk. 490.00 </p>
//                                     </strong>
//                                 </div>
//                                 <div className="col">

//                                     <p className="badge bg-warning">20%off</p>
//                                 </div>
//                             </div>
//                             <a href="#" className="btn btn-primary hvr-buzz hvr-icon-forward" style={{
//                                 position: "relative",
//                                 left: "18%"
//                             }}>Add to Cart</a>
//                         </div>
//                     </div>
//                 </div>



//             </div>