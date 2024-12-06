import { createBrowserRouter } from 'react-router-dom';
import Landing from '../containers/landing';
import Navigator from '../containers/navigator';
import Email from '../containers/email';
import Service from '../containers/service';
import Work from '../containers/work';
import Layout from '../layouts';
import DetailWork from '../containers/detailWork';
import Team from '../containers/team';
import Careers from '../containers/careers';

// Layout components (if you have any)
// import MainLayout from '../layouts/MainLayout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '',
                element: <Landing />
            },
            {
                path: '/navigator',
                element: <Navigator />,
            },
            {
                path: '/email',
                element: <Email />,
            },
            {
                path: '/service',
                element: <Service />,
            },
            {
                path: '/work',
                element: <Work />
            },
            {
                path: '/work/detail-work/:slug',
                element: <DetailWork />
            },
            {
                path: '/team',
                element: <Team />
            },
            {
                path: '/careers',
                element: <Careers />
            },
        ]
    },
    {
        path: '*',
        element: <div>404 Not Found</div>,
    },
]);

export default router; 