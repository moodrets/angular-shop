import { ActivatedRoute, Router } from '@angular/router'
import { Component, OnDestroy } from '@angular/core'
import { Subscription, first } from 'rxjs'
import { SharedModule } from '@/shared.module'
import { CartService } from '@/services/CartService'
import { ProductsService } from '@/services/ProductsService'
import { IProduct } from '@/types/ProductType'
import { ProductItemComponent } from '@/components/product-item/product-item.component'
import { ProductModalComponent } from '@/components/product-modal/product-modal.component'
import { ProductModalService } from '@/services/ProductModalService'
import { ProductsSortComponent } from '@/components/products-sort/products-sort.component'
import { ProductSortEnum } from '@/types/ProductSortType'
import { animate, query, stagger, style, transition, trigger } from '@angular/animations'

const productListAnimation = trigger('productListAnimation', [
    transition('* => *', [
        query(':enter', style({ transform: 'scale(0)' }), { optional: true }),
        query(':enter', stagger('200ms', [animate('500ms', style({ transform: 'scale(1)' }))]), {
            optional: true,
        }),
    ]),
])

@Component({
    selector: 'product-list',
    standalone: true,
    imports: [ProductItemComponent, ProductModalComponent, ProductsSortComponent, SharedModule],
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.scss',
    animations: [productListAnimation],
})
export class ProductListComponent implements OnDestroy {
    constructor(
        public productsService: ProductsService,
        public modalService: ProductModalService,
        public cartService: CartService,
        protected router: Router,
        protected route: ActivatedRoute
    ) {
        this.subscriptions.push(
            this.route.queryParams.subscribe((value) => {
                this.filterParams = value
                if (!Object.keys(value).length) {
                    this.sortType = ProductSortEnum.Default
                }
            }),
            this.route.queryParams.pipe(first()).subscribe((value) => {
                if (value['sortType']) {
                    this.sortType = value['sortType']
                }
            })
        )
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach((sub) => sub.unsubscribe())
        this.subscriptions = []
    }

    public filterParams: Record<string, any> = {}

    public sortType: ProductSortEnum = ProductSortEnum.Default

    public subscriptions: Subscription[] = []

    public onShowAddInfo(product: IProduct): void {
        this.modalService.productItem.set(product)
        this.modalService.showModal()
    }

    public onChangeSort(sortType: ProductSortEnum) {
        this.sortType = sortType
        if (this.sortType) {
            this.router.navigate([], {
                relativeTo: this.route,
                queryParams: { sortType: this.sortType },
                queryParamsHandling: 'merge',
            })
        }
    }
}
