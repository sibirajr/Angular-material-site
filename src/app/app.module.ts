import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule, PreloadAllModules } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule
} from "@angular/material";
import {
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatMenuModule
} from "@angular/material";
import { MatIconModule } from "@angular/material";

import { NgsRevealModule } from "ng-scrollreveal";
import { DialogModule } from "custom-angular-dialog";
/*
 * Platform and Environment providers/directives/pipes
 */
import { environment } from "environments/environment";
import { ROUTES } from "./app.routes";
// App is our top level component
import { AppComponent } from "./app.component";
import { APP_RESOLVER_PROVIDERS } from "./app.resolver";
import { AppState, InternalStateType } from "./app.service";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about";
import { NoContentComponent } from "./no-content";
import { dialogblog } from "./dialog_blog/dialog_blog.component";

import { HomeService } from "./home/home.service";

import "../styles/styles.scss";
import "../styles/headings.css";

// Application wide providers
const APP_PROVIDERS = [...APP_RESOLVER_PROVIDERS, AppState];

type StoreType = {
  state: InternalStateType;
  restoreInputValues: () => void;
  disposeOldHosts: () => void;
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    dialogblog,
    NoContentComponent
  ],
  /**
   * Import Angular's modules.
   */
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    DialogModule,
    NgsRevealModule.forRoot(),
    RouterModule.forRoot(ROUTES, {
      useHash: Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules
    })

    /**
     * This section will import the `DevModuleModule` only in certain build types.
     * When the module is not imported it will get tree shaked.
     * This is a simple example, a big app should probably implement some logic
     */
    // ...environment.showDevModule ? [ DevModuleModule ] : [],
  ],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
  providers: [environment.ENV_PROVIDERS, APP_PROVIDERS, HomeService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
