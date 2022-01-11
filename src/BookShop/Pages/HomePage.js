import React from 'react'

import Box from '../Components/Hero/Box';
import Carocel from '../Components/Hero/Carocel';
import Box_2 from '../../Shared/Components/Boxs/Box_2';
import Box_3 from '../../Shared/Components/Boxs/Box_3';
import SilkCaroucel_1 from '../../Shared/Components/Carocels/silkCaroucel_1';
import Countdown from '../../Shared/Components/Countdown/Countdown';



const HomePage = () => {
    return (
        <React.Fragment>
            <Carocel />
            <hr />
            <div className="container-fluid">
                <Box />
                <hr />
                <SilkCaroucel_1 item='ইঞ্জিনিয়ারিং' />
                <hr />
                <Box_2 />
                <hr />
                <SilkCaroucel_1 item='বাংলা' />
                <hr />
                <Box_3 />
                <hr />
                <SilkCaroucel_1 />
                <hr />
                <Countdown />
                <hr />

            </div>

        </React.Fragment>
    )
}

export default HomePage
