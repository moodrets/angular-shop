import { NgModule } from '@angular/core'
import { PricePipe } from '@/pipes/PricePipe'
import { ProductsFilterPipe } from '@/pipes/ProductsFilterPipe'
import { ProductsSortPipe } from '@/pipes/ProductSortPipe'

@NgModule({
    declarations: [PricePipe, ProductsFilterPipe, ProductsSortPipe],
    exports: [PricePipe, ProductsFilterPipe, ProductsSortPipe],
})
export class PipesModule {}
