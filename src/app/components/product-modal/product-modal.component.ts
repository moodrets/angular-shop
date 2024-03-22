import { ProductModalService } from '@/services/ProductModalService'
import { SharedModule } from '@/shared.module'
import { Component, ElementRef, HostListener, OnInit, ViewChild, inject } from '@angular/core'

@Component({
    selector: 'product-modal',
    standalone: true,
    imports: [SharedModule],
    templateUrl: './product-modal.component.html',
    styleUrl: './product-modal.component.scss',
})
export class ProductModalComponent implements OnInit {
    public modalService = inject(ProductModalService)

    @HostListener('document:keydown.escape', ['$event'])
    onEsc() {
        this.modalService.closeModal()
    }

    @HostListener('click', ['$event.target'])
    onClickHandler(target: HTMLElement) {
        if (target.classList.contains('modal')) {
            this.modalService.closeModal()
        }
    }

    @ViewChild('modalDiv', { static: true })
    protected modalDiv!: ElementRef

    get productFields(): string[] {
        return Object.keys(this.modalService.productItem() || {}).filter(
            (field) => field !== 'id' && field !== 'image'
        )
    }

    get productAsObject(): Record<string, any> {
        return this.modalService.productItem() || {}
    }

    ngOnInit(): void {
        setTimeout(() => {
            this.modalDiv?.nativeElement.classList.add('is-visible')
        }, 0)
    }
}
