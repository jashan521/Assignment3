import { Component, OnInit } from '@angular/core';
import{kaljasha} from '../kaljasha';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currStudent: kaljasha=
  {
  sid: 991494313,
  sname:'Jashan',
  scampus: 'Davis',
  title:'Angular Assignment',
  };
  constructor() { }

  ngOnInit() {
    
  }

}
