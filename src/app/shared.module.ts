import { AsyncPipe, CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterLink, RouterOutlet } from '@angular/router'
import { PipesModule } from '@/pipes/PipesModule'

@NgModule({
    imports: [CommonModule, RouterOutlet, AsyncPipe, PipesModule, RouterLink],
    declarations: [],
    exports: [CommonModule, RouterOutlet, AsyncPipe, PipesModule, RouterLink],
})
export class SharedModule {}
