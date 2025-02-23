import {Routes, Route} from "react-router-dom";
import { QrCodeGenerator } from "./components/Generate/QrCodeGenerator.jsx";
import {QrCodeScanner} from "./components/Scan/QrCodeScanner.jsx";
import {Navigation} from "./components/Navigation/Navigation.jsx";
import {GenerateHistory} from "./GenerateHistory.jsx";
import{ScanHistory} from "./ScanHistory.jsx";

const Layout = () => {
    return (
        <div>
            <Navigation/>


            <Routes>
                <Route path="/generate" element={<QrCodeGenerator/>} />
                    <Route path="/scan" element={<QrCodeScanner/>} />
                    <Route path="/scanHistory" element={<ScanHistory/>}/>
                    <Route path="/generateHistory" element={<GenerateHistory/>}/>

            </Routes>


        </div>
    );
}
export { Layout };
