import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { createPinia } from "pinia";
import store from './store/index.js';

import App from "./App.vue";
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseDialog from './components/UI/BaseDialog.vue';

import BaseBadge from './components/ui/BaseBadge.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';

import { router } from "./router";

// setup fake backend
import { fakeBackend } from "./helpers";
fakeBackend();

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);
app.component('base-badge', BaseBadge);
app.component('base-spinner', BaseSpinner);

app.use(ElementPlus);
app.use(createPinia());
app.use(store);
app.use(router);

app.mount("#app");
