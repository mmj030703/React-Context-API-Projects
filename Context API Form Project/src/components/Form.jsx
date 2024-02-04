/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import {useContext, useState} from 'react';
import UserContext from '../Contexts/UserContext';

const Form = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        setUser({username, password});
    };

    return (
        <div>
            <h1>Login</h1>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" style={{marginRight: '10px', padding: "5px"}} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" style={{marginRight: "10px", padding: "5px"}} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default Form;