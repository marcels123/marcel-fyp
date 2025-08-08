import { db } from './firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  timestamp?: any;
}

export const submitContactForm = async (formData: ContactFormData) => {
  try {
    const contactRef = collection(db, 'contacts');
    const docRef = await addDoc(contactRef, {
      ...formData,
      timestamp: serverTimestamp(),
    });
    
    return {
      success: true,
      id: docRef.id,
      message: 'Contact form submitted successfully!'
    };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      success: false,
      error: 'Failed to submit contact form. Please try again.',
    };
  }
}; 