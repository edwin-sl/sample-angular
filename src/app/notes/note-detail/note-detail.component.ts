import {Component, Input, OnInit} from '@angular/core';
import {Note} from '../shared/note.model';
import {NoteService} from '../../note.service';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {

  @Input() note: Note;

  constructor(private noteService: NoteService) { }

  ngOnInit() {
  }


  saveNote() {
    if(this.note.id)
      this.noteService.putNotes(this.note);
    else
      this.noteService.postNotes(this.note);
  }
}
