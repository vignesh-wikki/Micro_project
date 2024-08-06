import { Component } from '@angular/core';
import { ApiService } from '../api.service';

import { Music } from '../model/Music';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrl: './find.component.css',
})
export class FindComponent {
  music: Music;
  flag: boolean;

  constructor(private api: ApiService) {
    this.music = new Music();
    this.flag = false;
  }

  find(data: number) {
    this.api.findMusic(data).subscribe((data) => (this.music = data));
    console.log(this.music);
    if (this.music !== null) {
      this.flag = true;
    }
  }
}
