"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const userGrowthData = [
  { month: "Jan", users: 200 },
  { month: "Feb", users: 320 },
  { month: "Mar", users: 450 },
  { month: "Apr", users: 650 },
  { month: "May", users: 890 },
  { month: "Jun", users: 1200 },
];

const reviewsData = [
  { month: "Jan", reviews: 40 },
  { month: "Feb", reviews: 55 },
  { month: "Mar", reviews: 70 },
  { month: "Apr", reviews: 95 },
  { month: "May", reviews: 120 },
  { month: "Jun", reviews: 150 },
];

const subscriptionData = [
  { name: "Active", value: 65 },
  { name: "Expired", value: 25 },
  { name: "Trial", value: 10 },
];

const COLORS = ["#38bdf8", "#6366f1", "#3b82f6"];

const recentActivity = [
  { text: "User Ahmad submitted a new review.", time: "2 hours ago" },
  { text: "New subscription activated by Sara.", time: "5 hours ago" },
  { text: "User John updated profile info.", time: "1 day ago" },
  { text: "System maintenance performed.", time: "2 days ago" },
];

export default function DashboardCharts() {
  return (
    <div className="w-full flex flex-col gap-4">

      {/* WELCOME CARD */}
      <div className="shadow-md w-full rounded-lg p-4 text-white bg-white">
      
        <h2 className="text-secondary font-medium text-[48px] font-heading">
        <span className="text-foreground">WELCOME BACK, </span>ADMIN
      </h2>
          <p className="text-lg opacity-90 text-foreground">Manage your workspace with confidence.</p>
       
      </div>

      {/* ROW 1 */}
      <div className="flex flex-col lg:flex-row gap-2 w-full">

        {/* USER GROWTH */}
        <Card className="flex-1 shadow-md">
          <CardHeader>
            <CardTitle>New Users Over Time</CardTitle>
             <CardDescription>Cumulative user growth by month</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={userGrowthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="#04B0D6"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* REVIEWS */}
        <Card className="flex-1 shadow-md">
          <CardHeader>
            <CardTitle>Reviews Trend</CardTitle>
              <CardDescription>New reviews submitted by month</CardDescription>
          </CardHeader>
          <CardContent className="w-full">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={reviewsData} barSize={30}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="reviews" fill="#04B0D6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

      </div>

      {/* ROW 2 */}
      <div className="flex flex-col lg:flex-row gap-2 w-full">

        {/* SUBSCRIPTION PIE */}
        <Card className="flex-1 shadow-md relative">
  <CardHeader>
    <CardTitle>Active Subscription Status</CardTitle>
    <CardDescription>Active subscriptions by plan type</CardDescription>
  </CardHeader>

  <CardContent className="relative">
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={subscriptionData}
          cx="50%"
          cy="50%"
          innerRadius={55}        // 👈 donut hole
          outerRadius={85}        // 👈 outer radius slightly bigger than before
          paddingAngle={3}        // 👈 smooth spacing
          dataKey="value"
        >
          {subscriptionData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index]}
            />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>

    {/* ✅ Shadcn-style center text */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="text-center">
        <p className="text-3xl font-bold">
          {subscriptionData.find((d) => d.name === "Active")?.value}%
        </p>
        <p className="text-sm text-muted-foreground">Active</p>
      </div>
    </div>
  </CardContent>
</Card>


        {/* RECENT ACTIVITY */}
        <Card className="flex-1 shadow-md">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest system events</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {recentActivity.map((item, index) => (
                <li
                  key={index}
                  className="p-3 border rounded-md  transition flex flex-col"
                >
                  <span className="font-medium">{item.text}</span>
                  <span className="text-gray-500 text-sm">{item.time}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

      </div>

    </div>
  );
}
