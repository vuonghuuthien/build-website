import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageMainRoutingModule } from './page-main-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    LayoutComponent,
  ],
  imports: [CommonModule, PageMainRoutingModule],
})
export class PageMainModule {}
