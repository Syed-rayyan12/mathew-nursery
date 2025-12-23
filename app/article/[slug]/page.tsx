'use client'

import Footer from "@/components/landing-page/footer";
import Header from "@/components/landing-page/header";
import MiniNav from "@/components/landing-page/little-nav";
import { ArrowRight, Calendar, Download } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { apiClient } from "@/lib/api/client";

interface Article {
    id: string;
    name: string;
    cardHeading: string;
    cardParagraph: string;
    slug: string;
    sections: { heading: string; paragraph: string }[];
    listHeading?: string;
    listItems?: { heading: string }[];
    tipText?: string;
    finalHeading?: string;
    finalParagraph?: string;
    cardImage?: string;
    slugImage?: string;
    category: string;
    publishedAt: string;
}

function formatTimeAgo(date: string) {
    const now = new Date();
    const publishedDate = new Date(date);
    const diffInMs = now.getTime() - publishedDate.getTime();
    const diffInMins = Math.floor(diffInMs / (1000 * 60));
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInMins < 60) return `${diffInMins} min ago`;
    if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
}

function getCategoryLabel(category: string) {
    const labels: Record<string, string> = {
        CHILDCARE_TIPS: 'Childcare Tips',
        FUNDING_COSTS: 'Funding & Costs',
        ACTIVITIES_LEARNING: 'Activities & Learning',
        NURSERY_UPDATES: 'Nursery Updates',
    };
    return labels[category] || category;
}

export default function ArticleDetailPage() {
    const params = useParams();
    const slug = params?.slug as string;
    const [article, setArticle] = useState<Article | null>(null);
    const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (slug) {
            fetchArticle();
        }
    }, [slug]);

    const fetchArticle = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await apiClient.get<{ article: Article; relatedArticles: Article[] }>(`/articles/${slug}`);
            
            if (response.success && response.data) {
                setArticle(response.data.article);
                setRelatedArticles(response.data.relatedArticles || []);
            }
        } catch (err) {
            console.error('Failed to fetch article:', err);
            setError('Failed to load article');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <>
                <MiniNav />
                <Header />
                <div className="flex items-center justify-center min-h-screen">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary mx-auto mb-4"></div>
                        <p className="text-muted-foreground">Loading article...</p>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    if (error || !article) {
        return (
            <>
                <MiniNav />
                <Header />
                <div className="flex items-center justify-center min-h-screen">
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold mb-2">Article not found</h2>
                        <p className="text-muted-foreground mb-4">{error || 'The article you are looking for does not exist.'}</p>
                        <Link href="/article" className="text-secondary hover:underline">
                            Back to Articles
                        </Link>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <MiniNav />
            <Header />
            <div className="bg-white">
                <div
                    className="bg-cover bg-center bg-no-repeat relative h-[80vh] py-10 mb-260"
                    style={{ backgroundImage: `url('${article.slugImage || '/images/detail.png'}')` }}
                >
                    <div className="absolute inset-0 shadow-2xl top-100 px-24">
                        <div className="mx-auto p-6 bg-white shadow-2xl rounded-2xl space-y-6">
                            <div className="w-30 h-10 rounded-2xl flex justify-center items-center bg-[#D5F7FF]">
                                <span className="text-sm font-medium text-secondary">{getCategoryLabel(article.category)}</span>
                            </div>

                            <h2 className="text-[59px] font-medium leading-tight">
                                {article.cardHeading}
                            </h2>

                            <div className="flex items-center justify-between gap-4 text-sm text-gray-600">
                                <div className="flex gap-4">
                                    <span className="font-medium">{article.name}</span>
                                    <span>•</span>
                                    <span>{new Date(article.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                </div>
                                <div className="flex items-center">
                                    <Download className="text-secondary w-6 h-6" />
                                    <button className="px-4 py-2 bg-transparent text-secondary rounded-lg w-max">Share</button>
                                </div>
                            </div>

                            <section className="space-y-3">
                                <p>{article.cardParagraph}</p>
                            </section>

                            {article.sections && article.sections.length > 0 && article.sections.map((section, index) => (
                                <section key={index} className="space-y-3">
                                    <h2 className="text-xl font-medium">{section.heading}</h2>
                                    <p>{section.paragraph}</p>
                                </section>
                            ))}

                            {article.listHeading && article.listItems && article.listItems.length > 0 && (
                                <section className="space-y-3">
                                    <h2 className="text-xl font-medium">{article.listHeading}</h2>
                                    <ul className="list-disc pl-6 space-y-1">
                                        {article.listItems.map((item, index) => (
                                            <li key={index}>{item.heading}</li>
                                        ))}
                                    </ul>
                                </section>
                            )}

                            {article.tipText && (
                                <section className="p-4 bg-[#D5F7FF] border rounded-lg shadow-sm">
                                    <h3 className="font-medium text-lg">Top Tip</h3>
                                    <p className="mt-1">{article.tipText}</p>
                                </section>
                            )}

                            {article.finalHeading && article.finalParagraph && (
                                <section className="space-y-3 pb-6">
                                    <h2 className="text-xl font-medium">{article.finalHeading}</h2>
                                    <p>{article.finalParagraph}</p>
                                </section>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {relatedArticles.length > 0 && (
                <div className="px-24 mt-4">
                    <h2 className="font-medium fon-sans text-[48px] mb-4">Related Articles</h2>
                    <div className="grid grid-cols-3 max-lg:grid-cols-1 max-lg:gap-34 gap-6 mb-60">
                        {relatedArticles.map((relatedArticle) => (
                            <div
                                key={relatedArticle.id}
                                className="relative bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-80"
                            >
                                <Link href={`/article/${relatedArticle.slug}`}>
                                    <img 
                                        src={relatedArticle.cardImage || '/images/article-1.png'} 
                                        alt={relatedArticle.cardHeading} 
                                        className="w-full h-full object-cover rounded-xl" 
                                    />
                                </Link>
                                <div className="absolute top-60 left-0 right-0 px-4 py-6 mx-4 shadow-lg bg-white rounded-lg">
                                    <div className='flex items-center gap-2 mb-2'>
                                        <Calendar className='text-secondary' />
                                        <span className="text-sm text-muted-foreground">{formatTimeAgo(relatedArticle.publishedAt)}</span>
                                    </div>
                                    <h3 className="font-heading text-[24px] font-medium text-[#044A55]">{relatedArticle.cardHeading}</h3>
                                    <p className="font-ubuntu text-[14px] text-muted-foreground line-clamp-2">{relatedArticle.cardParagraph}</p>
                                    <div className='mt-4 flex items-center gap-2 pt-2'>
                                        <Link href={`/article/${relatedArticle.slug}`} className='text-[#044A55] font-heading font-medium text-[20px] uppercase'>Read More</Link>
                                        <ArrowRight className='text-[#044A55] size-5' />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <Footer />
        </>
    );
}