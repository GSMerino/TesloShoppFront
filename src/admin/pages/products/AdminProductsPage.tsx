import { AdminTitle } from "@/admin/components/AdminTitle"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useProducts } from "@/shop/hooks/useProducts"
import { PlusIcon } from "lucide-react"
import { Link } from "react-router"
import { SquarePen } from 'lucide-react';

import { currencyFormatted } from "@/lib/currency-formatted"




export const AdminProductsPage = () => {

    const { data, isLoading } = useProducts();

    if(isLoading) return <div>Cargando ...</div>

    return(
        <section>
        
            <div className="flex items-center justify-between">
                
                <AdminTitle 
                    title="Productos"
                    subtitle="En esta seccion puedes administrar tus productos"
                />

                <div className="flex justify-end mb-10 gap-4">
                    <Link to="/admin/products/new">
                        <Button 
                            className="cursor-pointer"

                        >
                            <PlusIcon />
                            Nuevo Producto
                        </Button>
                    </Link>
                </div>

            </div>


            <Table className="bg-white p-10 shadow-xs border border-gray-200 mb-10 rounded-md">
                
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-center">Imagen</TableHead>
                        <TableHead className="w-[100px]">Nombre</TableHead>
                        <TableHead>Precio</TableHead>
                        <TableHead>Categoria</TableHead>
                        <TableHead>En stock</TableHead>
                        <TableHead>Tallas</TableHead>
                        
                        <TableHead className="text-center">Acciones</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>

                    {data?.products.map((product) => (

                        <TableRow key={product.id}>
                            <TableCell className="flex items-center justify-center">
                                <div className="w-20 h-20 rounded-md">
                                    <img 
                                        src={product.images[0]}
                                        alt="Product"
                                        className="w-full object-cover"
                                    />
                                </div>
                            </TableCell>
                            <TableCell className="w-[100px]">
                                <Link 
                                    to={`/admin/products/${product.id}`}
                                    className="hover:text-blue-800 underline"
                                >
                                    {product.title}
                                </Link>
                            </TableCell>
                            <TableCell>${currencyFormatted(product.price) }</TableCell>
                            <TableCell>{product.gender}</TableCell>
                            <TableCell>{product.stock}</TableCell>
                            <TableCell className="w-[100px]">{product.sizes.join(', ')}</TableCell>
                            <TableCell>
                                <Link to={`/admin/products/${product.id}`} className="flex items-center justify-center">

                                    <SquarePen />
                                    
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}


                    
                </TableBody>
            </Table>

            <CustomPagination 
                totalPages={data?.pages || 0}
            
            />
        
        </section>
    )
}