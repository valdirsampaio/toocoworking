import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { register } from 'swiper/element/bundle'
import { RoomsProvider } from './providers/RoomsContext.jsx'

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <RoomsProvider>
                <App />
            </RoomsProvider>
        </BrowserRouter>
    </React.StrictMode>,
)