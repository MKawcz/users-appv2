import { useState } from 'react';

//Używamy hooka useState do stworzenia stanu filteredRole, który przechowuje aktualnie wybraną rolę do filtrowania.
const useFilterUsers = () => {
    const [filteredRole, setFilteredRole] = useState('');
    //Definiujemy funkcję filterUserByRole, która filtruje listę użytkowników na podstawie roli.
    const filterUserByRole = (users, role) => {
        return users.filter((user) => user.role === role);
    };
    //Hook zwraca stan filteredRole, funkcję setFilteredRole do aktualizacji tego stanu oraz funkcję filterUserByRole
    return { filteredRole, setFilteredRole, filterUserByRole };
};

export default useFilterUsers;
