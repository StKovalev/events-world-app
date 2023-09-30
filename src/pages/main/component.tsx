import React from "react";
import { useGetUsersQuery } from '../../services/users'


export const Main: React.FC = () => {
    const { data, error, isLoading, isSuccess, isError } = useGetUsersQuery()


    return (
        <div>
            <h1>Main</h1>
            {isLoading &&  'Загрузка ...'}
            {isError && error.message}
            {isSuccess && data &&
                data.map((user: any) => <h2 key={user.id}>{user.name}</h2>)
            }
        </div>
    )
}