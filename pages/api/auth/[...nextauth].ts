import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId:
        "276407057989-j86taq6hb2ds653q5pfvocb74lhle7hu.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  callbacks: {
    authorized: ({ token }) => {
      console.log("Authorized callback, token: ", token);
      return !!token;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: 'JWT_SECRET',
};
export default NextAuth(authOptions);
