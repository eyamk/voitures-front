import {merge} from 'lodash'
import NetworkStatus from './networkStatus';
import Visible from './visible';

// console.log(Visible);

export default merge(NetworkStatus,Visible);