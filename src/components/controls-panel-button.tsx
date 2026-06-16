import type {
  ActionCreatorWithOptionalPayload,
  ActionCreatorWithoutPayload,
  ActionCreatorWithPayload,
} from "@reduxjs/toolkit";
import { useAppDispatch } from "../app/hooks";
import type { ControlsPanelButtonProps } from "../types";

const ControlsPanelButton = <P,>({
  label,
  action,
  payload,
}: ControlsPanelButtonProps<P>) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (payload === undefined) {
      dispatch(
        (
          action as
            | ActionCreatorWithoutPayload
            | ActionCreatorWithOptionalPayload<P>
        )(undefined),
      );
      return;
    }

    dispatch(
      (
        action as
          | ActionCreatorWithPayload<P>
          | ActionCreatorWithOptionalPayload<P>
      )(payload),
    );
  };

  return (
    <button
      className="controls-panel-button"
      type="button"
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default ControlsPanelButton;
