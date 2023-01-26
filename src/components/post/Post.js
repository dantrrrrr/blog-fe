import './post.css'
import {Link} from 'react-router-dom'
export default function Post({post}) {
  return (
    <div className='post'>
      <Link to={`/post/${post.slug}`}>

      <img className='postImg' alt="this is a post img" src={post.photo} />
      </Link>
      <div className="postInfo">
        <div className="postCats">
          {
            post.categories.map(cat=>(
              <span className="postCat"><Link className='link' to='?cat=girl'>{cat}</Link></span>

            ))
          }
          {/* <span className="postCat"><Link className='link' to='?cat=sport'>Sport</Link></span>
          <span className="postCat"><Link className='link' to='?cat=bitch'>Bitch</Link></span> */}
        </div>
        <span className="postTitle">{post.title}</span>
        <span className="postDate">{new Date(post.createdAt).toDateString() }</span>


      </div>
      <p className='postDesc'>{post.desc}</p>

    </div>
  )
}
