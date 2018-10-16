// 这是angular模块类
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes  } from '@angular/router';

// 这是angular申明组件类
import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";
import { MembersComponent } from './https/https.component';

export const ROUTES: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'members', component: MembersComponent }
];

@NgModule({
  declarations: [AppComponent, UserComponent,MembersComponent],
  imports: [BrowserModule,FormsModule,HttpClientModule,RouterModule,RouterModule.forRoot(ROUTES)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
