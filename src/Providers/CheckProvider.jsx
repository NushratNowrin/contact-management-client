import { useState } from 'react';
import { createContext } from 'react';

export const AuthContext = createContext(null)

const CheckProvider = ({children}) => {
    const [checked, setChecked] = useState(false);
    const [loading, setLoading] = useState(true);
    const handleChecked = () =>{
        setLoading(true)
        setChecked(!checked); 
    }


    const authInfo ={
        checked,
        handleChecked,
        loading
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default CheckProvider;