"use client";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

export default function EditArticleModal({ open, onClose, article, onUpdate }: any) {
  if (!article) return null;

  const [formData, setFormData] = useState({
    id: "",
    title: "",
    author: "",
    category: "",
    date: "",
    status: "draft",
  });

  useEffect(() => {
    if (article) {
      setFormData({
        id: article.id || "",
        title: article.title || "",
        author: article.author || "",
        category: article.category || "",
        date: article.date || "",
        status: article.status || "draft",
      });
    }
  }, [article]);

  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = () => {
    onUpdate(formData);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto bg-white rounded-xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <DialogTitle className="text-lg font-semibold font-sans">
            Edit Article
          </DialogTitle>
        </div>

        {/* Body */}
        <div className="space-y-4 px-6">

          {/* ID (read-only) */}
          <div className="space-y-2">
            <label className="text-sm font-medium">ID</label>
            <Input value={formData.id} disabled />
          </div>

          {/* Title */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Title</label>
            <Input
              value={formData.title}
              onChange={(e) => handleChange("title", e.target.value)}
              placeholder="Enter article title"
            />
          </div>

          {/* Author */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Author</label>
            <Input
              value={formData.author}
              onChange={(e) => handleChange("author", e.target.value)}
              placeholder="Enter author name"
            />
          </div>

          {/* Category */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Category</label>
            <Input
              value={formData.category}
              onChange={(e) => handleChange("category", e.target.value)}
              placeholder="Enter category"
            />
          </div>

          {/* Date */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Date</label>
            <Input
              type="date"
              value={formData.date}
              onChange={(e) => handleChange("date", e.target.value)}
            />
          </div>

          {/* Status */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Status</label>
            <Select
              value={formData.status}
              onValueChange={(value) => handleChange("status", value)}
            >
              <SelectTrigger className="w-full">
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
        <DialogFooter className="mt-6 px-6 py-4 border-t">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            className="bg-secondary cursor-pointer"
            variant="ghost"
            onClick={handleSubmit}
          >
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
