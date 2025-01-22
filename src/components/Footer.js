import React from 'react';
import logo from '../images/Logo.png';

const Footer = () => {
  return (
    <footer>
        <section>
            <div className='company-info'>
                <img src={logo} alt=''/>
                <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes served with modern twist</p>

            </div>
            <div>
                <h3>Important Links</h3>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Menu</a></li>
                    <li><a href='/'>Reservations</a></li>
                    <li><a href='/'>Order Online</a></li>
                    <li><a href='/'>Login</a></li>
                </ul>
            </div>

            <div>
                <h3>Contact</h3>
                <ul>
                    <li>Address: <br/>Cherry Town, Bangalore</li>
                    <li>Phone: <br/>080 123 456</li>
                    <li>Email: <br/>littlelemon@gmail.com</li>
                </ul>
            </div>

            <div>
            <h3>Social Media</h3>
                <ul>
                    <li><a href='/'>Instagram</a></li>
                    <li><a href='/'>Facebook</a></li>
                    <li><a href='/'>Twitter</a></li>
                </ul>
            </div>
        </section>
    </footer>
  );
};

export default Footer;