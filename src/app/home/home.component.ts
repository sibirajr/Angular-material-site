import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { NgClass } from '@angular/common'
import { AppState } from '../app.service';
import { Router } from '@angular/router/src/router';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public menus: boolean = false;

  constructor() {}

  public ngOnInit() {
    console.log('Home');
  }

  public routeToAbout(){
  }
}
