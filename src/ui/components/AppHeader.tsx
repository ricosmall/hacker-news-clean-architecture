import React from 'react';

interface Props {
  title: string;
}

const AppHeader: React.FC<Props> = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

export default AppHeader;
