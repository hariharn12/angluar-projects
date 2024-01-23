import { Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { AddClientComponent } from './add-client/add-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { PageErrorComponent } from './page-error/page-error.component';

export const routes: Routes = [
    {
        path: 'client-list',
        component: ClientListComponent,    
      },
      {
        path: 'client-list/add-client',
        component: AddClientComponent,
      },
      {
        path:'client-list/client-details',
        component:ClientDetailsComponent
      },
      {
        path: 'client-list/client-details/edit-client',
        component: EditClientComponent,
      },   
      {
        path: 'edit-client',
        component: EditClientComponent,
      }  
];
