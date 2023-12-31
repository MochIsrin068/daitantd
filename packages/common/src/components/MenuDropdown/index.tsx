import { ReactNode } from "react";

type TPropsMenuDropdown = {
  icon?: ReactNode;
  menus: Array<{
    label: string;
    value: string;
    onClick: any;
  }>;
};

const defaultIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16M4 18h7"
    />
  </svg>
);

export default function MenuDropdown({ menus, icon }: TPropsMenuDropdown) {
  return (
    <>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          {icon ? icon : defaultIcon}
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          {menus.map((menu) => (
            <li onClick={menu.onClick} key={menu.value}>
              <a>{menu.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
