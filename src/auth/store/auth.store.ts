import type { User } from '@/interfaces/user.interface';
import { create } from 'zustand';
import { loginAction } from '../actions/login.action';
import { checkAuthAction } from '../actions/check-auth.action';
import { registerAction } from '../actions/register.action';
 
type AuthStatus = 'authenticated' | 'not-authenticated' | 'checking'

interface AuthState {
    //properties
    user: User | null
    token: string | null
    authStatus: AuthStatus

    //getters
    isAdmin: () => boolean;
   
    //Actions
    login: (email: string, password: string) => Promise<boolean>
    logout:  () => void;
    checkAuthStatus: () => Promise <boolean>;
    register: (fullName: string, email: string, password: string) => Promise<boolean>;
}

export const useAuthStore = create<AuthState>()((set, get) => ({
    user: null,
    token: null,
    authStatus: 'checking', 


    isAdmin: () => {
        const roles = get().user?.roles || [];
        return roles.includes("admin");
    },

    login: async(email: string, password: string) => {

        try{

            const data = await loginAction(email, password)
            localStorage.setItem('token', data.token);

            set({user: data.user, token: data.token, authStatus: 'authenticated' });

            return true

        }catch(err){        
            console.log(err)
            localStorage.removeItem('token');
            set({user: null, token: null, authStatus:  'not-authenticated'})
        
            return false
        }
    },
    
    logout: () => {
        localStorage.removeItem('token')
        set({user: null, token: null, authStatus: 'not-authenticated'})
    },

    checkAuthStatus: async() => {
        try{
            const { user, token } = await checkAuthAction();

            set({
                user: user,
                token: token,
                authStatus: 'authenticated'
            })

            return true
        }catch(err){
            console.log(err)
            set({
                user: undefined,
                token: undefined,
                authStatus: 'not-authenticated'
            })
            return false
        }

    },
    register: async(fullName: string, email: string, password: string) => {

        try {
            const data = await registerAction(fullName, email, password)

            //localStorage.setItem('token', data);

            // set({fullName: data.user.fullName, email: data.user.email, password: data.user. authStatus: 'authenticated' });
            console.log(data)

            return true

        } catch (error) {
            console.log(error)

            return false
        }



    }



    
}))