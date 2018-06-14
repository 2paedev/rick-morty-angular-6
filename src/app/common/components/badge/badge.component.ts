import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-badge",
  templateUrl: "./badge.component.html",
  styleUrls: ["./badge.component.scss"]
})
export class BadgeComponent implements OnInit {
  @Input() isActive: boolean;
  @Input() isOutline: boolean;
  @Input() text: string;

  constructor() {}

  ngOnInit() {}

  getClasses() {
    return {
      active: this.isActive,
      inactive: !this.isActive,
      outline: this.isOutline,
      filled: !this.isOutline
    };
  }
}
