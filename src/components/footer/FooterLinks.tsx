import React from 'react';
import { cn } from '../../lib/utils';

interface FooterColumnProps {
  title: string;
  links: Array<{ label: string; href: string; }>;
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-white mb-6">{title}</h3>
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className={cn(
                'text-gray-400 hover:text-white',
                'transition-colors duration-200',
                'text-[15px] leading-relaxed'
              )}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FooterLinks() {
  const columns = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '/features' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'API', href: '/api' },
        { label: 'Documentation', href: '/docs' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Blog', href: '/blog' },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact', href: '/contact' },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-12">
      {columns.map((column) => (
        <FooterColumn key={column.title} {...column} />
      ))}
    </div>
  );
}