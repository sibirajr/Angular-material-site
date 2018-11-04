import { Component, OnInit, Input } from '@angular/core';
import { Routes } from '@angular/router';
import { NgClass } from '@angular/common';
import { AppState } from '../app.service';

import { HomeService } from '../home/home.service';

@Component({
  selector: 'g-map-blog',
  styleUrls: ['./g-map-blog.css'],
  templateUrl: './g-map-blog.html'
})
export class GMapBlog implements OnInit {
  constructor(public homeService: HomeService) {}

  public ngOnInit() {}
}
