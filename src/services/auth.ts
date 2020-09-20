import { Auth } from 'aws-amplify';

type UserLoginCredentials = {
  username: string;
  password: string;
};

export const isBrowser = (): boolean => typeof window !== 'undefined';

export const getSession = async () => {
  try {
    let session = await Auth.currentSession();
    return isBrowser() && session ? session : null;
  } catch (error) {
    console.error('There was a problem getting the user', error);
    return null;
  }
};

export const getUser = async () => {
  try {
    let user = await Auth.currentUserInfo();
    return isBrowser() && user ? user : null;
  } catch (error) {
    console.error('There was a problem getting the user', error);
    return null;
  }
};

export const handleLogin = async ({
  username,
  password,
}: UserLoginCredentials): Promise<Boolean> => {
  try {
    await Auth.signIn(username, password);
    return true;
  } catch (error) {
    console.error('There was a problem logging in: ', error);
    return false;
  }
};

export const isLoggedIn = async (): Promise<Boolean> => {
  try {
    const user = await getUser();
    return !!user;
  } catch (error) {
    console.error(
      "There was a problem loading the current user's info: ",
      error
    );
    return false;
  }
};

export const logout = async (callback = () => {}) => {
  await Auth.signOut();
};
