import { useOrganizationList, useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { setTimeout } from "timers";
import { Card } from "~/components/ui/card";
import { NavbarLayout } from "~/layouts/navbar-layout";

const Home: NextPage = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <>
      <Head>
        <title>G7 Orgs Starter</title>
        <meta
          name="description"
          content="G7 - Generated by create-t3-app & clerk"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <NavbarLayout>
        <main className="min-h-[calc(100vh-64px)] p-8">
          <OrganizationList />
        </main>
      </NavbarLayout>
    </>
  );
};

export default Home;

const OrganizationList = () => {
  const router = useRouter();

  const { organizationList, isLoaded, setActive, createOrganization } = useOrganizationList();

  if (!isLoaded) {
    // show loading state
    return null;
  }

  return (
    <div>
      <h1 className="mb-8 text-2xl font-semibold">Your Organizations</h1>

      {organizationList.length === 0 ? (
        <div>You do not belong to any organizations yet.</div>
      ) : (
        <div>
          <div className="grid w-full grid-cols-4 gap-4">
            {organizationList.map(({ organization, membership }) => (
              <>
                {/* <Link
                  href={`/org/${organization.slug}`}
                  onClick={() => setActive({ organization })}> */}
                <Card
                  onClick={() => {
                    setActive({ organization }).then(() => {
                      setTimeout(() => {
                        router.push(`/org/${organization.slug}`);
                      }, 50);
                    });
                  }}
                  key={organization.id}
                  className="bg-white p-6 hover:cursor-pointer">
                  <p>Name: {organization.name}</p>
                  <p>Your role: {membership.role}</p>
                </Card>
                {/* </Link> */}
              </>
            ))}

            <Card
              onClick={() => {
                router.push("/org/create");
              }}
              key={"create-org"}
              className="bg-white p-6 hover:cursor-pointer">
              <p> Create New</p>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};
