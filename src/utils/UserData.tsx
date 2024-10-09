/*import React from 'react';

const userContext = React.createContext('user');

export default function UserProvider({ children }) {
    return (
        <userContext.Provider value={'John Doe'}>
            {children}
        </userContext.Provider>
    )
}


export function useUserProvider() {
    const userContext = React.useContext(userContext);
    if (!userContext) {
        throw new Error('useUserContext must be used within a UserContextProvider');
    }
    return context;
 }



 import React from 'react';
import { User } from '../utils/tyBucket';

type UserContext = {
    user: User | undefined;
    setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
    //userLoading: boolean;
};

export const UserContext = React.createContext<UserContext | null>(null);

// Default user structure
const defaultUser: User = {
    role: '',
    name: '',
    username: '',
    cart: [],
    search: [],
};

export default function UserContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [user, setUser] = React.useState<User | undefined>(defaultUser);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}
//this fuction is used to consume the context and helps avoid having to check if the context null or adding inports in all pages
export function useUserContext() {
    const context = React.useContext(UserContext);
    if (!context) {
        throw new Error('useUserContext must be used within a UserContextProvider');
    }
    return context;
}
 */
