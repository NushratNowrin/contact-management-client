import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProviders';
import { Navigate, useLocation, useNavigation } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
     // Spinner
     if(user){
         return children;
     }
    return (
        <Navigate to='/login' 
        state={{from: location}} 
        replace={true}>
 
        </Navigate>
     );
};

export default PrivateRouter;
