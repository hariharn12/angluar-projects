import { Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { AddClientComponent } from './add-client/add-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';

export const routes: Routes = [
    {
        path: 'client-list',
        component: ClientListComponent,
        children: [
          {
            path: 'client-details',
            component: ClientDetailsComponent,
            children:[
                {
                    path: 'edit-client',
                    component: EditClientComponent,
                  },
            ]
          },
          {
            path: 'add-client',
            component: AddClientComponent,
          },

        ],
      },
      
     
];
