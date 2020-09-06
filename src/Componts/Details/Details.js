import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import './Details.css'

const Details = () => {
    const {id} = useParams();
    const [details, setDetails] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setDetails(data))
    },[])
    return (
        <div>
            <Container>
                <div className="box">
                    <h1>Post Number {id}</h1>
                    <h4>UserId: {details.userId}</h4>
                    <h3>Title: {details.title}</h3>
                    <p>Body: {details.body}</p>
                    <Comment></Comment>
                </div>
            </Container>
        </div>
    );
};

export default Details;