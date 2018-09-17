 const React = require('react');
const Artist = require('./titleContainerComponents/Artist.jsx');
const Playbutton = require('./titleContainerComponents/Playbutton.jsx');
const Title = require('./titleContainerComponents/Title.jsx');

const TitleContainer = (props) => {
  const { title, artist } = props.song;
  const { isPlaying, playPause } = props;

  return (
    <div className="title-container">
      <Playbutton isPlaying={isPlaying} playPause={playPause}/>
      <Title title={title} />
      <Artist artist={artist} />
   </div>
  );
};

module.exports = TitleContainer;
