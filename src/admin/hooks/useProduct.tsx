//import { useParams } from "react-router"

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getProductByIdAction } from "../actions/get-product-byId"
import { createUpdateProductAction } from "../actions/create-update-product.action";
import type { Product } from "@/interfaces/product.interface";
// import type { Product } from "@/interfaces/product.interface";



export const useProduct = (id: string) => {

    const queryClient = useQueryClient();

    const query = useQuery({
        queryKey: ['product', id],
        queryFn: () => getProductByIdAction(id),
        retry: false,
        staleTime: 100 * 60 * 5,
        enabled: !!id
    
    });


    //TODO MUTACION 
    const mutation = useMutation({
        mutationFn: createUpdateProductAction, 
        onSuccess: (product: Product) => {
            console.log('Todo salio bien', product);
            queryClient.invalidateQueries({queryKey: ['products']});
            queryClient.invalidateQueries({queryKey: ['product', { id: product.id }]});

            queryClient.setQueryData(['products', { id: product.id }], product)
        }
    })

    //TODO POR ELIMINAR

    // const handleSubmitForm = async(productLike: Partial<Product>) => {
    //     console.log(productLike)
    // }



    return{
        ...query,
        mutation
    }
}