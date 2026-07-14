import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 text-sm text-slate-400 font-medium">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="inline-flex items-center hover:text-dental-aqua transition-colors duration-200"
          >
            <Home className="w-4 h-4 mr-1.5" />
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="inline-flex items-center">
              <ChevronRight className="w-4 h-4 text-slate-300 mx-1 flex-shrink-0" />
              {isLast ? (
                <span className="text-dental-navy font-semibold truncate max-w-[200px] md:max-w-none">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="hover:text-dental-aqua transition-colors duration-200 truncate max-w-[150px] md:max-w-none"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
