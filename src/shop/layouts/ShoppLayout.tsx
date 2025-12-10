import { Outlet } from "react-router"
import { CustomHeader } from "../components/custom/CustomHeader"
import { CustomFooter } from "../components/custom/CustomFooter"



export const ShoppLayout = () => {
    return(
        <section className="min-h-screen bg-background">
            <CustomHeader />

            <Outlet />

            <CustomFooter />
            
        </section>
    )
}