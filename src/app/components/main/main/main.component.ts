import {Component, OnInit, Output} from '@angular/core';
import {Model} from '../../../models/model';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @Output()
  data: Model;
  condition = true;
  answerForm: FormGroup;
  answer: any;

  constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) {
    this.data = this.activatedRoute.snapshot.data.data;


    this.answerForm = formBuilder.group({
      answer: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  changeCondition(): void {
    this.condition = !this.condition;
  }

  sendAnswer(answerForm: FormGroup): void {
    console.log(answerForm.value);
  }
}
