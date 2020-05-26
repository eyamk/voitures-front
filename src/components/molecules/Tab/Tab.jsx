import { useTabState } from '@bumaga/tabs';
import TabWrapper from './TabWrapper';

const Tab = ({ children }) => {
  const { onClick } = useTabState();
  return (
    <TabWrapper>
      <div className="hover-underline-animation" style={{ cursor: 'pointer' }} onClick={onClick}>
        {children}
        
      </div>
    </TabWrapper>
  );
};

export default Tab;
