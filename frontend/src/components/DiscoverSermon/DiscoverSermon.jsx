import React, { useState } from 'react';
import './DiscoverSermon.css';

const DiscoverSermon = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const sermons = [
    {
      id: 1,
      title: 'Sermon 1: Faith',
      url: 'https://www.youtube.com/embed/DKJblcRRR3I?si=lFrxt6lBIMzYtCWB',
    },
    {
      id: 2,
      title: 'Sermon 2: Hope',
      url: 'https://www.youtube.com/embed/OaHNIG-f3K4?si=W_MD5TRmtXrDcEn2',
    },
    {
      id: 3,
      title: 'Sermon 3: Love',
      url: 'https://www.youtube.com/embed/DKJblcRRR3I?si=lFrxt6lBIMzYtCWB',
    },
    {
      id: 4,
      title: 'Sermon 4: Patience',
      url: 'https://www.youtube.com/embed/OaHNIG-f3K4?si=W_MD5TRmtXrDcEn2',
    },
  ];

  const filteredSermons = sermons.filter((sermon) =>
    sermon.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="discover-sermon">
      <div className="discover-title">
        <h2>Watch Sermon</h2>
        <hr />
        <input
          type="text"
          className="search-bar"
          placeholder="Search sermons..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="container">
        {filteredSermons.length > 0 ? (
          filteredSermons.map((sermon) => (
            <div className="sermon-item" key={sermon.id}>
              <iframe
                src={sermon.url}
                title={sermon.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <h2>{sermon.title}</h2>
            </div>
            
          ))
        ) : (
          <p className="no-results">No sermons found</p>
        )}
      </div>
    </div>
  );
};

export default DiscoverSermon;
