import type { DocusaurusConfig } from '@docusaurus/types';
import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { createAuth } from 'src/utils/firebase';
import { returnNull } from './returnNull';

export const loginWithGitHub = async (siteConfig: DocusaurusConfig) => {
  const ghProvider = new GithubAuthProvider();
  ghProvider.addScope('read:user');

  await signInWithPopup(createAuth(siteConfig), ghProvider).catch(returnNull);
};

export const logout = async (siteConfig: DocusaurusConfig) => {
  await createAuth(siteConfig).signOut();
};
