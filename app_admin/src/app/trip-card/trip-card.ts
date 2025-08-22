import { Component, OnInit, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';
import { Authentication } from '../services/authentication';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './trip-card.html',
  styleUrl: './trip-card.css'
})
export class TripCard {

  @Input() trip!: Trip;
  @Input() isLoggedIn: boolean = false;

  constructor(private router: Router,
    private authenticationService: Authentication
  ) {}
  

  ngOnInit(): void {

  }

  public editTrip(trip: Trip) {
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);
    this.router.navigate(['edit-trip']);
  }

}
