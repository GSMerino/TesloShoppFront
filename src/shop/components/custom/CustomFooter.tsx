import { CustomLogo } from "@/components/custom/CustomLogo"


export const CustomFooter = () => {


    return(
        <footer className="border-t py-12 px-4 lg:px-8 mt-16">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    <div>
                        <CustomLogo subtittle="Shop"/>
                        <p className="text-sm text-muted-foreground">
                            Ropa inspirada en el diseño minimalista y la innovación de Tesla.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-medium mb-4">Productos</h4>
                        <ul>
                            <li>Camisetas</li>
                            <li>Sudaderas</li>
                            <li>Chaquetas</li>
                            <li>Accesorios</li>
                        </ul>
                    
                    </div>

                    <div>
                        <h4>Empresa</h4>
                        <ul>
                            <li>Sobre nosotros</li>
                            <li>Sustentabilidad</li>
                            <li>Carreras</li>
                            <li>Prensa</li>
                        </ul>
                    </div>



                </div>

                <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Tesla Style. Todos los derechos reservados.</p>
                </div>

            </div>
        </footer>
    )
}