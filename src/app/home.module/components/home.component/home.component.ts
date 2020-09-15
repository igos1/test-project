import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  wordToSearch: string;

  searchProject(val) {
    this.wordToSearch = val;
  }
}
