import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  email: string = '';
  isCheckboxChecked: boolean = false;
  isButtonDisabled: boolean = true;
 
  onEmailInputChange() {
    this.isButtonDisabled = !this.isCheckboxChecked;
  }

  onCheckboxChange() {
    this.isButtonDisabled = !this.isCheckboxChecked ;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
