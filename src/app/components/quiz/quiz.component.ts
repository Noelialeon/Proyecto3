import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['../../../assets/css/style.css'],
})
export class QuizComponent implements OnInit {
quizTime = false;
quiz = [
  { question: "Question question question",
    answers: [
      {
        answer: "answer",
        value: 1,
      },
      {
        answer: "answer2",
        value: 2,
      },
      {
        answer: "answer3",
        value: 3,
      }
    ]
  },
  { question: "Question2 question2 question",
  answers: [
    {
      answer: "answer",
      value: 1,
    },
    {
      answer: "answer2",
      value: 2,
    },
    {
      answer: "answer3",
      value: 3,
    }
  ]
},
];
index = 0;
currentQuestion = this.quiz[this.index];
totalValue: number;

  constructor() { }

  ngOnInit() {
  }

  showQuiz() {
    this.quizTime = true;
  }

  nextQuestion() {
    this.index += 1;
    this.currentQuestion = this.quiz[this.index];
    if(this.index > this.quiz.length){
      //dar resultados
    }

  }
}
