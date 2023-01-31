import React from "react";
import { createRoot } from 'react-dom/client';

import './index.less'
import '@/assets/css/antd/index.less'
import { DatePicker } from 'antd';
import { Button } from 'antd';

try {
    const container = document.getElementById('root');
    const root = createRoot(container);
    console.log("运行");
    const App = () => {
        return <div>
            <DatePicker />
            <Button type="primary">Primary Button</Button>
        </div>;
    };
    root.render(<App />)
} catch (e) {
    console.log('e', e);
}