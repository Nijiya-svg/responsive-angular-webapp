import { Component, inject } from '@angular/core';
import { MenuService } from './menu.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule], // Include HttpClientModule
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  meals: any[] = [];   // Array to store meals data
  searchTerm: string = '';   // The search term entered by the user
  private menuService = inject(MenuService);   // Inject MenuService using inject()

  // Method to search meals based on input term
  searchMeals(): void {
    if (this.searchTerm.trim() === '') {
      this.meals = []; // Clear meals if the search term is empty
      return;
    }

    this.menuService.getMealsByName(this.searchTerm).subscribe(
      (data: { meals: any[] }) => { // Corrected the type to `any[]`
        this.meals = data.meals || []; // Store meals in the meals array
      },
      (error: any) => {
        console.error('Error fetching meals', error);  // Handle errors if any
      }
    );
  }
}
