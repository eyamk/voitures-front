import { usePanelState } from "@bumaga/tabs";

const Panel = ({ children }) => {
    const isActive = usePanelState();
  
    return isActive ? <p className='panel'>{children}</p> : null;
  };

export default Panel; 