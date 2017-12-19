import { Component, OnInit } from '@angular/core';
import {Note} from '../shared/note.model';
import {NoteService} from '../../note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  notes: Note[];
  private selectedNote: Note;

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.getNotes();
  }

  getNotes(): void {
    this.noteService.getNotes()
      .subscribe(notes => this.notes = notes);
  }

  onSelect(note: Note) {
    this.selectedNote = note;
  }
}
