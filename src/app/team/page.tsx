"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Command, CommandInput } from "@/components/ui/command";
import { useState } from "react";

type Member = {
  email: string;
  full_name: string;
  backgroundColor: string;
  role: string;
  status: string;
};

const TeamSettings = () => {
  const [members, setMembers] = useState<Member[]>([
    {
      email: "vishwa@gmail.com",
      full_name: "Vishwa",
      backgroundColor: "rgba(125,24,66,1)",
      role: "admin",
    },
    {
      email: "vishal@gmail.com",
      full_name: "vishal",
      backgroundColor: "rgba(125,24,66,1)",
      role: "viewer",
    },
    {
      email: "sameer@gmail.com",
      full_name: "sameer",
      backgroundColor: "rgba(125,24,66,1)",
      role: "admin",
    },
    {
      email: "john@gmail.com",
      full_name: "john",
      backgroundColor: "rgba(125,24,66,1)",
      role: "viewer",
      status: "pending",
    },
  ]);
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
          {members.length == 0 && (
            <div className="red">There are no members yet.</div>
          )}
          {members &&
            members.map((member: Member) => (
              <div
                className="grid grid-cols-6 border-b last:border-b-0 items-center justify-between pr-2"
                key={member.email}
              >
                <div className="col-span-2">
                  <p>{member.full_name}</p>
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
