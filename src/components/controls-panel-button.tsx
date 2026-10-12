import type {
  ActionCreatorWithOptionalPayload,
  ActionCreatorWithoutPayload,
  ActionCreatorWithPayload,
} from "@reduxjs/toolkit";
import { useAppDispatch } from "../app/hooks";
import type { ControlsPanelButtonProps } from "../types";

const ControlsPanelButton = <P,>({
  buttonLabel,
  action,
  payload,
  ariaPressed,
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
      aria-pressed={ariaPressed}
      onClick={handleClick}
    >
      {buttonLabel}
    </button>
  );
};

export default ControlsPanelButton;
