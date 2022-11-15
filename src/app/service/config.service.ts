import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  appName: string = 'Webshop-Stop';

  menuItems: IMenuItem[] = [
    { text: 'Home', link: '/', icon: 'home' },
    { text: 'Ancient', link: '/cat01' },
    { text: 'Classic', link: '/cat02' },
    { text: 'Modern', link: '/cat03' },

  ];

  constructor() { }
}
