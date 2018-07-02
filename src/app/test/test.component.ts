import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'test-component',
    template: `
      <span>{{label}}</span>`
})
export class TestComponent implements OnInit, OnDestroy {

    @Input() label: string;

    ngOnInit() {
        console.log(`Init ${this.label}`);
    }

    ngOnDestroy() {
        console.log(`Destroy ${this.label}`);
    }
}
