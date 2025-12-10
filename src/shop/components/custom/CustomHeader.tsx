import { useAuthStore } from "@/auth/store/auth.store";
import { CustomLogo } from "@/components/custom/CustomLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { useRef, type KeyboardEvent} from "react";
import { Link, useParams, useSearchParams } from "react-router";





export const CustomHeader = () => {

    
    const [searchParams, setSearchParams] = useSearchParams();
    const { authStatus, isAdmin, logout } = useAuthStore();
    const { gender } = useParams();

    const inpuRef = useRef<HTMLInputElement>(null)
    
    const query = searchParams.get('query') || '';


    const handleKeySearch = (e: KeyboardEvent<HTMLInputElement>) => {
        
        if(e.key !== 'Enter') return
        
        const query = inpuRef.current?.value;
        const newSearchParams = new URLSearchParams();

        if(!query){
            newSearchParams.delete('query')   
            return;
        }else{
            
            newSearchParams.set('query', inpuRef.current?.value || '')
        }
        setSearchParams(newSearchParams) 
    }   


    return(
        <header className="w-full border-b backdrop-blur bg-slate-50 sticky top-0 z-50">
            
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between h-16 ">
                    <CustomLogo subtittle="Shop" />
                    <nav>
                        <ul className="hidden md:flex items-center space-x-8">
                            <li>
                                <Link 
                                    to='/'
                                    className={cn(`text-sm font-medium transition-colors hover:text-primary`,
                                        !gender ? "underline underline-offset-4" : ""
                                    )}
                                >
                                    Todos
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to='/gender/men'
                                    className={cn(`text-sm font-medium transition-colors hover:text-primary`, 
                                        gender === 'men' ? "underline underline-offset-4" : ""
                                    )}
                                >
                                
                                    Hombres
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to='/gender/women'
                                    className={cn(`text-sm font-medium transition-colors hover:text-primary`, 
                                        gender === 'women' ? "underline underline-offset-4" : ""
                                    )}
                                >
                                    Mujeres
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to='/gender/kid'
                                    className={cn(`text-sm font-medium transition-colors hover:text-primary`, 
                                        gender === 'kid' ? "underline underline-offset-4" : ""
                                    )}
                                >
                                    Niños
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="flex items-center space-x-4">
                        <div className="hidden md:flex items-center space-x-2">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                <Input  
                                    placeholder="Buscar productos..." 
                                    className="pl-9 w-64 h-9 bg-white" 
                                    ref={inpuRef}
                                    onKeyDown={handleKeySearch}
                                    defaultValue={query}
                                />
                            </div>
                        </div>
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Search className="h-5 w-5" />
                        </Button>
                        


                        {
                            authStatus === 'not-authenticated' ? (
                                <Link
                                    to='/auth/login'
                                >
                                    <Button
                                        variant='default'
                                        size='sm'
                                        className="ml-2 cursor-pointer"    
                                    >
                                        Login
                                    </Button>

                                </Link>
                            ): (
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="ml-2 cursor-pointer"
                                    onClick={logout}
                                >
                                    Cerrar sesión
                                </Button>
                            )
                        }


                        {
                            isAdmin() && (
                                <Link
                                    to='/admin'
                                >
                                    <Button
                                        variant='destructive'
                                        size='sm'
                                        className="ml-2 cursor-pointer"    
                                    >
                                        Admin
                                    </Button>

                                </Link>

                            ) 
                        }



                    </div>
                </div>

            </div>
        </header>
    );
}