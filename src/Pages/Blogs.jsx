import React from 'react';
import { Link } from 'react-router-dom';
import blogsData from "../Utils/blogsData"
const Blogs = () => {
    return (
        <>
            {/* Top Section */}
            <section className="blogs1">
                <div className="container">
                    <h1>Thoughts & Guidance</h1>
                    <p> Explore the writings of Maulana Zameer, where Islamic teachings, intellectual insight, and moral guidance come together to inspire positive change and spiritual awareness in society. </p>
                </div>
            </section>
            <section className="blogs2">
                <div className="container-fluid">
                    <div className="content-box">
                        <h1>Our Intellectual and Spiritual Legacy</h1>
                        <p>The purpose of this blog section is to preserve the intellectual journey, historical facts and intellectual positions of Maulana Zameer and other scholars. Here you will find all the important articles ranging from the identity of Abbottabad Hazara to academic training and historical discussions that will guide you intellectually.</p>
                    </div>
                    <div className="row">
                        {blogsData.map((blog) => (
                            <div className="col-lg-2 col-md-4 my-3 d-flex align-items-stretch" key={blog.id}>
                                <div class="card">
                                    <img src={blog.img} className="img-thumbnail img-fluid" alt="Blog No 01" />
                                    <div class="card-body">
                                        <h6>{blog.title}</h6>
                                        <p>{blog.shortDesc}</p>
                                        <Link to={`/blog/${blog.id}`} className="btn">Read More </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};
export default Blogs;