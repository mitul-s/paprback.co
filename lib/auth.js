import React, { createContext, useState, useContext, useEffect } from 'react'
import router from 'next/router'
import Cookies from 'js-cookie'
import { apipost } from '@/utils/fetch';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const auth = useProvideAuth();
    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}

function useProvideAuth() {

    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);

      const handleUser = async (rawUser) => {
        if(rawUser) {
          const user = await formatUser(rawUser);
          const { token, ...userWithoutToken } = user;

          setUser(user);
          const userString = JSON.stringify(user);

          
          Cookies.set('paprback-auth', userString, { expires: 365 });
          
          setLoading(false);
          
          return user;
        } else {
          setUser(false);

          Cookies.remove('paprback-auth');

          setLoading(false);

          return false;
        }
      }

      const readCookie = () => {
        const authState = Cookies.get('paprback-auth');
        if(authState) {
          const parsedUser = JSON.parse(authState);
          setUser(parsedUser)
        } else {
          setUser(false);
        }
      }

      useEffect(() => {
        readCookie();
      }, [])


      const login = async (data) => {
        setLoading(true);
        return apipost.post('/login', data)
        .then((res) =>{
          handleUser(res.data);
          router.push('/');
        })
      }

      const logout = () => {
        handleUser(false);
        router.push('/');
      }
  
    
    return {
      user,
      loading,
      login,
      logout
    };
}

const formatUser = async (user) => {
  return {
      uid: user.user_id,
      token: user.access_token,
      expiry: user.expiry,
      username: user.username,
  }
}