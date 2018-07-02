import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'tab-content',
    template: `
      <ng-template>
        <ng-content></ng-content>
      </ng-template>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabContentComponent {

    @Input() tooltip: string;
    @Input() icon: string;

}
