import React, {useEffect, useState } from "react";

type BlogPostProps = {
    title: string,
    body: string,
}

export const BlogPost = () => {
    const [post, setPost] = useState<BlogPostProps>({
        title: '' ,
        body: ''
    })

    useEffect(() => {
        fetch('https://dummyjson.com/post/1')
        .then((response) => response.json())
        .then((data) => {
            setPost(data)
        })
    }, [])

    return (
        <article>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </article>
    )
}