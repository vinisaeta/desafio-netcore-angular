import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'i-paginator',
    templateUrl: './i-paginator.component.html',
    styleUrls: ['./i-paginator.component.scss']
})
export class IPaginatorComponent implements OnChanges {

    @Input() total: number = 0;
    @Input() page: number = 0;
    @Input() limit: number = 0;

    @Output() previous : EventEmitter<any> = new EventEmitter<any>();
    @Output() next : EventEmitter<any> = new EventEmitter<any>();

    public start : number = 0;
    public end : number = 0;

    ngOnChanges() {
        this.start = this.calculateFirst();
        this.end = this.calculateEnd();
    }

    public onPrevious() : void {
        if(this.page > 0) {
            this.previous.emit();
        }
    }

    public onNext() : void {
        if((this.page == 0 ? 1 : this.page + 1) * this.limit < this.total) {
            this.next.emit();
        }
    }

    private isEmpty() : boolean {
        return this.total == 0;
    }

    private calculateFirst() : number {

        if(this.total == 0) return 0;

        return (this.page * this.limit) + 1;
    }

    private calculateEnd() : number {

        if(this.total == 0) return 0;

        if(this.total > 0 && this.total <= (this.page + 1) * this.limit) {
            return this.total;
        } else {
            return (this.page + 1) * this.limit;
        }
    }



}
