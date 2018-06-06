import { Component, OnInit, Input } from "@angular/core";
import { Routes } from "@angular/router";
import { NgClass } from "@angular/common";
import { AppState } from "../app.service";

import { HomeService } from "../home/home.service";

@Component({
  selector: "dialog_blog",
  styleUrls: ["./dialog_blog.css"],
  templateUrl: "./dialog_blog.html"
})
export class dialogblog implements OnInit {
  constructor(public homeService: HomeService) {}

  public ngOnInit() {}
}
