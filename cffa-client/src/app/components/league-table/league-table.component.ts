import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-league-table',
  imports: [ButtonModule,
      MatTableModule
  ],
  templateUrl: './league-table.component.html',
  styleUrl: './league-table.component.scss'
})

export class LeagueTableComponent {
  dataSource = {};

}
