import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Product } from "../models/product.model";

@Injectable()
export abstract class ProductService {

 abstract getProducts(): Observable<Product[]>;

}

@Injectable()
export class ProductWebService extends ProductService {

  constructor() {
    super();
    console.log("Product service created..")
  }

   getProducts(): Observable<Product[]> {
      return null;
    }
}
