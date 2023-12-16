import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const UserList = ({ users }) => {
    const { loggedInUser, login } = useContext(AuthContext);

    return (
        <div>
            <h2>Lista Użytkowników</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {`ID: ${user.id}, Nazwa: ${user.name}, Email: ${user.email}, Rola: ${user.role}`}
                        <button onClick={() => login(user)}>Zaloguj się</button>
                        {loggedInUser && loggedInUser.id === user.id ? <span> (zalogowany)</span> : null}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
