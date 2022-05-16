import axios from 'axios';
import './news.css';
import *as React from "react";  
import {useState, useEffect} from "react";
import {ShowPostFromId} from './newsDetails';
    
export default function ShowPosts() {
    const [posts, setPosts] = useState([]);

    useEffect( () => { 
        async function fetchData() {
            try {
                const res = await axios.get('https://www.heise.de/extras/frontend/news/', {
                    params:{
                        limit: 4,
                        offset: 0
                    },
                    headers: {
                        'X-Heise-Token': 'zcJulkgE'
                    }
                }); 
                setPosts(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    const GetArticle = (props) => {
        console.log('clicked', props);
        
        return (<>
        <ShowPostFromId id={props}/>
        </> )
    }
    
    return <>
        <div className='news-template' >
            {posts.map((post, id) =>
            { return<>
                <div key={id} className=' news-container' onClick={() => GetArticle(post.id)}>
                    <div className='news-image-container'>
                        <img src={post.image.src} alt=""></img>
                    </div>
                    <div className='news-title-container'>
                        <span>{post.title}</span>
                    </div>
                    <div className='news-synopsis-container'>
                        <span>{post.synopsis}</span>
                    </div> 
                </div>
            </>
            })}
            // Zeilen 40-54 auskommentieren und Zeile 56 Kommentar entfernen, um NewsDetails anzuzeigen 
            {/* <ShowPostFromId id={6657824}></ShowPostFromId> */}
        </div>
    </>
}
