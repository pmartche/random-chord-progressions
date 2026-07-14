import type { OptionsSelectorProps, ControlsPanelButtonProps } from "../types";
import ControlsPanelButton from "./controls-panel-button";

const OptionsSelector = ({
  screenReaderLegend,
  output,
  ariaLabel,
  buttonPropsArray,
}: OptionsSelectorProps) => {
  return (
    <fieldset className="controls-fieldset-wrapper">
      <legend className="sr-only">{screenReaderLegend}</legend>
      <div className="controls-panel">
        <output className="controls-panel-output" aria-label={ariaLabel}>
          {output}
        </output>
        <div className="button-div">
          {buttonPropsArray.map((bp: ControlsPanelButtonProps, index) => (
            <ControlsPanelButton key={index} {...bp} />
          ))}
        </div>
      </div>
    </fieldset>
  );
};

export default OptionsSelector;
