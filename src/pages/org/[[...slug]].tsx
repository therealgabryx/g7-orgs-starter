import { useOrganization } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
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
        <div className="flex w-full flex-row items-center justify-between">
          <h1 className="mb-8 text-2xl font-semibold">{organization?.name}</h1>

          <div
            className=""
            onClick={() => {
              organization?.destroy().then(() => {
                toast.success("Organization destroyed");
              });
            }}>
            destroy
          </div>
        </div>

        <div>
          <pre>{JSON.stringify(organization, null, 2)}</pre>
        </div>
      </main>
    </NavbarLayout>
  );
}
