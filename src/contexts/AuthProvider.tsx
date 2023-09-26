// import { createContext, useState} from 'react'

// export const AuthContext = createContext(null)

// export const AuthProvider = ({children}: {children: any}) => {
//     const [ user, setUser ]= useState(null)
    
//     const loginUser = (newUser, callback) => {
//         // запрос на backend в базу о наличии такого пользователя

//         setAuth(newUser)
//         callback()
//     }

//     const logoutUser =  (callback) => {
//         setAuth(null)
//         callback()
//     }

//     const initState = {user, loginUser, logoutUser}

//     return <AuthContext.Provider value={initState}>
//             {children}
//         </AuthContext.Provider>
// }
