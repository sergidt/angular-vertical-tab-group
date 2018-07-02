import {
    ChangeDetectionStrategy, Component, ContentChildren, QueryList, Input, TemplateRef, AfterContentChecked, EventEmitter, Output,
    ChangeDetectorRef
} from '@angular/core';
import { TabContentComponent } from '../test/tab-content.component';
import { Portal, TemplatePortal } from '@angular/cdk/portal';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { MatButtonToggleChange } from '@angular/material';

export class TabChangeEvent {
    /** Index of the currently-selected tab. */
    index: number;
    /** Reference to the currently-selected tab. */
    tab: TabContentComponent;
}

@Component({
    selector: 'vertical-tab-group',
    templateUrl: 'vertical-tab-group.component.html',
    styleUrls: ['vertical-tab-group.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class VerticalTabGroupComponent implements AfterContentChecked {

    /** Output to notify selected change event */
    @Output() readonly selectedTabChange: EventEmitter<TabChangeEvent> = new EventEmitter<TabChangeEvent>();

    @Input() buttonBarBColor: string;

    @Input()
    get selectedIndex(): number | null {
        return this._selectedIndex;
    }

    set selectedIndex(value: number | null) {
        this._indexToSelect = coerceNumberProperty(value, null);
    }

    selectedTab: TabContentComponent = null;

    @ContentChildren(TabContentComponent) _tabs: QueryList<TabContentComponent>;

    @ContentChildren(TemplateRef) _templates: QueryList<TemplateRef<any>>;

    portalInstance: Portal<any>;

    private _indexToSelect: number | null = 0;

    private _selectedIndex: number | null = null;

    constructor(private cd: ChangeDetectorRef) {}

    toggleGroupChanged(event: MatButtonToggleChange) {
        this.selectedIndex = this._tabs.toArray().findIndex(t => t === event.value);
    }

    ngAfterContentChecked() {
        const indexToSelect = this._indexToSelect =
            Math.min(this._tabs.length - 1, Math.max(this._indexToSelect || 0, 0));

        if (this._selectedIndex !== indexToSelect) {
            this._selectedIndex = indexToSelect;
            this.selectedTab = this._tabs.find((_, index) => index === this._selectedIndex);
            this.selectedTabChange.emit(this._createChangeEvent(indexToSelect));
            this.portalInstance = new TemplatePortal(this._templates.find((_, index) => index === this._selectedIndex), undefined);
        }
    }

    private _createChangeEvent(index: number): TabChangeEvent {
        const event = new TabChangeEvent;
        event.index = index;
        if (this._tabs && this._tabs.length) {
            event.tab = this._tabs.toArray()[index];
        }
        return event;
    }
}

