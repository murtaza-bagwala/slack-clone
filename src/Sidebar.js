import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecordRounded";
import CreateIcon from "@material-ui/icons/Create";
import SidebarOption from "./SidebarOption";
import InsertCommentIcon from "@material-ui/icons/InsertCommentRounded";
import InboxIcon from "@material-ui/icons/InboxRounded";
import DraftsIcon from "@material-ui/icons/DraftsRounded";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorderRounded";
import FileCopyIcon from "@material-ui/icons/FileCopyRounded";
import PeopleAltIcon from "@material-ui/icons/PeopleAltRounded";
import AppsIcon from "@material-ui/icons/Apps";
import ExpandLessIcon from "@material-ui/icons/ExpandLessRounded";
import ExpandMoreIcon from "@material-ui/icons/ExpandMoreRounded";
import AddIcon from "@material-ui/icons/Add";
import db from "./firebase";
import {useStateValue } from "./StateProvider"

function Sidebar() {
	const [channels, setChannels] = useState([]);
	const [{user}] = useStateValue();

	useEffect(() => {
    db.collection("rooms").onSnapshot(snapshot => {
			setChannels(
        snapshot.docs.map(doc => {
          return {
            id: doc.id,
            name: doc.data().name
          }
        })
			);
		});
	}, []);

	return (
		<div className="sidebar">
			<div className="sidebar__header">
				<div className="sidebar__info">
					<h2>{user?.displayName}</h2>
					<h3>
						<FiberManualRecordIcon />
						{user?.displayName}
					</h3>
				</div>
				<CreateIcon />
			</div>
			<SidebarOption Icon={InsertCommentIcon} title="Threads" />
			<SidebarOption Icon={InboxIcon} title="Mentions & Reactions" />
			<SidebarOption Icon={DraftsIcon} title="Saved Items" />
			<SidebarOption Icon={BookmarkBorderIcon} title="Channel Browser" />
			<SidebarOption Icon={PeopleAltIcon} title="People & User Groups" />
			<SidebarOption Icon={AppsIcon} title="Apps" />
			<SidebarOption Icon={FileCopyIcon} title="File Browser" />
			<SidebarOption Icon={ExpandLessIcon} title="Show less" />
			<hr />
			<SidebarOption
				Icon={ExpandMoreIcon}
				title="Channels"
				addChannelOption={true}
			/>
			<hr />
			<SidebarOption Icon={AddIcon} title="Add People" />
			{channels.map(channel => (
				<SidebarOption title={channel.name} id={channel.id} />
			))}
		</div>
	);
}

export default Sidebar;
