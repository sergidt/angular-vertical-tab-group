import { Component, Input, ViewChild, TemplateRef, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'tab-content',
    template: `
      <ng-template>
        <ng-content></ng-content>
      </ng-template>`
})
export class TabContentComponent {

    @Input() label: string;
    @ViewChild(TemplateRef) content: TemplateRef<any>;
}
