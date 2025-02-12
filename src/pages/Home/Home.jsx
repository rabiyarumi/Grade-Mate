import React from 'react';
import Banner from './Banner';
import Features from './Features';
import Faq from './Faq';
import NewsLetter from './NewsLetter';
import HowItWorks from './HowItWorks';
import RecentAssignment from './RecentAssignment';

const Home = () => {
    return (
        <div>
          <Banner/>
          <RecentAssignment/>
          <Features/>
          <HowItWorks/>
          <Faq/>
          <NewsLetter/>
          
        </div>
    );
};

export default Home;