import { Routes } from '@angular/router';
import { DefaultComponent } from './shared/layouts/default/default.component';
import { LoginComponent } from './pages/login/login.component';
import { MasterComponent } from './shared/layouts/master/master.component';
import { TodoComponent } from './pages/todo/todo.component';

export const routes: Routes = [
    
    // guest route
    {
        path: '',
        component: DefaultComponent,
        children: [
            {
                path: '', component: LoginComponent
            }
        ]
    },
    // secured route
    {
        path: '',
        component: MasterComponent,
        children: [
            {
                path: 'todo', component: TodoComponent
            }
        ]
    },
];
