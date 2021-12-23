import React from 'react'

const Navbar_2 = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">

            <button className="navbar-toggler m-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item active">
                        <a className="nav-link hvr-underline-from-center" href="./index.html"><strong>Home</strong> <span
                            className="sr-only">(current)</span></a>
                    </li>


                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle hvr-underline-from-center" href="./index.html" id="navbardrop"
                            data-toggle="dropdown">
                            <strong>Catagories</strong>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="./index.html#engineering">ইঞ্জিনিয়ারিং</a>

                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="./index.html#programming">প্রোগ্রামিং ও আউটসোর্সিং এর বই</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="./index.html#medical">মেডিকেল</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="./index.html/#"> টেস্ট পেপারস
                            </a>
                            <div className="dropdown-divider"></div>

                        </div>
                    </li>
                    {/* <!-- <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle hvr-underline-from-center" href="#" id="navbardrop" data-toggle="dropdown">
                            Magazines
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Link 1</a>
                            <a className="dropdown-item" href="#">Link 2</a>
                            <a className="dropdown-item" href="#">Link 3</a>
                        </div>
                    </li> --> */}
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle hvr-underline-from-center" href="#" id="navbardrop" data-toggle="dropdown">
                            <strong>Text Books</strong>
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="./উচ্চ মাধ্যমিক গণিত.html"> উচ্চ মাধ্যমিক গণিত
                            </a>
                            <a className="dropdown-item" href="./উচ্চ মাধ্যমিক জীববিজ্ঞান.html"> উচ্চ মাধ্যমিক জীববিজ্ঞান
                            </a>
                            <a className="dropdown-item" href="./উচ্চ মাধ্যমিক হিসাববিজ্ঞান.html"> উচ্চ মাধ্যমিক হিসাববিজ্ঞান
                            </a>
                            <a className="dropdown-item" href="./ ফিন্যান্স ও ব্যাংকিং বিমা.html"> ফিন্যান্স ও ব্যাংকিং বিমা
                            </a>
                            <a className="dropdown-item" href="./উচ্চ মাধ্যমিক তথ্য ও যোগাযোগ প্রযুক্তি.html"> উচ্চ মাধ্যমিক তথ্য ও যোগাযোগ
                                প্রযুক্তি
                            </a>

                        </div>
                    </li>
                    <li className="nav-item">

                        <a className="nav-link hvr-underline-from-center" href="./Creat an account .html"><strong>Contact Us</strong></a>

                    </li>
                    <li className="nav-item">

                        <a className="nav-link hvr-underline-from-center" href="./About Us.html"><strong>About Us</strong></a>
                    </li>

                </ul>

            </div>
        </nav>
    )
}

export default Navbar_2
