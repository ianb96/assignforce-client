import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { OverviewComponent } from './overview/overview.component';
import { BatchesComponent } from './batches/batches.component';
import { LocationsComponent } from './locations/locations.component';
import { CurriculaComponent } from './curricula/curricula.component';
import { TrainersComponent } from './trainers/trainers.component';
import { ProfileComponent } from './profile/profile.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
import {AppRouting} from './app.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
<<<<<<< HEAD
<<<<<<< HEAD
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatChipsModule,
  MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule, MatToolbarModule, MatTooltipModule
=======
  MatExpansionModule, MatIconModule, MatListModule, MatSortModule, MatTableModule,
  MatTabsModule, MatToolbarModule
>>>>>>> 29d317cc24d65e69c53bf1e3db9f3e5c8da4375f
} from '@angular/material';
<<<<<<< HEAD
import {TrainerService} from './services/trainer.service';
import {SkillService} from './services/skill.service';
import {S3CredentialService} from './services/s3-credential.service';
=======
  MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatSortModule, MatTableModule,
  MatTabsModule, MatOptionModule, MatDatepickerModule , MatNativeDateModule
} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';

=======
import { TimelineComponent } from './timeline/timeline.component';
>>>>>>> 0f3828e8db8be52345dcaca66e6b9aac0c3c1a61

>>>>>>> e767e60584eaf5eda006c149e74b2ba42a6cc4b2

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    OverviewComponent,
    BatchesComponent,
    LocationsComponent,
    CurriculaComponent,
    TrainersComponent,
    ProfileComponent,
    ReportsComponent,
    SettingsComponent,
    TimelineComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRouting,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    MatExpansionModule,
    MatSortModule,
    MatTableModule,
<<<<<<< HEAD
<<<<<<< HEAD
    MatTooltipModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule
=======
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
>>>>>>> e767e60584eaf5eda006c149e74b2ba42a6cc4b2
=======
    MatToolbarModule
>>>>>>> 29d317cc24d65e69c53bf1e3db9f3e5c8da4375f
  ],
  providers: [TrainerService, SkillService, S3CredentialService],
  bootstrap: [AppComponent]
})

export class AppModule {}
