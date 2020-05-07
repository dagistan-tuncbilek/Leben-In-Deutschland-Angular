import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() getQuestionNumber = new EventEmitter<number>();
  showBundeslandMenu: number = -1;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect (selection: number) {
    if (selection===-2) {
      this.showBundeslandMenu = -2;
    } else if (selection===-1) {
      this.showBundeslandMenu = -1;
    } else {
      this.showBundeslandMenu = 0;
    }
    this.getQuestionNumber.emit(selection);
  }
}
