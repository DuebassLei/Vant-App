import Mock from 'mockjs';
import { mockTestInfo } from './modules/base';

Mock.mock('/api/v1/test/list', 'get', mockTestInfo);
