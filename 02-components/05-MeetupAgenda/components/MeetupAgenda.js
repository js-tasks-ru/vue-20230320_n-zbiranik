import { defineComponent } from '../vendor/vue.esm-browser.js';
import MeetupAgendaItem from './MeetupAgendaItem.js';

export default defineComponent({
  name: 'MeetupAgenda',
  components: {
    MeetupAgendaItem,
  },
  props: {
    agenda: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  template: `
    <ul class="agenda">
      <li class="agenda__item">
        <meetup-agenda-item v-for="agendaItem in agenda" :agendaItem="agendaItem" />
      </li>
    </ul>`,
});
