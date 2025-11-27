"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Search, Filter, Plus } from "lucide-react";
import AddArticleModal from "./add-article-modal/add-article-modal";
import ArticleTable from "./article-table/article-table";
import EditArticleModal from "./edit-article-modal/edit-article-modal";
import DeleteArticleModal from "./delete-article-modal/delete-article-modal";

export default function ManageArticles() {
  const [articles, setArticles] = useState<any[]>([]);

  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<any>(null);

  // ✅ Add Article
  const handleAddArticle = (newArticle: any) => {
    setArticles((prev) => [...prev, newArticle]);
  };

  // ✅ Edit Article
  const handleUpdateArticle = (updatedArticle: any) => {
    setArticles((prev) =>
      prev.map((article) => (article.id === updatedArticle.id ? updatedArticle : article))
    );
  };

  // ✅ Delete Article
  const handleDeleteArticle = () => {
    if (!selectedArticle) return;
    setArticles((prev) => prev.filter((a) => a.id !== selectedArticle.id));
    setOpenDeleteModal(false);
    setSelectedArticle(null);
  };

  const handleEdit = (article: any) => {
    setSelectedArticle(article);
    setOpenEditModal(true);
  };

  const handleDelete = (article: any) => {
    setSelectedArticle(article);
    setOpenDeleteModal(true);
  };

  return (
    <div className="w-full">

      {/* ✅ HEADER */}
      <div className="bg-white p-4 shadow-md rounded-lg mb-4">
        <div className="flex flex-row justify-between items-center">
          <div>
            <h2 className="text-secondary font-medium text-[48px] font-heading">
              <span className="text-foreground">MANAGE</span> Articles
            </h2>
            <p className="text-gray-600">View, edit, and manage all platform articles</p>
          </div>

          <Button
            variant="ghost"
            className="bg-secondary flex items-center gap-2 cursor-pointer"
            onClick={() => setOpenAddModal(true)}
          >
            <Plus/>
            Create Article
          </Button>
        </div>
      </div>

      {/* ✅ SEARCH + FILTER */}
      <div className="w-full bg-white p-4 rounded-lg flex items-center gap-4 mb-4">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            className="pl-10 rounded-sm"
            placeholder="Search by title, author or category..."
          />
        </div>

        <Select>
          <SelectTrigger className="w-[150px] flex items-center gap-2 rounded-sm border border-secondary bg-white px-3 py-2 text-sm">
            <Filter className="h-4 w-4 pointer-events-none text-secondary" />
            <SelectValue placeholder="Status" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="published">Published</SelectItem>
            <SelectItem value="draft">Draft</SelectItem>
            <SelectItem value="archived">Archived</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* ✅ TABLE */}
      <div className="shadow-md p-4 bg-white rounded-lg">
        <h2 className="font-sans font-bold text-xl">All Articles</h2>
        <p className="text-gray-500">Manage and monitor your published content effortlessly.</p>

        <ArticleTable articles={articles} onEdit={handleEdit} onDelete={handleDelete} />
      </div>

      {/* ✅ MODALS */}
      <AddArticleModal
        open={openAddModal}
        onClose={() => setOpenAddModal(false)}
        onAdd={handleAddArticle}
      />

      <EditArticleModal
        open={openEditModal}
        article={selectedArticle}
        onClose={() => setOpenEditModal(false)}
        onUpdate={handleUpdateArticle}
      />

      <DeleteArticleModal
        open={openDeleteModal}
        article={selectedArticle}
        onClose={() => setOpenDeleteModal(false)}
        onConfirmDelete={handleDeleteArticle}
      />
    </div>
  );
}
