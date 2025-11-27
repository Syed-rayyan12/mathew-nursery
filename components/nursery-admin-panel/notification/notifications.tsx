"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Bell, Check, Trash2 } from "lucide-react";

// 📌 Dummy notifications list
const initialNotifications = [
    {
        id: 1,
        user: "Sarah Johnson",
        desc: "New group owner Sarah Johnson has been verified and approved in the system",
        status: "success",
        read: false,
        time: "2 hours ago",
    },
    {
        id: 2,
        user: "Michael Lee",
        desc: "Michael requested nursery account update approval",
        status: "warning",
        read: false,
        time: "1 hour ago",
    },
    {
        id: 3,
        user: "Olivia Brown",
        desc: "System error occurred during nursery upload",
        status: "error",
        read: true,
        time: "5 hours ago",
    },
    {
        id: 4,
        user: "David Green",
        desc: "Info: Nursery data backup completed successfully",
        status: "info",
        read: true,
        time: "10 hours ago",
    },
];

export default function NotificationPanel() {
    const [tab, setTab] = useState("all");
    const [notifications, setNotifications] = useState(initialNotifications);

    // ✅ FILTER LOGIC
    const filtered =
        tab === "all"
            ? notifications
            : tab === "unread"
                ? notifications.filter((n) => !n.read)
                : notifications.filter((n) => n.read);

    // ✅ DELETE NOTIFICATION
    const handleDelete = (id: number) => {
        setNotifications(notifications.filter((n) => n.id !== id));
    };

    // ✅ STATUS BADGE COLORS
    const statusColor = {
        success: "bg-green-100 text-green-700",
        warning: "bg-yellow-100 text-yellow-700",
        error: "bg-red-100 text-red-700",
        info: "bg-blue-100 text-blue-700",
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">

            {/* ✅ Left Card - Tabs */}

            <div className="bg-white py-6 rounded-lg">
                <div className="flex justify-between items-center pr-4">
                    <CardHeader className="">
                        <div className="flex items-center gap-2">
                            <Bell className="w-8 h-8" />
                            <CardTitle className="font-sans text-4xl text-gray-500 font-heading text-secondary">NOTIFICATIONS</CardTitle>

                        </div>
                        <p>2 unread notifications</p>


                    </CardHeader>

                    <div className="flex items-center gap-3 ">

                        <button

                            className=" flex items-center  gap-2 cursor-pointer
      px-4 py-2 rounded-md
      border border-gray-300
      text-gray-700
      hover:bg-gray-100
      transition
    "
                        >
                            <Check className="w-5 h-5" />
                            Mark as Read
                        </button>

                        <button

                            className=" flex items-center gap-2 cursor-pointer
      px-4 py-2 rounded-md
      bg-red-600 text-white
      hover:bg-red-700
      transition
    "
                        >
                            <Trash2 className="w-5 h-5" />
                            Clear All
                        </button>

                    </div>
                </div>

                <CardContent>



                </CardContent>
            </div>

            <Card className="">
                <CardHeader>
                    <CardTitle className="font-sans text-lg text-gray-500">Read status</CardTitle>
                </CardHeader>
                <CardContent>
                    <Tabs value={tab} onValueChange={setTab} className="w-full">
                        <TabsList className="grid grid-cols-3 w-1/2 gap-2 bg-white">

                            <TabsTrigger
                                value="all"
                                className="
        rounded-sm border border-gray-300
        text-gray-500
        data-[state=active]:bg-secondary
        data-[state=active]:text-white
      "
                            >
                                All
                            </TabsTrigger>

                            <TabsTrigger
                                value="unread"
                                className="
        rounded-sm border border-gray-300
        text-gray-500
        data-[state=active]:bg-secondary
        data-[state=active]:text-white
      "
                            >
                                Unread
                            </TabsTrigger>

                            <TabsTrigger
                                value="read"
                                className="
        rounded-sm border border-gray-300
        text-gray-500
        data-[state=active]:bg-secondary
        data-[state=active]:text-white
      "
                            >
                                Read
                            </TabsTrigger>

                        </TabsList>
                    </Tabs>


                </CardContent>
            </Card>

            {/* ✅ Right Card - Notification List */}
            <Card className="">
                <CardHeader>
                    <CardTitle>
                        {tab.charAt(0).toUpperCase() + tab.slice(1)} Notifications
                    </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">

                    {filtered.length === 0 && (
                        <p className="text-gray-500 text-center py-6">
                            No notifications found.
                        </p>
                    )}

                    {filtered.map((n) => (
                        <div
                            key={n.id}
                            className="flex justify-between items-start p-4 rounded-lg border hover:bg-gray-50"
                        >
                            <div className="space-y-1">
                                {/* ✅ User Name */}
                                <p className="font-semibold">{n.user}</p>

                                {/* ✅ Description */}
                                <p className="text-sm text-gray-700">{n.desc}</p>

                                {/* ✅ Time + Status */}
                                <div className="flex items-center gap-3 mt-2">
                                    <Badge className={`${statusColor[n.status]}`}>
                                        {n.status}
                                    </Badge>

                                    <p className="text-xs text-gray-500">{n.time}</p>
                                </div>
                            </div>

                            {/* ✅ Delete Button */}
                            <button onClick={() => handleDelete(n.id)}>
                                <Trash2 className="w-5 h-5 text-red-500 hover:text-red-600" />
                            </button>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
}
