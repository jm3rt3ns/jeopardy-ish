import { Component, OnInit } from '@angular/core';
import { JeopardyService } from '../jeopardy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  public rawText: string = '';

  constructor(private jeopardyService: JeopardyService, private router: Router) { }

  ngOnInit() {
    console.log('the jeopardy service:', this.jeopardyService.getCategories());

    this.jeopardyService.getMarkdown().subscribe(data => {
      this.rawText = data;
    });
  }

  onSubmit() {
    console.log('the content:', this.rawText);
    this.jeopardyService.createCategories(this.rawText);
    this.router.navigate(['/gamescreen']);
  }

}
