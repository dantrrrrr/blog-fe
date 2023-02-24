import './post.css'
import { Link } from 'react-router-dom'
export default function Post({ post }) {
  return (
    <div className='post' data-aos='fade-up'>
      <div className="imgDiv">
        <Link to={`/post/${post.slug}`}>

          <img className='postImg' alt={` About ${post.tile}`} src={post.photo} />
        </Link>
      </div>
      <div className="postInfo">
        <div className="postCats">
          {
            post.categories.map((cat, index) => (
              <span className="postCat" key={index}><Link className='link' to={`/category/${cat}`}>{cat}</Link></span>

            ))
          }
          {/* <span className="postCat"><Link className='link' to='?cat=sport'>Sport</Link></span>
          <span className="postCat"><Link className='link' to='?cat=bitch'>Bitch</Link></span> */}
        </div>
        <Link className='link' to={`/post/${post.slug}`}>

          <span className="postTitle">{`${post.title}`}</span>
        </Link>
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>


      </div>
      <p className='postDesc'>{post.desc}</p>

    </div>
  )
}
