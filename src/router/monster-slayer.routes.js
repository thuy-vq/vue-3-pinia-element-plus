import { Layout, List } from '@/views/monster';

export default {
    path: '/monster-slayer',
    component: Layout,
    children: [
        { path: '', component: List },
    ]
};
