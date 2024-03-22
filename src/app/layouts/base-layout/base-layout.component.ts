import { HeaderComponent } from '@/components/header/header.component'
import { SharedModule } from '@/shared.module'
import { Component } from '@angular/core'

@Component({
    selector: 'app-base-layout',
    standalone: true,
    imports: [HeaderComponent, SharedModule],
    templateUrl: './base-layout.component.html',
})
export class BaseLayoutComponent {}
