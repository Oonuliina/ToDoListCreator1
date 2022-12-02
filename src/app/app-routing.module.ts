import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  canActivate,
} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToMyLists = () => redirectLoggedInTo(['my-lists']);

const routes: Routes = [
  {
/* If we access login page and we are already logged in, we will be redirected to my lists */
    path: '',
    loadChildren: () => 
    import('./pages/login-page/login-page.module').then( m => m.LoginPagePageModule),
    ...canActivate(redirectLoggedInToMyLists)
  },
  {
/* If you tro to access my-lists from the browser and you are not authenticated, you will be redirected to Login page */
    path: 'my-lists',
    loadChildren: () => 
    import('./pages/my-lists/my-lists.module').then( m => m.MyListsPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: '',
    redirectTo: 'login-page',
    pathMatch: 'full'
  },
  {
    path: 'splash-screen',
    loadChildren: () => 
    import('./pages/splash-screen/splash-screen.module').then( m => m.SplashScreenPageModule)
  },

  {
    path: 'create-account',
    loadChildren: () => 
    import('./pages/create-account/create-account.module').then( m => m.CreateAccountPageModule)
  },
  {
    path: 'first-task',
    loadChildren: () => 
    import('./pages/first-task/first-task.module').then( m => m.FirstTaskPageModule)
  },
  {
    path: 'to-do-list',
    loadChildren: () => 
    import('./pages/to-do-list/to-do-list.module').then( m => m.ToDoListPageModule)
  },

  {
    path: 'profile',
    loadChildren: () => 
    import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => 
    import('./pages/feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'thank-you',
    loadChildren: () => 
    import('./pages/thank-you/thank-you.module').then( m => m.ThankYouPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
