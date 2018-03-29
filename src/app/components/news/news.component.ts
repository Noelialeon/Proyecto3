import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news/news.service';
import { Observable } from 'rxjs/Observable';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [NewsService],
})

export class NewsComponent implements OnInit {
  allNews: any = [];
  // news = {
  //   status: '',
  //   totalResults: 0,
  //   articles: [],
  // };
latestNews: any = [];


  constructor( private newsService: NewsService) { }

  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.newsService.getNews()
    .then( (res) => this.allNews = res.articles)
    // .then((res) => console.log("news is", res));
    .then(() => console.log('news are', this.allNews));

  }

}