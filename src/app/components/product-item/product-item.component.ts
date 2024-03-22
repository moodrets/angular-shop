import { SharedModule } from '@/shared.module'
import { IProduct } from '@/types/ProductType'
import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
    selector: 'product-item',
    standalone: true,
    imports: [SharedModule],
    templateUrl: './product-item.component.html',
    styleUrl: './product-item.component.scss',
})
export class ProductItemComponent {
    @Input()
    public product!: IProduct

    @Input()
    public existInCart: boolean = false

    @Output()
    public emitAddToCart: EventEmitter<void> = new EventEmitter<void>()

    @Output()
    public emitShowAddInfo: EventEmitter<void> = new EventEmitter<void>()
}
