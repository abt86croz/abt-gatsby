/* eslint-disable react/prop-types */
import { SiGooglemaps as icon } from 'react-icons/si';

export default {
  type: 'document',
  title: 'Google Maps',
  name: 'maps',
  icon,
  fields: [
    {
      type: 'string',
      name: 'title',
      validation: (Rule) => Rule.required(),
    },
    {
      type: 'url',
      name: 'URL',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Preview Map',
      name: 'map',
      type: 'array',
      of: [{ type: 'block' }, { type: 'map' }],
    },
  ],
};
