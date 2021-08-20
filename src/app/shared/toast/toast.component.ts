import { Component, Input, OnInit } from '@angular/core';
import { ToastConfig } from '../models/data.model';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  @Input() config: ToastConfig = {
    message: '',
    showAcceptButton: false,
    showDiscardButton: false
  };

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
  }

  accept(): void {
    if (this.commonService.componentRef) {
      this.commonService.componentRef.destroy();
    }
  }

  discard(): void {
    if (this.commonService.componentRef) {
      this.commonService.componentRef.destroy();
    }
  }

}
