"use client";

import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function AddArticleModal({ open, onClose, onAdd }: any) {
  const [form, setForm] = useState({
    id: "",
    title: "",
    author: "",
    category: "",
    date: "",
    status: "",
  });

  useEffect(() => {
    if (open) {
      setForm((prev) => ({
        ...prev,
        id: Math.random().toString(36).slice(2, 8).toUpperCase(),
      }));
    }
  }, [open]);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleStatusChange = (value: string) => {
    setForm({ ...form, status: value });
  };

  const handleSubmit = () => {
    onAdd(form);
    onClose();
    setForm({
      id: "",
      title: "",
      author: "",
      category: "",
      date: "",
      status: "",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="font-sans bg-white rounded-xl overflow-y-auto max-h-[90vh] max-w-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <DialogTitle className="text-lg font-semibold font-sans">
            Add New Post
          </DialogTitle>
        </div>

        {/* Body */}
        <div className="px-6 space-y-4">
          <div>
            <label className="text-sm font-medium">Post ID</label>
            <Input
              name="id"
              readOnly
              value={form.id}
              className="mt-1 cursor-not-allowed opacity-70"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Title</label>
            <Input
              name="title"
              placeholder="Enter title"
              value={form.title}
              onChange={handleChange}
              className="mt-1"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Author</label>
            <Input
              name="author"
              placeholder="Enter author"
              value={form.author}
              onChange={handleChange}
              className="mt-1"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Category</label>
            <Input
              name="category"
              placeholder="Enter category"
              value={form.category}
              onChange={handleChange}
              className="mt-1"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Date</label>
            <Input
              name="date"
              type="date"
              value={form.date}
              onChange={handleChange}
              className="mt-1"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Status</label>
            <Select value={form.status} onValueChange={handleStatusChange}>
              <SelectTrigger className="mt-1 w-full">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Footer */}
        <DialogFooter className="px-6 py-4 border-t">
          <Button variant="outline" className="cursor-pointer" onClick={onClose}>
            Cancel
          </Button>

          <Button
            className="bg-secondary cursor-pointer"
            variant="ghost"
            onClick={handleSubmit}
          >
            Create Post
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
