import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExamComponent } from './exam/exam.component';
import { HeaderComponent } from './header/header.component';
import { QuestionsComponent } from './questions/questions.component';
import { CalculationService } from './services/calculation.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ExamComponent,
    HeaderComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CalculationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
