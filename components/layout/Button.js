import { Icon } from "@iconify/react";
import Link from "next/link";
import clsx from "clsx";

function Button({
  href = "/",
  children,
  icon = "lets-icons:arrow-right-light",
  className = "",
  ...props
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "group bg-purple100 text-sm text-white px-[18px] py-[14px] rounded-sm transition-all duration-300 max-w-max uppercase flex items-center gap-2 hover:bg-purple110",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      <Icon
        icon={icon}
        width="24"
        height="24"
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </Link>
  );
}

export default Button;
