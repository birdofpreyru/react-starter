import { client } from '@dr.pogodin/react-utils';
import Scene from './Scene';

global.SCENE_INIT_PROMISE = client!(Scene);
