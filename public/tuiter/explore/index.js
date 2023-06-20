import navigationSidebar from "../navigationSidebar/index.js";
import whoToFollowList from "../whoToFollowList/index.js";
import exploreItemsArray from "./mainContent/exploreItems.js";
import exploreItemsList from "./mainContent/exploreItemsList.js";

$("#nav-sidebar").append(navigationSidebar());
$("#who-to-follow").append(whoToFollowList());
$("#explore-list").append(exploreItemsList(exploreItemsArray));
// console.log(whoToFollowList());
