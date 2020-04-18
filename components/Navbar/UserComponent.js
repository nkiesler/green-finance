import React, { useContext } from "react";
import Link from "next/link";
import { AppContext } from "../context/AppContext";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const UserComponent = () => {

	const { user, logout } = useContext(AppContext);

	return (
		<UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" className="rounded-circle z-depth-0"
	            alt="avatar image" height="35" />
          </DropdownToggle>
          <DropdownMenu right>
            <Link href="/dashboard">
              <DropdownItem>
                Dashboard
              </DropdownItem>
            </Link> 
            <Link href="/settings">
              <DropdownItem>
                Edit your data
              </DropdownItem>
            </Link> 
            <DropdownItem divider />
            <DropdownItem onClick={logout}>
              Logout
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
	);
}

export default UserComponent;