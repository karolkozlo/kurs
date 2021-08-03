import { createApp } from 'vue';
import App from './App.vue';
import FriendContact from './components/FriendContact.vue';
import FriendCreator from './components/FriendCreator.vue';

const app = createApp(App);
app.component('FriendContact', FriendContact);
app.component('FriendCreator', FriendCreator);
app.mount('#app');
