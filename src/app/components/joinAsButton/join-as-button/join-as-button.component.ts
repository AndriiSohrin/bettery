import {Component, Input, OnInit} from '@angular/core';
import {Model} from '../../../models/model';

@Component({
  selector: 'app-join-as-button',
  templateUrl: './join-as-button.component.html',
  styleUrls: ['./join-as-button.component.scss']
})
export class JoinAsButtonComponent implements OnInit {
  @Input()
  data: Model;

  constructor() {
  }

  ngOnInit(): void {
  }

}
