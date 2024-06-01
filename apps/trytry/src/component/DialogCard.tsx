import React, { FC } from "react";


export const DialogCard = ({
  Icon,
  description,
}: {
  className?: string;
  Icon: FC<React.SVGProps<SVGSVGElement>>;
  description: string;
}) => {
  return (
    <div
      className={"flex w-[276px] flex-col gap-6 rounded-lg bg-[#2D2E32] p-6"}
    >
      <Icon className="size-10" />
      <div className="text-white">{description}</div>
    </div>
  );
};
