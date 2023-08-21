import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { userAtom } from '@site/src/atoms/user';
import { apiClient } from '@site/src/utils/apiClient';
import { createAuth } from '@site/src/utils/firebase';
import { returnNull } from '@site/src/utils/returnNull';
import { onAuthStateChanged } from 'firebase/auth';
import { useAtom } from 'jotai';
import React, { useEffect, useReducer } from 'react';
import { Loading } from '../Loading/Loading';

export const AuthLoader = () => {
  const { siteConfig } = useDocusaurusContext();
  const location = useLocation();
  const [user, setUser] = useAtom(userAtom);
  const [isInitedAuth, dispatchIsInitedAuth] = useReducer(() => true, false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(createAuth(siteConfig), async (fbUser) => {
      if (fbUser) {
        await fbUser
          .getIdToken()
          .then((id) => apiClient.session.$post({ body: { id } }))
          .catch(returnNull);
        await apiClient.me.$get().catch(returnNull).then(setUser);
      } else {
        await apiClient.session.$delete();
        setUser(null);
      }

      dispatchIsInitedAuth();
    });

    return unsubscribe;
  }, [setUser, siteConfig]);

  useEffect(() => {
    if (!isInitedAuth) return;

    const redirectToHome = async () => {
      if (location.pathname === '/') return;
      window.location.href = '/';
    };

    const redirectToLogin = async () => {
      if (location.pathname === '/login') return;
      window.location.href = '/login';
    };

    user ? redirectToHome() : redirectToLogin();
  }, [isInitedAuth, user, location]);

  return <Loading visible={!isInitedAuth} />;
};
