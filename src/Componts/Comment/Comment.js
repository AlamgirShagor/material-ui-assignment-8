import React, { useEffect, useState } from 'react';
import './Comment.css';
import { useParams } from 'react-router-dom';

const Comment = () => {
    const {id} = useParams();
    const [comment, setComment] = useState([]);
    // const [image, setImage] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
        .then(res => res.json())
        .then(data => setComment(data))
    },[])
    return (
        <div>
            <hr/>
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
        </div>
        </div>
    );
};

export default Comment;