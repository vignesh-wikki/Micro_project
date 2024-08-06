import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Music } from '../model/Music';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css',
})
export class ViewComponent {
  data$: Observable<Music[]>;
  updating: boolean = false;
  constructor(private api: ApiService, private router: Router) {
    this.data$ = api.findallMusic();
  }

  deleteMusic(id: number) {
    this.api.deleteMusic(id);
  }

  updateMusic(id: number) {
    this.api.updating = true;

    this.api.updating_id = id;

    this.router.navigate(['/add']);
  }
}
