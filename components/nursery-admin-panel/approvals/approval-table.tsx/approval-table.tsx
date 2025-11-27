import React from "react";
import { Eye, CheckCircle, XCircle } from "lucide-react";

export default function ApprovalTable({ approvals = [], onView, onApprove, onReject }: any) {
  return (
    <div className="w-full mt-4">
      <table className="w-full">
        <thead>
          <tr className="bg-[#F8F8F8] border-2 border-gray-300 h-14">
            <th className="p-3 text-left" style={{ borderRadius: "4px 0px 0px 4px" }}>
              Type
            </th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Submitted By</th>
            <th className="p-3 text-left">Date</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left" style={{ borderRadius: "0px 4px 4px 0px" }}>
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {approvals.length === 0 ? (
            <tr>
              <td colSpan={6}>
                <div className="flex justify-center w-full">
                  <span className="block text-center py-10 text-gray-500">
                    No Records Found
                  </span>
                </div>
              </td>
            </tr>
          ) : (
            approvals.map((item: any) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                {/* Type */}
                <td className="py-6 px-3 font-semibold">
                  {item.type || "Review"}
                </td>

                {/* Name */}
                <td className="py-6 px-3 font-semibold">
                  {item.nursery}
                </td>

                {/* Submitted By */}
                <td className="py-6 px-3 font-semibold">
                  {item.user}
                </td>

                {/* Date */}
                <td className="py-6 px-3 text-gray-500">
                  {item.date}
                </td>

                {/* Status */}
                <td className="py-6 px-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      item.status === "approved"
                        ? "bg-green-100 text-green-700"
                        : item.status === "pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

                {/* Action */}
                <td className="py-6 px-3 flex items-center gap-3">
                  {/* View */}
                  <button onClick={() => onView(item)}>
                    <Eye className="w-4 h-4 text-foreground" />
                  </button>

                  {/* Approve */}
                  <button onClick={() => onApprove(item)}>
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </button>

                  {/* Reject */}
                  <button onClick={() => onReject(item)}>
                    <XCircle className="w-4 h-4 text-red-600" />
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
