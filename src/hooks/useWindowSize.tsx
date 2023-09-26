import { useState, useEffect} from 'react'

type WindowSizeResult = {
    width: number
    height: number
}

export const useWindowSize = (): WindowSizeResult => {
    const [windowSize, setWindowSize] = useState<WindowSizeResult>({
        width: window.innerWidth,
        height: window.innerHeight
    })

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight 
            })
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return windowSize
}