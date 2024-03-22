import { Component, EventEmitter, Input, Output } from '@angular/core'
import { DropdownDirective } from '@/directives/dropdown.directive'
import { ProductSortEnum } from '@/types/ProductSortType'

@Component({
    selector: 'products-sort',
    standalone: true,
    templateUrl: './products-sort.component.html',
    styleUrl: './products-sort.component.scss',
    imports: [DropdownDirective],
})
export class ProductsSortComponent {
    public productSortEnum = ProductSortEnum

    @Input()
    public currentSort!: ProductSortEnum

    @Output()
    public emitChangeSort = new EventEmitter<ProductSortEnum>()

    public sortDictionary = {
        [ProductSortEnum.Default]: 'Select sort',
        [ProductSortEnum.PriceAsc]: 'Price asc',
        [ProductSortEnum.PriceDesc]: 'Price desc',
    }

    onSort(sortType: ProductSortEnum) {
        this.emitChangeSort.emit(sortType)
    }
}
