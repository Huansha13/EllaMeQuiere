import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ellaMeAma';

  constructor( public dialog: MatDialog) {}

  ngOnInit(): void { }


  openDialg(): void {
    this.dialog.open(DialogComponent);
  }

 btnMueve(){
  let width = window.innerWidth;
  let height = window.innerHeight;
  let newWidth = (Math.random() * width);
  let newHeiht = (Math.random() * height);

  document.getElementById('btnSi').style.position = 'absolute'
  document.getElementById('btnSi').style.left = newWidth + 'px';
  document.getElementById('btnSi').style.top = newHeiht + 'px';
 }

}

