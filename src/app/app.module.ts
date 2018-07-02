import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VerticalTabGroupModule } from './vertical-tab-group/vertical-tab-group.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TestModule } from './test/test.module';
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        VerticalTabGroupModule,
        TestModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
