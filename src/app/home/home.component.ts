import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../shared/database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataItems = [];


  constructor(
    private databaseService: DatabaseService,
  ) { }

  ngOnInit(): void {
    this.databaseService.getAllEntries().subscribe(dbData => {
      for(const el of dbData) {
        this.dataItems.push(el.payload.doc.data())
      }
    });
  }

  onDeleteEntry(entry) {
    this.databaseService.deleteEntry(entry);
  }


  onOpenLink(link: string) {
    window.open(link, "_blank");
  }

}
