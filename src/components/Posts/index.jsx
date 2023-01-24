import './styles.css'
import { PostCard } from '../../components/PostCard';

export const Posts = ({ posts }) => {
    
    return ( 
        <div className='posts'>
            {posts.map(posts => (
                <PostCard key={posts.id} post={posts} />
            ))}
        </div>
    )
}