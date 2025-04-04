import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SubListComponent } from './sub-list/sub-list.component';
import { ContentEnService } from '../../services/content-en.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  imports: [RouterLink, RouterLinkActive, SubListComponent]
})
export class HeroComponent {

  private contentEnService = inject(ContentEnService);
  name$ = this.contentEnService.getContent('name');
  title$ = this.contentEnService.getContent('title');
  subtitle$ = this.contentEnService.getContent('subtitle');
  intro$ = this.contentEnService.getContent('intro');
  skillTitle$ = this.contentEnService.getContent('skillTitle');
  skills$ = this.contentEnService.getContent('skills');
  careerTitle$ = this.contentEnService.getContent('careerTitle');
  careerIntro$ = this.contentEnService.getContent('careerIntro');
  careerBullets$ = this.contentEnService.getContent('careerBullets');
  
  name = toSignal(this.name$, { initialValue: '' });
  title = toSignal(this.title$, { initialValue: '' });
  subtitle = toSignal(this.subtitle$, { initialValue: '' });
  intro = toSignal(this.intro$, { initialValue: [''] });
  skillTitle = toSignal(this.skillTitle$, { initialValue: '' });
  skills = toSignal(this.skills$, { initialValue: [''] });
  careerTitle = toSignal(this.careerTitle$, { initialValue: '' });
  careerIntro = toSignal(this.careerIntro$, { initialValue: [''] });
  careerBullets = toSignal(this.careerBullets$, { initialValue: ['',[]] });



  constructor() {
    
  }
}
