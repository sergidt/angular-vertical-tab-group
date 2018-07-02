import {
    AfterContentInit, ChangeDetectionStrategy, Component, ContentChildren, QueryList, Input, ViewChild, TemplateRef
} from '@angular/core';
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

    @ContentChildren(TemplateRef) _templates: QueryList<TemplateRef<any>>;

    portalInstance: Portal<any>;

    private _selectedIndex = 0;

    tabClicked(index: number) {
        this.selectedIndex = index;
        this.portalInstance = new TemplatePortal(this._templates.find((_, i) => i === this._selectedIndex), undefined);
    }

    ngAfterContentInit() {
        //  const template = this._tabs.find((tab, index) => index === this._selectedIndex).content;
        this.portalInstance = new TemplatePortal(this._templates.find((_, index) => index === this._selectedIndex), undefined);
    }
}

