import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { baseRoutes } from './base.routes';

import { routeService } from './routes.service';
import { LANG } from './lang';

const localizedRoutes = routeService.translate(baseRoutes, LANG);

const appRoutes: Routes = localizedRoutes;

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);