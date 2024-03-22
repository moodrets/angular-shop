import { Pipe, PipeTransform } from '@angular/core'

// в курсе про CurrencyPipe, просто тут решил сделать именно так
@Pipe({ name: 'price' })
export class PricePipe implements PipeTransform {
    transform(value: number) {
        return new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'uzb',
            minimumFractionDigits: 0,
        }).format(value)
    }
}
