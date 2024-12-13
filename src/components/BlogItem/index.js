import './index.css'
import {Link} from 'react-router-dom'

const BlogItem=(props)=>{
    const {details}=props
    const {id,title,imageUrl,avatarUrl,author,topic}=details

    return(
        <Link className="blog-link" to={`/blogs/${id}`}>
        <div className="blog-container-home-page">
            <img src={imageUrl} alt={`item${id}`} className="blog-img" />
            <div>
                <p className="blog-topic">{topic}</p>
                <p className="blog-title">{title}</p>
                <div className="avatar-container">
                    <img src={avatarUrl} alt={`avatar${id}`} className="blog-avatar" />
                    <p className="avatar-name">{author}</p>
                </div>
            </div>
        </div>
        </Link>
    )
}

export default BlogItem
