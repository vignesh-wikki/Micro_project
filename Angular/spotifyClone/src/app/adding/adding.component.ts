import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Music } from '../model/Music';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-adding',
  templateUrl: './adding.component.html',
  styleUrl: './adding.component.css',
})
export class AddingComponent {
  data: any;
  items$: Observable<Music[]>;
  music: Music;
  updating_status: boolean;

  constructor(private api: ApiService, private router: Router) {
    this.music = new Music();
    this.items$ = new Observable<Music[]>();
    this.updating_status = api.updating;

    if (this.updating_status) {
      this.items$ = this.api.findallMusic();

      this.items$.subscribe((data) => {
         const foundMusic = data.find((item) => item.id === api.updating_id);
         if (foundMusic) {
           this.music = foundMusic;
         }
       
      });
    }
  }

  add(data: Music) {
    if (this.updating_status && data.name !== '' && data.imglink !== '') {
      data.id = this.api.updating_id;
      this.api.updateMusic(data);
      this.api.updating = false;
      this.api.updating_id = 0;
    } else {
      if (data.name !== '' && data.imglink !== '') {
        data.id = new Date().getTime();
        this.api.insertMusic(data);
      }
    }
    this.router.navigate(['/']);
  }
}
