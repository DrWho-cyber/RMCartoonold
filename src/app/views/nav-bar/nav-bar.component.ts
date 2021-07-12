import { Component, OnInit } from '@angular/core';
import { ProxyHttpService } from 'src/app/servisec/proxy-http.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  name:string = "";
  cards:any[] = [];

  constructor(private proxy:ProxyHttpService) { }
  ngOnInit(): void {
   
  }

clearCards(){
  this.cards = [];
  this.name= "";
}
  getYourRM(name:string){
    name = this.name;
    var apiUrl:string = `https://rickandmortyapi.com/api/character/?name=${name}`;
    this.proxy.get(apiUrl).subscribe(response => {
      this.cards = response.results;
    console.log(this.cards)
    });
    console.log(this.name)
}

}
