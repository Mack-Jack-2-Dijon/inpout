import { Component } from '@angular/core';
import { Developer } from '../model/Developer';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css'],
})
export class DeveloperComponent {
  dev1: Developer = new Developer(
    'Top',
    'ZZ',
    54,
    'Groupe',
    'Eliminator',
    [
      {
        name: 'Billy Gibbons',
        logo: 'https://play-lh.googleusercontent.com/85WnuKkqDY4gf6tndeL4_Ng5vgRk7PTfmpI4vHMIosyq6XQ7ZGDXNtYG2s0b09kJMw',
        site: 'https://www.youtube.com/watch?v=Ae829mFAGGE'
      },
      {
        name: 'Frank Beard',
        logo: 'https://fr.wikipedia.org/wiki/ZZ_Top#/media/Fichier:ZZ_Top_Live.jpg',
        site: 'https://www.youtube.com/watch?v=Gg9cNGHl-bg'
      },
      {
        name: 'Lanier Greig',
        logo: 'https://fr.wikipedia.org/wiki/ZZ_Top#/media/Fichier:Zztop.jpg',
        site: 'https://www.youtube.com/watch?v=Z_4ULKpkLNc'
      },
      { name: 'Dan Mitchell',
        logo: 'https://fr.wikipedia.org/wiki/ZZ_Top#/media/Fichier:Zz_top_performance.jpg',
        site: 'https://www.youtube.com/watch?v=kaIZWjItReI'
      },
      {
        name: 'Billy Ethridge',
        logo: 'https://fr.wikipedia.org/wiki/ZZ_Top#/media/Fichier:ZZTopEliminator.jpg',
        site: 'https://www.youtube.com/watch?v=yqzUsATxom4'
      },
    ]
  );
}