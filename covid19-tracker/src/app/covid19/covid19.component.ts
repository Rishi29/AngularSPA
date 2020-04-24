import { Component, OnInit, ViewChild } from "@angular/core";
import { Covid19Service } from "./../covid19.service";
import { CountryData } from "src/countryData";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";

@Component({
  selector: "app-covid19",
  templateUrl: "./covid19.component.html",
  styleUrls: ["./covid19.component.css"],
})
export class Covid19Component implements OnInit {
  ELEMENT_DATA: CountryData[];
  displayedColumns: string[] = [
    "country",
    "cases",
    "todayCases",
    "deaths",
    "todayDeaths",
    "recovered",
    "active",
    "critical",
    "casesPerOneMillion",
    "deathsPerOneMillion",
    "tests",
    "testsPerOneMillion",
  ];
  dataSource = new MatTableDataSource<CountryData>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private service: Covid19Service) {}
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllReports();
  }

  public getAllReports() {
    let response = this.service.covid19Reports();
    response.subscribe(
      (report) => (this.dataSource.data = report as CountryData[])
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
