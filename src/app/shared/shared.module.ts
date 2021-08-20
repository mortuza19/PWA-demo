import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast/toast.component';
import { ToastDirective } from './directives/toast.directive';



@NgModule({
  declarations: [
    ToastComponent,
    ToastDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToastComponent,
    ToastDirective
  ],
  entryComponents: [ToastComponent]
})
export class SharedModule { }
