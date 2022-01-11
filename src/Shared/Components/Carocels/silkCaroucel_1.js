import React from 'react';
import Books from '../../../Books/Components/Books';

const SilkCaroucel_1 = props => {


    return (
        <div style={{
            border: "2px solid  #007bff",
            borderRadius: "10px",
            boxShadow: " 0px 5px 5px 0px #007bff",
            backgroundColor: "#f1f2f4"
        }} id="engineering">

            <button className="btn btn-primary float-md-right m-1">See all</button>
            <h1 className="m-3">{props.item}</h1>
            <Books item={props.item} />
        </div >
    )
}

export default SilkCaroucel_1;
