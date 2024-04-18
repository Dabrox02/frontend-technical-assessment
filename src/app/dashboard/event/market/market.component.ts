import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-market',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatCardModule],
  templateUrl: './market.component.html',
  styleUrl: './market.component.css'
})
export class MarketComponent {

}
