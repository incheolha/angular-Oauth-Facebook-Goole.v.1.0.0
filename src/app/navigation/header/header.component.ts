
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

// 상단 navBar와 sideMenu와 관련한 변수설정

    @Output() sidenavToggle = new EventEmitter<void>();


constructor(private router: Router) { }

  ngOnInit() {}

    onToggleSideNav() {
      this.sidenavToggle.emit();
    }

}

