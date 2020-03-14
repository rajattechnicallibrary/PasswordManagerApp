import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },    
  { 
    path: 'list',  
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)    
  },
  { path: 'add-categories', loadChildren: './add-categories/add-categories.module#AddCategoriesPageModule' },
  { path: 'categories', loadChildren: './categories/categories.module#CategoriesPageModule' },
  { path: 'about-us', loadChildren: './about-us/about-us.module#AboutUsPageModule' },
  { path: 'add-detail', loadChildren: './add-detail/add-detail.module#AddDetailPageModule' },
  { path: 'change-password', loadChildren: './change-password/change-password.module#ChangePasswordPageModule' },
  { path: 'contact-us', loadChildren: './contact-us/contact-us.module#ContactUsPageModule' },
  { path: 'faq', loadChildren: './faq/faq.module#FaqPageModule' },
  { path: 'legal-terms', loadChildren: './legal-terms/legal-terms.module#LegalTermsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'thank-you', loadChildren: './thank-you/thank-you.module#ThankYouPageModule' },
  { path: 'categorie-activity', loadChildren: './page/categorie-activity/categorie-activity.module#CategorieActivityPageModule' },
  { path: 'view', loadChildren: './page/view/view.module#ViewPageModule' },
  { path: 'view-categories', loadChildren: './view-categories/view-categories.module#ViewCategoriesPageModule' },
  { path: 'view-password', loadChildren: './view-password/view-password.module#ViewPasswordPageModule' },
  { path: 'auth-password', loadChildren: './auth-password/auth-password.module#AuthPasswordPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
