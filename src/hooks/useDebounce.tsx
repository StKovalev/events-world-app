import { useEffect, useRef } from "react";

export const useDebounce = (callback: Function, timeout: number = 300, deps: Array<any> = []) => {
    const data = useRef({
        firstTime: true,
        clearFunc: () => {}
    })

    useEffect (() => {
        const {firstTime, clearFunc} = data.current

        const handler = setTimeout(() => {
            if (clearFunc && typeof clearFunc === 'function'){
                clearFunc()
            }

            data.current.clearFunc = callback()

        }, timeout)

        return () => {
            clearTimeout(handler)
        }
    }, [timeout, ...deps])
} 

