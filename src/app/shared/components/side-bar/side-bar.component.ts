import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  openBlocks: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onOpenBlocks() {
    this.openBlocks = true;
  }

  onCloseBlocks() {
    this.openBlocks = false;
    event?.stopPropagation();
  }
}
