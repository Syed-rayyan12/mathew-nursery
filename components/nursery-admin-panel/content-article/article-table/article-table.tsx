import React from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";

export default function ArticlesTable({ articles = [], onEdit, onDelete }: any) {
  return (
    <div className="w-full mt-4">
      <table className="w-full">
        <thead>
          <tr className="bg-[#F8F8F8] border-2 border-gray-300 h-14">
            <th className="p-3 text-left">ID</th>
            <th
              className="p-3 text-left"
              style={{ borderRadius: "4px 0px 0px 4px" }}
            >
              Title
            </th>
            <th className="p-3 text-left">Author</th>
            <th className="p-3 text-left">Category</th>
            <th className="p-3 text-left">Date</th>
            <th className="p-3 text-left">Status</th>
            <th
              className="p-3 text-left"
              style={{ borderRadius: "0px 4px 4px 0px" }}
            >
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {articles.length === 0 ? (
            <tr>
              <td colSpan={7}>
                <div className="flex justify-center w-full">
                  <span className="block text-center py-10 text-gray-500">
                    No Posts Found
                  </span>
                </div>
              </td>
            </tr>
          ) : (
            articles.map((article: any) => (
              <tr key={article.id} className="border-b hover:bg-gray-50">
                <td className="py-6 px-3 font-bold">{article.id}</td>
                <td className="py-6 px-3 font-bold">{article.title}</td>
                <td className="py-6 px-3 text-gray-500">{article.author}</td>
                <td className="py-6 px-3 text-gray-500">{article.category}</td>
                <td className="py-6 px-3">{article.date}</td>
                <td className="py-6 px-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      article.status === "published"
                        ? "bg-green-100 text-green-700"
                        : article.status === "draft"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {article.status}
                  </span>
                </td>

                <td className="py-6 px-3 flex items-center gap-3">
                  <button onClick={() => onEdit(article)}>
                    <Eye className="w-4 h-4 text-foreground" />
                  </button>

                  <button onClick={() => onEdit(article)}>
                    <Pencil className="w-4 h-4 text-foreground" />
                  </button>

                  <button onClick={() => onDelete(article)}>
                    <Trash2 className="w-4 h-4 text-red-500" />
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
