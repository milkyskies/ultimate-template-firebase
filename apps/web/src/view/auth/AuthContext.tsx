'use client';

import { createContext, useEffect, useState } from 'react';
import { firebaseAuth } from '@/infra/firebase/firebase.client';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { DefaultApi } from '../../../api-cli';
import { getAuthnApiClient, getDefaultApiClient } from '@/infra/api/api.client';

type Status = 'loading' | 'authenticated' | 'unauthenticated';

type AuthContextType = {
  status: Status;
  userId?: string;
  apiClient: DefaultApi;
  signIn: (args: { email: string; password: string }) => Promise<void>;
  signOut: () => Promise<void>;
};

const defaultAuthContext: AuthContextType = {
  status: 'loading',
  apiClient: getDefaultApiClient(),
  signIn: () => {
    throw new Error('AuthContext not initialized');
  },
  signOut: () => {
    throw new Error('AuthContext not initialized');
  },
};

export const AuthContext = createContext<AuthContextType>(defaultAuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [status, setStatus] = useState<Status>(defaultAuthContext.status);
  const [userId, setUserId] = useState<string | undefined>(undefined);
  const [apiClient, setApiClient] = useState<DefaultApi>(getDefaultApiClient());

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      setStatus('loading');
      setApiClient(getDefaultApiClient());

      if (user) {
        setUserId(user.uid);
        setStatus('authenticated');

        user.getIdToken().then((idToken) => {
          const apiClient = getAuthnApiClient({ idToken });

          setApiClient(apiClient);
        });
      } else {
        setUserId(undefined);
        setStatus('unauthenticated');
      }
    });

    return () => unsubscribe();
  }, []);

  async function signIn(args: { email: string; password: string }) {
    try {
      const user = await signInWithEmailAndPassword(firebaseAuth, args.email, args.password);

      console.log(user);

      if (!user.user) throw new Error('No user');
    } catch (error) {
      console.log(error);
    }
  }

  async function signOut() {
    await firebaseAuth.signOut();
  }

  return (
    <AuthContext.Provider value={{ status, userId, apiClient, signIn, signOut }}>
      {status === 'loading' ? null : children}
    </AuthContext.Provider>
  );
};
