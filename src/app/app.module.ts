import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarkdownModule, provideMarkdown } from 'ngx-markdown';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    SharedModule.forRoot()
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideMarkdown({ loader: HttpClient }),
  ],
  exports: [
    MarkdownModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
