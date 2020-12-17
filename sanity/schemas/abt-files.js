import { GrDocumentPdf as icon } from 'react-icons/gr';

export default {
  name: 'abtFiles',
  title: 'PDF Files',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'File Tile',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'file',
      title: 'Upload File',
      type: 'file',
      validation: (Rule) => Rule.required(),
    },
  ],
};
