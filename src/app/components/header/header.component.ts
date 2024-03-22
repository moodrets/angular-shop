import { CartService } from '@/services/CartService'
import { SharedModule } from '@/shared.module'
import { Component, inject } from '@angular/core'
import { environment } from 'src/environments/environment'

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [SharedModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    public cartService = inject(CartService)

    public logoPath = `${environment.assetsPath}assets/img/logo.svg`
}
