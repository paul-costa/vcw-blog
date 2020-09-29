import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(
    public firestore: AngularFirestore,
    private _snackBar: MatSnackBar,
    private router: Router,
  ) { }

  putEntry(formData) {
    formData.id = new Date().getTime().toString();
    formData.disabled = false;

    this.firestore.collection("vcw-blog-entries")
      .add(formData)
      .then(res => {
        this.openSnackBar('Entry got posted', 'okay');
      });
  }

  deleteEntry(entryData) {
    // const disabledEntryData = {...entryData};
    // disabledEntryData.disabled = true;

    this.firestore.collection("vcw-blog-entries")
      .doc(entryData.id)
      .delete().then(() => {
        console.log('log')
        // console.log(disabledEntryData);
        // this.putEntry(disabledEntryData);
      });



    // console.log(this.firestore.collection("vcw-blog-entries").doc(entryData.id))
  }

  getAllEntries() {
    return this.firestore.collection("vcw-blog-entries").snapshotChanges();
  }




  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
