import React, {useCallback, useEffect, useState } from "react";

export const Post = () => {
    const [id, setId] = useState(1)

    return (
        <div>
            <button onClick={ () => setId(Math.floor(Math.random() * 100))}>
                Показать запись
            </button>

            <PostBody id={id}/>
        </div>
    )
}


type PostBodyProps = {
    id: number
}

export const PostBody = ({id}: PostBodyProps) => {
    const [text, setText] = useState('')

    console.log('id ===', id)

    useEffect(() => {
        const controller = new AbortController()

        fetch(`https://dummyjson.com/post/${id}`)
        .then((response) => response.json())
        .then((data) => {
            setText(data.body)
        })

        return () => controller.abort()

    }, [id])

    return (
        <p>{text}</p>
    ) 
}


