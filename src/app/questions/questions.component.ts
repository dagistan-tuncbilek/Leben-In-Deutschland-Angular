import { Component, OnInit, Input } from '@angular/core';
import { CalculationService } from '../services/calculation.service';
import { Question } from '../services/question.model';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit{
  @Input() firstQuestionNumber: number;

  questions : Question [] = [];

  constructor(private calculationService: CalculationService) { }

  ngOnInit(): void {
    this.questions = [];
    this.questions = this.calculationService.showQuestions(this.firstQuestionNumber);
  }

  getQuestions (questionNumber: number) {
    this.questions = [];
    this.firstQuestionNumber = questionNumber;
    this.questions = this.calculationService.showQuestions(this.firstQuestionNumber);
  }
}
