import { Component, NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
    
import { HttpClient, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { TransactionComponent } from './transaction/transaction.component';
import { RequestService } from './Services/Request.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { TransferComponent } from './transfer/transfer.component';
import { DdemoComponent } from './ddemo/ddemo.component';
import { ProfileComponent } from './profile/profile.component';
import { TransactionService } from './Services/Trans.Service';
import { ApiService } from './Services/api.service';
import { ValidatorsService } from './Services/validatiors.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    TransactionComponent,
    DashboardComponent,
    LogoutComponent,
    TransferComponent,
    DdemoComponent,
    ProfileComponent
  
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path:"dashboard",component:DashboardComponent
      },
      {
        path:"login",component:LoginComponent
      },{
        path:"transaction",component:TransactionComponent
      },{
        path:"logout",component:LoginComponent
      },
      {
        path:"transfer",component:TransferComponent
      },
      {
        path:"",component:LoginComponent
      },{
        path:"demo",component:DdemoComponent
      },
      {
        path:"profile",component:ProfileComponent
      }

    ])
  
   
  ],
  providers: [RequestService,
    TransactionService,
    ApiService,
    ValidatorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
