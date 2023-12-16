import React, { useRef, useEffect } from 'react';
import useFilterUsers from './useFilterUsers';

//FilterUsers przyjmuje users i setUsers jako propsy. users to lista użytkowników do filtrowania, a setUsers to funkcja do aktualizacji tej listy.
const FilterUsers = ({ users, setUsers }) => {
    const { filteredRole, setFilteredRole, filterUserByRole } = useFilterUsers();
    //Używamy useRef do przechowywania referencji do pola wyszukiwania.
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

    //useEffect jest używany do automatycznego wywołania updateFilteredUsers przy zmianie roli lub listy użytkowników.
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
