import React from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";

export default function UsersTable({ users = [], onEdit, onDelete }: any) {
    return (
        <div className="w-full mt-4">

            {/* ✅ If no users */}

            <table className="w-full">
                <thead>
                    <tr className="bg-[#F8F8F8] border-2 border-gray-300 h-14">
                          <th className="p-3 text-left">
                            ID
                        </th>
                        <th className="p-3 text-left" style={{ borderRadius: "4px 0px 0px 4px" }}>
                            Name
                        </th>
                        <th className="p-3 text-left">Role</th>
                        <th className="p-3 text-left">Email</th>
                        <th className="p-3 text-left">Joined</th>
                        <th className="p-3 text-left">Status</th>
                        <th
                            className="p-3 text-left"
                            style={{ borderRadius: "0px 4px 4px 0px" }}
                        >
                            Action
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {users.length === 0 ? (
                    <tr>
                        <td colSpan={6}>
                        <div className=" flex justify-center w-full">

                        <span className=" block  text-center py-10 text-gray-500 ">
                            No Users Found
                        </span>
                        </div>
                        </td>
                        </tr>
                    ) : (

                        users.map((user: any) => (
                            <tr key={user.id} className="border-b hover:bg-gray-50">
                                <td className="py-6 px-3 font-bold">{user.id}</td>
                                <td className="py-6 px-3 font-bold">{user.name}</td>
                                <td className="py-6 px-3 text-gray-500">{user.role}</td>
                                <td className="py-6 px-3 text-gray-500">{user.email}</td>
                                <td className="py-6 px-3">{user.joined}</td>
                                <td className="py-6 px-3">
                                    <span
                                        className={`px-3 py-1 rounded-full text-sm ${user.status === "Active"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-red-100 text-red-700"
                                            }`}
                                    >
                                        {user.status}
                                    </span>
                                </td>

                                <td className="py-6 px-3 flex items-center gap-3">
                                    <button onClick={() => onEdit(user)}>
                                        <Eye className="w-4 h-4 text-foreground" />
                                    </button>

                                    <button onClick={() => onEdit(user)}>
                                        <Pencil className="w-4 h-4 text-foreground" />
                                    </button>

                                    <button onClick={() => onDelete(user)}>
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
