import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  isPopupVisible: boolean = false;
  constructor() { 
    
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isPopupVisible = true;
    }, 120000);
  }

  closePopup() {
    this.isPopupVisible = false;
  }

}
