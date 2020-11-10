import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-badge',
  templateUrl: './material-badge.component.html',
  styleUrls: ['./material-badge.component.css']
})
export class MaterialBadgeComponent implements OnInit {

  notifications = 0 ;

  constructor() { }

  ngOnInit(): void {
  }

}
