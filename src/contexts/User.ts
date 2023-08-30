import React, {createContext} from 'react';

const User = {
    role: 'user',
    name: '',
}

export const UserContext = createContext(User)
