import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Setting } from '../../interfaces/page';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
/** settings component*/
export class SettingsComponent {
  /** settings ctor */
  constructor(public dialogRef: MatDialogRef<SettingsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { settings: Setting }) {
   
  }

  keys(item): Array<string> {
  
    var keys = Object.keys(item);
    return keys;
  }
}
