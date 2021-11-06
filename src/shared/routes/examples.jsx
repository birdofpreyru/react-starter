/**
 * Example routes.
 */

import { PT } from '@dr.pogodin/react-utils';

import { Route, Routes } from 'react-router-dom';

import Buttons from 'pages/examples/Buttons';
import Content from 'pages/examples/Content';
import ApiClient from 'pages/examples/ApiClient';
import AsyncGlobalData from 'pages/examples/AsyncGlobalData';
import GlobalState from 'pages/examples/GlobalState';
import InputFormComponents from 'pages/examples/InputFormComponents';
import ModalExample from 'pages/examples/Modal';
import PageLayout from 'pages/examples/PageLayout';
import ReactThemes from 'pages/examples/ReactThemes';
import Svg from 'pages/examples/Svg';
import Throbber from 'pages/examples/Throbber';
import Tooltip from 'pages/examples/Tooltip';
import Error404 from 'pages/Error404';
import YouTubeVideo from 'pages/examples/YouTubeVideo';

export default function ExampleRoutes() {
  return (
    <Routes>
      <Route index element={<Content />} />
      <Route path="api-client" element={<ApiClient />} />
      <Route path="async-global-data" element={<AsyncGlobalData />} />
      <Route path="buttons" element={<Buttons />} />
      <Route path="global-state" element={<GlobalState />} />
      <Route path="input-form-components" element={<InputFormComponents />} />
      <Route path="modal" element={<ModalExample />} />
      <Route path="page-layout" element={<PageLayout />} />
      <Route path="react-themes" element={<ReactThemes />} />
      <Route path="svg" element={<Svg />} />
      <Route path="throbber" element={<Throbber />} />
      <Route path="tooltip" element={<Tooltip />} />
      <Route path="youtube-video" element={<YouTubeVideo />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

Routes.propTypes = {
  match: PT.shape({
    path: PT.string.isRequired,
  }).isRequired,
};
