import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-teste-component',
  templateUrl: './teste-component.component.html',
  styleUrls: ['./teste-component.component.css']
})
export class TesteComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Lib-teste load');
  }

}
