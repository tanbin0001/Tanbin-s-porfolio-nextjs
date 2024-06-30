'use server';

import { cookies } from 'next/headers';

import { redirect } from 'next/navigation';
import { authKey } from '../../contants/authkey';

const setAccessToken = (token: string, option?: any) => {
   console.log(token, option);
   cookies().set(authKey, token);

   if (option && option.redirect) {
      redirect(option.redirect);
   }
};

export default setAccessToken;
