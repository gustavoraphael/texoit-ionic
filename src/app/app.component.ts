import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  showApp: boolean = window.innerWidth >= 768 ? true : false

  public appPages = [
    { title: 'Dashboard', url: '/dashboard' },
    { title: 'List', url: '/list' },
  ];
  constructor() {}

  @HostListener('window:resize', ['$event'])
  onResize() {
    window.innerWidth >= 768 ? this.showApp = true : this.showApp = false
  }

}
