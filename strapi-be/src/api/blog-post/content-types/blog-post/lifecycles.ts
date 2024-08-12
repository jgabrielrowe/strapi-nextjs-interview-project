import readingTime from 'reading-time';
import { convert } from 'html-to-text';

export default {
  async beforeCreate(event: { params: { data: { Body?: string, readingTime?: number } } }) {
    const { data } = event.params;

    if (data.Body) {
      const plainTextContent = convert(data.Body);
      const calculatedReadingTime = Math.ceil(readingTime(plainTextContent).minutes);
      data.readingTime = calculatedReadingTime;
    } else {
      console.log('No content provided.');
    }
  },

  async beforeUpdate(event: { params: { data: { Body?: string, readingTime?: number } } }) {
    const { data } = event.params;

    if (data.Body) {
      const plainTextContent = convert(data.Body, { wordwrap: 130 });
      const calculatedReadingTime = Math.ceil(readingTime(plainTextContent).minutes);
      data.readingTime = calculatedReadingTime;
    } else {
      console.log('No content provided.');
    }
  },
};
