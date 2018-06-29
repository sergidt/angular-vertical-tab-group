import { Component, Input } from '@angular/core';

@Component({
    selector: 'test-component',
    template: `
      <span>Hi</span>`
})
export class TestComponent {

    @Input() label: string;

    constructor() {
        console.log('Init');
    }

}
