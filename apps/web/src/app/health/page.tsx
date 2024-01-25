'use client';

import { AuthContext } from '@/view/auth/AuthContext';
import { useContext } from 'react';

const Page = () => {
  const authContext = useContext(AuthContext);

  async function getHealth() {
    const health = await authContext.apiClient.healthControllerGetHealth();

    console.log(health);
  }

  async function getAuthnProtectedHealth() {
    const health = await authContext.apiClient.healthControllerGetAuthnProtectedHealth();

    console.log(health);
  }

  async function getAuthzProtectedHealth() {
    const health = await authContext.apiClient.healthControllerGetAuthzProtectedHealth();

    console.log(health);
  }

  return (
    <div>
      <h1>Health</h1>
      <button className="border" onClick={getHealth}>
        Get Health
      </button>
      <button className="border" onClick={getAuthnProtectedHealth}>
        Get Authn Protected Health
      </button>
      <button className="border" onClick={getAuthzProtectedHealth}>
        Get Authz Protected Health
      </button>
    </div>
  );
};

export default Page;
