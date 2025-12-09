import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const user = request.cookies.get("USER")?.value;
    const pathname = request.nextUrl.pathname;

    console.log("Middleware path:", pathname);

    if (pathname === "/clients/auth/login" && user) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/clients/auth/login"],
};
