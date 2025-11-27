"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectValue,
} from "@/components/ui/select";
import { Search, Filter } from "lucide-react";
import ApprovalTable from "./approval-table.tsx/approval-table";
import ApprovalViewModal from "./approval-view-modal/approval-view-modal";

// ✅ New table and modal imports renamed


export default function ManageApprovals() {
    // ✅ dummy approvals
    const [approvals, setApprovals] = useState<any[]>([
        {
            id: "a001",
            user: "John Doe",
            nursery: "Happy Kids Nursery",
            rating: 4.5,
            status: "approved",
            date: "2025-02-10",
            message: "Great environment and friendly staff."
        },
        {
            id: "a002",
            user: "Sarah Williams",
            nursery: "Little Sunshine Nursery",
            rating: 3.0,
            status: "pending",
            date: "2025-02-11",
            message: "Good place but needs improvement."
        },
        {
            id: "a003",
            user: "Ali Khan",
            nursery: "Bright Minds Nursery",
            rating: 5.0,
            status: "approved",
            date: "2025-02-12",
            message: "Excellent service and clean classrooms!"
        }
    ]);

    const [openViewModal, setOpenViewModal] = useState(false);
    const [selectedApproval, setSelectedApproval] = useState<any>(null);

    // ✅ VIEW handler
    const handleView = (approval: any) => {
        setSelectedApproval(approval);
        setOpenViewModal(true);
    };

    // ✅ Update approval status
    const handleUpdateStatus = (approvalId: string, newStatus: string) => {
        setApprovals((prev) =>
            prev.map((item) =>
                item.id === approvalId ? { ...item, status: newStatus } : item
            )
        );

        // update selected approval modal also
        setSelectedApproval((prev: any) =>
            prev ? { ...prev, status: newStatus } : null
        );
    };

    return (
        <div className="w-full">
            {/* HEADER */}
            <div className="bg-white p-4 shadow-md rounded-lg mb-4">
                <h2 className="text-secondary font-medium text-[48px] font-heading">
                    <span className="text-foreground">MANAGE</span> Approvals
                </h2>
                <p className="text-gray-600">Approve or reject user submissions</p>
            </div>

            {/* SEARCH + FILTER */}
            <div className="w-full bg-white p-4 rounded-lg flex items-center gap-4 mb-4">
                <div className="relative w-full max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="text"
                        className="pl-10 rounded-sm"
                        placeholder="Search by user, nursery or rating..."
                    />
                </div>

                <Select>
                    <SelectTrigger className="w-[150px] flex items-center gap-2 rounded-sm border border-secondary bg-white px-3 py-2 text-sm">
                        <Filter className="h-4 w-4 pointer-events-none text-secondary" />
                        <SelectValue placeholder="Status" />
                    </SelectTrigger>

                    <SelectContent>
                        <SelectItem value="approved">Approved</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* TABLE */}
            <div className="shadow-md p-4 bg-white rounded-lg">
                <h2 className="font-sans font-bold text-xl">All Approvals</h2>
                <p className="text-gray-500">Manage user submissions requiring approval.</p>

                <ApprovalTable
                    approvals={approvals}
                    onView={handleView}
                />
            </div>

            {/* ✅ APPROVAL VIEW MODAL */}
            <ApprovalViewModal
                open={openViewModal}
                approval={selectedApproval}
                onClose={() => {
                    setOpenViewModal(false);
                    setSelectedApproval(null);
                }}
                onApprove={() => {
                    if (!selectedApproval) return;
                    handleUpdateStatus(selectedApproval.id, "approved");
                }}
                onReject={() => {
                    if (!selectedApproval) return;
                    handleUpdateStatus(selectedApproval.id, "rejected");
                }}
            />

        </div>
    );
}
