import { ProductsCollectioner } from '@/data/products'
import { Component, OnDestroy, inject } from '@angular/core'
import { FormBuilder, ReactiveFormsModule } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { Subscription, first } from 'rxjs'

@Component({
    selector: 'products-filter',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './products-filter.component.html',
    styleUrl: './products-filter.component.scss',
})
export class ProductsFilterComponent implements OnDestroy {
    constructor() {
        this.subscriptions.push(
            this.route.queryParams.pipe(first()).subscribe((value) => {
                this.filterForm.patchValue(value)
            })
        )
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach((sub) => sub.unsubscribe())
        this.subscriptions = []
    }

    protected fb = inject(FormBuilder)

    protected router = inject(Router)

    protected route = inject(ActivatedRoute)

    protected subscriptions: Subscription[] = []

    public filterForm = this.fb.group({
        priceFrom: this.fb.control(ProductsCollectioner.getMinPrice(), []),
        priceTo: this.fb.control(ProductsCollectioner.getMaxPrice(), []),
        color: this.fb.control('', []),
        brand: this.fb.control('', []),
        screenSize: this.fb.control('', []),
        screenResolution: this.fb.control('', []),
        videoStorage: this.fb.control('', []),
    })

    public brandsList = ProductsCollectioner.getAllBrands()

    public colorsList = ProductsCollectioner.getAllColors()

    public screenSizes = ProductsCollectioner.getAllScreenSizes()

    public screenResolutions = ProductsCollectioner.getAllScreenResolutions()

    public videoStorageList = ProductsCollectioner.getAllVideoStorages()

    public onInputChange(): void {
        this.updateRouter()
    }

    public onSubmit(event: Event): void {
        event.preventDefault()
        this.updateRouter()
    }

    public makeGetParams(): Record<string, any> | null {
        let formValue: Record<string, any> = { ...this.filterForm.value }

        for (let key in formValue) {
            if (formValue[key] === '') {
                formValue[key] = null
            }
        }

        return formValue
    }

    public updateRouter(): void {
        if (this.filterForm.valid) {
            let params = this.makeGetParams()

            this.router.navigate([], {
                relativeTo: this.route,
                queryParams: params,
                queryParamsHandling: 'merge',
            })
        }
    }

    public resetRouter() {
        this.router.navigate([], {
            relativeTo: this.route,
        })
    }

    public onResetFilter(): void {
        this.filterForm.patchValue({
            priceFrom: ProductsCollectioner.getMinPrice(),
            priceTo: ProductsCollectioner.getMaxPrice(),
            color: '',
            brand: '',
            screenSize: '',
            screenResolution: '',
            videoStorage: '',
        })

        this.resetRouter()
    }
}
