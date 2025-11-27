"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import AddUserModal from "./add-user-modal/add-user-modal";
import EditUserModal from "./edit-user-modal/edit-user-modal";
import DeleteUserModal from "./delete-user-modal/delete-user-modal";
import UsersTable from "./user-table/user-table";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";

export default function ManageUsers() {
  const [users, setUsers] = useState<any[]>([]);

  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  // Add User
  const handleAddUser = (newUser: any) => {
    setUsers((prev) => [...prev, newUser]);
  };

  // Edit User
  const handleUpdateUser = (updatedUser: any) => {
    setUsers((prev) =>
      prev.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  // Delete User
  const handleDeleteUser = () => {
    if (!selectedUser) return;
    setUsers((prev) => prev.filter((u) => u.id !== selectedUser.id));
    setOpenDeleteModal(false);
    setSelectedUser(null);
  };

  const handleEdit = (user: any) => {
    setSelectedUser(user);
    setOpenEditModal(true);
  };

  const handleDelete = (user: any) => {
    setSelectedUser(user);
    setOpenDeleteModal(true);
  };

  return (
    <div className="w-full">

      {/* HEADER */}
      <div className="bg-white p-4 shadow-md rounded-lg mb-4">
        <div className="flex flex-row justify-between items-center">
          <div>
            <h2 className="text-secondary font-medium text-[48px] font-heading">
              <span className="text-foreground">MANAGE</span> Users
            </h2>
            <p className="text-gray-600">View, edit, and manage all platform Users</p>
          </div>

          <Button variant="ghost" className="bg-secondary cursor-pointer" onClick={() => setOpenAddModal(true)}>
            Add Users
          </Button>
        </div>
      </div>

      {/* SEARCH + FILTER */}
      <div className="w-full bg-white p-4 rounded-lg flex items-center gap-4 mb-4">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            className="pl-10 rounded-sm"
            placeholder="Search by group name, owner or email..."
          />
        </div>

        <Select>
          <SelectTrigger className="w-[150px] flex items-center gap-2 rounded-sm border border-secondary bg-white px-3 py-2 text-sm">
            <Filter className="h-4 w-4 pointer-events-none text-secondary" />
            <SelectValue placeholder="Status" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="suspended">Suspended</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* TABLE */}
      <div className="shadow-md p-4 bg-white rounded-lg">
        <h2 className="font-sans font-bold text-xl">All Users</h2>
        <p className="text-gray-500">Manage and monitor your workspace groups effortlessly.</p>

        <UsersTable users={users} onEdit={handleEdit} onDelete={handleDelete} />
      </div>

      {/* MODALS */}
      <AddUserModal
        open={openAddModal}
        onClose={() => setOpenAddModal(false)}
        onAdd={handleAddUser}
      />

      <EditUserModal
        open={openEditModal}
        user={selectedUser}
        onClose={() => setOpenEditModal(false)}
        onUpdate={handleUpdateUser}
      />

      <DeleteUserModal
        open={openDeleteModal}
        user={selectedUser}
        onClose={() => setOpenDeleteModal(false)}
        onConfirmDelete={handleDeleteUser}
      />
    </div>
  );
}
