import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { PostsComponent } from './posts/posts.component';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';

// NGXS 
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';

// States
import { TutorialState } from './state/tutorial.state';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([
      TutorialState
    ],
       { developmentMode: true }
    ),
    NgxsRouterPluginModule.forRoot(),   // []
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
