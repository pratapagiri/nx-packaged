import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { TwoLibModule } from '@nx-packaged/two-lib';

@NgModule({
  imports: [BrowserModule, NxModule.forRoot(), TwoLibModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
