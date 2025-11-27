"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
;
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";
import NurseriesTable from "./nurseries-table/nurseries-table";
import EditNurseriesModal from "./edit-nurseries-modal/edit-nurseries-modal";
import AddNurseriesModal from "./add-nurseries-modal/add-nurseries-modal";
import DeleteNurseriesModal from "./delete-nurseries-modal/delete-nurseries-modal";

export default function ManageNurseries() {
  const [nurseries, setNurseries] = useState<any[]>([]);

  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedNursery, setSelectedNursery] = useState<any>(null);

  // Add Nursery
  const handleAddNursery = (newNursery: any) => {
    setNurseries((prev) => [...prev, newNursery]);
  };

  // Edit Nursery
  const handleUpdateNursery = (updatedNursery: any) => {
    setNurseries((prev) =>
      prev.map((n) => (n.id === updatedNursery.id ? updatedNursery : n))
    );
  };

  // Delete Nursery
  const handleDeleteNursery = () => {
    if (!selectedNursery) return;
    setNurseries((prev) => prev.filter((n) => n.id !== selectedNursery.id));
    setOpenDeleteModal(false);
    setSelectedNursery(null);
  };

  const handleEdit = (nursery: any) => {
    setSelectedNursery(nursery);
    setOpenEditModal(true);
  };

  const handleDelete = (nursery: any) => {
    setSelectedNursery(nursery);
    setOpenDeleteModal(true);
  };

  return (
    <div className="w-full">

      {/* HEADER */}
      <div className="bg-white p-4 shadow-md rounded-lg mb-4 flex justify-between items-center">
        <div>
          <h2 className="text-secondary font-medium text-[48px] font-heading">
            <span className="text-foreground">MANAGE</span> Nurseries
          </h2>
          <p className="text-gray-600">View, edit, and manage all platform nurseries</p>
        </div>

        <Button variant="ghost" className="bg-secondary cursor-pointer" onClick={() => setOpenAddModal(true)}>
          Add Nursery
        </Button>
      </div>

      {/* SEARCH + FILTER */}
      <div className="w-full bg-white p-4 rounded-lg flex items-center gap-4 mb-4">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            className="pl-10 rounded-sm"
            placeholder="Search by nursery name, city, or owner..."
          />
        </div>

        <Select>
          <SelectTrigger className="w-[150px] flex items-center gap-2 rounded-sm border border-secondary bg-white px-3 py-2 text-sm">
            <Filter className="h-4 w-4 pointer-events-none text-secondary" />
            <SelectValue placeholder="Status" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="Active">Active</SelectItem>
            <SelectItem value="Pending">Pending</SelectItem>
            <SelectItem value="Disabled">Disabled</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* TABLE */}
      <div className="shadow-md p-4 bg-white rounded-lg">
        <h2 className="font-sans font-bold text-xl">All Nurseries</h2>
        <p className="text-gray-500">Manage and monitor your nurseries effortlessly.</p>

        <NurseriesTable nurseries={nurseries} onEdit={handleEdit} onDelete={handleDelete} />
      </div>

      {/* MODALS */}
      <AddNurseriesModal
        open={openAddModal}
        onClose={() => setOpenAddModal(false)}
        onAdd={handleAddNursery}
      />

      <EditNurseriesModal
        open={openEditModal}
        nursery={selectedNursery}
        onClose={() => setOpenEditModal(false)}
        onUpdate={handleUpdateNursery}
      />

      <DeleteNurseriesModal
        open={openDeleteModal}
        nursery={selectedNursery}
        onClose={() => setOpenDeleteModal(false)}
        onConfirmDelete={handleDeleteNursery}
      />
    </div>
  );
}
