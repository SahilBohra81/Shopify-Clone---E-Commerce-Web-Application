import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import Color from '../components/Color'
const CompareProduct = () => {
  return (
    <>
        <Meta title={"Compare Products"}/>
        <BreadCrumb title='Compare Products' />
        <div className='compare-product-wrapper py-5 home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='compare-product-card position-relative'>
                            <img src='images\images\cross.svg' alt='cross' className='position-absolute cross img-fluid'/>
                            <div className='product-card-image'>
                                <img src='images\images\watch.jpg' alt='watch'/>
                            </div>
                            <div className='compare-product-details'>
                                <h5 className='title'>
                                Kids headphones bulk 10 pack multi colored for students
                                </h5>
                                <h6 className='price mb-3 mt-3'>$100</h6>
                                <div>
                                    <div className='product-detail'>
                                        <h5>Brand:</h5>
                                        <p>Samsung</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Type:</h5>
                                        <p>Watches</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Avlaibility:</h5>
                                        <p>In Stock</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Color:</h5>
                                        <Color/>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Size:</h5>
                                        <div className='d-flex gap-10'>
                                            <p>S</p>
                                            <p>M</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='compare-product-card position-relative'>
                            <img src='images\images\cross.svg' alt='cross' className='position-absolute cross img-fluid'/>
                            <div className='product-card-image'>
                                <img src='images\images\watch.jpg' alt='watch'/>
                            </div>
                            <div className='compare-product-details'>
                                <h5 className='title'>
                                Kids headphones bulk 10 pack multi colored for students
                                </h5>
                                <h6 className='price mb-3 mt-3'>$100</h6>
                                <div>
                                    <div className='product-detail'>
                                        <h5>Brand:</h5>
                                        <p>Samsung</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Type:</h5>
                                        <p>Watches</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Avlaibility:</h5>
                                        <p>In Stock</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Color:</h5>
                                        <Color/>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Size:</h5>
                                        <div className='d-flex gap-10'>
                                            <p>S</p>
                                            <p>M</p>
                                        </div>
                                    </div>
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

export default CompareProduct