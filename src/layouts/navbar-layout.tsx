import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

export function NavbarLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-full min-h-screen w-full bg-geist-primary-accent-1">
      <Navbar />
      {children}
    </div>
  );
}

function Navbar() {
  const router = useRouter();

  return (
    <div className="sticky top-0 flex h-16 w-full flex-row items-center justify-between border-b border-geist-primary-accent-2 bg-white px-6 py-3">
      {/* navbar start */}
      <div className="flex flex-row items-center justify-start space-x-4">
        <Logo />

        {router.pathname.includes("/org") && (
          <>
            <div>
              <div className="text-geist-primary-accent-2">
                <svg
                  data-testid="geist-icon"
                  fill="none"
                  height="32"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  viewBox="0 0 24 24"
                  width="32">
                  <path d="M16.88 3.549L7.12 20.451" />
                </svg>
              </div>
            </div>
            <div className="translate-y-[2px]">
              <OrganizationSwitcher />
            </div>
          </>
        )}
      </div>

      {/* navbar navigation */}
      {/* <div>navigation</div> */}

      {/* navbar end */}
      <div className="flex flex-row items-center justify-end space-x-4">
        <UserButton />
      </div>
    </div>
  );
}

function Logo() {
  return (
    <Link href="/">
      <div className="fill-black">
        <svg
          aria-label="Vercel Logo"
          // fill="#FFFFFF"
          viewBox="0 0 75 65"
          height="26"
          data-testid="dashboard/logo">
          <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
        </svg>
      </div>
    </Link>
  );
}
