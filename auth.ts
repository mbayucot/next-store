import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import api from "@/lib/axios";

export const handlers = NextAuth({
  debug: true,
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        let user = null;

        //const res = await api.post("/login", { user: credentials });
        const res = await api.post("/auth/login", credentials);

        // logic to verify if the user exists

        if (!res && !res.data) {
          // No user found, so this is their first attempt to login
          // Optionally, this is also the place you could do a user registration
          throw new Error("Invalid credentials.");
        }

        user = res.data;
        const authHeader = res.headers["authorization"];
        user.token = authHeader.split("Bearer ")[1];

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, trigger, session, user }: any) {
      if (user) {
        token.accessToken = user.token;
      }

      return token;
    },
    async session({ session, token }: any) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
});
