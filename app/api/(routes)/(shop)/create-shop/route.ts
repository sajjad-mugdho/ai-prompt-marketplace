import prisma from "@/lib/prismaDB";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const data = await req.json();

    const userId = data.userId;

    const user = await prisma.shops.findUnique({
      where: {
        userId,
      },
    });

    if (user) {
      return new NextResponse("You have already a shop in this accounts", {
        status: 400,
      });
    }
    const shop = await prisma.shops.create({ data });
    return NextResponse.json(shop);
  } catch (error) {
    console.log("create shop error", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
