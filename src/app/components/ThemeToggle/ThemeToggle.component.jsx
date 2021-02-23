// Import: Dependencies
import React from "react";

// Import: Elements
import { Button, Checkbox, Label, ScaleSwitch } from "./ThemeToggle.elements";

// Component: ThemeToggle
export default function ThemeToggle({ isOn, handleToggle, onColor }) {
  return (
    <ScaleSwitch>
      <Checkbox
        checked={isOn}
        onChange={handleToggle}
        id={`theme-toggle`}
        type="checkbox"
      />

      <Label style={{ background: isOn && onColor }} htmlFor={`theme-toggle`}>
        <Button />
      </Label>
    </ScaleSwitch>
  );
}
