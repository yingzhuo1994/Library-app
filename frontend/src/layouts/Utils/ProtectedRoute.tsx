import { useOktaAuth } from "@okta/okta-react";
import { Navigate } from "react-router-dom";
import { SpinnerLoading } from "./SpinnerLoading";

export type ProtectedRouteProps = {
  authenticationPath?: string;
  outlet: JSX.Element;
};

export default function ProtectedRoute({
    outlet,
    authenticationPath="/login",
}: ProtectedRouteProps) {
    const { authState } = useOktaAuth();
    console.log(authState?.isAuthenticated);
    if (!authState) {
        return (
            <SpinnerLoading/>
        );
    }
  if (authState?.isAuthenticated) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: authenticationPath }} />;
  }
}
