import { Component } from '@angular/core';
import { LeagueTableComponent } from './components/league-table/league-table.component';

@Component({
  selector: 'app-root',
  imports: [LeagueTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Ceylon Fantasy Football Association';
}
