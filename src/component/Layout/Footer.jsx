import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <div className='container-fluid bg-orange-400'>
            <div className='container mx-auto'>
            <footer className="footer p-10 text-black">
                <nav>
                    <h6 className="footer-title">Services</h6> 
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav> 
                <nav>
                    <h6 className="footer-title">Company</h6> 
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav> 
                <nav>
                    <h6 className="footer-title">Legal</h6> 
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav> 
                <form>
                    <h6 className="footer-title">Newsletter</h6> 
                    <fieldset className="form-control lg:w-80 sm:w-auto">
                    <label className="label sm:max-w-screen-sm">
                        <span className="label-text text-black">Enter your email address</span>
                    </label> 
                    <div className="join ">
                        <input type="text" placeholder="username@site.com" className="input input-bordered join-item md:w-32" /> 
                        <Link className="btn bg-slate-100 join-item">Subscribe</Link>
                    </div>
                    </fieldset>
                </form>
            </footer>
            </div>
        </div>
    );
}

export default Footer;