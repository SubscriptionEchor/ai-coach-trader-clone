import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../../lib/utils';

interface AuthLinkProps {
  text: string;
  linkText: string;
  to: string;
  className?: string;
}

export function AuthLink({ text, linkText, to, className }: AuthLinkProps) {
  return (
    <p className={cn('text-center text-gray-400', className)}>
      {text}{' '}
      <Link 
        to={to} 
        className="text-white hover:text-primary-light transition-colors"
      >
        {linkText}
      </Link>
    </p>
  );
}