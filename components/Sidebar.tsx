import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = ({ user }: SiderbarProps) => {
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer items-center gap-2">
          <Image
            src="/icons/logo.svg"
            height={34}
            width={34}
            alt="logo"
            className="size-[24px] max-xl:14"
          />
        </Link>
      </nav>
    </section>
  );
};

export default Sidebar;
