import { Component, OnInit } from '@angular/core';
import{kaljasha} from '../kaljasha';
import{ SONG } from '../../assets/data/song';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
currStudent: kaljasha=
{
sid: 991494313,
sname:'Jashan',
scampus: 'Davis',
title:'Angular Assignment',
};

mysongs = SONG;

  constructor() { }

  ngOnInit() {
  }

}
