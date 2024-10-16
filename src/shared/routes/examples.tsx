/**
 * Example routes.
 */

import { Route, Routes } from 'react-router-dom';

import Buttons from 'pages/examples/Buttons';
import CodeSplittingExample from 'pages/examples/CodeSplitting';
import Content from 'pages/examples/Content';
import ApiClient from 'pages/examples/ApiClient';
import AsyncGlobalData from 'pages/examples/AsyncGlobalData';
import GlobalState from 'pages/examples/GlobalState';
import InputFormComponents from 'pages/examples/InputFormComponents';
import LinkTests from 'pages/examples/Links';
import ModalExample from 'pages/examples/Modal';
import PageLayout from 'pages/examples/PageLayout';
import ReactThemes from 'pages/examples/ReactThemes';
import Svg from 'pages/examples/Svg';
import Throbber from 'pages/examples/Throbber';
import TimeHooks from 'pages/examples/TimeHooks';
import Tooltip from 'pages/examples/Tooltip';
import Error404 from 'pages/Error404';
import YouTubeVideo from 'pages/examples/YouTubeVideo';

const ExampleRoutes: React.FunctionComponent = () => (
  <Routes>
    <Route index element={<Content />} />
    <Route path="api-client" element={<ApiClient />} />
    <Route path="async-global-data" element={<AsyncGlobalData />} />
    <Route path="code-splitting" element={<CodeSplittingExample />} />
    <Route path="buttons" element={<Buttons />} />
    <Route path="global-state" element={<GlobalState />} />
    <Route path="input-form-components" element={<InputFormComponents />} />
    <Route path="links/*" element={<LinkTests />} />
    <Route path="modal" element={<ModalExample />} />
    <Route path="page-layout" element={<PageLayout />} />
    <Route path="react-themes" element={<ReactThemes />} />
    <Route path="svg" element={<Svg />} />
    <Route path="throbber" element={<Throbber />} />
    <Route path="time-hooks" element={<TimeHooks />} />
    <Route path="tooltip" element={<Tooltip />} />
    <Route path="youtube-video" element={<YouTubeVideo />} />
    <Route path="*" element={<Error404 />} />
  </Routes>
);

export default ExampleRoutes;
