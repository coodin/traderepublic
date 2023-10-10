import Minus from "@/public/svg-react/minus";
import Plus from "@/public/svg-react/plus";
import { useState } from "react";

export type ToogleProps = {
  id?: any;

  label: string;
  description: string;
  open?: any;
  setOpen?: any;
};

const Toggle: React.FC<ToogleProps> = ({
  id,
  open,
  setOpen,
  label,
  description,
}) => {
  return (
    <li className="text-black">
      <p
        onClick={() => {
          if (open == id) {
            setOpen(null);
          } else {
            setOpen(id);
          }
        }}
        className="flex  items-center cursor-pointer
         justify-between py-3 px-0 font-[680] tracking-[.0125rem] list-none 
         min-[1200px]:text-[1.375rem] min-[1200px]:leading-[1.2727272727]
         min-[1100px]:text-[1.25rem] min-[1100px]:leading-[1.3]
         min-[900px]:text-[1.125rem] min-[900px]:leading-[1.2222222222]
         min-[800px]:text-[1rem] min-[800px]:leading-[1.25]
         min-[744px]:text-[1.375rem] min-[744px]:leading-[1.25]
         min-[480px]:text-[1.125rem] min-[480px]:leading-[1.3]"
      >
        <span className="transition-all duration-300 ease-in-out">{label}</span>
        {open == id ? <Minus className="" /> : <Plus className="" />}
      </p>
      <div
        className={`${
          open == id
            ? `visible  opacity-100 py-3  mb-12`
            : "invisible h-[0] opacity-0 m-0 "
        } transition-all duration-300 ease-in-out pointer-events-none `}
      >
        <p>{description}</p>
      </div>
    </li>
  );
};

export default Toggle;
