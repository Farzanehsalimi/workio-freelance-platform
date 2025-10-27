import { Switch } from "@headlessui/react";

function Toggle({ label, enabled, onChange }) {
  return (
    <Switch.Group>
      <div className="flex items-center">
        <Switch.Label className="w-6 ml-2">{label}</Switch.Label>
        <Switch
          checked={enabled}
          onChange={onChange}
          className={`${
            enabled ? "bg-primary-500" : "bg-secondary-100"
          } relative inline-flex h-6 w-10 items-center rounded-full transition-colors focus:outline-none`}
        >
          <span
            className={`${
              enabled ? "-translate-x-5" : "-translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-secondary-0 transition-transform`}
          />
        </Switch>
      </div>
    </Switch.Group>
  );
}

export default Toggle;
