import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-progress',
  templateUrl: './material-progress.component.html',
  styleUrls: ['./material-progress.component.css']
})
export class MaterialProgressComponent implements OnInit {

  showSpinner = false;
  constructor() { }

  ngOnInit(): void {
  }

  loadData(): void{
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 5000);
  }
}
