import { Routes, Route } from "react-router-dom";
import { SelectTicPage } from "../pages/SelectTicPage";
import { FormPage } from "../pages/FormPage";
import { DownloadTicPage } from "../pages/DownloadTicPage";

const AppRoutes:React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SelectTicPage />} />
      <Route path="/FormPage" element={<FormPage />} />
      <Route path="/FormPage/DownloadTicPage" element={<DownloadTicPage />} />
    </Routes>   
  );
};
  
export default AppRoutes;