import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public logoName: string = 'APOLLO';
  public logoNameEl: any;
  // public 

  constructor() {}

  ngOnInit(): void {
    this.setLogoName();
  }

  setLogoName() {
    this.logoNameEl = document.getElementById('logo-name');
    for (let i = 0; i < this.logoName.length; i++) {
      let spanEl: HTMLElement = document.createElement('div');
      spanEl.innerText = this.logoName[i];
      if (i != this.logoName.length - 1)
        spanEl.style.marginRight = '5px';
      this.logoNameEl?.appendChild(spanEl);
    }
  }
}
