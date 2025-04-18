import { Icon } from "@iconify/react";
import Link from "next/link";
import clsx from "clsx";

function ButtonOutline({
  href,
  children,
  icon = "lets-icons:arrow-right-light",
  color = "purple100", // puoi cambiarlo se serve
  className = "",
  ...props
}) {
  return (
    <Link
      href={href}
      className={clsx(
        `group border text-${color} border-${color} px-[18px] py-[14px] rounded-sm transition-all duration-300 max-w-max uppercase flex items-center gap-2
         hover:bg-purple100 hover:text-white`,
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

export default ButtonOutline;
