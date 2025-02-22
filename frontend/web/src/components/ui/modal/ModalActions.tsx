import { ReactNode } from "react";
import { FormattedMessage } from "react-intl";
import { Button } from "../button/Button";

type ModalActionsProps = {
  children?: ReactNode;
  cancel?: () => void;
  isLoading?: boolean;
};

export function ModalActions(props: ModalActionsProps) {
  return (
    <div className="flex justify-end space-x-3 rounded-b-lg bg-gray-50 px-6 py-4">
      {props.cancel !== undefined && (
        <Button onClick={props.cancel} color="white" disabled={props.isLoading}>
          <FormattedMessage id="generic.cancel" />
        </Button>
      )}
      {props.children}
    </div>
  );
}
