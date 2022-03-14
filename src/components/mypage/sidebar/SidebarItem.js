import React from "react";

const SidebarItem = ({ menu, isActive }) => {
  return isActive === true ? (
    <div className="sidemenu-item active">
      <p>{menu.name}</p>
    </div>
  ) : (
    <div className="sidemenu-item">
      <p>{menu.name}</p>
    </div>
  );
};

export default SidebarItem;
