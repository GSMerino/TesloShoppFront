import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomJumbotron } from "@/shop/components/custom/CustomJumbotron"
import { ProductGrid } from "@/shop/components/ProductGrid"
import { useProducts } from "@/shop/hooks/useProducts"
import { useParams } from "react-router"




export const GenderPage = () => {

    const { gender } = useParams()
    const genderLabel = gender === 'men' ? 'Hombres' : gender === 'women' ? 'Mujeres' : 'Niños';

    const { data } = useProducts();

    return(

        <section>
        
            <CustomJumbotron 
                title={`Productos para ${genderLabel}`} 
                subtitle="Ropa minimalista y elegante inspirada en el diseño futurista de Tesla. 
                Calidad premium para un estilo atemporal." 
            
            /> 
            
            <ProductGrid products={data?.products || []} />
            
            <CustomPagination totalPages={data?.pages || 1}/>

            
        </section>
    )
}