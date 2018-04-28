import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['../../../assets/css/style.css'],
  animations: [
    trigger('visibilityChanged', [
      state('true', style({ opacity: 1 })),
      state('false', style({ opacity: 0 })),
      transition('1 => 0', animate('500ms')),
      transition('0 => 1', animate('500ms'))
    ])
  ]
})
export class QuizComponent implements OnInit {
  visibility: Boolean = true;

  quizTime = false;
  resultTime = false;
  counter = 1;
  quiz = [
    {
      question: 'Question question question',
      answers: [
        {
          answer: 'answer1',
          value: 1
        },
        {
          answer: 'answer22',
          value: 2
        },
        {
          answer: 'answer33',
          value: 3
        }
      ]
    },
    {
      question: 'Question2 question2 question',
      answers: [
        {
          answer: 'answer4',
          value: 1
        },
        {
          answer: 'answer5',
          value: 2
        },
        {
          answer: 'answer6',
          value: 3
        }
      ]
    },
    {
      question: 'Question3 3 3 ',
      answers: [
        {
          answer: 'answer4',
          value: 1
        },
        {
          answer: 'answer5',
          value: 2
        },
        {
          answer: 'answer6',
          value: 3
        }
      ]
    }
  ];
  results = [
    {
      claim: 'blablabla',
      veredict: 'blablablalbalblablalblablabllablabalblabla'
    },
    {
      claim: 'blablabla2',
      veredict: 'blablab2lalbalblablalb2lablabllablabalblabl2a'
    },
    {
      claim: 'blablabla3',
      veredict:
        'blablablalb3al blablalbl3ablablla blabalblabl3aaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaa aaaaaaaaaa'
    }
  ];
  checkbox;

  quizResult = {
    claim: '',
    veredict: ''
  };
  index = 0;
  currentQuestion = this.quiz[this.index];
  totalResult: Number = 0;

  constructor() {}

  ngOnInit() {}

  showQuiz() {
    this.visibility = false;
    setTimeout(() => {
      this.visibility = true;
      this.totalResult = 0;
      this.quizTime = true;
      this.counter = 1;
    }, 500);
  }

  nextQuestion(result, form) {
    this.visibility = false;
    setTimeout(() => {
      form.reset();
      this.counter++;
      this.index += 1;
      this.totalResult += result;
      if (this.index < this.quiz.length) {
        this.currentQuestion = this.quiz[this.index];
      } else {
        if (this.totalResult < this.quiz.length) {
          this.quizResult = this.results[0];
        } else if (this.totalResult > this.quiz.length * 2) {
          this.quizResult = this.results[2];
        } else {
          this.quizResult = this.results[1];
        }
        this.resultTime = true;
      }
      this.visibility = true;
    }, 500);
  }
}
