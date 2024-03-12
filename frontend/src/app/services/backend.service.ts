import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Media } from '../interfaces/media.interface';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private baseUrl = 'http://localhost:3000/';
  private mediaUrl = 'media';

  constructor(private http: HttpClient) {}

  /**
   * Retrieves all images from the backend server.
   * @returns {Observable<Media[]>} An observable containing an array of media objects.
   */
  getAllImages(): Observable<Media[]> {
    return this.http.get<Media[]>(`${this.baseUrl}${this.mediaUrl}`).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Handles HTTP errors and throws an observable error.
   * @param {HttpErrorResponse} error The HTTP error response.
   * @returns {Observable<never>} An observable with the error message.
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage: string;
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `An error occurred: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Server returned error code ${error.status}: ${error.message}`;
    }
    console.error(errorMessage);
    throw errorMessage;
  }
}
