import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AsideComponent } from './components/aside/aside.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    CardComponent,
    FooterComponent,
    HeaderComponent,
    AsideComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    RouterLinkActive
  ],
  exports: [
    PageNotFoundComponent,
    CardComponent,
    FooterComponent,
    HeaderComponent,
    AsideComponent
  ]
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
    }
  }
}
