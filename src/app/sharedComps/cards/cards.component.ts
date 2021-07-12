import { Component, Input, OnInit } from '@angular/core';
import { card } from 'src/app/models/card.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  //  card:card = new card("", "", "", "", "");
  @Input() card: any; 
  constructor() { }

  ngOnInit(): void {
    
  }

}
