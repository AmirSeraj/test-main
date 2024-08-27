"use client";
import Link from "next/link";
import { useState } from "react";
import { FaShopSlash } from "react-icons/fa6";
import { TbLogs } from "react-icons/tb";
import { MdManageHistory } from "react-icons/md";
import { PiLampLight } from "react-icons/pi";
import { TbReport } from "react-icons/tb";
import { IoImagesOutline } from "react-icons/io5";
import { BsReverseListColumnsReverse } from "react-icons/bs";
import { RiListOrdered } from "react-icons/ri";
import { AiOutlineLike } from "react-icons/ai";
import { FaSitemap } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { PiMapPinSimpleAreaLight } from "react-icons/pi";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const pathUrl = pathname.split("/")[1];
  const items = [
    {
      icon: <FaShopSlash size={28} color="red" />,
      title: "مدریت شعب",
      category: "Shops",
      active: true,
      href: "/shops",
    },
    {
      icon: <TbLogs size={28} color="green" />,
      title: "رویدادها",
      category: "Events",
      active: true,
      href: "/events",
    },
    {
      children: [
        {
          icon: <MdManageHistory size={28} color={"blue"} />,
          title: "تاریخچه رویدادها",
          active: true,
          href: "/history-events",
        },
        {
          icon: <PiMapPinSimpleAreaLight size={28} color={"#ccc"} />,
          title: "داشبورد نقشه استانی",
          active: false,
          href: "/province-map-dashboard",
        },
        {
          icon: <FaMapMarkerAlt size={28} color={"#ccc"} />,
          title: "داشبورد نقشه جغرافیایی",
          active: false,
          href: "/nature-map-dashboard",
        },
        {
          icon: <FaSitemap size={28} color={"#ccc"} />,
          title: " نقشه جانمایی قطعات",
          active: false,
          href: "/tools-status-map",
        },
        {
          icon: <AiOutlineLike size={28} color={"#ccc"} />,
          title: "داشبورد وضعیت شعب",
          active: false,
          href: "/shop-status-shop",
        },
        {
          icon: <RiListOrdered size={28} color={"#ccc"} />,
          title: "گزارش رویدادها",
          active: false,
          href: "/events-report",
        },
      ],
      category: "EventLogs",
    },
    {
      children: [
        {
          icon: <BsReverseListColumnsReverse size={28} color={"blue"} />,
          title: "Update Event list",
          active: true,
          href: "/update-event-list",
        },
        {
          icon: <IoImagesOutline size={28} color={"blue"} />,
          title: "Image Events",
          active: true,
          href: "/image-events",
        },
      ],
      category: "Tools",
    },
    {
      children: [
        {
          icon: <TbReport size={28} color={"blue"} />,
          title: "مدریت تایید رویدادها",
          active: true,
          href: "/events-check-management",
        },
        {
          icon: <PiLampLight size={28} color={"#ccc"} />,
          title: "رویدادهای تایید نشده",
          active: false,
          href: "/nonchecks-events",
        },
      ],
      category: "Confirm Logs",
    },
  ];

  return (
    <header className="w-full flex justify-between pt-4">
      <div className="flex h-full">
        {items.map((item, index) =>
          item.children ? (
            <div key={index} className="flex flex-col h-full p-1">
              <div className="flex items-center h-full border-r-1 border-slate-500 gap-1">
                {item.children.map((i, index1) => (
                  <Link
                    href={i.href}
                    key={index1}
                    className={`flex rounded-lg flex-col gap-4 items-center justify-between h-full p-1 w-[80px] hover:bg-slate-500 hover:shadow-lg hover:drop-shadow-lg ${
                      pathname === i.href &&
                      "bg-slate-500 shadow-lg drop-shadow-lg"
                    }`}
                  >
                    {i.icon}
                    <p
                      className={`${
                        i.active ? "text-black" : "text-[#ccc]"
                      } text-[0.7rem] text-center`}
                    >
                      {i.title}
                    </p>
                  </Link>
                ))}
              </div>
              <p className="w-full text-center text-sm">{item.category}</p>
            </div>
          ) : (
            <div key={index} className="flex flex-col gap-1 h-full p-1">
              <Link
                key={index}
                href={item.href}
                className={`flex rounded-lg flex-col gap-4 items-center justify-between h-[100px] w-[80px] p-1 hover:bg-slate-500 hover:shadow-lg hover:drop-shadow-lg ${
                  pathname === item.href &&
                  "bg-slate-500 shadow-lg drop-shadow-lg"
                }`}
              >
                {item.icon}
                <p
                  className={`${
                    item.active ? "text-black" : "text-[#ccc]"
                  } text-[0.7rem] text-center`}
                >
                  {item.title}
                </p>
              </Link>
              <div className="w-full h-[24px]" />
            </div>
          )
        )}
      </div>
      <div>Admin</div>
    </header>
  );
};

export default Header;
