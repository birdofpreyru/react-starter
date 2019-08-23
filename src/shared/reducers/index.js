/**
 * This module holds the root factory for Redux reducer. The factory accepts
 * ExpressJS HTTP request object as its only optional argument, and it always
 * returns a promise that resolves to a new reducer.
 *
 * When the argument is provided, the factory assumes server-side rendering,
 * and it can use data available in the HTTP request to generate initial store
 * state fitted to the request.
 *
 * When no argument is provided, the factory assumes client-side rendering,
 * and creates the default state (in case of server-side rendering, that default
 * state will be overriden at client side by the one injected from the server).
 *
 * To better understand reducers read:
 * http://redux.js.org/docs/basics/Reducers.html.
 */

import { redux } from '@dr.pogodin/react-utils';

/**
 * @param {Object} req Optional. ExpressJS HTTP request.
 * @return {Promise} Resolves to a new reducer.
 */
export async function factory(req) {
  const reducers = await redux.resolveReducers({
    /* The place to resolve child reducers created by factories. */
  });
  return redux.combineReducers((state) => {
    if (!req) return state;
    return {
      ...state,

      /* <MetaTags> rely on this field. */
      domain: `${req.protocol}://${req.headers.host || req.hostname}`,
    };
  }, {
    ...reducers,
  });
}

export default undefined;
