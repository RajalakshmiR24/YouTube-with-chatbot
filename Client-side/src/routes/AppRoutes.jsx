import { Routes, Route } from 'react-router-dom';
import Home from '../components/pages/Home';
import Trend from '../components/pages/Trend';
import UploadForm from '../components/Form/UploadForm';
import Subscriptions from '../components/pages/Subscriptions';
import History from '../components/pages/History';
import Library from '../components/pages/Library';
import WatchLater from '../components/pages/WatchLater';
import LikedVideos from '../components/pages/LikedVideos';

const AppRoutes = () => (
  <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/trending" element={<Trend />} />
      <Route path="/subscriptions" element={<Subscriptions />} />
      <Route path="/history" element={<History />} />
      <Route path="/library" element={<Library />} />
      <Route path="/watch-later" element={<WatchLater />} />
      <Route path="/liked-videos" element={<LikedVideos />} />
      <Route path="/upload" element={<UploadForm />} />
  </Routes>
);

export default AppRoutes;
