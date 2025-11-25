import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import fs from "fs";
import path from "path";

// Path to users file
const usersFilePath = path.join(process.cwd(), "users.json");

// Helper function to read users
function getUsers() {
  try {
    if (!fs.existsSync(usersFilePath)) {
      fs.writeFileSync(usersFilePath, JSON.stringify([]));
    }
    const data = fs.readFileSync(usersFilePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

export const authOptions = {
  providers: [
    // Google Provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    
    // Credentials Provider
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "your@email.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Get users from storage
        const users = getUsers();

        // Find user by email
        const user = users.find((u) => u.email === credentials.email);

        if (!user) {
          return null;
        }

        // Check password
        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isPasswordValid) {
          return null;
        }

        // Return user object (without password)
        return {
          id: user.id,
          name: user.name,
          email: user.email,
        };
      }
    })
  ],
  
  pages: {
    signIn: '/login',
  },
  
  callbacks: {
    async jwt({ token, user, account }) {
      // Add user info to token on sign in
      if (user) {
        token.id = user.id;
      }
      
      // For Google sign-in, store user if not exists
      if (account?.provider === "google" && user) {
        const users = getUsers();
        const existingUser = users.find((u) => u.email === user.email);
        
        if (!existingUser) {
          const newUser = {
            id: Date.now().toString(),
            name: user.name,
            email: user.email,
            image: user.image,
            provider: "google",
            createdAt: new Date().toISOString(),
          };
          users.push(newUser);
          fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
        }
      }
      
      return token;
    },
    async session({ session, token }) {
      // Add user info to session
      if (token) {
        session.user.id = token.id;
      }
      return session;
    },
  },
  
  session: {
    strategy: "jwt",
  },
  
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };