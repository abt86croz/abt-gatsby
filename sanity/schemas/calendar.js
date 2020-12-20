import { FcCalendar as icon } from 'react-icons/fc';

export default {
  type: 'document',
  title: 'Google Calendar',
  name: 'calendar',
  icon,
  fields: [
    {
      type: 'string',
      name: 'Title',
    },
    {
      type: 'url',
      name: 'URL',
      validation: (Rule) => Rule.required(),
    },
  ],
};
