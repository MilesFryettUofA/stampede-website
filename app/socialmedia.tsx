import React, { useState, useEffect } from 'react';
import { Tabs, Tab } from '@nextui-org/react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { festivalsData, Festival, Day } from './festivalsData';


declare global {
  interface Window {
    FB: any;
    twttr: any;
    instgrm: any;
  }
}

interface SocialMediaProps {
  selectedFestival: Festival;
  handleFestivalChange: (festival: Festival) => void;
}

const SocialMedia: React.FC<SocialMediaProps> = ({ selectedFestival, handleFestivalChange}) => {
  const [selectedMedia, setSelectedMedia] = useState('Facebook');

  useEffect(() => {
    const loadScript = (src: string, id: string) => {
      if (!document.getElementById(id)) {
        const script = document.createElement('script');
        script.src = src;
        script.id = id;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
      }
    };

    loadScript('https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v21.0', 'facebook-jssdk');
    loadScript('https://platform.twitter.com/widgets.js', 'twitter-wjs');
  }, []);

  useEffect(() => {
    if (selectedMedia === 'Facebook' && window.FB) {
      window.FB.XFBML.parse();
    } else if (selectedMedia === 'Twitter' && window.twttr) {
      window.twttr.widgets.load();
    } else if (selectedMedia === 'Instagram' && window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [selectedMedia]);

  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
    if (window.twttr) {
      window.twttr.widgets.load();
    }
  }, [selectedFestival]);


  const handleTabChange = (key: string) => {
    setSelectedMedia(key);
  };

  return (
    <div className="social-media-container">
      <Tabs
        selectedKey={selectedMedia}
        onSelectionChange={(key) => handleTabChange(key as string)}
        aria-label="Social Media Tabs"
        placement='end'
        className='light'
      >
        <Tab key="Facebook" title={<FaFacebook size={24} />}>
          <div className="social-media-feed">
            <div
              className="fb-page"
              data-href={selectedFestival.fb}
              data-tabs="timeline"
              data-width=""
              data-height=""
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"
              style={{ borderRadius: '12px', overflow: 'hidden' }}
            ></div>
          </div>
        </Tab>
        <Tab key="Twitter" title={<FaTwitter size={24} />}>
          <div className="social-media-feed">
            <a
              className="twitter-timeline"
              data-width="400"
              data-height="400"
              href={`https://twitter.com/${selectedFestival.x}?ref_src=twsrc%5Etfw`}
            >
              Loading
            </a>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default SocialMedia;