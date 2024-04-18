import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MarketComponent } from "./market/market.component";

@Component({
    selector: 'app-event',
    standalone: true,
    templateUrl: './event.component.html',
    styleUrl: './event.component.css',
    imports: [MatCardModule, MarketComponent]
})
export class EventComponent {

}
