import MapPreview from '../previews/MapPreview';

export default {
  type: 'object',
  name: 'map',
  title: 'Insert Map URL',
  fields: [
    {
      name: 'url',
      type: 'url',
      description: 'Paste URL for Google Maps here',
    },
  ],
  preview: {
    select: { url: 'url', description: 'descrition' },
    component: MapPreview,
  },
};
