import React from "react";
import "./SidebarOption.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecordRounded";
import CreateIcon from "@material-ui/icons/Create";
import db from "./firebase";
import { useHistory } from "react-router-dom";

function SidebarOption({ Icon, title, addChannelOption, id }) {

  const history = useHistory();

  const selectChannelWindow = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push(title);
    }
  };

  const addChannel = () => {
    const channelName = prompt('Please enter the channel name');
    if (channelName) {
      db.collection("rooms").add({
        name: channelName
      });
    }
  };

	return (
		<div
			className="sidebarOption"
			onClick={addChannelOption ? addChannel : selectChannelWindow}
		>
			{Icon && <Icon className="sidebarOption__icon" />}
			{Icon ? (
				<h3>{title}</h3>
			) : (
				<h3 className="sidebarOption__channel">
					<span className="sidebarOption__hash">#</span>
					{title}
				</h3>
			)}
		</div>
	);
}

export default SidebarOption;
