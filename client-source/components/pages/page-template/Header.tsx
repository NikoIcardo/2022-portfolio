import React from 'react';

type HeaderSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeaderProps {
  size: HeaderSize;
  gradient?: boolean;
  children: JSX.Element | string;
}

const Header: React.FunctionComponent<HeaderProps> = ({
  size,
  gradient,
  children,
}) => {
  const GradientClass: React.FunctionComponent<{
    text: HeaderProps['children'];
  }> = ({ text }) => (
    <span className="text-transparent bg-clip-text bg-gradient-to-r to-indigo-600 from-sky-400">
      {text}
    </span>
  );
  switch (size) {
    case 'h1':
      return (
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          {gradient ? <GradientClass text={children} /> : children}
        </h1>
      );
    case 'h2':
      return (
        <h2 className="text-4xl font-extrabold text-sky-600">
          {gradient ? <GradientClass text={children} /> : children}
        </h2>
      );
    case 'h3':
      return (
        <h3 className="">
          {gradient ? <GradientClass text={children} /> : children}
        </h3>
      );
    case 'h4':
      return <h4>{gradient ? <GradientClass text={children} /> : children}</h4>;
    case 'h5':
      return <h5>{gradient ? <GradientClass text={children} /> : children}</h5>;
    case 'h6':
      return <h6>{gradient ? <GradientClass text={children} /> : children}</h6>;
    default:
      return <p>You are using this incorrectly!</p>;
  }
};

export default Header;
