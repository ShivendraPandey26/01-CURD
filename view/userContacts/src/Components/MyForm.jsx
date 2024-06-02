import React, { useState } from 'react';

const MyForm = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        if (user.name.length < 3) {
            alert('Name must be at least 3 characters long.');
            return;
        }

        if (!user.email.includes('@')) {
            alert('Email must be a valid email address.');
            return;
        }

        console.log(user);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    return (
        <div style={{ height: "100vh", width: "100vw", display: 'flex', justifyContent: 'center', margin: '200px 0 0' }}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label><br />
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        required
                    /><br />
                </div>
                <div>
                    <label htmlFor="email">Email:</label><br />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        required
                    /><br />
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default MyForm;
