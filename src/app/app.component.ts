import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { ConnectionService } from 'ng-connection-service';

import { ToastDirective } from './shared/directives/toast.directive';
import { CommonService } from './shared/services/common.service';
import { ToastComponent } from './shared/toast/toast.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pwa-demo';
  timeout: any;

  @ViewChild(ToastDirective, {static: true}) toastDirective!: ToastDirective;

  constructor(
    private commonService: CommonService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private connectionService: ConnectionService) {}

  ngOnInit(): void {
    this.verifyConnection();

    this.commonService.toastMessages.subscribe((toastConfig: any) => {
      if (toastConfig) {
        this.loadToast(toastConfig);
      }
    });
  }

  // this will load the toast dynamically
  loadToast(toastConfig: any): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ToastComponent);

    const viewContainerRef = this.toastDirective.viewContainerRef;
    viewContainerRef.clear();

    this.commonService.componentRef = viewContainerRef.createComponent<ToastComponent>(componentFactory);
    this.commonService.componentRef.instance.config = toastConfig;
  }

  // this will monitor the connection status
  verifyConnection(): void {
    this.connectionService.monitor().subscribe(isConnected => {
      if (!isConnected) {
        this.commonService.toastMessages.next(
          {message: 'No internet connection available', showAcceptButton: false, showDiscardButton: true}
        );
      } else {
        if (this.commonService.componentRef) {
          this.commonService.componentRef.destroy();
        }
      }
    });
  }

}
