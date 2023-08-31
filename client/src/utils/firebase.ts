import type { DocusaurusConfig } from '@docusaurus/types';
import type { FirebaseOptions } from 'firebase/app';
import { initializeApp } from 'firebase/app';
import type { Auth } from 'firebase/auth';
import { connectAuthEmulator, getAuth } from 'firebase/auth';

let cachedAuth: Auth | undefined;

export const createAuth = (siteConfig: DocusaurusConfig) => {
  if (cachedAuth !== undefined) return cachedAuth;

  if (typeof siteConfig.customFields?.AUTH_EMULATOR_URL === 'string') {
    // https://firebase.google.com/docs/emulator-suite/connect_auth
    const auth = getAuth(initializeApp({ apiKey: 'fake-api-key', authDomain: location.hostname }));
    connectAuthEmulator(auth, siteConfig.customFields.AUTH_EMULATOR_URL, {
      disableWarnings: true,
    });
    cachedAuth = auth;

    return auth;
  } else {
    const firebaseConfig: FirebaseOptions = JSON.parse(
      typeof siteConfig.customFields?.FIREBASE_CONFIG === 'string'
        ? siteConfig.customFields.FIREBASE_CONFIG
        : '{}'
    );
    const auth = getAuth(initializeApp(firebaseConfig));
    cachedAuth = auth;

    return auth;
  }
};
