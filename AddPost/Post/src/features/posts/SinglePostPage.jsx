import PostAuthor from './PostAuthor'
import ReactionButtons from './ReactionButton';
import TimeAgo from './TimeAgo';



const SinglePostPage = () => {

    return (
        <article>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <p className='postCredit'>
                  <PostAuthor userId={post.userId} />
                  <TimeAgo timestamp={post.date}/>
                </p>
                <ReactionButtons post={post}/>
            </article>
      )
}

export default SinglePostPage