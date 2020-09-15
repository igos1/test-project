import { AfterViewInit, Component, ElementRef, EventEmitter, OnDestroy, Output, ViewChild } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';


@Component({
    selector: 'search-input',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements AfterViewInit, OnDestroy {
    private keyUpSub: Subscription;

    @ViewChild("inputNode") inputNode: ElementRef;
    @Output() onChanged = new EventEmitter<string>();

    ngAfterViewInit() {
        this.keyUpSub =
            fromEvent(this.inputNode.nativeElement, 'input').pipe(
                map((event: any) => event.target.value),
                debounceTime(1000),
                distinctUntilChanged()
            ).subscribe((value: string) => {
                this.onChanged.emit(value);
            });
    }

    ngOnDestroy() {
        if (this.keyUpSub) {
            this.keyUpSub.unsubscribe();
        }
    }
}
