import "../App.css"
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchPosts} from "../store/postsSlice.js";
export function PostsPage(){
    const {posts,loading,error}= useSelector(state => state.posts)
    const dispatch = useDispatch()
    useEffect(()=>{
        if(posts.length===0){
        dispatch(fetchPosts())
                    }
    },[])

    if (loading) return <h3>loading</h3>
    if (error) return <h3>{error}</h3>
    return (
        <div className='post-wrapper'>
            <h2>Post list</h2>
            <ol>
                {posts.map(post => (
                <li key={post.id} className='post-item'>
                    <Link to={`/posts/${post.id}/edit`} className="post-title">{post.title}</Link>
                    <p>{post.body}</p>
                </li>
            ))}
            </ol>
        </div>
    )
}