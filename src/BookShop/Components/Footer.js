import React from 'react'

const Footer = () => {
    return (
        <footer className="footer-distributed">

            <div className="footer-left">

                <h3>Book<span>Shop</span></h3>

                <p className="footer-links">
                    <a href="#" className="link-1">Home</a>

                    <a href="#">Blog</a>

                    <a href="#">Payment</a>

                    <a href="#">About</a>

                    <a href="#">Faq</a>

                    <a href="#">Contact</a>
                </p>

                <p className="footer-company-name">Bogurabookshop © 2022</p>
            </div>

            <div className="footer-center">

                <div>
                    <i className="fa fa-map-marker"></i>
                    <p><span>5800</span> Bogura sadar,Bogura</p>
                </div>

                <div>
                    <i className="fa fa-phone"></i>
                    <p>+8801739184393</p>
                </div>

                <div>
                    <i className="fa fa-envelope"></i>
                    <p><a href="mailto:nafiulhaque22@gmail.com">nafiulhaque22@gmail.com</a></p>
                </div>

            </div>

            <div className="footer-right">

                <p className="footer-company-about">
                    <span>About US</span>
                    Experience Personalized Online Shopping in Bangladesh with bogurabookshop.com.bd
                </p>

                <div className="footer-icons">

                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                    <a href="#"><i className="fab fa-github"></i></a>

                </div>

            </div>

        </footer>
    )
}

export default Footer
