import { Component, OnInit, ViewChild, Input, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CalculationService } from '../services/calculation.service';
import { Question } from '../services/question.model';
import { Answer } from '../services/answer.model';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})

export class ExamComponent implements OnInit, OnDestroy {
  @ViewChild("f") testAnswers: NgForm;
  @Input() firstQuestionNumber: number;
  questions : Question [] = [];
  answers: Answer [] = [];
  showAnswers: boolean = false;
  totalTrueAnswers: number = 0;
  totalFalseAnswers: number = 0;
  totalEmptyAnswers: number = 0;

  constructor(private calculationService: CalculationService) { }

  ngOnDestroy(): void {
    this.questions  = [];
    this.answers = [];
    this.showAnswers = false;
  }

  ngOnInit(): void {
    if (this.firstQuestionNumber>=300 && this.showAnswers==false) {
      this.questions = [];
      this.questions = this.calculationService.prepareExam(this.firstQuestionNumber);
    }
  }

  onSelect (firstQuestionNumber:number) {
    this.firstQuestionNumber = firstQuestionNumber;
    this.questions = [];
    this.questions = this.calculationService.prepareExam(this.firstQuestionNumber);
  }

  newTest () {
    this.answers = [];
    this.questions = [];
    this.showAnswers = false;
    this.questions = this.calculationService.prepareExam(this.firstQuestionNumber);
  }

  onSubmit(){
    console.log(this.testAnswers);
    let color = "";
    this.showAnswers=true;
    let answer: string ="";
    let i = 0;
    while (i<33){
      answer = "answer"+i;
      color = "";
      let trueAnswer = this.questions[i].trueAnswer;
      let styleA: string, styleB: string, styleC: string, styleD: string;
      const studentAnswer = this.testAnswers.value[answer];
      if (studentAnswer == "") {
        switch(trueAnswer) {
          case "A": styleA="empty";break;
          case "B": styleB="empty";break;
          case "C": styleC="empty";break;
          case "D": styleD="empty";break;
        }
        this.totalEmptyAnswers++;
      }
      else if (studentAnswer == trueAnswer) {
        switch(trueAnswer) {
          case "A": styleA="true";break;
          case "B": styleB="true";break;
          case "C": styleC="true";break;
          case "D": styleD="true";break;
        }
        this.totalTrueAnswers++;
      } else {
        switch(trueAnswer) {
          case "A": styleA="true";break;
          case "B": styleB="true";break;
          case "C": styleC="true";break;
          case "D": styleD="true";break;
        }
        switch(studentAnswer) {
          case "A": styleA="false";break;
          case "B": styleB="false";break;
          case "C": styleC="false";break;
          case "D": styleD="false";break;
        }
        this.totalFalseAnswers++;
      }
      color = this.questions[i].trueAnswer + color;
      this.answers.push(new Answer(
        this.questions[i].number,
        this.questions[i].succes,
        this.questions[i].thema,
        this.questions[i].trueAnswer,
        this.questions[i].quest,
        this.questions[i].answerA,
        this.questions[i].answerB,
        this.questions[i].answerC,
        this.questions[i].answerD,
        styleA,
        styleB,
        styleC,
        styleD,
        this.questions[i].hasPhoto ));
        i++;
    }
    window.scrollTo(0,0);
  }
}
