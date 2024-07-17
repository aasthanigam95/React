import React, { useState } from 'react';

function UserProfile() {
  const [user, setUser] = useState({ name: '', age: 0 });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target);
    console.log(name,value);
    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={user.age}
        onChange={handleChange}
      />
      <h2>{user.name}, {user.age} years old</h2>
    </div>
  );
}

export default UserProfile;