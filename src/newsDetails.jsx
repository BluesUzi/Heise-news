import axios from 'axios';
import './newsDetails.css';
import React, {useState, useEffect, useCallback} from "react";

export const ShowPostFromId = (props) => {
    const [post, setPost] = useState(false);
    const ident = props.id;

    const loadArticle = useCallback(async () => {
        console.log('yas');
        let res = await axios.get('https://www.heise.de/extras/frontend/news/'+ident, {
            headers: {
                'X-Heise-Token': 'zcJulkgE'
            }
        }); 
        setPost(res.data);
    }, [ident]) 

    useEffect(() => {
        loadArticle()
    }, [loadArticle]) 

    if (!post) return false 

    return <>
        <div className='news-container'>
            <div className='post-title-container'>
                <span>{post.title}</span>
            </div>
            <div className='post-synopsis-container'>
                <span>{post.synopsis}</span>
            </div>
            <div className='post-image-container'>
                <img src={post.image.src} alt=""></img>
            </div>
            <div className='post-pubDate-container'>
                <span>{post.meta.pubDate}</span>
            </div>
            <div className='post-author-container'>
                <span>von {post.meta.author}</span>
            </div>
            <div className='post-content-container'>
                <span>{post.content}</span>
            </div>
        </div>
    </>
}




