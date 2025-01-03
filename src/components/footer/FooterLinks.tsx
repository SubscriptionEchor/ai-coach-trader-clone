import React from 'react';
import { cn } from '../../lib/utils';
import { navItems } from '../navbar/NavConfig';

interface FooterColumnProps {
  title: string;
  links: Array<{ label: string; href: string; }>;
}

function FooterColumn({ title, links }: FooterColumnProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

    }
  };
  return (
    <div>
      <h3 className="text-lg font-semibold text-white mb-6">{title}</h3>
      <ul className="space-y-4">
        {links.map((link) => {
          return (
            <li key={link.label} className='pointer'>
              <div
                key={link.sectionId}
                onClick={() => scrollToSection(link.sectionId)}
                className={cn(
                  'py-2 rounded-full',
                  'text-sm text-gray-300 hover:text-white',
                  'transition-colors duration-200',
                  'w-full text-left',
                  'cursor-pointer'
                )}
              >
                {link.label}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export function FooterLinks() {
  const columns = [
    {
      title: 'Product',
      links: navItems,
    },
    // {
    //   title: 'Company',
    //   links: [
    //     { label: 'About', href: '/about' },
    //     { label: 'Blog', href: '/blog' },
    //     { label: 'Careers', href: '/careers' },
    //     { label: 'Contact', href: '/contact' },
    //   ],
    // },
  ];

  return (
    <div className="grid grid-cols-2 gap-12">
      {columns.map((column) => (
        <FooterColumn key={column?.title} {...column} />
      ))}
    </div>
  );
}