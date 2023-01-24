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
        logo: 'https://media.tenor.com/c2cCt7lJS-QAAAAC/zztop-guitarspin.gif',
        site: 'https://www.youtube.com/watch?v=Ae829mFAGGE'
      },
      {
        name: 'Frank Beard',
        logo: 'https://media.tenor.com/YQjMEbUxm7gAAAAd/zz-top-legs.gif',
        site: 'https://www.youtube.com/watch?v=Gg9cNGHl-bg'
      },
      {
        name: 'Lanier Greig',
        logo: 'https://media.tenor.com/QZRB6gUWu8sAAAAd/brushing-beard-beard.gif',
        site: 'https://www.youtube.com/watch?v=Z_4ULKpkLNc'
      },
      { name: 'Dan Mitchell',
        logo: 'https://media.tenor.com/9wLpYmMhneoAAAAC/car-speed.gif',
        site: 'https://www.youtube.com/watch?v=kaIZWjItReI'
      },
      {
        name: 'Billy Ethridge',
        logo: 'https://media.tenor.com/0pFJjj9_6RwAAAAC/zz-top-legs.gif',
        site: 'https://www.youtube.com/watch?v=yqzUsATxom4'
      },
    ]
  );
}