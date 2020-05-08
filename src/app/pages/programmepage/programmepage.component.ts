import { Component, OnInit } from '@angular/core';
import { ShowService } from 'src/app/services/show.service';
import { Show } from 'src/app/model/show.model';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.shows = this.route.snapshot.data['shows'];

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
