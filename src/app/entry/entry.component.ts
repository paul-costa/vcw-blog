import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../shared/database.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  public textLength = 1;

  constructor(
    private databaseService: DatabaseService
  ) { }

  ngOnInit(): void {
  }

  entryForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    date: new FormControl(new Date()),
    text: new FormControl('', [Validators.required, Validators.minLength(this.textLength)]),

    link1: new FormControl(''),
    link2: new FormControl(''),
    link3: new FormControl(''),
  });


  onEditBtn(action: 'bold' | 'italic' | 'strikethrough' | 'bulleted' | 'numbered' | 'highlight') {
    let text = this.entryForm.value.text;
    const selection = window.getSelection().toString();

    let htmlFormatBefore = '';
    let htmlFormatAfter = '';

    switch (action) {
      case 'bold':
        htmlFormatBefore = '<b>';
        htmlFormatAfter = '</b>';
        break;

      case 'italic':
        htmlFormatBefore = '<i>';
        htmlFormatAfter = '</i>';
        break;

      case 'strikethrough':
        htmlFormatBefore = '<<SPAN STYLE="text-decoration:line-through">>';
        htmlFormatAfter = '</span>';
        break;

      case 'bulleted':
        htmlFormatBefore = '<b>';
        htmlFormatAfter = '</b>';
        break;

      case 'numbered':
        htmlFormatBefore = '<b>';
        htmlFormatAfter = '</b>';
        break;

      case 'highlight':
        htmlFormatBefore = '<mark>';
        htmlFormatAfter = '</mark>';
        break;

      default:
        break;
    }

    text = text.replace(selection, htmlFormatBefore + selection + htmlFormatAfter);
    this.entryForm.patchValue({text: text});
  }

  onSubmit() {
    if(this.entryForm.valid) {
      const formData = this.entryForm.value;
      this.databaseService.putEntry(formData);
      document.getElementById('resetBtn').click();
    }
  }


  get entryFormControl() {
    return this.entryForm.controls;
  }
}
