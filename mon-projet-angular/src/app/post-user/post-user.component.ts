import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-user',
  templateUrl: './post-user.component.html',
  styleUrls: ['./post-user.component.scss']
})
export class PostUserComponent implements OnInit {

  title: string;
  content: string;
  loveIts: number;
  created_at: Date;

  @Input() appareilName: string;
  @Input() appareilStatus: string;

  constructor() { }

  ngOnInit() {
  }

  getColor() {
    if(this.appareilStatus === 'allumé') {
      return 'green';
    } else if(this.appareilStatus === 'éteint') {
      return 'red';
    }
  }

  getStatus(){
    return this.appareilStatus;
  }
}
