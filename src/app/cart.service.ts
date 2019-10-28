import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  private data = [
    {
      category: 'Paketan Ber 2',
      expanded: true,
      products: [
        { id: 0, name: '2 Porsi Nasi Sayur Telur + 2 Es Teh ', price: '15K' },
        { id: 1, name: '2 Porsi Nasi Sayur Ayam + 2 Es Teh ', price: '25K' },
        { id: 2, name: '2 Porsi Nasi Sayur Daging + 2 Es Jeruk', price: '30K' },
        { id: 3, name: '2 Porsi Nasi Sayur Jamur + 2 Es Jeruk', price: '25K' }
      ]
    },
    {
      category: 'Paketan Ber 4',
      products: [
        { id: 4, name: '4 Porsi Nasi Sayur Telur + 4 Es Teh', price: '25K' },
        { id: 5, name: '4 Porsi Nasi Sayur Ayam + 4 Es Teh', price: '45K' }
        
        
      ]
    },
    {
      category: 'Paketan Ber 8',
      products: [
        { id: 6, name: '8 Porsi Nasi Sayur Ayam + 8 Es Teh', price: '80K' },
        { id: 7, name: '8 Porsi Nasi Sayur Daging + 8 Es Jeruk', price: '110K' },
        { id: 8, name: '8 Porsi Nasi Sayur Jamur + 8 Es Jeruk', price: '100K' }
        
      ]
    }
  ];
 
  private cart = [];
 
  constructor() { }
 
  getProducts() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
 
  addProduct(product) {
    this.cart.push(product);
  }
}