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
import ReviewTable from "./review-table/review-table";
import DeleteReviewsModal from "./delete-review-modal/delete-review-modal";
import ViewReviewModal from "./view-reviews-modal/view-reviews-modal";

export default function ManageReviews() {
    // ✅ dummy reviews
    const [reviews, setReviews] = useState<any[]>([
        {
            id: "r001",
            reviewer: "John Doe",
            nursery: "Happy Kids Nursery",
            rating: 4.5,
            status: "approved",
            date: "2025-02-10",
            message: "Great environment and friendly staff."
        },
        {
            id: "r002",
            reviewer: "Sarah Williams",
            nursery: "Little Sunshine Nursery",
            rating: 3.0,
            status: "pending",
            date: "2025-02-11",
            message: "Good place but needs improvement."
        },
        {
            id: "r003",
            reviewer: "Ali Khan",
            nursery: "Bright Minds Nursery",
            rating: 5.0,
            status: "approved",
            date: "2025-02-12",
            message: "Excellent service and clean classrooms!"
        }
    ]);

    const [openViewModal, setOpenViewModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [selectedReview, setSelectedReview] = useState<any>(null);

    // ✅ VIEW handler
    const handleView = (review: any) => {
        setSelectedReview(review);
        setOpenViewModal(true);
    };
    // ✅ DELETE handler
    const handleDelete = (review: any) => {
        setSelectedReview(review);
        setOpenDeleteModal(true);
    };

    const handleConfirmDelete = () => {
        if (!selectedReview) return;

        setReviews((prev) => prev.filter((r) => r.id !== selectedReview.id));

        setSelectedReview(null);
        setOpenDeleteModal(false);
    };

    const handleReviewStatusChange = (reviewId: string, newStatus: string) => {
        // ✅ Update main table reviews list
        setReviews((prev) =>
            prev.map((r) =>
                r.id === reviewId ? { ...r, status: newStatus } : r
            )
        );

        // ✅ Update selected review (so modal doesn't show old status)
        setSelectedReview((prev: any) =>
            prev ? { ...prev, status: newStatus } : null
        );
    };

    return (
        <div className="w-full">
            {/* HEADER */}
            <div className="bg-white p-4 shadow-md rounded-lg mb-4">
                <div className="flex flex-row justify-between items-center">
                    <div>
                        <h2 className="text-secondary font-medium text-[48px] font-heading">
                            <span className="text-foreground">MANAGE</span> Reviews
                        </h2>
                        <p className="text-gray-600">View and delete platform reviews</p>
                    </div>
                </div>
            </div>

            {/* SEARCH + FILTER */}
            <div className="w-full bg-white p-4 rounded-lg flex items-center gap-4 mb-4">
                <div className="relative w-full max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="text"
                        className="pl-10 rounded-sm"
                        placeholder="Search by reviewer, nursery or rating..."
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
                <h2 className="font-sans font-bold text-xl">All Reviews</h2>
                <p className="text-gray-500">Manage and monitor nursery reviews.</p>

                <ReviewTable
                    reviews={reviews}
                    onView={handleView}       // ✅ only view
                    onDelete={handleDelete}   // ✅ only delete
                />
            </div>

            {/* DELETE MODAL */}
            <DeleteReviewsModal
                open={openDeleteModal}
                user={selectedReview}
                onClose={() => setOpenDeleteModal(false)}
                onConfirmDelete={handleConfirmDelete}
            />
            <ViewReviewModal
                open={openViewModal}
                review={selectedReview}
                onClose={() => {
                    setOpenViewModal(false);
                    setSelectedReview(null);
                }}
                onStatusChange={(newStatus: string) => {
                    if (!selectedReview) return;
                    handleReviewStatusChange(selectedReview.id, newStatus);
                }}
            />

        </div>
    );
}
