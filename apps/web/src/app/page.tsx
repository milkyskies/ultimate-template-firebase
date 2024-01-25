'use client';

import { AuthContext } from '@/view/auth/AuthContext';
import { useContext } from 'react';

export default function Home() {
  const authContext = useContext(AuthContext);

  async function getHealth() {
    const health = await authContext.apiClient.healthControllerGetHealth();

    console.log(health);
  }

  async function signOut() {
    await authContext.signOut();
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <a href="/auth/sign-in">Login</a>
      {authContext.status === 'authenticated' ? (
        <div>
          <p>Authenticated as {authContext.userId}</p>
        </div>
      ) : (
        <div>Not authenticated</div>
      )}
      <button onClick={getHealth}>HI</button>
      <button onClick={signOut}>Sign out</button>
    </main>
  );
}
