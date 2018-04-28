import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news/news.service';
import { Observable } from 'rxjs/Observable';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['../../app.component.css'],
  providers: [NewsService]
})
export class NewsComponent implements OnInit {
  allNews: any = [];

  latestNews: any = [];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.newsService.getNews().then(res => {
      this.allNews = res.articles;
      this.allNews.forEach(news => {
        if (news.urlToImage === undefined) {
          news.urlToImage =
            'this.src=\'../../../assets/images/news-image-default.jpg';
        }
      });
    });
  }
}
