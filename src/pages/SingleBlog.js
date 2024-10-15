import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import { HiOutlineArrowLeft } from "react-icons/hi";
import blog from "../images/images/images/blog-1.jpg";
const SingleBlog = () => {
  return (
    <>
        <Meta title={"Dynamic Blog Name"}/>
        <BreadCrumb title='Dynamic Blog Name' />
        <div className='blog-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='single-blog-card'>
                            <Link to='/blogs' className='d-flex align-items-center gap-10' >
                            <HiOutlineArrowLeft className='fs-4'/> Go Back to Blogs </Link>
                            <h3 className='title'>The Ultimate Guide to Marketing Strategies to Improve Sales</h3>
                            <img src={blog} className='img-fluid w-100 my-4' alt='single-blog-1'/>
                            <p>
                            Culpa perspiciatis Quidem aliquid minima optio labore placeat dolores.
                            Sint occaecati sunt autem aut. Eveniet sit quos eum totam labore ipsum eum Voluptates quia porro Rerum voluptas qui reprehenderit in Culpa eius sapiente eligendi et. 
                            Dicta aut rerum iusto doloribus consequuntur. Enim innihil molestias estid numquam. 
                            perferendis sit reiciendis. Dolore delectus numquam laboriosam quisquam harum. Omnis non quia. Id blanditiis possimus quibusdam est nihil temporibus. 
                            dignissimos pariatur laboriosam consequatur adipisci dolor. Magni repudiandae sapiente qui. Et et enim non. aut nihil dolores aut est. 
                            Eveniet officiis quaerat ut a. Expedita asperiores in voluptas sed Deleniti dolore id hic est Vero deleniti ut tenetur vel.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SingleBlog