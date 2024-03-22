import { SharedModule } from '@/shared.module'
import { IProduct } from '@/types/ProductType'
import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
    selector: 'cart-item',
    standalone: true,
    imports: [SharedModule],
    templateUrl: './cart-item.component.html',
    styleUrl: './cart-item.component.scss',
})
export class CartItemComponent {
    @Input()
    public product!: IProduct

    @Output()
    public emitRemoveItem: EventEmitter<void> = new EventEmitter<void>()

    @Output()
    public emitShowAddInfo: EventEmitter<void> = new EventEmitter<void>()
}
