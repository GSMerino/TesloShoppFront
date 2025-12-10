import { Link } from "react-router"

interface CustomLogoProps {
    subtittle?: string;
}

export const CustomLogo = ({ subtittle }: CustomLogoProps) => {



    return(
        <Link to='/' className="flex items-center whitespace-nowrap">
            <span
                className="font-montserrat font-bold text-xl m-0 whitespace-nowrap"
            >
                Teslo | 

            </span>
            <p
                className="text-muted-foreground m-0 px-2 whitespace-nowrap"
            >
                {subtittle}
            </p>
        </Link>
        
    )
}