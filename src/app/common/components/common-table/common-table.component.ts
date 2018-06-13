import { Component, OnInit, Input } from '@angular/core';

import { TableSource } from '../../interfaces/table-source';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss'],
})
export class CommonTableComponent implements OnInit {
  @Input() dataSource: TableSource;

  constructor() {}

  ngOnInit() {}
}
