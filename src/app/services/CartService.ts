import { IProduct } from '@/types/ProductType'
import { Injectable, inject } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { StorageService } from '@/services/StorageService'

@Injectable({
    providedIn: 'root',
})
export class CartService {
    public storageService = inject(StorageService)

    public products$ = new BehaviorSubject<IProduct[]>([])

    public totalSum$ = new BehaviorSubject<number>(0)

    constructor() {
        let cartItemsFromStorage = this.storageService.get<IProduct[]>('cartProducts')
        cartItemsFromStorage && this.products$.next(cartItemsFromStorage)

        this.products$.subscribe((value) => {
            let sum = value.reduce((acc, product) => acc + product.price, 0)
            this.totalSum$.next(sum)
        })
    }

    public addProduct(product: IProduct) {
        if (!this.existProduct(product)) {
            this.products$.next([...this.products$.value, product])
            this.storageService.set('cartProducts', this.products$.value)
        }
    }

    public removeProduct(product: IProduct) {
        let productsList = this.products$.value
        let filteredProductList = productsList.filter(
            (filterProduct) => filterProduct.name !== product.name
        )
        this.products$.next(filteredProductList)
        this.storageService.set('cartProducts', this.products$.value)
    }

    public existProduct(product: IProduct): boolean {
        let existProduct = this.products$.value.find(
            (findProduct) => findProduct.name === product.name
        )

        return existProduct ? true : false
    }
}
