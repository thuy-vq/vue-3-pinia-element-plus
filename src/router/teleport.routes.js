import { Layout, List } from '@/views/teleport';

export default {
    path: '/teleport',
    component: Layout,
    children: [
        { path: '', component: List },
    ]
};
