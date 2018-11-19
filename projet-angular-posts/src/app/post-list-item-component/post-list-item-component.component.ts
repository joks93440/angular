import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() postTitre: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreatedDate: Date;

  constructor() {
    console.log('entre dans list item component');
  }

  getColor() {
    if (this.postLoveIts > 0) {
      return 'green';
    } else if (this.postLoveIts < 0) {
      return 'red';
    } else {
      return 'black';
    }
  }
  addLoveIts(number: number){
    this.postLoveIts += number;
  }
  ngOnInit() {
  }

}
