import { createApp } from 'vue';
import FriendContact from './components/FriendContact.vue';

import App from './App.vue';

const app = createApp(App);
app.component('FriendContact', FriendContact);
app.mount('#app');
