import { configureStore } from '@reduxjs/toolkit' 
import { setupListeners } from '@reduxjs/toolkit/query'
import { usersApi } from '../services/users'

export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware)
})

setupListeners(store.dispatch)

// import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'

// import taskReducer from '../reducers/taskReducer'

// export const store = createStore(
//     taskReducer,
//     composeWithDevTools(applyMiddleware(thunk))
// )
