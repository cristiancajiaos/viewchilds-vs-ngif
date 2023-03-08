import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss']
})
export class FooComponent implements OnInit {

  constructor(
    private toastrService: ToastrService
  ) { }

  ngOnInit() {}

  public openAlert(): void {
    this.toastrService.success('Alert opened');
  }

}
