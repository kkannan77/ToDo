import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';
import { BidiModule } from '@angular/cdk/bidi';
import { ObserversModule } from '@angular/cdk/observers';
import { PortalModule } from '@angular/cdk/portal';

import { MatCommonModule, MatRippleModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioButton } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionPanel } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDividerModule } from '@angular/material/divider';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { AngularFireModule } from '@angular/fire';
// import { AngularFireDatabaseModule } from '@angular/fire/database';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import 'hammerjs';

import { TodoInputComponent } from './todoinput/todoinput.component';
import { TodoListComponent } from './todolist/todolist.component';


const appRoutes: Routes = [

  { path: '**', component: TodoInputComponent }
];

const MATERIAL_MODULES = [
  DragDropModule,
  MatDividerModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatChipsModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatTableModule,
  MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  OverlayModule,
  PortalModule,
  BidiModule,
  A11yModule,
  MatCommonModule,
  ObserversModule
];

@NgModule({
  declarations: [
    AppComponent,
    TodoInputComponent,
    TodoListComponent,
    MatExpansionPanel,
    MatRadioButton
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    MATERIAL_MODULES,
    BrowserAnimationsModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFireDatabaseModule,
    // AngularFirestoreModule,
    // AngularFireAuth, 
    // AngularFireAuthModule
  ],
  exports: MATERIAL_MODULES,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
