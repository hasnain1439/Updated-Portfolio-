import React from 'react';

export default function IconWrapper({ iconName: Icon, link }) {
  
  // 1. Check if a link exists
  const isLink = !!link;
  
  // 2. Check if it is an email link (starts with "mailto:")
  const isMail = isLink && link.startsWith("mailto:");

  // 3. Determine the HTML tag: use 'a' for links, 'div' for visual only
  const Wrapper = isLink ? 'a' : 'div';

  // 4. Construct the properties
  const linkProps = isLink ? {
    href: link,
    // ONLY add target="_blank" if it is NOT an email
    target: isMail ? undefined : "_blank",
    // Security best practice for external tabs
    rel: isMail ? undefined : "noopener noreferrer"
  } : {};

  return (
    <Wrapper
      {...linkProps}
      className="bg-white shadow-md shadow-dark-lighter p-3 rounded-xl hover:shadow-lg hover:shadow-dark duration-300 cursor-pointer hover:text-primary flex items-center justify-center"
    >
      <Icon className="text-xl text-gray-700 hover:text-blue-600 transition-colors" />
    </Wrapper>
  );
}