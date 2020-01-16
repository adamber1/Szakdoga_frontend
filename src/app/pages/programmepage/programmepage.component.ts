import { Component, OnInit } from '@angular/core';
import { ShowService } from 'src/app/services/show.service';
import { Show } from 'src/app/model/show.model';

@Component({
  selector: 'app-programmepage',
  templateUrl: './programmepage.component.html',
  styleUrls: ['./programmepage.component.css']
})
export class ProgrammepageComponent implements OnInit {

  datum: Date;
  shows: Show[] = [];
  filteredShows: Show[] = [];
  disabledArray: number[] = [];

  constructor(private showService: ShowService) { }

  ngOnInit() {
    this.showService.getAllShows().subscribe(
      res => {
        this.shows = res;
      }
    );
  }

  showProgramme(event) {
    let currDate = new Date();
    this.datum = event.value;
    this.filteredShows = [];
    for (let s of this.shows) {
      let originalDate = new Date(this.datum).getTime();
      let actualDate = new Date(s.idopont).getTime();
      let currentDate = new Date(currDate).getTime();

      if(actualDate >= originalDate) {
        this.filteredShows.push(s);
      }

      if (actualDate < currentDate) {
        this.disabledArray.push(s.id);
      }

    }
  }

}
