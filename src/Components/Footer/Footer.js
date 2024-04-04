import React from 'react'
import './Footer.css'
import {currency} from '../../Data/currency'
import Logo from '../../Assests/whatsapp-logo.jpg'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-sub-container-1'>
            <div className='first-1'>
                <h1>Soul<span>Up</span></h1>
                <p><b>Powered by</b>:Auriga Connect Pvt. Ltd, WeWork Galaxy, 43 Residency Rd, Bengaluru, KA - 560025 | Whatsapp:  +91 6374 897 533</p>
                <p><b>Please note that SoulUp is not a crisis/suicide helpline. In case you are suicidal, please call a suicide helpline immediately.</b></p>
                <h4>Subscribe to our emails</h4>
                <input type="text" name="email" id="email" placeholder='Email' />
            </div>
            <div className='second-2'>
                <h2>About Us</h2>
                <ul>
                    <li>FAQs</li>
                    <li>Blogs</li>
                    <li>Crisis Helpline</li>
                    <li>Terms of Use</li>
                    <li>Privacy Policy</li>
                    <li>Team</li>
                </ul>
            </div>
            <div className='third-3'>
                <h2>Get Involved</h2>
                <ul>
                    <li>SoulUp t-shirts</li>
                    <li>For Theraphist</li>
                    <li>For Corporates</li>
                    <li>Careers</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
        <div className='footer-sub-container-2'>
            <select name="currency" id="curr">
               {
                currency.map((id , currency) => {
                  <option value="currency" key={id}>{currency}</option>
                })

               }
            </select>
            <p>@2022-All rights reserved|Designed by Geeks2Connect</p>

        </div>
    </div>
  )
}

export default Footer
