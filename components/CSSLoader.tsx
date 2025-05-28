'use client';

export function CSSLoader() {
  return (
    <link
      rel="stylesheet"
      href="/styles/main.css"
      media="print"
      onLoad={(e) => {
        const target = e.target as HTMLLinkElement;
        target.media = 'all';
      }}
    />
  );
} 