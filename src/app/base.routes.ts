import { LandingComponent } from './landing/landing.component';
import { TripsComponent } from './trips/trips.component';
import { ProfileComponent } from './profile/profile.component';

export const baseRoutes = [
    {
        path: '',
        component: LandingComponent
    },
    {
        path: 'trips',
        component: TripsComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];