import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Footer.css';

const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5>Hogi</h5>
                        <p >You can use rows and columns here to organize your footer content.</p>
                    </div>
                    <div className="col l4 offset-l4 s12">
                        <h5>Links</h5>
                        <ul>
                        <li><a  href="#!">Link 1</a></li>
                        <li><a  href="#!">Link 2</a></li>
                        <li><a  href="#!">Link 3</a></li>
                        <li><a  href="#!">Link 4</a></li>
                        </ul>
                    </div>
                    <div className="col l4 offset-l1 s12">
                        <h5>Links</h5>
                        <ul>
                        <li><a  href="#!">Link 1</a></li>
                        <li><a  href="#!">Link 2</a></li>
                        <li><a  href="#!">Link 3</a></li>
                        <li><a  href="#!">Link 4</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;