import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
 
    

    @Input()
    photoCover:string = ""

    
    @Input()
    cardTitle:string = ""
    
    //metodo para href do "h1>a" 
    @Input()
    cardTitleHref: string = ""

    @Input()
    cardDescription:string = ""
     
    //metodo para href do "p>a" 
    @Input()
    cardDescriptionHref:string = ""

    @Input()
    Id:string ="0"
}
