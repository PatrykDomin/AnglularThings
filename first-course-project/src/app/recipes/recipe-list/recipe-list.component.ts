import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Rec.', 'test descr', 'https://live.staticflickr.com/3624/3717666449_d546391954_b.jpg'),
    new Recipe('Test Rec2', 'test descr2', 'https://live.staticflickr.com/3624/3717666449_d546391954_b.jpg')
  ] //użycie modelu

  constructor() { }

  ngOnInit() {
  }

}
