import { IProduct } from '@/types/ProductType'
import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'productsFilter' })
export class ProductsFilterPipe implements PipeTransform {
    transform(products: IProduct[] | null, params: Record<string, any>): IProduct[] | null {
        if (!products) {
            return null
        }

        let filteredProducts = [...products]

        if (params['priceFrom']) {
            filteredProducts = filteredProducts.filter((p) => p.price >= +params['priceFrom'])
        }

        if (params['priceTo']) {
            filteredProducts = filteredProducts.filter((p) => p.price <= +params['priceTo'])
        }

        if (params['brand']) {
            filteredProducts = filteredProducts.filter((p) => p.brand === params['brand'])
        }

        if (params['color']) {
            filteredProducts = filteredProducts.filter((p) => p.color === params['color'])
        }

        if (params['screenSize']) {
            filteredProducts = filteredProducts.filter(
                (p) => p.screenSize === +params['screenSize']
            )
        }

        if (params['screenResolution']) {
            filteredProducts = filteredProducts.filter(
                (p) => p.screenResolution === params['screenResolution']
            )
        }

        if (params['videoStorage']) {
            filteredProducts = filteredProducts.filter(
                (p) => p.videoCardRAM === +params['videoStorage']
            )
        }

        return filteredProducts
    }
}
