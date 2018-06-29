import { AfterContentInit, ChangeDetectionStrategy, Component, ContentChildren, QueryList, Input, ViewContainerRef } from '@angular/core';
import { TabContentComponent } from '../test/tab-content.component';
import { Portal, TemplatePortal } from '@angular/cdk/portal';

@Component({
    selector: 'vertical-tab-group',
    templateUrl: 'vertical-tab-group.component.html',
    styleUrls: ['vertical-tab-group.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class VerticalTabGroupComponent implements AfterContentInit {

    get selectedIndex(): number {
        return this._selectedIndex;
    }

    @Input()
    set selectedIndex(value: number) {
        this._selectedIndex = value;
    }

    @ContentChildren(TabContentComponent) _tabs: QueryList<TabContentComponent>;

    portalInstance: Portal<any>;

    private _selectedIndex = 0;

    constructor(private viewContainerRef: ViewContainerRef) {
    }

    ngAfterContentInit() {
        this.portalInstance = new TemplatePortal(this._tabs.find((tab, index) => index === this._selectedIndex).content, this.viewContainerRef);
    }
}

