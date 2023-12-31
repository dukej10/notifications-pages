import { Grid } from "@mui/material";
import webber from "../assets/images/avatar-mark-webber.webp";
import anna from "../assets/images/avatar-anna-kim.webp";
import angela from "../assets/images/avatar-angela-gray.webp";
import jacob from "../assets/images/avatar-jacob-thompson.webp";
import kimberly from "../assets/images/avatar-kimberly-smith.webp";
import nathan from "../assets/images/avatar-nathan-peterson.webp";
import rizky from "../assets/images/avatar-rizky-hasanuddin.webp";
import chess from "../assets/images/image-chess.webp";
import { Notification } from "../components/Notification";

const mockNotifications = [
  {
    name: "Mark Webber",
    action: "react",
    target: {
      type: "post",
      principal: "My first tournament today!",
      adicionalContent: "reacted to your recent post",
    },
    readed: false,
    date: "1m ago",
    avatar: webber,
  },

  {
    name: "Angela Gray",
    action: "follow",
    target: {
      type: "followed",
      principal: "",
      adicionalContent: "followed you",
    },
    readed: false,
    date: "5m ago",
    avatar: angela,
  },
  {
    name: "Jacob Thompson",
    action: "join",
    target: {
      type: "joined",
      principal: "Chess Club",
      adicionalContent: "has joined your the group",
    },
    readed: false,
    date: "1 day ago",
    avatar: jacob,
  },
  {
    name: "Rizky Hasanuddin",
    action: "send",
    target: {
      type: "message",
      principal:
        "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      adicionalContent: "sent you a private message",
    },
    readed: true,
    date: "5 days ago",
    avatar: rizky,
  },
  {
    name: "Kimberly Smith",
    action: "comment",
    target: {
      type: "img",
      principal: chess,
      adicionalContent: "commented on your picture",
    },
    readed: true,
    date: "1 week ago",
    avatar: kimberly,
  },
  {
    name: "Nathan Peterson",
    action: "reacted",
    target: {
      type: "react",
      principal: "5-end-game strategies to increase your win rate",
      adicionalContent: "reacted to your recent post",
    },
    readed: true,
    date: "2 weeks ago",
    avatar: nathan,
  },
  {
    name: "Anna Kim",
    action: "left",
    target: {
      type: "activity",
      principal: "Chess Club",
      adicionalContent: "the group",
    },
    readed: true,
    date: "2 weeks ago",
    avatar: anna,
  },
];

const NotificationsPannel = ({ read }) => {
  return (
    <Grid container direction={"column"} className="" width={"100%"}>
      {mockNotifications.map((notification, index) => (
        <Notification notification={notification} read={read} key={index} />
      ))}
    </Grid>
  );
};

export default NotificationsPannel;
