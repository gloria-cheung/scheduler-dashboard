import React, { Component } from "react";
import Loading from "./Loading";
import Panel from "./Panel";

import classnames from "classnames";

const data = [
  {
    id: 1,
    label: "Total Interviews",
    value: 6,
  },
  {
    id: 2,
    label: "Least Popular Time Slot",
    value: "1pm",
  },
  {
    id: 3,
    label: "Most Popular Day",
    value: "Wednesday",
  },
  {
    id: 4,
    label: "Interviews Per Day",
    value: "2.3",
  },
];

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      focused: null,
    };

    this.selectPanel = this.selectPanel.bind(this);
  }

  selectPanel(id) {
    this.setState((prevState) => ({
      focused: prevState.focused ? null : id,
    }));
  }

  render() {
    const dashboardClasses = classnames("dashboard", {
      "dashboard--focused": this.state.focused,
    });

    if (this.state.loading) {
      return <Loading />;
    }

    const panelData = (
      this.state.focused
        ? data.filter((d) => this.state.focused === d.id)
        : data
    ).map((d) => {
      return <Panel key={d.id} {...d} onSelect={this.selectPanel} />;
    });

    return <main className={dashboardClasses}>{panelData}</main>;
  }
}

export default Dashboard;
