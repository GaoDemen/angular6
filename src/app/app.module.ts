// 这是angular模块类
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes  } from '@angular/router';

// 这是antd ui 组件类
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);


// 这是angular申明组件类
import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";
import { MembersComponent } from './https/https.component';
import { HomeComponent } from '../page/home/home.component';
import { OrderComponent } from '../page/order/order.component';

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'order', component: OrderComponent },
  { path: 'user', component: UserComponent },
  { path: 'members', component: MembersComponent }
];

@NgModule({
  declarations: [
    AppComponent, 
    UserComponent,
    MembersComponent,
    HomeComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    NgZorroAntdModule,
    RouterModule.forRoot(ROUTES,{ useHash: false })
  ],
  /** 配置 ng-zorro-antd 国际化 **/
  providers: [{ 
    provide: NZ_I18N, 
    useValue: zh_CN }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
