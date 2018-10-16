import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `   
    <nav>
      <a routerLink="/members">首页</a>
      <a routerLink="/user">我的</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Semlinker';
  address = {
    province: '福建',
    city: '厦门'
  }
}
