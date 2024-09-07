import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"; // or other providers like GitHub, Facebook

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  // Additional config (optional)
  session: {
    jwt: true, // Use JSON Web Tokens for session
  },
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        // Additional sign-in logic
        return profile.email.endsWith("@yourdomain.com"); // Allow only emails from a specific domain
      }
      return true; // Return true to allow sign in
    },
    async session({ session, token }) {
      session.user.id = token.sub;
      return session;
    },
  },
});
