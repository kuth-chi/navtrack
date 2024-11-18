import { Navigate, Route, Routes } from "react-router-dom";
import { OrganizationLiveTrackingPage } from "../components/organizations/OrganizationLiveTrackingPage";
import { AssetLiveTrackingPage } from "../components/asset/live-tracking/LiveTrackingPage";
import { AssetTripsPage } from "../components/asset/trips/AssetTripsPage";
import { AssetAlertsPage } from "../components/asset/alerts/AssetAlertsPage";
import { AssetReportsPage } from "../components/asset/reports/AssetReportsPage";
import { SettingsAccountPage } from "../components/settings/SettingsAccountPage";
import { AssetSettingsGeneralPage } from "../components/asset/settings/general/AssetSettingsGeneralPage";
import { NewAssetPage } from "../components/asset/new/NewAssetPage";
import { AssetSettingsAccessPage } from "../components/asset/settings/access/AssetSettingsAccessPage";
import { Paths } from "./Paths";
import { SettingsAuthenticationPage } from "../components/settings/SettingsAuthenticationPage";
import { AssetSettingsDevicePage } from "../components/asset/settings/device/AssetSettingsDevicePage";
import { ReactNode } from "react";
import { AuthenticatedLayoutTwoColumns } from "../components/ui/layouts/authenticated/AuthenticatedLayoutTwoColumns";
import { AssetLogPage } from "../components/asset/log/AssetLogPage";
import { AssetSettingsLayout } from "../components/asset/settings/shared/AssetSettingsLayout";
import { AccountSettingsLayout } from "../components/settings/AccountSettingsLayout";
import { AssetDashboardPage } from "../components/asset/dashboard/AssetDashboardPage";
import { OrganizationSettingsGeneralPage } from "../components/organizations/settings/general/OrganizationSettingsGeneralPage";
import { TeamsPage } from "../components/teams/TeamsPage";
import { UsersPage } from "../components/users/UsersPage";
import { TeamUsersPage } from "../components/teams/users/TeamUsersPage";
import { TeamSettingsPage } from "../components/teams/settings/TeamSettingsPage";
import { TeamAssetsPage } from "../components/teams/assets/TeamAssetsPage";
import { OrganizationDashboardPage } from "../components/dashboard/OrganizationDashboardPage";
import { OrganizationReportsPage } from "../components/reports/OrganizationReportsPage";
import { OrganizationSettingsLayout } from "../components/organizations/settings/shared/OrganizationSettingsLayout";
import { NotFoundPage } from "../components/shared/NotFoundPage";
import { AuthenticatedLayoutOneColumn } from "../components/ui/layouts/authenticated/AuthenticatedLayoutOneColumn";
import { OrganizationsPage } from "../components/organizations/OrganizationsPage";
import { useSetCurrentAssetFromRoute } from "@navtrack/shared/hooks/current/useSetCurrentAssetFromRoute";

type AuthenticatedRoutesProps = {
  mainRoutes?: ReactNode;
  assetSettingsRoutes?: ReactNode;
  accountSettingsRoutes?: ReactNode;
  organizationSettingsRoutes?: ReactNode;
  extraRoutes?: ReactNode;
};

export function AuthenticatedRoutes(props: AuthenticatedRoutesProps) {
  useSetCurrentAssetFromRoute();

  return (
    <Routes>
      <Route element={<AuthenticatedLayoutTwoColumns />}>
        {props.mainRoutes}
        <Route path={Paths.OrganizationAssetsNew} element={<NewAssetPage />} />
        <Route path={Paths.AssetAlerts} element={<AssetAlertsPage />} />
        <Route path={Paths.AssetDashboard} element={<AssetDashboardPage />} />
        <Route path={Paths.AssetLive} element={<AssetLiveTrackingPage />} />
        <Route path={Paths.AssetLog} element={<AssetLogPage />} />
        <Route path={Paths.AssetReports} element={<AssetReportsPage />} />
        <Route path={Paths.AssetTrips} element={<AssetTripsPage />} />
        <Route
          path={Paths.OrganizationLive}
          element={<OrganizationLiveTrackingPage />}
        />
        <Route
          path={Paths.OrganizationDashboard}
          element={<OrganizationDashboardPage />}
        />
        <Route
          path={Paths.OrganizationReports}
          element={<OrganizationReportsPage />}
        />
        <Route path={Paths.OrganizationTeams} element={<TeamsPage />} />
        <Route path={Paths.OrganizationUsers} element={<UsersPage />} />
      </Route>
      <Route element={<OrganizationSettingsLayout />}>
        {props.organizationSettingsRoutes}
        <Route
          path={Paths.OrganizationSettings}
          element={<OrganizationSettingsGeneralPage />}
        />
      </Route>
      <Route>
        <Route path={Paths.TeamUsers} element={<TeamUsersPage />} />
        <Route path={Paths.TeamAssets} element={<TeamAssetsPage />} />
        <Route path={Paths.TeamSettings} element={<TeamSettingsPage />} />
      </Route>
      <Route element={<AssetSettingsLayout />}>
        {props.assetSettingsRoutes}
        <Route
          path={Paths.AssetSettings}
          element={<AssetSettingsGeneralPage />}
        />
        <Route
          path={Paths.AssetSettingsDevice}
          element={<AssetSettingsDevicePage />}
        />
        <Route
          path={Paths.AssetSettingsAccess}
          element={<AssetSettingsAccessPage />}
        />
      </Route>
      <Route element={<AccountSettingsLayout />}>
        {props.accountSettingsRoutes}
        <Route
          path={Paths.SettingsAuthentication}
          element={<SettingsAuthenticationPage />}
        />
        <Route path={Paths.SettingsAccount} element={<SettingsAccountPage />} />
      </Route>
      <Route
        path={Paths.Organizations}
        element={
          <AuthenticatedLayoutOneColumn>
            <OrganizationsPage />
          </AuthenticatedLayoutOneColumn>
        }
      />
      <Route
        path={Paths.NotFound}
        element={
          <AuthenticatedLayoutOneColumn>
            <NotFoundPage />
          </AuthenticatedLayoutOneColumn>
        }
      />
      {props.extraRoutes}
      <Route
        path={Paths.Home}
        element={<Navigate replace to={Paths.Organizations} />}
      />
      <Route path="*" element={<Navigate replace to={Paths.NotFound} />} />
    </Routes>
  );
}
