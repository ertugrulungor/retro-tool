import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { BoardComponent } from './board/board.component';
import { BoardPublicSectionComponent } from './board-public-section/board-public-section.component';
import { BoardPrivateSectionComponent } from './board-private-section/board-private-section.component';
import { BoardHeaderComponent } from './board-header/board-header.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { NewCardComponent } from './new-card/new-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    BoardComponent,
    BoardPublicSectionComponent,
    BoardPrivateSectionComponent,
    BoardHeaderComponent,
    CardComponent,
    NewCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
