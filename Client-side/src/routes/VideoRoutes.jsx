import { Routes, Route } from 'react-router-dom';
import UploadForm from '../components/Form/UploadForm';

const VideoRoutes = () => (
  <Routes>
    <Route path="/upload" element={<UploadForm />} />
  </Routes>
);

export default VideoRoutes;
