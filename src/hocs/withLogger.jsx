import React, {useEffect} from "react"

const withLogger = (WrappedComponent) => {
    const WithLogger = (props) => {
        useEffect(() => {
            // Логирование когда компонент примонитровался
            console.log(`Компонент ${WrappedComponent.name} примонтировался`)
            
            return () => {
            // Логирование компонента при размонтировании    
            console.log(`Компонент ${WrappedComponent.name} размонтировался`)
            }
        }, [])

        useEffect(() => {
            // Логоирование компонента при обновлении
            console.log(`Компонент ${WrappedComponent.name} обновился`)
        })

        return <WrappedComponent {...props} />
    }

    WithLogger.displayName = `withLogger(${WrappedComponent.displayName || WrappedComponent.name})`
    return WithLogger
}

export default withLogger