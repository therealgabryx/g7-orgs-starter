import { useOrganization } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { NavbarLayout } from "~/layouts/navbar-layout";

export default function OrganizationPage() {
  const router = useRouter();
  const { organization, membershipList, membership, isLoaded } = useOrganization();
  const [evaluating, setEvaluating] = useState(true);

  useEffect(() => {
    if (router && isLoaded && !organization) {
      router.push("/");
    } else {
      router.push(`/org/${organization?.slug}`);
      setEvaluating(false);
    }
  }, [isLoaded, organization, organization?.id, router]);

  if (!isLoaded || evaluating) return null;

  return (
    <NavbarLayout>
      <main className="min-h-[calc(100vh-64px)] p-8">
        <h1 className="mb-8 text-2xl font-semibold">{organization?.name}</h1>

        <div>
          <pre>{JSON.stringify(organization, null, 2)}</pre>
        </div>
      </main>
    </NavbarLayout>
  );
}
