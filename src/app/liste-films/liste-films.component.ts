import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-liste-films',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste-films.component.html',
  styleUrl: './liste-films.component.css'
})
export class ListeFilmsComponent {
  tabFilms = [ { nomFilm : "Mission Impossible:Fallout",
    imageFilm : "assets/films/miFallout.jpg",
    nbJaime:0,
    nbJeNaimeps: 0,
    disponible : true },
    {nomFilm: "Mission Impossible 2",
    imageFilm : "assets/films/mi2.jpg",
    nbJaime:0,
    nbJeNaimeps: 0,
    disponible : false },
    { nomFilm : "Mission impossible :Protocole Fantôme ",
    imageFilm : "assets/films/miFantome.jpg",
    nbJaime:0,
    nbJeNaimeps: 0,
    disponible : true
   }
    ] ;

  getColor(x: number, y: number): string {
    if (x > y) {
      return '#1c8454'; // green
    } else if (x < y) {
      return '#dc3444'; // red
    } else {
      return '#ffffff'; // white
    }
  }

  getTextColor(x: number, y: number): string {
    // Always return a dark color for text to ensure visibility
    return '#333333';
  }

  onJaime(index: number): void {
    this.tabFilms[index].nbJaime++;
  }

  onJeNaimePas(index: number): void {
    this.tabFilms[index].nbJeNaimeps++;
  }
}

