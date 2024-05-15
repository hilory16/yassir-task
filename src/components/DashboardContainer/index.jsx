import { node } from "prop-types";
import { useState } from "react";
import Sidebar from "components/Sidebar";
import Header from "components/Header";
import { DashboardWrapper } from "components/AppPage";

export default function DashboardContainer({ children }) {
  const [show, setShow] = useState("hide");
  return (
    <div>
      <Sidebar show={show} />
      <DashboardWrapper>
        <Header show={show} setShow={setShow} />
        <div className="dashboard-content">{children}</div>
      </DashboardWrapper>
    </div>
  );
}

DashboardContainer.propTypes = {
  children: node,
};
