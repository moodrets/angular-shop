import { ProductListComponent } from '@/components/product-list/product-list.component'
import { ProductsFilterComponent } from '@/components/products-filter/products-filter.component'
import { ProductsService } from '@/services/ProductsService'
import { SharedModule } from '@/shared.module'
import { Component, OnInit, Self } from '@angular/core'

@Component({
    selector: 'products-page',
    standalone: true,
    imports: [ProductListComponent, ProductsFilterComponent, SharedModule],
    providers: [ProductsService],
    templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
    constructor(@Self() public productsService: ProductsService) {}

    ngOnInit(): void {
        this.productsService.setProducts()
    }
}
