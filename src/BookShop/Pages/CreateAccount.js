import React, { useState } from 'react';

const CreateAccount = () => {
    const [login, setlogin] = useState(false);
    return (

        <div className="container mb-5">

            <div align="center" className="title bg-primary text-white p-1 my-4 "><h2>{login === true ? "Login " : "Create an account"}</h2></div>
            <div className="sub container">
                <form >
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">

                                <label for="Firstname">First Name :</label>
                                <input type="text" className="form-control" id="Firstname" placeholder="First Name" />
                            </div>
                        </div>
                        <div className="col-md-6">

                            <div className="form-group">

                                <label for="Lastname">Last Name :</label>
                                <input type="text" className="form-control" id="Lastname" placeholder="Last Name" />
                            </div>
                        </div>

                    </div>
                    {/* county and city */}

                    {/* <div className="row">
                        <div className="col">
                            <label className="my-1 mr-2" for="Country">Country :</label>
                            <select className="custom-select my-1 mr-sm-2" id="Country">
                                <option selected>Bangladesh</option>
                                <option value="1">US</option>
                                <option value="2">UK</option>
                                <option value="3">India</option>
                            </select>

                        </div>
                        <div className="col">

                            <label className="my-1 mr-2" for="City">City :</label>
                            <select className="custom-select my-1 mr-sm-2" id="City">
                                <option selected>Dhaka</option>
                                <option value="1">Kolkata</option>
                                <option value="2">London</option>
                                <option value="3">whington</option>
                                <option value="4">Bogura</option>
                            </select>
                        </div>

                    </div> */}

                    <div className="form-group">

                        <label for="Email">Email :</label>
                        <input type="Email" className="form-control" id="Email" placeholder="xyz@gmail.com" />
                    </div>


                    {/* <div className="form-group">

                        <label for="PhoneNumber">Phone Number :</label>
                        <input type="Number" className="form-control" id="PhoneNumber" placeholder="Inter Your Phone Number" />
                    </div> */}



                    <div className="form-group">

                        <label for="Password">Password :</label>
                        <input type="Password" className="form-control" id="Password" placeholder="..............." />
                    </div>



                    <div className="form-group">

                        <label for="cPassword">Confirm Password :</label>
                        <input type="Password" className="form-control" id="cPassword" placeholder="..............." />
                    </div>


                    {/* <div className="form-group">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" for="gridCheck">
                                Check me out
                            </label>
                        </div>
                    </div> */}
                    <button type='submit' onClick={() => setlogin(true)} className="btn btn-primary">{login === false ? "Register Now" : "Login"}</button>
                </form>
            </div>

        </div >



    )
}

export default CreateAccount;
