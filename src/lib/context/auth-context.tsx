"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  updateProfile,
  User as FirebaseUser 
} from 'firebase/auth';
import { auth } from '@/lib/firebase/firebase';
import { createUserProfile, getUserProfile, UserProfile } from '@/lib/firebase/userService';

interface User {
  uid: string;
  email: string | null;
  role: string;
  displayName?: string | null;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser: FirebaseUser | null) => {
      if (firebaseUser) {
        try {
          // Try to get user profile from Firestore
          const userProfile = await getUserProfile(firebaseUser.uid);
          
          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            role: userProfile?.role || 'user',
            displayName: firebaseUser.displayName || userProfile?.displayName
          });
          setIsAuthenticated(true);
        } catch (error) {
          console.error('Error loading user profile:', error);
          // Fallback to basic user info
          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            role: 'user',
            displayName: firebaseUser.displayName
          });
          setIsAuthenticated(true);
        }
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      console.error('Login error:', error);
      throw new Error(getFirebaseErrorMessage(error.code));
    }
  };

  const register = async (email: string, password: string, name: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Update display name
      if (userCredential.user) {
        await updateProfile(userCredential.user, {
          displayName: name
        });
        
        // Create user profile in Firestore
        await createUserProfile({
          uid: userCredential.user.uid,
          email: userCredential.user.email!,
          displayName: name,
          role: 'user'
        });
      }
    } catch (error: any) {
      console.error('Registration error:', error);
      throw new Error(getFirebaseErrorMessage(error.code));
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

// Helper function to convert Firebase error codes to user-friendly messages
function getFirebaseErrorMessage(errorCode: string): string {
  switch (errorCode) {
    case 'auth/user-not-found':
      return 'No account found with this email address';
    case 'auth/wrong-password':
      return 'Incorrect password';
    case 'auth/invalid-credential':
      return 'Invalid email or password';
    case 'auth/invalid-email':
      return 'Invalid email address';
    case 'auth/weak-password':
      return 'Password should be at least 6 characters';
    case 'auth/email-already-in-use':
      return 'An account with this email already exists';
    case 'auth/too-many-requests':
      return 'Too many failed attempts. Please try again later';
    case 'auth/user-disabled':
      return 'This account has been disabled';
    case 'auth/operation-not-allowed':
      return 'This operation is not allowed';
    default:
      return 'An error occurred. Please try again';
  }
} 