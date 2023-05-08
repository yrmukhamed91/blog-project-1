import React from 'react';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
    const user = useSelector(state => state.user.currentUser)
    return (
        <div>
            <h1>Ваш email: {user.email}</h1>
            <p>Ваш login: {user.login}</p>
            <p>Ваша пароль {user.role}</p>
        </div>
    );
};

export default ProfilePage;