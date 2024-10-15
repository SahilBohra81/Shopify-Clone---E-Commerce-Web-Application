import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import prodcompare from "../images/images/images/prodcompare.svg";
import wish from "../images/images/images/wish.svg";
import wishlist from "../images/images/images/wishlist.svg";
import watch from "../images/images/images/watch.jpg";
import watch1 from "../images/images/images/watch-1.avif";
import addcart from "../images/images/images/add-cart.svg";
import view from "../images/images/images/view.svg";
const ProductCard = (props) => {
    const {grid} = props;
    let location = useLocation();
    
  return (
    <>
        <div className={` ${location.pathname == "/store" ? `gr-${grid}`: "col-3"}`}>
            <Link to=':id' className='product-card position-relative'>
                <div className='wishlist-icon position-absolute'>
                    <Link>
                    <img src={wish} alt='wishlist'/>
                    </Link>
                </div>
                <div className='product-image'>
                    <img src={watch} className='img-fluid' alt='product image'/>
                    <img src={watch1} className='img-fluid' alt='product image'/>
                </div>
                <div className='product-details'>
                    <h6 className='brand'>Havells</h6>
                    <h5 className='product-title'>
                    Kids headphones bulk 10 pack multi colored for students
                    </h5>
                    <ReactStars count={5} value={3} edit={false} size={24} activeColor="#ffd700" />
                    <p className={`description ${grid == 12 ? "d-block" : "d-none"}`}>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt...
                    </p>
                    <p className='price'>$100.00</p>
                </div>
                <div className='action-bar position-absolute'>
                    <div className='d-flex flex-column gap-15'>
                        <Link>
                        <img src={prodcompare} alt='prodcompare'/>
                        </Link>
                        <Link>
                        <img src={view} alt='view'/>
                        </Link>
                        <Link>
                        <img src={addcart} alt='addcart'/>
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
        <div className={` ${location.pathname == "/store" ? `gr-${grid}`: "col-3"}`}>
            <Link className='product-card position-relative'>
                <div className='wishlist-icon position-absolute'>
                    <Link>
                    <img src={wish} alt='wishlist'/>
                    </Link>
                </div>
                <div className='product-image'>
                    <img src={watch} className='img-fluid' alt='product image'/>
                    <img src={watch1} className='img-fluid' alt='product image'/>
                </div>
                <div className='product-details'>
                    <h6 className='brand'>Havells</h6>
                    <h5 className='product-title'>
                    Kids headphones bulk 10 pack multi colored for students
                    </h5>
                    <ReactStars count={5} value={3} edit={false} size={24} activeColor="#ffd700" />
                    <p className={`description ${grid == 12 ? "d-block" : "d-none"}`}>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt...
                    </p>
                    <p className='price'>$100.00</p>
                </div>
                <div className='action-bar position-absolute'>
                    <div className='d-flex flex-column gap-15'>
                        <Link>
                        <img src={prodcompare} alt='prodcompare'/>
                        </Link>
                        <Link>
                        <img src={view} alt='view'/>
                        </Link>
                        <Link>
                        <img src={addcart} alt='addcart'/>
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
    </>
    
  )
}

export default ProductCard