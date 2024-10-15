import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
const Home = () => {
  return (
    <>
      <section className='home-wrapper-1 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-banner position-relative'>
                <img src='images\images\main-banner-1.jpg' className='img-fluid rounded-3'
                alt='main banner'/>
                <div className='main-banner-content position-absolute'>
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
                <div className='small-banner position-relative'>
                  <img src='images\images\catbanner-01.jpg' className='img-fluid rounded-3'
                  alt='small banner'/>
                  <div className='small-banner-content position-absolute'>
                    <h4>BEST SALE</h4>
                    <h5>Laptops Max</h5>
                    <p>From $999.00 or <br/> $41.62/mo.</p>
                  </div>
                </div>
                <div className='small-banner position-relative'>
                  <img src='images\images\catbanner-02.jpg' className='img-fluid rounded-3'
                  alt='small banner'/>
                  <div className='small-banner-content position-absolute'>
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy IPad Air</h5>
                    <p>From $999.00 or <br/> $41.62/mo.</p>
                  </div>
                </div>
                <div className='small-banner position-relative'>
                  <img src='images\images\catbanner-03.jpg' className='img-fluid rounded-3'
                  alt='small banner'/>
                  <div className='small-banner-content position-absolute'>
                    <h4>15% OFF</h4>
                    <h5>Smartwatch 7</h5>
                    <p>From $999.00 or <br/> $41.62/mo.</p>
                  </div>
                </div>
                <div className='small-banner position-relative'>
                  <img src='images\images\catbanner-04.jpg' className='img-fluid rounded-3'
                  alt='small banner'/>
                  <div className='small-banner-content position-absolute'>
                    <h4>FREE ENGRAVING</h4>
                    <h5>AirPods Max</h5>
                    <p>From $999.00 or <br/> $41.62/mo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='services d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images\images\service.png' alt='services'/>
                  <div>
                    <h6>Free Shipping</h6>
                    <p className='mb-0'> From all orders over $10</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images\images\service-02.png' alt='services'/>
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className='mb-0'>Save upto 25% OFF </p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images\images\service-03.png' alt='services'/>
                  <div>
                    <h6>Support 24/7</h6>
                    <p className='mb-0'>Shop with an expert</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images\images\service-04.png' alt='services'/>
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className='mb-0'>Get Factory direct price</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images\images\service-05.png' alt=''/>
                  <div>
                    <h6>Secure Payments</h6>
                    <p className='mb-0'>100% Protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex flex-wrap justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images\images\camera.jpg' alt='cameras'/>
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images\images\tv.jpg' alt='cameras'/>
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Headphone</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images\images\headphone.jpg' alt='cameras'/>
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images\images\camera.jpg' alt='cameras'/>
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images\images\camera.jpg' alt='cameras'/>
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images\images\tv.jpg' alt='cameras'/>
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Headphone</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images\images\headphone.jpg' alt='cameras'/>
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images\images\camera.jpg' alt='cameras'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='featured-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Featured Collection</h3>
            </div>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
        </div>
      </section>
      <section className='famous-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='images\images\famous-1.webp' className='img-fluid' alt='famous'/>
                <div className='famous-content position-absolute'>
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399or $16.62/mo. for 24 mo.*</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='images\images\famous-2.webp' className='img-fluid' alt='famous'/>
                <div className='famous-content position-absolute'>
                  <h5 className='text-dark'>Studio Display</h5>
                  <h6 className='text-dark'>600 nits of brightness.</h6>
                  <p className='text-dark'>27-inch 5K Retina display</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='images\images\famous-3.webp' className='img-fluid' alt='famous'/>
                <div className='famous-content position-absolute'>
                  <h5 className='text-dark'>Smartphones</h5>
                  <h6 className='text-dark'>Smartphone 13 Pro.</h6>
                  <p className='text-dark'>Now in Green. From $999.00 or $41.62/mo.
                  for 24 mo. Footnote*</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='images\images\famous-4.webp' className='img-fluid' alt='famous'/>
                <div className='famous-content position-absolute'>
                  <h5 className='text-dark'>Home Speakers</h5>
                  <h6 className='text-dark'>Room-filling Sound.</h6>
                  <p className='text-dark'>From $699 or $116.58/mo. for 12 mo.*</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='special-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Special Products</h3>
            </div>
          </div>
          <div className='row'>
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
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
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
        </div>
      </section>
      <section className='marque-wrapper py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='marque-inner-wrapper card-wrapper'>
              <Marquee className='d-flex'>
                <div className='mx-5 w-25'>
                  <img src='images\images\brand-01.png' alt='brand'/>
                </div>
                <div className='mx-5 w-25'>
                  <img src='images\images\brand-02.png' alt='brand'/>
                </div>
                <div className='mx-5 w-25'>
                  <img src='images\images\brand-03.png' alt='brand'/>
                </div>
                <div className='mx-5 w-25'>
                  <img src='images\images\brand-04.png' alt='brand'/>
                </div>
                <div className='mx-5 w-25'>
                  <img src='images\images\brand-05.png' alt='brand'/>
                </div>
                <div className='mx-5 w-25'>
                  <img src='images\images\brand-06.png' alt='brand'/>
                </div>
                <div className='mx-5 w-25'>
                  <img src='images\images\brand-07.png' alt='brand'/>
                </div>
                <div className='mx-5 w-25'>
                  <img src='images\images\brand-08.png' alt='brand'/>
                </div>
              </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className='blog-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Latest Blogs</h3>
            </div>
           
          </div>
          <div className='row'>
            <div className='col-3'>
            <BlogCard/>
            </div>
            <div className='col-3'>
            <BlogCard/>
            </div>
            <div className='col-3'>
            <BlogCard/>
            </div>
            <div className='col-3'>
            <BlogCard/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home