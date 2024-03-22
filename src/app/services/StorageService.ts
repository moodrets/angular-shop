import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root',
})
export class StorageService {
    set(key: string, data: any): void {
        try {
            localStorage.setItem(key, JSON.stringify(data))
        } catch (error) {
            localStorage.setItem(key, data)
        }
    }

    get<T>(key: string): T | null {
        try {
            let result = localStorage.getItem(key)
            return result ? (JSON.parse(result) as T) : null
        } catch (error) {
            let result = localStorage.getItem(key)
            return result ? (result as T) : null
        }
    }

    remove(key: string): void {
        localStorage.removeItem(key)
    }

    clear(): void {
        localStorage.clear()
    }
}
