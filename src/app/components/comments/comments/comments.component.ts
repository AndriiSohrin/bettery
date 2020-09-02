import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  commentsForm: FormGroup;
  newComment: any;

  constructor(private formBuilder: FormBuilder) {
    this.commentsForm = formBuilder.group({
      newComment: ['']
    });
  }

  ngOnInit(): void {
  }

  addComment(commentsForm: FormGroup): void {
    console.log(commentsForm.value);
  }
}
