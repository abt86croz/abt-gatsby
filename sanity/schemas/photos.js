import { FcStackOfPhotos as icon } from 'react-icons/fc';

export default {
  name: 'photos',
  title: 'ABT Photos',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Photo Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
  ],
};
