import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review-author',
  templateUrl: './review-author.component.html',
  styleUrls: ['./review-author.component.css']
})
export class ReviewAuthorComponent implements OnInit {
  id: any;
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=>{
      console.log(params)
      this.id = params['id']
    }
  }

}
