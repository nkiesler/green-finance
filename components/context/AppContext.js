import React, { createContext, useState, useEffect } from 'react';
import decode from 'jwt-decode';
import { useRouter } from 'next/router'


export const AppContext = createContext();

const AppContextProvider = props => {

	const router = useRouter();

	const [user, setUser] = useState(false);

	const loggedIn = () => {
        const token = getToken()
        return !!token && !isTokenExpired(token)
    }

    const getToken = () => {
        return localStorage.getItem('token')
    }

	useEffect(() => {

		if (loggedIn) {
		 	const userObj = localStorage.getItem("token") ? decode(localStorage.getItem("token")) : false;
		 	setUser(userObj)
		} else {
			logout()
		}

	}, []);

	const authenticate = token => {
	    localStorage.setItem("token", JSON.stringify(token))
		const userObj = decode(token);
		setUser(userObj);
		router.push('/dashboard')
	}

	const logout = () => {
	    router.push('/');
		localStorage.removeItem("token");
		setUser(false);
	}

	const isTokenExpired = token => {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            }
            else
                return false;
        }
        catch (err) {
            return false;
        }
    }

	return (
		<AppContext.Provider
			value={{
				user,
				authenticate,
				logout
			}}
		>
			{props.children}
		</AppContext.Provider>
	)
}

export default AppContextProvider;