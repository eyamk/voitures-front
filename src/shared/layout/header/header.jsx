import React from 'react';
import HeaderWrapper from './headerWrapper';
import Tabs from '../../../components/molecules/Tab';

const header = () => {
  return (
    <HeaderWrapper>
      <div className="nav">
        <Tabs />
      </div>
    </HeaderWrapper>
  );
};

export default header;
