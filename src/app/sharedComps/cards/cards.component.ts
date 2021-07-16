import { Component, Input, OnInit } from '@angular/core';
import { ProxyHttpService } from 'src/app/servisec/proxy-http.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  //  card:card = new card("", "", "", "", "");
  @Input() card: any;
  locations:any[] = [];
  residents:any[] = [];
  

  constructor(private proxy:ProxyHttpService) { }

  ngOnInit(): void {

  }

  getLocations(url:string) {
    this.proxy.get(url).subscribe(response => {
      this.locations = response.residents;
      
    });

    let numberOfResidents = 0;

    this.locations.forEach(element => {
      this.proxy.get(element).subscribe(response => {
      console.log(response)
      this. residents = response;
      numberOfResidents++
      Swal.fire(`number of RM residents: ${numberOfResidents}`)
    });
    });

     
    
   
  }

  
    
}
