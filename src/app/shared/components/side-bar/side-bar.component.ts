import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  openBlocks: boolean = false;
  listElHeader = [
    "a", "b", "c"
  ];
  elHeaderSelected: any;

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

  selectElHeader(elHeader: any) {
    if (this.elHeaderSelected == elHeader) {
      this.elHeaderSelected = null;
    } else {
      this.elHeaderSelected = elHeader;
    }
  }
}
