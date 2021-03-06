import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Categorie} from "../model/categorie.model";
import {Observable} from "rxjs/index";
import {ApiResponse} from "../model/api.response";

import { environment } from '../../environments/environment';

@Injectable()
export class CategorieService {

  constructor(private http: HttpClient) { }
  baseUrl: string = `${environment.url}/api/categories`;

  getCategories() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getCategorieBySlug(slug: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl}/${slug}`);
  }

  createCategorie(categorie: Categorie): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, {categorie});
  }
}