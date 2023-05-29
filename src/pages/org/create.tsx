import { CreateOrganization } from "@clerk/nextjs";
import { NavbarLayout } from "~/layouts/navbar-layout";

const CreateOrganizationPage = () => {
  return (
    <NavbarLayout>
      <main className="min-h-[calc(100vh-64px)] p-8">
        <div className="mx-auto mt-20 w-fit">
          <CreateOrganization afterCreateOrganizationUrl="/" />
        </div>
      </main>
    </NavbarLayout>
  );
};

export default CreateOrganizationPage;
