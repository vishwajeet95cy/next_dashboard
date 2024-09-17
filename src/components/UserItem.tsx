"use client";

type UserItemProps = {
  name?: string;
  email?: string;
};

const UserItem = ({ name, email }: UserItemProps) => {
  return (
    <div className="flex items-center justify-between gap-2 border rounded-[8px] p-2">
      <div className="avatar capitalize rounded-full min-h-10 min-w-10 bg-emerald-500 text-white font-[700] flex items-center justify-center">
        <p>{name ? name.charAt(0) : "TU"}</p>
      </div>
      <div className="grow">
        <p className="text-[16px] font-bold">{name ?? "Test User"}</p>
        <p className="text-[12px] text-neutral-500">
          {email ?? "vishwa@gmail.com"}
        </p>
      </div>
    </div>
  );
};

export default UserItem;
