import prisma from "@/app/libs/prismadb";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
// import { request } from 'http';

export async function POST(request: Request) {
  const body = await request.json();
  const { email, name, password } = body;
  //   const res = {
  //     email,
  //     name,
  //     password,
  //   };

  const hashedPassword = await bcrypt.hash(password, 12);

  console.log({ user: prisma.user });

  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  });

  //   prisma.user.create
  //   ({
  //     data: {
  //       email,
  //       name,
  //       hashedPassword,
  //     },
  //   });

  return NextResponse.json(user);
}
