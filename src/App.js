import React, { useState, useEffect } from 'react';
import UserList from './UserList';
import FilterUsers from './FilterUsers';
import { AuthProvider, useAuth } from './AuthProvider';
import jsonData from './users.json';

const App = () => {
    const { login } = useAuth();
    const [originalUsers, setOriginalUsers] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setOriginalUsers(jsonData.users);
        setUsers(jsonData.users);
        console.log(jsonData.users);
        login(jsonData.users[0]); // Zaloguj pierwszego użytkownika automatycznie
    }, [login]);

    return (
        <AuthProvider>
            <div>
                <h2>Witaj w Szuflandii!</h2>
                <FilterUsers users={originalUsers} setUsers={setUsers} />
                <UserList users={users} />
            </div>
        </AuthProvider>
    );
};

export default App;
