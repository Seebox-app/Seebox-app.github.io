import React from "react";

export const SectionTitle: React.FC<{ title: string; subtitle?: string }> = ({
  title,
  subtitle,
}) => (
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
    {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
  </div>
);
