import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'tab1/costumize',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../costumize/costumize.module').then(m => m.CostumizePageModule)
          }
        ]
      },
      {
        path: 'tab1/costumize/gaskan',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../gaskan/gaskan.module').then(m => m.GaskanPageModule)
          }
        ]
      },
      {
      path: 'tab1/partyorder',
      children: [
        {
          path: '',
          loadChildren: () =>
            import('../partyorder/partyorder.module').then(m => m.PartyorderPageModule)
        }
       ]
      },
      {
        path: 'tab1/home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
         ]
      },
      {
        path: 'tab1/jajanan',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../jajanan/jajanan.module').then(m => m.JajananPageModule)
          }
         ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
