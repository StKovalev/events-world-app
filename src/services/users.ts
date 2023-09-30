import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query"

export const usersApi = createApi({
    reducerPath: 'users',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => `users`
        }),
        getUser: builder.query({
            query: (id) => `users\${id}`
        })
    })
})

export const { useGetUsersQuery: any  } = usersApi  