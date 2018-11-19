import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  listPostsGetted = [
    {
      title: 'Titre 1',
      content: 'Contenu 1 blaaaaaaaaaaaa akjhakjhhhs fkdhf shfhf hsuifhufh  fihfuhdsuiffh',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Titre 2',
      content: 'Contenu 2 fghgdfh  hgfhaaaaaaaaaa akjhakjhhhs fkdhf shfhf hsuifhufh  fihfuhdsuiffh',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Titre 3',
      content: 'Contenu 3a ak fg jhakjhhhs fkdhf shfhf hsuifhufh  fihfuhdsuiffh',
      loveIts: 0,
      created_at: new Date()
    }
  ];
}
