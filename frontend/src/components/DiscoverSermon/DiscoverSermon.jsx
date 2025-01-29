import React, { useState } from 'react';
import './DiscoverSermon.css';

const DiscoverSermon = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const sermons = [
    {
      id: 1,
      title: " Igikorwa Cyose kitavuye mu kwizera n'icyaha",
      url: 'https://www.youtube.com/embed/IDgeKZmjo8A?si=e_4FZ8f99DdJowOU',
    },
  
  ];

  const filteredSermons = sermons.filter((sermon) =>
    sermon.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="discover-all">
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
