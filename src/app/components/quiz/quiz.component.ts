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
      question: 'Is your money in one of these banks?',
      source: 'http://www.bancaarmada.org/es/',
      answers: [
        {
          answer: 'BBVA, Banco Santander or Bankia',
          value: 0
        },
        {
          answer: 'Caixa Bank, Banco Popular or Banco Sabadell',
          value: 1
        },
        {
          answer: 'Triodos, Coop57',
          value: 2
        }
      ]
    },
    {
      question: `Select the first european country amongst the World's Biggest Weapons Exporter`,
      source: 'http://bigthink.com/strange-maps/mapping-the-worlds-biggest-weapons-exporters-nil-and-their-best-customers',
      answers: [
        {
          answer: 'Bulgaria',
          value: 0
        },
        {
          answer: 'France',
          value: 2
        },
        {
          answer: 'Austria',
          value: 1
        }
      ]
    },
    {
      question: 'Which percentage of ISIS weapons are made in Europe?',
      source: 'https://www.telegraph.co.uk/news/2017/12/14/nearly-third-weapons-used-isil-battlefield-manufactured-eu-report/',
      answers: [
        {
          answer: '5%',
          value: 0
        },
        {
          answer: '18%',
          value: 1
        },
        {
          answer: '30%',
          value: 2
        }
      ]
    }
  ];
  results = [
    {
      claim: 'You are not aware.',
      veredict: `We'are sorry to tell you the truth: most probably, your bank is using your money to make weapons
      that will kill civilians in other countries and your beautiful Europe is not what is seems. Go on and check it yourself:`
    },
    {
      claim: 'You are almost aware.',
      veredict: 'You already knew that Europe is not perfect, are you going to do something about it? Go to the starting point:'
    },
    {
      claim: 'You are totally aware.',
      veredict:
        `Congratulationss, go on and check all the information we've prepared:`
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
        if (this.totalResult <= this.quiz.length) {
          this.quizResult = this.results[0];
        } else if (this.totalResult === this.quiz.length * 2) {
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
