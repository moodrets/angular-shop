import { ProductSortEnum } from '@/types/ProductSortType'
import { IProduct } from '@/types/ProductType'
import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'productsSort' })
export class ProductsSortPipe implements PipeTransform {
    transform(products: IProduct[] | null, sortType: ProductSortEnum): IProduct[] | null {
        if (!products) {
            return null
        }

        let sortedList = [...products]

        if (sortType === ProductSortEnum.PriceAsc) {
            sortedList.sort((a, b) => a.price - b.price)
        }

        if (sortType === ProductSortEnum.PriceDesc) {
            sortedList.sort((a, b) => b.price - a.price)
        }

        return sortedList
    }
}
