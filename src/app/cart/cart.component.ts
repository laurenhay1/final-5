import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;

  constructor( ) { }

  ngOnInit()  {this.items = this.cartService.getItems();}
  }
