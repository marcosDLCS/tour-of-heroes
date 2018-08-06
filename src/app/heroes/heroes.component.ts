import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    console.log('Ng on init log');
    this.getHeroes();
    console.log('Ng on init get heroes');
    console.log(JSON.stringify(this.heroes));
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(list => this.heroes = list);
  }

}
