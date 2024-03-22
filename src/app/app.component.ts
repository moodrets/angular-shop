import { Component } from '@angular/core'
import { SharedModule } from '@/shared.module'

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [SharedModule],
    templateUrl: './app.component.html',
    styleUrls: [],
})
export class AppComponent {}
