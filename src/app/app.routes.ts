import { Routes } from '@angular/router'
import { BaseLayoutComponent } from '@/layouts/base-layout/base-layout.component'
import { ProductsComponent } from '@/views/products/products.component'
import { CartComponent } from '@/views/cart/cart.component'
import { environment } from 'src/environments/environments'

export const routes: Routes = [
    {
        path: environment.routerBase,
        component: BaseLayoutComponent,
        children: [
            {
                path: '',
                component: ProductsComponent,
            },
            {
                path: 'cart',
                component: CartComponent,
            },
        ],
    },
]
