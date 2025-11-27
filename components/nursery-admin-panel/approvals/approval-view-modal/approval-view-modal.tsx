"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle } from "lucide-react";

export default function ApprovalViewModal({
  approval,
  open,
  onClose,
  onApprove,
  onReject,
}: any) {
  if (!approval) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg p-6 rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            Approval Details
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 mt-2">

          {/* Type */}
          <div>
            <p className="font-medium text-sm text-gray-600">Type</p>
            <p className="text-lg font-semibold">
              {approval.type || "Review"}
            </p>
          </div>

          {/* Name */}
          <div>
            <p className="font-medium text-sm text-gray-600">Name</p>
            <p className="text-lg font-semibold">{approval.nursery}</p>
          </div>

          {/* Submitted By */}
          <div>
            <p className="font-medium text-sm text-gray-600">Submitted By</p>
            <p className="text-lg font-semibold">{approval.user}</p>
          </div>

          {/* Date */}
          <div>
            <p className="font-medium text-sm text-gray-600">Date</p>
            <p className="text-lg font-semibold">{approval.date}</p>
          </div>

          {/* Status */}
          <div>
            <p className="font-medium text-sm text-gray-600">Status</p>
            <span
              className={`px-3 py-1 rounded-full text-sm ${
                approval.status === "approved"
                  ? "bg-green-100 text-green-700"
                  : approval.status === "pending"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {approval.status}
            </span>
          </div>

          {/* Message (if exists) */}
          {approval.message && (
            <div>
              <p className="font-medium text-sm text-gray-600">Message</p>
              <p className="text-md">{approval.message}</p>
            </div>
          )}
        </div>

        {/* Buttons */}
        <DialogFooter className="mt-6 flex justify-end gap-3">

          {/* Close */}
          <Button
            variant="secondary"
            onClick={onClose}
            className="rounded-md"
          >
            Close
          </Button>

          {/* Approve */}
          <Button
            onClick={onApprove}
            className="bg-green-600 text-white rounded-md flex items-center gap-2"
          >
            <CheckCircle className="w-4 h-4" />
            Approve
          </Button>

          {/* Reject */}
          <Button
            onClick={onReject}
            className="bg-red-600 text-white rounded-md flex items-center gap-2"
          >
            <XCircle className="w-4 h-4" />
            Reject
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
