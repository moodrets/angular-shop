import { IProduct } from '@/types/ProductType'
import { Injectable, signal } from '@angular/core'

@Injectable({
    providedIn: 'root',
})
export class ProductModalService {
    public productItem = signal<IProduct | null>(null)

    public modalVisible = signal<boolean>(false)

    public showModal(): void {
        this.modalVisible.set(true)
        document.body.classList.add('overflow-hidden')
    }

    public closeModal(): void {
        this.modalVisible.set(false)
        document.body.classList.remove('overflow-hidden')
    }
}
