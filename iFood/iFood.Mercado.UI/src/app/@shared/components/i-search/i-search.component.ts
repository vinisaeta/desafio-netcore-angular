import { Component, Output, EventEmitter, Input, forwardRef } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
    selector: 'i-search',
    templateUrl: './i-search.component.html',
    styleUrls: ['./i-search.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => ISearchComponent),
        multi: true
    }]
})
export class ISearchComponent implements ControlValueAccessor {

    @Input() icon: boolean = false;
    @Input() placeholder: string = '';
    @Output() filter = new EventEmitter<string>();

    private subject: Subject<string> = new Subject();
    public textValue: string = '';

    ngOnInit() {
        this.subject.pipe(debounceTime(500)).subscribe(text => this.filter.emit(text));
    }

    public onSearch(text: string): void {
        this.subject.next(text);
    }

    public isDirty(): boolean {
        return this.textValue != null && this.textValue.trim() != '';
    }

    public clear(): void {
        this.textValue = '';
    }

    /**
     * Invoked when the model has been changed
     */
    onChange: (_: any) => void = (_: any) => {};

    /**
     * Invoked when the model has been touched
     */
    onTouched: () => void = () => {};

    /**
     * Method that is invoked on an update of a model.
     */
    updateChanges() {
        this.onChange(this.textValue);
    }

    ///////////////
    // OVERRIDES //
    ///////////////

    /**
     * Writes a new item to the element.
     * @param value the value
     */
    writeValue(value: string): void {
        this.textValue = value;
        this.updateChanges();
    }

    /**
     * Registers a callback function that should be called when the control's value changes in the UI.
     * @param fn
     */
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    /**
     * Registers a callback function that should be called when the control receives a blur event.
     * @param fn
     */
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

}
