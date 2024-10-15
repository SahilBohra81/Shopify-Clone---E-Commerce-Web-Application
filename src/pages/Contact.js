import React from 'react'
import { AiFillHome, AiFillMail ,AiOutlineInfo } from "react-icons/ai";
import { BiSolidPhoneCall } from "react-icons/bi";
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
const Contact = () => {
  return (
    <>
       <Meta title={"Contact Us"}/>
       <BreadCrumb title='Contact Us' />
       <div className='contact-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3696.379740881167!2d75.75675828470582!3d26.943316047285116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1721821318973!5m2!1sen!2sin"
            width="600" 
            height="450" 
            className='border-0 w-100'
            allowFullscreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            </div>
            <div className='col-12 mt-5'>
              <div className='contact-inner-wrapper d-flex justify-content-between'>
                <div>
                  <h3 className='contact-title mb-4'>Contact</h3>
                  <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <input type='text' className='form-control' placeholder='Name'/>
                    </div>
                    <div>
                      <input type='email' className='form-control' placeholder='Email'/>
                    </div>
                    <div>
                      <input type='tel' className='form-control' placeholder='Mobile Number'/>
                    </div>
                    <div>
                      <textarea name='' id='' className='w-100 form-control' cols="30" rows="4" placeholder='Comments'></textarea>
                    </div>
                    <div>
                      <button className='button border-0'>Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className='contact-title mb-4'>Get In Touch With Us</h3>
                  <div>
                    <ul className='ps-0'>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                      <AiFillHome  className='fs-5'/>
                      <address className='mb-0'>Bohra Colony, Oppo. Panchayat Samiti, Pankha, Kalwar Road, Jothwara, Jaipur, Rajasthan</address>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                      <BiSolidPhoneCall  className='fs-5'/>
                      <a href='tel:+91 6350525143'>+91 6350525143</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                      <AiFillMail  className='fs-5'/>
                      <a href='mailto:bohrasahil81@gmail.com'>bohrasahil81@gmail.com</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                      <AiOutlineInfo  className='fs-5'/>
                      <p className='mb-0'>Monday – Friday 10 AM – 8 PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
    </>
  )
}

export default Contact