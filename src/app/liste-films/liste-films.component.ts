import { Component } from '@angular/core';

@Component({
  selector: 'app-liste-films',
  standalone: true,
  imports: [],
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

}
onJaime() {
  console.log('J\'aime ce film');
  }
function onJaime() {
  throw new Error('Function not implemented.');
}

