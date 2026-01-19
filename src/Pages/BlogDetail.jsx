import React from 'react';
import { useParams, Link } from 'react-router-dom';
import blogsData from '../Utils/blogsData';
const BlogDetail = () => {
    const { id } = useParams(); // id from URL (string)
    // Debugging: print type and value
    console.log('URL id:', id, 'type:', typeof id);
    // Find the blog (use string comparison)
    const blog = blogsData.find((item) => {
        console.log('Checking item.id:', item.id, 'with id:', id);
        return item.id === id; // compare as string
    });
    if (!blog) {
        console.log('Blog not found! URL id:', id);
        return (
            <div>
                <h2>Blog not found</h2>
                <Link to="/Blogs">Go Back</Link>
            </div>
        );
    }
    return (
        <>
            <h1>Rizwan</h1>
            <img src={blog.img} alt={blog.title} className='w-100' />
            <section className="blogdetails">
                <div className="container-fluid mt-5">
                    {/* <h1>{blog.title}</h1> */}
                    <div className="rich-text" dangerouslySetInnerHTML={{ __html: blog.content }} />
                    <Link className='btn' to="/Blogs">Back to Blogs</Link>
                </div>
            </section>
        </>
    );
};

export default BlogDetail;