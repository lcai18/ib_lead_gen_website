import React from "react";
import InvestmentBanks from "./client_pages/investment_banks";
import SearchFunds from "./client_pages/search_funds";
import PrivateEquityFirms from "./client_pages/private_equity";
import VentureCapitalFirms from "./client_pages/venture_capital";
import CaseStudies from "./client_pages/case_studies";

const Clients = () => (
  <div id="clients" className="container" style={{ paddingTop: "100px" }}>
    <InvestmentBanks />
    <SearchFunds />
    <PrivateEquityFirms />
    <VentureCapitalFirms />
    <CaseStudies />
  </div>
);

export default Clients;
