import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'leben-in-deutschland';
  firstQuestionNumber: number=0;

  showExam = false;
  showQuestions = false;

  checkNumber(firstQuestionNumber: number) {
    if (firstQuestionNumber==33) {
      this.showExam = true;
      this.showQuestions = false;
    } else if (firstQuestionNumber>=0) {
      this.showExam = false;
      this.showQuestions = true;
    } else {
      this.showExam = false;
      this.showQuestions = false;
    }
    this.firstQuestionNumber=firstQuestionNumber;
  }
}
