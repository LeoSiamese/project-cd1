import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICatalogModel, ICatalogsModel } from '../models/modelCatalogApi';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  BASE_URL = 'http://167.172.79.2:7001/api/v1/catalog';

  constructor(private http: HttpClient) {}

  CreateCatalog(
    name: string,
    catagory: string,
    summary: string,
    description: string,
    price: number
  ) {
    return this.http.post(this.BASE_URL, {
      name: name,
      catagory: catagory,
      summary: summary,
      description: description,
      imageFile: '',
      price: price,
    });
  }

  GetProduct(): Observable<ICatalogModel[]> {
    const url = `${this.BASE_URL}/GetProducts`;
    return this.http.get<ICatalogModel[]>(url);
  }

  GetProductByPage(page: number, pageSize: number) {
    const url = `${this.BASE_URL}/GetProductsByPage`;
    return this.http.post<ICatalogsModel>(url, {
      page: page,
      pageSize: pageSize,
    });
  }
}
