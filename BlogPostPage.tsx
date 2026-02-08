import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock, Tag, ArrowLeft } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-blue-600 hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-96 object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 pb-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Category Badge */}
          <div className="flex items-center gap-3 mb-6">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              {post.category}
            </span>
            <span className="text-slate-500 text-sm flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center gap-6 mb-8 pb-8 border-b border-slate-200">
            <div className="flex items-center gap-2 text-slate-600">
              <User className="w-4 h-4" />
              <span className="text-sm">{post.author}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{post.date}</span>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-slate-700 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Focus Keyword */}
          <div className="mt-8 pt-8 border-t border-slate-200">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Tag className="w-4 h-4" />
              <span className="font-semibold">Focus Topic:</span>
              <span>{post.focusKeyword}</span>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">More Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {BLOG_POSTS.filter(p => p.id !== post.id && p.category === post.category)
              .slice(0, 2)
              .map(relatedPost => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                >
                  <img
                    src={relatedPost.imageUrl}
                    alt={relatedPost.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="font-bold text-slate-900 mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h4>
                    <p className="text-sm text-slate-600 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage;
