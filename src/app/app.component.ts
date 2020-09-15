import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Programa-prueba';

  ngOnInit(){

    const aux = [1,2,3,4,5,6,7,8];

    const index = aux.findIndex(s => s === 3)
    console.log(index);

    const aux2 = aux.filter(s => s % 2 === 0)
    console.log('Pares: ',aux2)

    //spread operator = esparcidor de array, sirve con objetos json

    const aux3 =[1000,2000,...aux];
    console.log('Spread: ', aux3)

    const aux4 ={
      name: 'Mauricio',
      lastName: 'Illens'
    }

    const aux5 = {
      address: 'aaa',...aux4 
    }
    console.log('Spread2: ', aux5)

  }




}
