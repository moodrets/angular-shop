import { CartItemComponent } from '@/components/cart-item/cart-item.component'
import { ProductModalComponent } from '@/components/product-modal/product-modal.component'
import { CartService } from '@/services/CartService'
import { ProductModalService } from '@/services/ProductModalService'
import { SharedModule } from '@/shared.module'
import { IProduct } from '@/types/ProductType'
import { Component, inject } from '@angular/core'

@Component({
    selector: 'cart-page',
    standalone: true,
    imports: [CartItemComponent, ProductModalComponent, SharedModule],
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.scss',
})
export class CartComponent {
    public cartService = inject(CartService)

    public modalService = inject(ProductModalService)

    public onRemoveItem(product: IProduct) {
        this.cartService.removeProduct(product)
    }

    public onShowAddInfo(product: IProduct) {
        this.modalService.productItem.set(product)
        this.modalService.showModal()
    }
}
