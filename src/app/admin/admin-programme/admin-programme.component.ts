import { Component, OnInit } from '@angular/core';
import { Show } from 'src/app/model/show.model';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-admin-programme',
  templateUrl: './admin-programme.component.html',
  styleUrls: ['./admin-programme.component.css']
})
export class AdminProgrammeComponent implements OnInit {

  shows: Show[] = [];

  constructor(private service: ShowService) { }

  ngOnInit() {
    this.service.getAllShows().subscribe(
      res => {
        this.shows = res;
      }
    );
  }

  deleteShow(id: number) {
    const i = this.shows.findIndex(s => s.id === id);
    if (i !== -1) {
      this.shows.splice(i, 1);
    }
    this.service.deleteShow(id);
  }

}
