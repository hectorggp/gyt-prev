import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localstorage',
  templateUrl: './localstorage.page.html',
  styleUrls: ['./localstorage.page.scss'],
})
export class LocalstoragePage implements OnInit {
  key: string;
  value: string;
  items: { key: string, value: string }[] = [];

  constructor() { }

  ngOnInit() {
    this.loadItems();
  }

  setItem() {
    localStorage.setItem(this.key, this.value);
    this.key = '';
    this.value = '';
    this.loadItems();
  }

  getItem() {
    this.value = localStorage.getItem(this.key);
  }

  loadItems() {
    this.items = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      this.items.push({ key, value });
    }
  }

  updateItem(item: { key: string, value: string }) {
    localStorage.setItem(item.key, item.value);
  }

  deleteItem(item: { key: string, value: string }) {
    localStorage.removeItem(item.key);
    this.loadItems();
  }
}
