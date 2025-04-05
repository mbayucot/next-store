import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import api from "@/lib/axios";

const handler = NextAuth({
  debug: false,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const res = await api.post("/login", { user: credentials });

          if (res && res.data) {
            const user = res.data;
            const authHeader = res.headers["authorization"];
            user.token = authHeader.split("Bearer ")[1];
            return user;
          }
          return null;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, trigger, session, user }: any) {
      if (user) {
        token.accessToken = user.token;
        token.email = user.email;
        token.credentials = {};
      }

      if (trigger === "update" && session?.credentials) {
        token.site_id = session.site_id;
        token.credentials = session.credentials;
      }
      return token;
    },
    async session({ session, token }: any) {
      session.accessToken = token.accessToken;
      session.site_id = token.site_id;
      session.email = token.email;
      return session;
    },
  },
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
