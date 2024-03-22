import { productsList } from '@/data/products'
import { IProduct } from '@/types/ProductType'
import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable()
export class ProductsService {
    public list$ = new BehaviorSubject<IProduct[]>([])

    public loading$ = new BehaviorSubject<boolean>(false)

    public async setProducts(): Promise<void> {
        this.loading$.next(true)
        let result = await this.fetchProducts()
        this.list$.next(result)
        this.loading$.next(false)
    }

    public async fetchProducts(): Promise<IProduct[]> {
        return productsList
        return new Promise((resolve) => setTimeout(() => resolve(productsList), 1500))
    }
}
