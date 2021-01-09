import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';



const MatComp = [MatCardModule,MatInputModule,MatButtonModule,MatToolbarModule,MatIconModule,MatFormFieldModule,MatSelectModule
,MatSnackBarModule,MatSlideToggleModule]

@NgModule({
  declarations: [],
  imports: [MatComp],
  exports:[MatComp]
})
export class MaterialDesignModule { }
