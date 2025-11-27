"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";
import UsersTable from "./group-table/group-table"; // Your table component

import { EditGroupModal } from "./edit-group-modal/edit-group-modal";

import { DeleteGroupModal } from "./delete-group-modal/delete-group-modal";
import { AddGroupModal } from "./add-group-modal/add-group-modal";

export default function ManageGroups() {
  const [groups, setGroups] = useState<any[]>([]); // Start with empty array
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState<any>(null);

  // Add new group
  const handleAddGroup = (newGroup: any) => {
    setGroups((prev) => [...prev, newGroup]);
  };

  // Edit group
  const handleUpdateGroup = (updatedGroup: any) => {
    setGroups((prev) =>
      prev.map((g) => (g.id === updatedGroup.id ? { ...g, ...updatedGroup } : g))
    );
  };

  // Delete group
  const handleDeleteGroupConfirm = () => {
    if (!selectedGroup) return;
    setGroups((prev) => prev.filter((g) => g.id !== selectedGroup.id));
    setOpenDeleteModal(false);
  };

  // Open edit modal
  const handleEdit = (group: any) => {
    setSelectedGroup(group);
    setOpenEditModal(true);
  };

  // Open delete modal
  const handleDelete = (group: any) => {
    setSelectedGroup(group);
    setOpenDeleteModal(true);
  };

  return (
    <div className="w-full">

      {/* Top Header */}
      <div className="bg-white p-4 shadow-md rounded-lg mb-4">
        <div className="flex flex-row justify-between items-center">
          <div>
            <h2 className="text-secondary font-medium text-[48px] font-heading">
              <span className="text-foreground">MANAGE</span> Groups
            </h2>
            <p className="text-gray-600">
              View, edit, and manage all platform groups
            </p>
          </div>

          <Button className="bg-secondary cursor-pointer" variant="ghost" onClick={() => setOpenAddModal(true)}>
            Add New Group
          </Button>
        </div>
      </div>

      {/* Search + Filter */}
      <div className="w-full bg-white p-4 rounded-lg flex items-center gap-4 mb-4">

        {/* Search */}
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            className="pl-10 rounded-sm"
            placeholder="Search by group name, owner or email..."
          />
        </div>

        {/* Filter */}
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

      {/* Table */}
      <div className="shadow-md p-4 bg-white rounded-lg">
        <h2 className="font-sans font-bold text-xl">All Groups</h2>
        <p className="text-gray-500">Manage and monitor your workspace groups effortlessly.</p>

        {/* Table Component */}
        <UsersTable
          groups={groups}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      {/* Modals */}
      <AddGroupModal
        open={openAddModal}
        onClose={() => setOpenAddModal(false)}
        onAdd={handleAddGroup}
      />

      <EditGroupModal
        open={openEditModal}
        group={selectedGroup}
        onClose={() => setOpenEditModal(false)}
        onUpdate={handleUpdateGroup}
      />

      <DeleteGroupModal
        open={openDeleteModal}
        group={selectedGroup}
        onClose={() => setOpenDeleteModal(false)}
        onConfirmDelete={handleDeleteGroupConfirm}
      />

    </div>
  );
}
