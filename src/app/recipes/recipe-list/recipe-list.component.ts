import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe [] = [
    new Recipe('A Test Recipe', 'this is a test',
      'https://thecozycook.com/wp-content/uploads/2022/04/Lasagna-Recipe-f.jpg'),
    new Recipe('Another Test Recipe', 'this is a test',
      'https://thecozycook.com/wp-content/uploads/2022/04/Lasagna-Recipe-f.jpg')
  ];

  constructor() {
  }
  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
      this.recipeWasSelected.emit(recipe);
  }

}
