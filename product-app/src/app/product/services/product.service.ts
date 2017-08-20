import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Product } from "../models/product.model";

import {Http, Headers, Response, RequestOptions} from "@angular/http"
import {environment} from "../../../environments/environment"

import "rxjs/add/operator/map";

@Injectable()
export abstract class ProductService {

 abstract getProducts(): Observable<Product[]>;
 abstract deleteProduct(id): Observable<any>;

}

@Injectable()
export class ProductWebService extends ProductService {

  constructor(private http:Http) {
    super();
    console.log("Product service created..")
  }

   getProducts(): Observable<Product[]> {
     
      return this.http.get(environment.apiEndPoint +"/api/products").map((response :Response)=> {
        console.log(response);
        let products : Product[] = response.json();
        return products;
      })
    }

    //DELETE /api/products/123

  deleteProduct(id): Observable<any> {
    return this.http
              .delete(environment.apiEndPoint + "/api/products/" + id)
              .map ( (response: Response)=>{
                console.log(response);
                let data:any = response.json();
                 
                return data;
              })
  }
}
