import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router";
import { HomePage } from "../shop/pages/home/HomePage";
import { ShoppLayout } from "../shop/layouts/ShoppLayout";
import { ProductDetailPage } from "../shop/pages/Product/ProductDetailPage";
import { GenderPage } from "../shop/pages/Gender/GenderPage";
import { LoginPage } from "../auth/pages/login/LoginPage";
import { RegisterPage } from "../auth/pages/register/RegisterPage";
import { DashboardPage } from "../admin/pages/dashboard/DashboardPage";
import { AdminProductsPage } from "../admin/pages/products/AdminProductsPage";
import { AdminProductPage } from "../admin/pages/product/AdminProductPage";
import { AdminRoute, NotAuthenticatedRoute } from "@/components/routes/ProtectedRoutes";

//carga peresoza
const AuthLayout = lazy(() => import('../auth/layouts/AuthLayout'));
const AdminLayout = lazy(() => import('../admin/layouts/AdminLayout'));


export const RouterApp = createBrowserRouter([

    {
        path: '/',
        element: <ShoppLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path:  'product/:idSlug',
                element:  <ProductDetailPage />
            },
            {
                path: 'gender/:gender',
                element: <GenderPage />
            }
        ]
    },


    {
        path: '/auth',
        element: <NotAuthenticatedRoute>
            <AuthLayout />
        </NotAuthenticatedRoute>,
        children: [

            {
                index: true,
                element: <Navigate to="/auth/login" />
            },
            {
               path: 'login',
               element: <LoginPage /> 
            },
            {
               path: 'register',
               element: <RegisterPage /> 
            }
        ]
    },

    {
        path: '/admin',
        element: <AdminRoute>
            <AdminLayout />
        </AdminRoute>,
        children: [
            {
                index: true,
                element: <DashboardPage />
            },
            {
                path: 'products',
                element: <AdminProductsPage />
            },
            {
                path: 'products/:id',
                element: <AdminProductPage />
            }
        ]
    },

    
    {
        path: '*',
        element: <Navigate to="/" />
    }



]);

