import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material';
import { TestModule } from '../test/test.module';
import { VerticalTabGroupComponent } from './vertical-tab-group.component';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
    imports: [MatTabsModule, TestModule, CommonModule, PortalModule],
    declarations: [VerticalTabGroupComponent],
    exports: [VerticalTabGroupComponent, MatTabsModule],

})
export class VerticalTabGroupModule {
}
