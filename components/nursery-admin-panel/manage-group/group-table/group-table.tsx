"use client";

import React from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";

export default function UsersTable({ groups = [], onEdit, onDelete, onView }: any) {
  return (
    <div className="w-full mt-4 overflow-x-auto">
      <table className="w-full min-w-[700px]">
        <thead>
          <tr className="bg-[#F8F8F8] border-2 border-gray-300 h-14">
            <th className="p-3 text-left">Group Name</th>
            <th className="p-3 text-left">Owner</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Nurseries</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Plan</th>
            <th className="p-3 text-left">Action</th>
          </tr>
        </thead>

        <tbody>
          {groups.length === 0 ? (
            <tr>
              <td colSpan={7}>
                <div className="flex justify-center py-10 text-gray-500">
                  No Groups Found
                </div>
              </td>
            </tr>
          ) : (
            groups.map((group: any) => (
              <tr key={group.id} className="border-b hover:bg-gray-50">
                <td className="py-6 px-3 font-bold">{group.groupName}</td>
                <td className="py-6 px-3 text-gray-500">{group.owner}</td>
                <td className="py-6 px-3 text-gray-500">{group.email}</td>
                <td className="py-6 px-3">{group.Nurseries}</td>
                <td className="py-6 px-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      group.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : group.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {group.status}
                  </span>
                </td>
                <td className="py-6 px-3">{group.plan}</td>
                <td className="py-6 px-3 flex items-center gap-3">
                  <button onClick={() => onView?.(group)}>
                    <Eye className="w-4 h-4 text-foreground" />
                  </button>

                  <button onClick={() => onEdit(group)}>
                    <Pencil className="w-4 h-4 text-foreground" />
                  </button>

                  <button onClick={() => onDelete(group)}>
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
