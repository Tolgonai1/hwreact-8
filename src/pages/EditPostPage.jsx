import '../App.css'
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {editPost} from "../store/postsSlice.js";
import {useNavigate, useParams} from "react-router-dom";

export function EditPostPage (){
    const {id} = useParams()
    const posts = useSelector(state=>state.posts.posts)
    const [title,setTitle] = useState(posts[id].title)
    const [body,setBody] = useState(posts[id].body)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(()=>{
        console.log(posts)
    },[posts])

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(editPost({id,title,body})).then(()=>navigate('/posts'))
    }
    return (
        <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={title} name='title' onChange={(e)=>setTitle(e.target.value)}/>
                    <textarea cols="30" rows="10" value={body} name='body' onChange={(e)=>setBody(e.target.value)}/>
                <div>
                    <button>Сохранить</button>
                    <button onClick={()=> navigate(-1)} type='button'>Отменить</button>
                </div>
            </form>
        </div>
    )
}