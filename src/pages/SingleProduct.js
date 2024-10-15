import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color'
import { FaRegHeart } from "react-icons/fa";
import { GoGitCompare } from "react-icons/go";
import { Link } from 'react-router-dom';


const SingleProduct = () => {
    const props = {width: 400, height: 600, zoomWidth: 600, img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-ferarcosn-190819.jpg&fm=jpg"};
    const[orderedProduct, setorderedProduct]=useState(true);
    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
      }
  return (
    <>
        <Meta title={"Single Product"}/>
        <BreadCrumb title='Single Product' />
        <div className='main-product-wrapper py-5 home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='main-prod-image'>
                            <div>
                            <ReactImageZoom {...props} />
                            </div>
                        </div>
                        <div className='other-prod-images d-flex flex-wrap gap-15'>
                            <div><img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-ferarcosn-190819.jpg&fm=jpg' alt='' className='img-fluid'/></div>
                            <div><img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-ferarcosn-190819.jpg&fm=jpg' alt='' className='img-fluid'/></div>
                            <div><img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-ferarcosn-190819.jpg&fm=jpg' alt='' className='img-fluid'/></div>
                            <div><img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-ferarcosn-190819.jpg&fm=jpg' alt='' className='img-fluid'/></div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='main-prod-details'>
                            <div className='border-bottom'>
                                <h3 className='title'>SwapME Braided Nylon Woven Smart Watch</h3>
                            </div>
                            <div className='border-bottom py-3'>
                                <p className='price'>$ 100</p>
                                <div className='d-flex align-items-center gap-10'>
                                <ReactStars count={5} value={3} edit={false} size={24} activeColor="#ffd700" />
                                <p className='mb-0 t-review'>(2 Reviews)</p>
                                </div>
                                <a href='#review' className='review-btn'>Write a Review</a>
                            </div>
                            <div className=' py-3'>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='prod-heading'>Type :</h3><p className='prod-data'>Watch</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='prod-heading'>Brand :</h3><p className='prod-data'>Apple</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='prod-heading'>Category :</h3><p className='prod-data'>Watch</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='prod-heading'>Tags :</h3><p className='prod-data'>Watch</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='prod-heading'>Avlaibility :</h3><p className='prod-data'>In Stock</p>
                                </div>
                                <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                    <h3 className='prod-heading'>Size :</h3>
                                    <div className='d-flex flex-wrap gap-15'>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>S</span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>M</span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>XL</span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>XXL</span>
                                    </div>
                                </div>
                                <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                    <h3 className='prod-heading'>Colors :</h3>
                                    <Color/>
                                </div>
                                <div className='d-flex gap-15 align-items-center flex-row mt-2 mb-3'>
                                    <h3 className='prod-heading'>Quantity :</h3>
                                    <div className=''>
                                        <input 
                                        type='number' 
                                        name='' 
                                        min={1} 
                                        max={10} 
                                        className='form-control' 
                                        style={{width:"70px"}} 
                                        id=''
                                        />
                                    </div>
                                    <div className='d-flex align-items-center gap-30 ms-5'>
                                        <button className='button border-0' type='submit'>Add to Cart</button>
                                        <button className='button signup'>Buy It Now</button>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <div>
                                        <a href=''><GoGitCompare className='fs-5 me-2'/>Add to Compare</a>
                                    </div>
                                    <div>
                                        <a href=''><FaRegHeart className='fs-5 me-2'/>Add to Wishlist</a>
                                    </div>
                                </div>
                                <div className='d-flex gap-10 flex-column my-3'>
                                    <h3 className='prod-heading'>Shipping & Returns</h3>
                                    <p className='prod-data'>Free shipping and returns available on all orders!<br/>
                                    {' '}We ship all US domestic orders within{' '}
                                    <b>5-10 business days!</b></p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-3'>
                                    <h3 className='prod-heading'>Product Link:</h3>
                                    <a href="javascript:void(0);" 
                                        onClick={()=>{
                                        copyToClipboard("https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-ferarcosn-190819.jpg&fm=jpg");
                                        }}>
                                        Copy Product Link
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='description-wrapper py-5 home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                    <h4>Description</h4>
                        <div className='bg-white p-3'>
                            <p>
                                These cases are perfectly simple and easy to distinguish. 
                                In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. 
                                But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. 
                                The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, 
                                or else he endures pains to avoid worse pains."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className='reviews-wrapper home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 id='review'>Reviews</h3>
                        <div className='review-inner-wrapper'>
                            <div className='review-head d-flex justify-content-between align-items-end'>
                                <div >
                                    <h4 className='mb-2'>Customer Reviews</h4>
                                    <div className='d-flex align-items-center gap-10'>
                                    <ReactStars count={5} value={3} edit={false} size={24} activeColor="#ffd700" />
                                    <p className='mb-0'>Based on 2 Reviews</p>
                                    </div>
                                </div>
                                {
                                    orderedProduct&&(
                                        <div>
                                            <a className='text-dark text-decoration-underline' href=''>Write a Review</a>
                                        </div>
                                    )
                                }
                            </div>
                            <div  className='review-form py-4'>
                                <h4>Write a Review</h4>
                                <form action='' className='d-flex flex-column gap-15'>
                                    <ReactStars count={5} value={3} edit={true} size={24} activeColor="#ffd700" />
                                    <div>
                                    <textarea name='' id='' className='w-100 form-control' cols="30" rows="4" placeholder='Comments'></textarea>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                    <button className='button border-0'>Submit Review</button>
                                    </div>
                                </form>
                            </div>
                            <div className='reviews mt-4'>
                                <div className='review'>
                                    <div className='d-flex gap-10 align-items-center'>
                                        <h6 className='mb-0'>Sahil</h6>
                                        <ReactStars count={5} value={3} edit={false} size={24} activeColor="#ffd700" />
                                    </div>
                                    <p className='mt-3'>Good Product</p>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </section>
        <section className='popular-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Popular Products</h3>
            </div>
          </div>
          <div className='row'>
            <ProductCard/>
          </div>
        </div>
      </section>
    </>
  )
}

export default SingleProduct