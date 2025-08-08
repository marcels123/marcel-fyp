import { 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  collection, 
  addDoc, 
  query, 
  where, 
  getDocs,
  Timestamp,
  serverTimestamp 
} from 'firebase/firestore';
import { db, auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  role: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  preferences?: {
    theme?: 'light' | 'dark';
    notifications?: boolean;
  };
}

export interface AIInteraction {
  id?: string;
  userId: string;
  prompt: string;
  response: string;
  model: 'gemini' | 'openai';
  timestamp: Timestamp;
  sessionId?: string;
}

/**
 * Create or update user profile in Firestore
 */
export async function createUserProfile(userData: Omit<UserProfile, 'createdAt' | 'updatedAt'>): Promise<void> {
  try {
    const userRef = doc(db, 'users', userData.uid);
    const now = Timestamp.now();
    
    await setDoc(userRef, {
      ...userData,
      createdAt: now,
      updatedAt: now
    });
  } catch (error) {
    console.error('Error creating user profile:', error);
    throw new Error('Failed to create user profile');
  }
}

/**
 * Get user profile from Firestore
 */
export async function getUserProfile(uid: string): Promise<UserProfile | null> {
  try {
    const userRef = doc(db, 'users', uid);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      return userSnap.data() as UserProfile;
    }
    return null;
  } catch (error) {
    console.error('Error getting user profile:', error);
    throw new Error('Failed to get user profile');
  }
}

/**
 * Update user profile in Firestore
 */
export async function updateUserProfile(uid: string, updates: Partial<UserProfile>): Promise<void> {
  try {
    const userRef = doc(db, 'users', uid);
    await updateDoc(userRef, {
      ...updates,
      updatedAt: Timestamp.now()
    });
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw new Error('Failed to update user profile');
  }
}

/**
 * Store AI interaction in Firestore
 */
export async function storeAIInteraction(interaction: Omit<AIInteraction, 'id' | 'timestamp'>): Promise<string> {
  try {
    const interactionsRef = collection(db, 'ai_interactions');
    const docRef = await addDoc(interactionsRef, {
      ...interaction,
      timestamp: Timestamp.now()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error storing AI interaction:', error);
    throw new Error('Failed to store AI interaction');
  }
}

/**
 * Get user's AI interactions
 */
export async function getUserAIInteractions(userId: string, limit: number = 50): Promise<AIInteraction[]> {
  try {
    const interactionsRef = collection(db, 'ai_interactions');
    const q = query(
      interactionsRef, 
      where('userId', '==', userId)
    );
    
    const querySnapshot = await getDocs(q);
    const interactions: AIInteraction[] = [];
    
    querySnapshot.forEach((doc) => {
      interactions.push({
        id: doc.id,
        ...doc.data()
      } as AIInteraction);
    });
    
    // Sort by timestamp descending (most recent first)
    return interactions.sort((a, b) => b.timestamp.toMillis() - a.timestamp.toMillis()).slice(0, limit);
  } catch (error) {
    console.error('Error getting user AI interactions:', error);
    throw new Error('Failed to get AI interactions');
  }
} 