import React from 'react'
import { useParams,useLocation } from 'react-router-dom'

function User() {
    // const pravallika = useParams();
    // console.log(pravallika);
    // console.log(pravallika.id);
    // console.log(pravallika.name);
    const {id,name} = useParams(); 
    const queryParams = useLocation();
    console.log(queryParams); 
    const search = new URLSearchParams(queryParams.search);
    console.log(search);
    const category = search.get('category');
    console.log(category);
    const posts = search.get('posts');
    console.log(posts);

    return (
        <div>
            <h1>user details</h1>
            <h3>id: {id}</h3>
            <h3>name: {name}</h3>
            <h3>category: {category}</h3>
            <h3>posts: {posts}</h3>
        </div>
    )
}

export default User
