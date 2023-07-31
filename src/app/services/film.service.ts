// Import des modules nécessaires
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Import de l'interface Film.
import Film from '../models/film.model';

// Appel du décorateur Injectable qui permet de créer les données 
//lorsque le service sera injecté
@Injectable({
  providedIn: 'root'
})
export class FilmService {

  // Déclaration de l'URL vers notre API, pour ne pas avoir à la rappeller à chaque fois.
  // Idéalement, on devrait la placer en tant que variable d'environnement. On verra ça plus tard
  private apiUrl = '/films';

  // Injection de la dépendence HttpClient
  constructor(private httpClient: HttpClient) { }

  // Création des différentes routes vers mon API
  // On déclare le type del'observable comme étant un tableau de film
  getFilms(): Observable<Film[]> {
    // On demande à retourner une liste de films (Film étant notre interface)
    // La partie entre parenthèse correspond à l'URL complète de notre route API
    return this.httpClient.get<Film[]>(this.apiUrl)
  }

  // Idem ici mais pour récupérer un film en particulier
  // Lorsqu'on appellera la méthode, on devra alors lui passer l'ID en argument
  getFilm(id: number): Observable<Film> {
    return this.httpClient.get<Film>(`${this.apiUrl}/films/${id}`);
  }

  createFilm(film: Film): Observable<Film> {
    return this.httpClient.post<Film>(`${this.apiUrl}/films`, film);
  }
  // attention au paramètre de l'URL ${film.id} 
  // celui-ci fait référence au paramètre de l'objet film déclaré comme argument de ma fonction 
  updateFilm(film: Film): Observable<Film> {
    return this.httpClient.put<Film>(`${this.apiUrl}/films/${film.id}`, film);
  }

  deleteFilm(id: number): Observable<Film> {
    return this.httpClient.delete<Film>(`${this.apiUrl}/films/${id}`);
  }
}
