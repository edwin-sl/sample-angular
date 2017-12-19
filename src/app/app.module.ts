import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NoteListComponent } from './notes/note-list/note-list.component';
import { NoteDetailComponent } from './notes/note-detail/note-detail.component';
import {FormsModule} from '@angular/forms';
import { NoteService } from './note.service';


@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    NoteDetailComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
