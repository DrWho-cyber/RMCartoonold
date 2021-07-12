import { Component, OnInit } from '@angular/core';
import { ProxyHttpService } from 'src/app/servisec/proxy-http.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  cards:any[] = [];

  number:any = 2;

  constructor(private proxy:ProxyHttpService) { }
  ngOnInit(): void {
    this.getAllRM(0)
  }


  getAllRM(number:Number){
    var apiUrl:string = `https://rickandmortyapi.com/api/character?page=${number}`;
    this.proxy.get(apiUrl).subscribe(response => {
      this.cards = response.results;

    });
}
}
