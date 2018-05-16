import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-brand',
  templateUrl: './product-brand.component.html',
  styleUrls: ['./product-brand.component.css']
})
export class ProductBrandComponent implements OnInit {
  brand: any;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=>{
      console.log(params['brand'])
      this.brand = params['brand']
    }
  }

}
