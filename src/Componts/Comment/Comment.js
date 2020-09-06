import React, { useEffect, useState } from 'react';
import './Comment.css';
import { useParams } from 'react-router-dom';


const Comment = () => {
    const {id} = useParams();
    const [comment, setComment] = useState([]);
    // const [image, setImage] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res => res.json())
        .then(data => setComment(data))
       
    },[])
    return (
        <div>
            <h5>Comment Box</h5>
        {
             comment.map(comment => 
                
                    // <img src={`https://loremflickr.com/600/400?random=${id}`} alt="" srcset=""/>
             
             <div className="comment">
                 <div className="img">
                 <img src={`https://loremflickr.com/600/400?random=${id}`} alt="" srcset=""/>
                 </div>
                 <div className="content">
                    <p><strong>Name:</strong>{comment.name}</p>
                    <p><strong>Email:</strong> {comment.email}</p>
                    <p><strong>comment:</strong> {comment.body}</p>
                   
                 </div>
                 </div>
                
            
             )
        }
            {/* <hr/>
        <div className="comment">
            
            <div className="img">
                <img src={`https://loremflickr.com/600/400?random=${id}`} alt="" srcset=""/>
            </div>
            <div className="content">
                <h5>Comment Box</h5>
                <p>Name: {comment.name}</p>
                <p>Email: {comment.email}</p>
                <p>comment: {comment.body}</p>
            </div>
        </div> */}
        </div>
    );
};

export default Comment;