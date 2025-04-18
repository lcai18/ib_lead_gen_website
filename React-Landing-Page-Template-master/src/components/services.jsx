import React from "react";
import DealOrigination from "./service_pages/deal_origination";
import ClientResearch from "./service_pages/client_research";
import CRMIntegration from "./service_pages/crm_integration";
import EmailTargeting from "./service_pages/email_targeting";
export const Services = (props) => {
  return (
    <div id="services" className="container" style={{ paddingTop: "100px" }}>
      <DealOrigination />
      <ClientResearch />
      <CRMIntegration />
      <EmailTargeting />
    </div>
  );
};
