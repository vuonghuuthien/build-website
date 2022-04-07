import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  openBlocks: boolean = false;
  listElHeader_quick = [
    {
      id: 1,
      img: 'assets/img/header/header-1.svg',
    },
    {
      id: 2,
      img: 'assets/img/header/header-2.svg',
    },
    {
      id: 3,
      img: 'assets/img/header/header-3.svg',
    },
    {
      id: 4,
      img: 'assets/img/header/header-4.svg',
    }
  ];
  elHeaderSelected: any;

  constructor() {}

  ngOnInit(): void {}

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
