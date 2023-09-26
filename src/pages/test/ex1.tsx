import { useState } from "react"

export const Counter = () => {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(prev => {
            console.log(0)
            
            return prev +1
        })
        
        const fun = true

        if( fun ) {
            console.log(0)
        } else {
            console.log(0)
        }

        fun ? console.log(1) : console.log(0)

        // this.setState({adasdasd: 'sads'}, () => {
            
        //     this.setState()
        // })
    }

    return (
        <>
            <button onClick={handleClick}> +1 </button>

            <h1>Счетчик: {count}</h1>
        </>
    )
}