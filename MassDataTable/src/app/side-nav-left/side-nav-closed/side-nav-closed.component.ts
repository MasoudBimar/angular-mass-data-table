import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatNavList } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-nav-closed',
  standalone: true,
  imports: [MatSidenavModule, MatIconModule, MatNavList, CommonModule, RouterModule],
  templateUrl: './side-nav-closed.component.html',
  styleUrl: './side-nav-closed.component.scss'
})
export class SideNavClosedComponent {

}
