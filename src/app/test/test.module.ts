import { NgModule } from '@angular/core';
import { TabContentComponent } from './tab-content.component';
import { TestComponent } from './test.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    providers: [],
    declarations: [TestComponent, TabContentComponent],
    entryComponents: [TestComponent, TabContentComponent],
    exports: [TestComponent, TabContentComponent]
})
export class TestModule {
}
