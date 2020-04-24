import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Covid19Component } from "./covid19/covid19.component";
import { HttpClientModule } from "@angular/common/http";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
//import { MatFormFieldModule } from "@angular/material";
@NgModule({
  declarations: [AppComponent, Covid19Component],
  imports: [
    BrowserModule,
    MatTableModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
