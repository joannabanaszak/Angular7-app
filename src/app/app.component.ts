import { Component, OnInit } from '@angular/core';
import { ListItem } from './interfaces/list-item.interface';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private items: Array<ListItem> = [
    { klucz: 'Klucz 1', wartosc: 1, opis: 'opis1' },
    { klucz: 'Klucz 2', wartosc: 2, opis: 'opis1' },
    { klucz: 'Klucz 3', wartosc: 3, opis: 'opis3' },
    { klucz: 'Klucz 4', wartosc: 4, opis: 'opis1' },
    { klucz: 'Klucz 5', wartosc: 5, opis: 'opis5' },
    { klucz: 'Klucz 6', wartosc: 6, opis: 'opis6' },
    { klucz: 'Klucz 7', wartosc: 7, opis: 'opis7' },
    { klucz: 'Klucz 8', wartosc: 8, opis: 'opis8' },
  ];

  constructor(
    private appService: AppService,
  ) {}

  public ngOnInit(): void {
    this.appService.setItems(this.items);
  }
}
