import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-stat',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './stat.component.html',
  styleUrl: './stat.component.scss'
})
export class StatComponent implements OnInit {

  @Input() icon!: string;
  @Input() count!: number;
  @Input() label!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
