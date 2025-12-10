import { tesloApi } from "@/api/tesloApi"
import type { AuthResponse } from "../interfaces/auth.response";




export const registerAction = async( fullName: string, email: string, password: string) => {


    
    
    try {
        
        const { data } = await tesloApi.post<AuthResponse>('/auth/register', {
            fullName: fullName,
            email: email,
            password: password
        })
        console.log(data);
        
    } catch (err) {
        console.log(err)
        throw err
    }

} 