import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { SampleComponent } from './sample.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { TemplateComponent } from './template/template.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { HighlightPipe } from './highlight.pipe';
import { ObservablesComponent } from './observables/observables.component';
import {HttpClientModule} from '@angular/common/http';

let routes:Routes=[
  {path:'intro',component:IntroComponent},
  {path:'sample',component:SampleComponent},
  {path:'attribute',component:AttributeDirectivesComponent},
  {path:'parent',component:ParentComponent},
  {path:'child',component:ChildComponent},
  {path:'template',component:TemplateComponent},
  {path:'reactive',component:ReactiveFormsComponent},
  {path:'contact',component:ContactListComponent},
  {path:'pipe',component:PipesComponent},
  {path:'custom',component:CustompipeComponent},
  {path:'observables',component:ObservablesComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    SampleComponent,
    AttributeDirectivesComponent,
    ParentComponent,
    ChildComponent,
    TemplateComponent,
    ReactiveFormsComponent,
    ContactListComponent,
    PipesComponent,
    CustompipeComponent,
    HighlightPipe,
    ObservablesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
