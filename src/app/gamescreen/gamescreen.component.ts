import { Component, OnInit } from '@angular/core';
import { JeopardyService } from '../jeopardy.service';
import { Category } from '../category';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gamescreen',
  templateUrl: './gamescreen.component.html',
  styleUrls: ['./gamescreen.component.css']
})
export class GamescreenComponent implements OnInit {

  public jeopardCategories: Category[];

  constructor(private jeopardyService: JeopardyService) { }

  ngOnInit() {
  //   this.jeopardyService.getMarkdown().subscribe(data => {
  //     console.log('the data: ', data);

  //     if(!!data) {
  //       this.jeopardyService.createCategories(data);
        
  //     }
  // });
  this.jeopardCategories = this.jeopardyService.getCategories();
  
}

}
