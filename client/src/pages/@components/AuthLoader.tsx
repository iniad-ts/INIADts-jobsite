import { onAuthStateChanged } from 'firebase/auth';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useEffect, useReducer } from 'react';
import { userAtom } from 'src/atoms/user';
import { Loading } from 'src/components/Loading/Loading';
import { pagesPath } from 'src/utils/$path';
import { apiClient } from 'src/utils/apiClient';
import { createAuth } from 'src/utils/firebase';
import { returnNull } from 'src/utils/returnNull';

export const AuthLoader = () => {
  const router = useRouter();
  const [user, setUser] = useAtom(userAtom);
  const [isInitedAuth, dispatchIsInitedAuth] = useReducer(() => true, false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(createAuth(), async (fbUser) => {
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
  }, [setUser]);

  useEffect(() => {
    if (!isInitedAuth) return;

    const redirectToHome = async () => {
      router.pathname === pagesPath.admin.login.$url().pathname &&
        (await router.push(pagesPath.admin.$url()));
    };
    const redirectToLogin = async () => {
      router.pathname.includes(pagesPath.admin.$url().pathname) &&
        router.pathname !== pagesPath.admin.login.$url().pathname &&
        (await router.push(pagesPath.admin.login.$url()));
    };

    user ? redirectToHome() : redirectToLogin();
  }, [router, isInitedAuth, user]);

  return <Loading visible={!isInitedAuth} />;
};
