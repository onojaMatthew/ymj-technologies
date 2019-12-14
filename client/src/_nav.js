import React from "react";
import { isAuthenticated } from "./helper/authenticate";
import Auth from "./helper/Auth";
const role = isAuthenticated().user && isAuthenticated().user.role === "admin" ? true : false;

const handleLogout = () => {
  Auth.deauthenticateUser();
}
const logout = <span onClick={handleLogout}>Logout</span>

const navAdmin = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'success',
      text: 'NEW',
    },
  },
  {
    name: "Orders",
    url: "/orders",
    icon: "icon-cart"
  },
  {
    name: "User Management",
    url: "/users",
    icon: "icon-user"
  },
  {
    name: logout,
    icon: "icon-logout"
  }, 
];

const navUser = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW',
    },
  },
  {
    name: logout,
    icon: "icon-logout"
  }, 
];

export default {
  items: role ? navAdmin : navUser
};
