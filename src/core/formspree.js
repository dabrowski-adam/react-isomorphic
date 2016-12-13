import { SubmissionError } from 'redux-form';

export default async function formspree(data) {
  try {
    const response = await fetch('https://formspree.io/form@adamdabrowski.com', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new SubmissionError(response.status);
    }
    return true; // Is this neccessary?
  } catch (error) {
    throw error;
  }
};
