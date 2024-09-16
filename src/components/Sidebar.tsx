"use client";

import {
  Bell,
  Cookie,
  CreditCard,
  Inbox,
  MessageSquare,
  Settings,
  User,
} from "lucide-react";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command";
import UserItem from "./UserItem";
import Link from "next/link";

const Sidebar = () => {
  const menuList = [
    {
      group: "General",
      options: [
        {
          link: "/",
          icon: <User />,
          text: "Profile",
        },
        {
          link: "/",
          icon: <CreditCard />,
          text: "Billing",
        },
        {
          link: "/",
          icon: <Inbox />,
          text: "Inbox",
        },
        {
          link: "/",
          icon: <Bell />,
          text: "Notifications",
        },
      ],
    },
    {
      group: "Settings",
      options: [
        {
          link: "/",
          icon: <Settings />,
          text: "General Settings",
        },
        {
          link: "/",
          icon: <Cookie />,
          text: "Privacy",
        },
        {
          link: "/",
          icon: <MessageSquare />,
          text: "Logs",
        },
      ],
    },
  ];

  return (
    <div className="fixed flex flex-col gap-4 w-[300px] min-w-[300px] p-4 min-h-screen">
      <div>
        <UserItem />
      </div>
      <div className="grow">
        <Command style={{ overflow: "visible" }}>
          <CommandList style={{ overflow: "visible" }}>
            {menuList.map((menu: object) => (
              <CommandGroup key={menu.group} heading={menu.group}>
                {menu.options.map((option: object) => (
                  <CommandItem
                    key={option.text}
                    className="flex gap-2 cursor-pointer"
                  >
                    {option.icon}
                    {option.text}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>
      <div>
        <Link href="/team" className="flex items-center gap-2">
          <Settings />
          <span>Team Settings</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
