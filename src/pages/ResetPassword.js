import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
// import { Link } from 'react-router-dom'
const ResetPassword = () => {
  return (
    <>
        <Meta title={"Reset Password"}/>
        <BreadCrumb title='Reset Password' />
        <div className='login-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center mb-3'>Reset Password</h3>
                            <form action='' className='d-flex flex-column gap-15'>
                                <div>
                                    <input type='password' name='password' placeholder='Password' className='form-control'/>
                                </div>
                                <div className='mt-1'>
                                    <input type='password' name='confirm-password' placeholder='Confirm Password' className='form-control'/>
                                </div>
                                <div>
                                    <div className=' mt-3 d-flex justify-content-center align-items-center gap-15'>
                                        <button className='button border-0' type='submit'>Ok</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ResetPassword