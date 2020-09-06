import React, { useEffect, useState } from 'react';
// import Button from '@material-ui/core/Button';

import './Post.css';
import { Button, Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {
    Link
  } from "react-router-dom";


const Post = () => {
    const [post, setPost] = useState([]);
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))
    }
    ,[]);
    return (
        <div>
            <Container>
                {
                post.map(post => 
                    <Card className="card" variant="outlined">
                        <CardContent>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p> 
                         <Link to={`/posts/${post.id}`}><Button size="small">Learn More</Button></Link>
                        </CardContent>
                    
                    </Card>
                    
                    )
                
            }
            </Container>
        </div>
    );
};

export default Post;