/**
 * Example routes.
 */

import { Route, Routes } from 'react-router';

import Error404 from 'pages/Error404';
import ApiClient from 'pages/examples/ApiClient';
import AsyncGlobalData from 'pages/examples/AsyncGlobalData';
import Buttons from 'pages/examples/Buttons';
import CodeSplittingExample from 'pages/examples/CodeSplitting';
import Content from 'pages/examples/Content';
import GlobalState from 'pages/examples/GlobalState';
import InputFormComponents from 'pages/examples/InputFormComponents';
import LinkTests from 'pages/examples/Links';
import ModalExample from 'pages/examples/Modal';
import PageLayout from 'pages/examples/PageLayout';

import {
  DrPogodinReactHelmet,
  PureReact,
  ReactHelmetAsync,
  ReactHelmetContent,
} from 'pages/examples/ReactHelmet';

import ReactThemes from 'pages/examples/ReactThemes';
import Svg from 'pages/examples/Svg';
import Throbber from 'pages/examples/Throbber';
import TimeHooks from 'pages/examples/TimeHooks';
import Tooltip from 'pages/examples/Tooltip';

import YouTubeVideo from 'pages/examples/YouTubeVideo';

const ExampleRoutes: React.FunctionComponent = () => (
  <Routes>
    <Route element={<Content />} index />
    <Route element={<ApiClient />} path="api-client" />
    <Route element={<AsyncGlobalData />} path="async-global-data" />
    <Route element={<CodeSplittingExample />} path="code-splitting" />
    <Route element={<Buttons />} path="buttons" />
    <Route element={<GlobalState />} path="global-state" />
    <Route element={<InputFormComponents />} path="input-form-components" />
    <Route element={<LinkTests />} path="links/*" />
    <Route element={<ModalExample />} path="modal" />
    <Route element={<PageLayout />} path="page-layout" />

    {/* TODO: Move these to a dedicated router. */}
    <Route element={<ReactHelmetContent />} path="react-helmet" />
    <Route element={<DrPogodinReactHelmet />} path="react-helmet/dr-pogodin-react-helmet" />
    <Route element={<PureReact />} path="react-helmet/pure-react" />
    <Route element={<ReactHelmetAsync />} path="react-helmet/react-helmet-async" />

    <Route element={<ReactThemes />} path="react-themes" />
    <Route element={<Svg />} path="svg" />
    <Route element={<Throbber />} path="throbber" />
    <Route element={<TimeHooks />} path="time-hooks" />
    <Route element={<Tooltip />} path="tooltip" />
    <Route element={<YouTubeVideo />} path="youtube-video" />
    <Route element={<Error404 />} path="*" />
  </Routes>
);

export default ExampleRoutes;
