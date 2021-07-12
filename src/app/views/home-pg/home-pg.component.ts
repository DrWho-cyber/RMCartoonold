import { Component, OnInit } from '@angular/core';
import { ProxyHttpService } from 'src/app/servisec/proxy-http.service';

@Component({
  selector: 'app-home-pg',
  templateUrl: './home-pg.component.html',
  styleUrls: ['./home-pg.component.css']
})
export class HomePgComponent implements OnInit {

  cards: any[] = [];
  showbtn: boolean = false;
  number: any = 2;

  constructor(private proxy: ProxyHttpService) { }
  ngOnInit(): void {
    this.getAllRMNext(0)
  }


  getAllRMNext(number: Number) {
    if (this.number <= 35) {
      const nextNum = this.number - 1;
      var apiUrl: string = `https://rickandmortyapi.com/api/character?page=${nextNum}`;
      this.proxy.get(apiUrl).subscribe(response => {
        console.log(response)
        this.cards = response.results;
        console.log(this.number)
        this.number++

      });
    }
    if (number > 2) {
      this.showbtn = true
    }
  }


  getAllRMPrev() {
    if (this.number > 3) {
      const prevNum = this.number - 3;
      var apiUrl: string = `https://rickandmortyapi.com/api/character?page=${prevNum}`;
      this.proxy.get(apiUrl).subscribe(response => {

        console.log(response)
        this.cards = response.results;

      });
      this.number--  
      if(prevNum == 1){
        this.showbtn = false
      }
    }

   
    
     
  }




}
