import './post.css'
import {Link} from 'react-router-dom'
export default function post() {
  return (
    <div className='post'>
      <Link to='/post/1234'>

      <img className='postImg' src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/313251536_694843022003571_7766482947946918353_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=VxdbpEdIGTIAX-yLc1k&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfAERddTOMFU0SJqNK89XRZgoDoxStkbpunzUFsVCCnXuA&oe=63AFA521" alt="" />
      </Link>
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat"><Link className='link' to='?cat=girl'>Girl</Link></span>
          <span className="postCat"><Link className='link' to='?cat=sport'>Sport</Link></span>
          <span className="postCat"><Link className='link' to='?cat=bitch'>Bitch</Link></span>
        </div>
        <span className="postTitle">Fan MU 20 years .</span>
        <hr />
        <span className="postDate">1 hour ago</span>


      </div>
      <p className='postDesc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil illo commodi voluptas facilis earum voluptatum! Dolores adipisci ratione impedit quasi corrupti facilis repudiandae quaerat sunt dolore, fugit iusto accusantium corporis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea at recusandae quisquam maxime exercitationem eveniet voluptatem, cumque voluptas porro repellat distinctio adipisci obcaecati, rerum nesciunt esse saepe voluptates temporibus in.</p>

    </div>
  )
}
