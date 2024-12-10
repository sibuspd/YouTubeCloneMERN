import "./profile.css"

const Profile = () => {
  return (
    <div className="profile">
        <div className="profile_page">
            <div className="profile_top_section">
                <div className="profile_top_section_profile">
                    <img className="profile_top_section_img" src="https://yt3.googleusercontent.com/ytc/AIdro_lJQqX36ycVHq8j45eLJJ86uKnNxHHdMDufPR8rEmaosfM=s160-c-k-c0x00ffffff-no-rj" />
                </div>
                <div className="profile_top_section_About">
                    <div className="profile_top_section_About_Name">Nerd's Lesson</div>
                    <div className="profile_top_section_info">
                        @User1  . 4 videos
                    </div>
                    <div className="profile_top_section_info">
                        About section of channel
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile