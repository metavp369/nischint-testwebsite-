"use client";

import { buttonClass } from "./ui";
import { Icon } from "./icons";

export function PrintButton() {
  return (
    <button type="button" onClick={() => window.print()} className={buttonClass("primary")}>
      <Icon name="clipboard" size={20} /> Print or save as PDF
    </button>
  );
}
