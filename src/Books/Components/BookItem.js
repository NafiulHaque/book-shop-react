import React from 'react'

const BookItem = props => {
    console.log(props);
    return (
        <div className='item'>
            <div className="card hvr-grow-shadow" >
                <img className="card-img-bottom p-3" src={props.image} alt="Card image" />
                {/* <!-- <hr className="bg-primary" style="height:5px; position: relative; bottom:20px"> --> */}
                <div className="card-body" style={{
                    height: "px",
                    padding: "none!important", margin: "none"
                }}>
                    <a href="#">
                        <h6 className="card-title" style={{ padding: "none" }}>{props.name}</h6>
                    </a>
                    <p className="card-text">{props.writter}</p>
                    <div className="row">
                        <div className="col">
                            <strong>
                                <p className="" align="center">Tk. {props.price} </p>
                            </strong>
                        </div>
                        <div className="col">

                            <p className="badge bg-warning">20%off</p>
                        </div>
                    </div>
                    <a href="#" className="btn btn-primary hvr-buzz hvr-icon-forward" style={{
                        position: "relative",
                        left: "18%"
                    }}>Add to Cart</a>
                </div>
            </div>
        </div>

    )
}

export default BookItem
