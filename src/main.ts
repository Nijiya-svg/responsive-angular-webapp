import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


  // src/main.ts
// import { bootstrapApplication } from '@angular/platform-browser';
import { MenuComponent } from './app/pages/menu/menu.component';  // Import MenuComponent
import { MenuService } from './app/pages/menu/menu.service';  // Import MenuService

bootstrapApplication(MenuComponent, {
  providers: [MenuService],  // Provide the MenuService
});
