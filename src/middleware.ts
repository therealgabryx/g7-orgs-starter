import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // publicRoutes: ["/"]
  publicRoutes: ["/api/(.*)"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
