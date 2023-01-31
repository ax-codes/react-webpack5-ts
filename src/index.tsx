import React from "react";
import { createRoot } from 'react-dom/client';
import './index.less'

try {
    const container = document.getElementById('root');
    const root = createRoot(container);
    console.log("运行");
    const App = () => {
        return <div className="hello">Hello</div>
    };
    root.render(<App />)
} catch (e) {
    console.log('e', e);
}