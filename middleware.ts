import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const user = request.cookies.get("USER")?.value;
    const pathname = request.nextUrl.pathname;
    console.log("Middleware path:", pathname);

    if (
        (pathname === "/clients/auth/login" && user) ||
        (pathname === "/clients/auth/register" && user) ||
        (pathname === "/clients/auth/forgot-password/check-mail" && user)
    ) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/clients/auth/login", 
        "/clients/auth/register",
        "/clients/auth/forgot-password/check-mail",
    ],
};
