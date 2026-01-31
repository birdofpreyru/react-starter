import { launchClient } from '@dr.pogodin/react-utils/client';

import Scene from './Scene';

global.SCENE_INIT_PROMISE = launchClient(Scene);
