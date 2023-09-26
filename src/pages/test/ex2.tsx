import React, {useEffect, useState } from "react"

export const ProductCard = ({id}: {id: string}) => {
    const [product, setProduct] = useState('Инфа')

    useEffect(() => {
        if(id) {
            console.log('w')
        }
    }, [])

    if(!id) {
        return (<div>Нет продукта</div>) 
    }

    return (<>
        <section> 
            <h1>Описание продукта</h1>
        </section>
    </>)
}