import { Injectable } from '@angular/core';
import {Note} from './notes/shared/note.model';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class NoteService {

  notes: Note[] = [
    {id: 1, title: 'hola', content: 'un texto'},
    {id: 2, title: 'mundo', content: 'otro texto'}
  ];

  constructor() { }

  getNotes(): Observable<Note[]> {
    return of(this.notes);
  }

  postNotes(note: Note): Observable<Note> {
    note.id = Date.now();
    this.notes.push(note);

    return of(note);
  }

  putNotes(note: Note): Observable<Note> {
    const refNote: Note = this.notes.find(n => n.id === note.id);
    refNote.content = note.content;
    refNote.title = note.title;
    return of(note);
  }

  deleteNote(note: Note){

  }
}
