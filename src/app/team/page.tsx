"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Command, CommandInput } from "@/components/ui/command";
import UserItem from "@/components/UserItem";
import { Member, memberData } from "@/utils/data";

const TeamSettings = () => {
  return (
    <div className="grid gap-4">
      <header>
        <h2 className="text-[36px] font-[00]">Team Settings</h2>
      </header>
      <div className="grid gap-2">
        <div>
          <div className="flex items-center justify-between gap-2">
            <Command className="rounded-lg border">
              <CommandInput
                className="border-none"
                placeholder="Type an email to invite..."
              />
            </Command>
            <Button variant="secondary">Add a new member</Button>
          </div>
        </div>
        <div className="border rounded">
          {memberData.length == 0 && (
            <div className="red">There are no members yet.</div>
          )}
          {memberData &&
            memberData.map((member: Member) => (
              <div
                className="grid grid-cols-6 gap-8 border-b last:border-b-0 items-center justify-between p-2"
                key={member.email}
              >
                <div className="col-span-2">
                  <UserItem name={member.full_name} email={member.email} />
                </div>
                <div className="col-span-3 flex gap-2">
                  <Badge className={`tag ${member.role}`}>{member.role}</Badge>
                  {member.status && (
                    <Badge className={`tag ${member.status}`}>
                      {member.status}
                    </Badge>
                  )}
                </div>
                <div className="col-span-1 flex justify-end">
                  <Button variant="ghost">Remove</Button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSettings;
