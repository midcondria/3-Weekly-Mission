import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import SharedPage from "./pages/sharedPage/SharedPage";
import FolderPage from "./pages/folderPage/FolderPage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="shared" element={<SharedPage />} />
          <Route path="folder" element={<FolderPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
