import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Item} from "../model/item";

const BASE_URL = 'http://localhost:3000/items/';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) {
  }

  all() {
    return this.http.get<Item[]>(BASE_URL)
  }
}
