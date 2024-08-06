import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Music } from './model/Music';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: string;
  Music_arr: Music[];
  Music: Music;
  updating: boolean;
  updating_id: number;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8000/music';
    this.Music = new Music();
    this.Music_arr = [];
    this.updating = false;
    this.updating_id = 0;
  }

  insertMusic(music: Music) {
    this.http.post<Music>(this.url, music).subscribe();
  }

  updateMusic(music: Music) {
    console.log(music);
    this.http.put<Music>(this.url + '/' + music.id, music).subscribe();
  }

  deleteMusic(id: number) {
    this.http.delete<Music>(this.url + '/' + id).subscribe();
  }

  findMusic(id: number) {
    return this.http.get<Music>(this.url + '/' + id);
  }

  findallMusic() {
    return this.http.get<Music[]>(this.url);
  }
}
