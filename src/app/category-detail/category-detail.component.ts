import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JeopardyService } from '../jeopardy.service';
import { Category } from '../category';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  name: string;
  private sub: any;
  category: Category;
  private currentQuestion = "What?";
  private currentAnswer = "This is the answer";
  public state = 0;

  constructor(private route: ActivatedRoute, private jeopardyService: JeopardyService, private router: Router) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.name = params['id'];
      // console.log('this.name:', this.name);
      this.category = this.jeopardyService.getCategoryByName(this.name);
      this.category = !!this.category ? this.category : new Category('Category not found', []);

      this.currentQuestion = this.category.qaList.length > 0 ? this.category.qaList[0].question : 'no questions remaining';
      this.currentAnswer = this.category.qaList.length > 0 ? this.category.qaList[0].answer : 'no answers remaining';
      console.log('this: ', this.category);
   });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.sub.unsubscribe();

    //Remove the question that was just used
    let index = this.category.qaList.findIndex(pair => {
      return pair.answer === this.currentAnswer && pair.question === this.currentQuestion;
    });

    if(index != -1) {
      this.category.qaList.splice(index, 1);
      this.jeopardyService.updateCategory(this.category);
    }
  }

  displayQuestion(): void {
    this.state++;

    if(this.state > 2) {
      //return to the main screen
      this.router.navigate(['/gamescreen']);
    }
  }

}
