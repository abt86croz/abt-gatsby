import { ImTable as icon } from 'react-icons/im';

export default {
  name: 'tables',
  title: 'Tables',
  type: 'document',
  icon,
  fields: [
    {
      type: 'string',
      name: 'title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'tables',
      title: 'ABT Tables',
      type: 'table',
    },
  ],
};
