import React, { useRef, useEffect } from 'react';
import useFilterUsers from './useFilterUsers';

const FilterUsers = ({ users, setUsers }) => {
    const { filteredRole, setFilteredRole, filterUserByRole } = useFilterUsers();
    const searchInputRef = useRef(null);

    const updateFilteredUsers = () => {
        let filteredUsers = users;

        if (filteredRole) {
            filteredUsers = filterUserByRole(filteredUsers, filteredRole);
        }

        if (searchInputRef.current) {
            const searchTerm = searchInputRef.current.value.toLowerCase();
            filteredUsers = filteredUsers.filter((user) => user.name.toLowerCase().includes(searchTerm));
        }

        setUsers(filteredUsers);
    };

    useEffect(() => {
        updateFilteredUsers();
    }, [filteredRole, users]);

    return (
        <div>
            <h3>Filtruj użytkowników</h3>
            <label>
                Rola:
                <select value={filteredRole} onChange={(e) => setFilteredRole(e.target.value)}>
                    <option value="">Wszystkie</option>
                    <option value="Administrator">Administrator</option>
                    <option value="User">User</option>
                </select>
            </label>
            <label>
                Szukaj:
                <input type="text" ref={searchInputRef} onChange={updateFilteredUsers} />
            </label>
        </div>
    );
};

export default FilterUsers;
