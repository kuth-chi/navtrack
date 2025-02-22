import { FormattedMessage } from "react-intl";
import { Heading } from "../ui/heading/Heading";
import { useOrganizationsQuery } from "@navtrack/shared/hooks/queries/organizations/useOrganizationsQuery";
import { Icon } from "../ui/icon/Icon";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Skeleton } from "../ui/skeleton/Skeleton";
import { OrganizationCard } from "./OrganizationCard";
import { CreateOrganizationModal } from "../ui/layouts/authenticated/CreateOrganizationModal";
import { useState } from "react";
import { LoadingIndicator } from "../ui/loading-indicator/LoadingIndicator";

export function OrganizationsPage() {
  const organizations = useOrganizationsQuery();
  const [open, setOpen] = useState(false);

  return (
    <div className="mx-auto max-w-7xl gap-x-6 p-8">
      <Heading type="h1">
        <FormattedMessage id="generic.organizations" />
      </Heading>
      <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {organizations.isLoading ? (
          <div className="col-span-4 flex justify-center">
            <LoadingIndicator size="xl" />
          </div>
        ) : (
          <>
            {organizations.data?.items.map((organization) => (
              <OrganizationCard
                key={organization.id}
                organization={organization}
              />
            ))}
            <div
              onClick={() => setOpen(true)}
              className="flex h-28 cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-gray-500 hover:border-gray-600 hover:bg-gray-200">
              <Icon icon={faPlus} className="mr-2" />
              <FormattedMessage id="generic.new-organization" />
            </div>
            <CreateOrganizationModal open={open} setOpen={setOpen} />
          </>
        )}
      </div>
    </div>
  );
}
