import setAccessToken from './setAccessToken';

export const userLogin = async (data: any) => {
   console.log("Login data:", data);
   try {
      const res = await fetch("http://localhost:5000/api/auth/login",
         {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            credentials: 'include',
         }
      );

      const userInfo = await res.json();

      console.log(userInfo);
      console.log("Response from login API:", userInfo?.data?.token);

      if (userInfo?.data?.token) {
         console.log("Token received:", userInfo?.data?.token);
         setAccessToken(userInfo?.data?.token, {
            redirect: '/dashboard/admin',
         });
      } else {
         console.log("No token received, login failed:", userInfo);
      }

      return userInfo;
   } catch (error) {
      console.error("Error during login fetch:", error);
      throw error;
   }
};
