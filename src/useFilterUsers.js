import { useState } from 'react';

const useFilterUsers = () => {
    const [filteredRole, setFilteredRole] = useState('');

    const filterUserByRole = (users, role) => {
        return users.filter((user) => user.role === role);
    };

    return { filteredRole, setFilteredRole, filterUserByRole };
};

export default useFilterUsers;
