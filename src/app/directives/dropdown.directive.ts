import { Directive, ElementRef, HostListener } from '@angular/core'

@Directive({
    standalone: true,
    selector: '[dropdown]',
})
export class DropdownDirective {
    constructor(private el: ElementRef) {}

    private isOpen: boolean = false

    @HostListener('document:click', ['$event.target'])
    onClickOutside(target: HTMLElement) {
        const clickInside = this.el.nativeElement.contains(target)

        if (!clickInside && this.isOpen) {
            this.isOpen = false
            this.close()
        }
    }

    @HostListener('click', ['$event.target'])
    onHostClick(target: HTMLElement) {
        if (target.closest('data-dropdown-element')) {
            this.isOpen = false
            this.close()
            return
        }

        this.isOpen = !this.isOpen

        this.isOpen && this.open()
        !this.isOpen && this.close()
    }

    private open() {
        this.el.nativeElement?.setAttribute('data-dropdown', 'opened')
    }

    private close() {
        this.el.nativeElement?.setAttribute('data-dropdown', null)
    }
}
