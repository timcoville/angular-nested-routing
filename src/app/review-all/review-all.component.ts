import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review-all',
  templateUrl: './review-all.component.html',
  styleUrls: ['./review-all.component.css']
})
export class ReviewAllComponent implements OnInit {
  id: any;
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=>{
      console.log(params)
      this.id = params['id']
    }
  }

}
