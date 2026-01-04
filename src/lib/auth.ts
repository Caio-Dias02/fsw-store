import { AuthOptions } from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prismaClient } from "@/lib/prisma";

export const authOptions: AuthOptions = {
        providers: [
          Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          }),
        ],
        adapter: PrismaAdapter(prismaClient),
      }