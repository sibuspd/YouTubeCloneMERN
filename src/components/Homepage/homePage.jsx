import "./homePage.css";

const HomePage = ({sideNavbar}) => {
  //HOMEPAGE = FilterOptions + Video Thumbnails

  const filters = [
    "All",
    "Twenty20 Cricket",
    "Coding",
    "Machine Learning",
    "Music",
    "Hindustani Classical",
    "Live",
    "Mixes",
    "Gaming",
    "Debates",
    "Coke Studio Pakistan",
    "Democracy",
    "Pakistani Dramas",
    "Comedy",
  ];

  return (
    <div className={sideNavbar?"homepage":"fullHomePage"}>
        {/* The Category Filters*/ }
      <div className="homepage_options">
        {filters.map((category, index) => {
          return <div className="homepage_option" key={index}>{category}</div>;
        })}
      </div> 
      {/* The Video Thumbnails Section*/ }
      <div className={sideNavbar?"home_mainPage":"fullHome_mainPage"}>
        <div className="youtube_Video"> {/* Single thumbnail*/ } 
            <div className="youtube_thumbnailBox">
                <img src="https://i.ytimg.com/vi/UN-F5ZWwwJc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLARTiM0ALKqtyvQkEpLUL1KEUUQAg" className="youtube_thumbnailPic" alt="Thumbnail"/>
                <div className="youtube_timingThumbnail">
                    28:05
                </div>
            </div>
            <div className="youtubeTitleBox"> {/* Consists username, dp, video title and views*/ }
                <div className="youtubeTitleBoxProfile">
                    <img src="https://yt3.ggpht.com/8jshuX4Pme6Q_h_HWwR1EMz7nAoZKYayugfh055Y1jxx0Ne5BJHPaQBfnRUZ-TWYbqaAhD4nLRY=s88-c-k-c0x00ffffff-no-rj" alt="profile" className="youtube_thumbnail_Profile" />
                </div>
                <div className="youtubeTitleBox_Title">
                    <div className="youtube_videoTitle">Dummy User</div>
                    <div className="youtube_channelName">Nerd's lesson</div>
                    <div className="youtubeVideo_views">24 likes</div>
                </div>
            </div>
        </div>
        <div className="youtube_Video"> {/* Single thumbnail*/ } 
            <div className="youtube_thumbnailBox">
                <img src="https://i.ytimg.com/vi/UN-F5ZWwwJc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLARTiM0ALKqtyvQkEpLUL1KEUUQAg" className="youtube_thumbnailPic" alt="Thumbnail"/>
                <div className="youtube_timingThumbnail">
                    28:05
                </div>
            </div>
            <div className="youtubeTitleBox"> {/* Consists username, dp, video title and views*/ }
                <div className="youtubeTitleBoxProfile">
                    <img src="https://yt3.ggpht.com/8jshuX4Pme6Q_h_HWwR1EMz7nAoZKYayugfh055Y1jxx0Ne5BJHPaQBfnRUZ-TWYbqaAhD4nLRY=s88-c-k-c0x00ffffff-no-rj" alt="profile" className="youtube_thumbnail_Profile" />
                </div>
                <div className="youtubeTitleBox_Title">
                    <div className="youtube_videoTitle">Dummy User</div>
                    <div className="youtube_channelName">Nerd's lesson</div>
                    <div className="youtubeVideo_views">24 likes</div>
                </div>
            </div>
        </div>        <div className="youtube_Video"> {/* Single thumbnail*/ } 
            <div className="youtube_thumbnailBox">
                <img src="https://i.ytimg.com/vi/UN-F5ZWwwJc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLARTiM0ALKqtyvQkEpLUL1KEUUQAg" className="youtube_thumbnailPic" alt="Thumbnail"/>
                <div className="youtube_timingThumbnail">
                    28:05
                </div>
            </div>
            <div className="youtubeTitleBox"> {/* Consists username, dp, video title and views*/ }
                <div className="youtubeTitleBoxProfile">
                    <img src="https://yt3.ggpht.com/8jshuX4Pme6Q_h_HWwR1EMz7nAoZKYayugfh055Y1jxx0Ne5BJHPaQBfnRUZ-TWYbqaAhD4nLRY=s88-c-k-c0x00ffffff-no-rj" alt="profile" className="youtube_thumbnail_Profile" />
                </div>
                <div className="youtubeTitleBox_Title">
                    <div className="youtube_videoTitle">Dummy User</div>
                    <div className="youtube_channelName">Nerd's lesson</div>
                    <div className="youtubeVideo_views">24 likes</div>
                </div>
            </div>
        </div>        <div className="youtube_Video"> {/* Single thumbnail*/ } 
            <div className="youtube_thumbnailBox">
                <img src="https://i.ytimg.com/vi/UN-F5ZWwwJc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLARTiM0ALKqtyvQkEpLUL1KEUUQAg" className="youtube_thumbnailPic" alt="Thumbnail"/>
                <div className="youtube_timingThumbnail">
                    28:05
                </div>
            </div>
            <div className="youtubeTitleBox"> {/* Consists username, dp, video title and views*/ }
                <div className="youtubeTitleBoxProfile">
                    <img src="https://yt3.ggpht.com/8jshuX4Pme6Q_h_HWwR1EMz7nAoZKYayugfh055Y1jxx0Ne5BJHPaQBfnRUZ-TWYbqaAhD4nLRY=s88-c-k-c0x00ffffff-no-rj" alt="profile" className="youtube_thumbnail_Profile" />
                </div>
                <div className="youtubeTitleBox_Title">
                    <div className="youtube_videoTitle">Dummy User</div>
                    <div className="youtube_channelName">Nerd's lesson</div>
                    <div className="youtubeVideo_views">24 likes</div>
                </div>
            </div>
        </div>        <div className="youtube_Video"> {/* Single thumbnail*/ } 
            <div className="youtube_thumbnailBox">
                <img src="https://i.ytimg.com/vi/UN-F5ZWwwJc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLARTiM0ALKqtyvQkEpLUL1KEUUQAg" className="youtube_thumbnailPic" alt="Thumbnail"/>
                <div className="youtube_timingThumbnail">
                    28:05
                </div>
            </div>
            <div className="youtubeTitleBox"> {/* Consists username, dp, video title and views*/ }
                <div className="youtubeTitleBoxProfile">
                    <img src="https://yt3.ggpht.com/8jshuX4Pme6Q_h_HWwR1EMz7nAoZKYayugfh055Y1jxx0Ne5BJHPaQBfnRUZ-TWYbqaAhD4nLRY=s88-c-k-c0x00ffffff-no-rj" alt="profile" className="youtube_thumbnail_Profile" />
                </div>
                <div className="youtubeTitleBox_Title">
                    <div className="youtube_videoTitle">Dummy User</div>
                    <div className="youtube_channelName">Nerd's lesson</div>
                    <div className="youtubeVideo_views">24 likes</div>
                </div>
            </div>
        </div>        <div className="youtube_Video"> {/* Single thumbnail*/ } 
            <div className="youtube_thumbnailBox">
                <img src="https://i.ytimg.com/vi/UN-F5ZWwwJc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLARTiM0ALKqtyvQkEpLUL1KEUUQAg" className="youtube_thumbnailPic" alt="Thumbnail"/>
                <div className="youtube_timingThumbnail">
                    28:05
                </div>
            </div>
            <div className="youtubeTitleBox"> {/* Consists username, dp, video title and views*/ }
                <div className="youtubeTitleBoxProfile">
                    <img src="https://yt3.ggpht.com/8jshuX4Pme6Q_h_HWwR1EMz7nAoZKYayugfh055Y1jxx0Ne5BJHPaQBfnRUZ-TWYbqaAhD4nLRY=s88-c-k-c0x00ffffff-no-rj" alt="profile" className="youtube_thumbnail_Profile" />
                </div>
                <div className="youtubeTitleBox_Title">
                    <div className="youtube_videoTitle">Dummy User</div>
                    <div className="youtube_channelName">Nerd's lesson</div>
                    <div className="youtubeVideo_views">24 likes</div>
                </div>
            </div>
        </div>
        
      </div>


    </div>
  );
};

export default HomePage;
