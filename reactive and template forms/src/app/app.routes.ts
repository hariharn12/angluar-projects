import { Routes } from '@angular/router';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveFormsComponent } from './reactiveforms/reactive-forms.component';

export const routes: Routes = [
    {
        path:'reactive-forms',
        component:ReactiveFormsComponent,
    },
    {
        path:'template-forms',
        component:TemplateFormsComponent,
    }
];
