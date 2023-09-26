
import { useLocation, Navigate } from 'react-router-dom'


export const RequireAuth = ({children}: {children: any}) => {
    const location = useLocation();
    console.log(location)

    const isAuth = false

    if(!isAuth) {
        return <Navigate to='/about' />
    }

    return children
}