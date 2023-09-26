import React from 'react';
import Header from '../../components/Header';
import styles from './September.module.css';
import Calendar from 'react-calendar';
import { useRouter } from 'next/router';
import SeptemberCalendar from '../../components/SeptemberCalendar';

function September() {
    

    return (
        <div>
        
            <Header />
            
            <SeptemberCalendar />
           
        </div>
    );
}

export default September;
