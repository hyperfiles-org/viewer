import React from 'react';
import { Widget } from 'near-social-vm';
import { useHashRouterLegacy } from "../hooks/useHashRouterLegacy";

export default function DocsPage(props) {
  useHashRouterLegacy();

  const widgetSrc = props.widgets.docs; 

  return (
    <div className="d-inline-block position-relative overflow-hidden">
      <Widget src={widgetSrc} />
    </div>
  );
}
