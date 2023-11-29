import { User, currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const user: User | null = await currentUser();

    if (!user) {
      return new NextResponse("Please Login To Access", { status: 401 });
    }

    return NextResponse.json({ user });
  } catch (error) {
    console.log("user loading::", error);
    return new NextResponse("Internal Server Error::");
  }
}
