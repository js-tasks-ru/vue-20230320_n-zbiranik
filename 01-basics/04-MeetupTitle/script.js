import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

const App = defineComponent({
  data() {
    return {
      limit: 5,
      meetupId: 1,
      meetupTitle: ''
    }
  },
  watch: {
    meetupId: {
      immediate: true,
      async handler(newValue, oldValue) {
        const data = await fetchMeetupById(newValue)
        this.meetupTitle = data.title || ''
      },
    }
  }
})
createApp(App).mount('#app')
