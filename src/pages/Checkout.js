import React from 'react'

const Checkout = () => {
  return (
    <>
    <div className='checkout-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-7'>
                    <div className='checkout-left-data'>
                        <h3 className='website-name'>CraftNext</h3>
                        <nav style={{"--bs-breadcrumb-divider": '>'}} aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                &nbsp; /
                                <li className="breadcrumb-item active" aria-current="page">Library</li>
                            </ol>
                        </nav>
                        <h4 className='title'>Contact Information</h4>
                        <p className='user-details'>bohrasahil81@gmail.com</p>
                        <form action='' className='d-flex gap-15 justify-content-between'>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default Checkout