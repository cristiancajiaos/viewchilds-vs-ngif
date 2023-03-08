import { Component, OnInit, ViewChild } from '@angular/core';
import { FooComponent } from '../foo/foo.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public showFoo: boolean = true;
  public hideBar: boolean = false;
  @ViewChild('foo', { static: false }) componentFoo: FooComponent;
  @ViewChild('bar', { static: false }) componentBar: FooComponent;

  constructor() { }

  ngOnInit() {
  }

  public openFoo(): void {
    this.componentFoo.openAlert();
  }

  public openBar(): void {
    this.componentBar.openAlert();
  }
}
