import React from "react";
import Homepage from "./components/Homepage";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Background from "./components/uicomponents/Background";

function App() {
    return (
        <>
            <Background />
            <div className='mx-5'>
                <ToastContainer
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme='dark'
                />
                <Homepage />
            </div>
        </>
    );
}

export default App;
