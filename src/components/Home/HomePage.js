

const HomePage = (props) => {
    return (
        <div className="homepage-container">
            <video  autoPlay loop muted >
                <source src="https://www.typeform.com/static/home-page/hero/video-1920.mp4" 
                type="video/mp4"/></video>

                
                    <div className="homepage-content">
                        <div className="title-1"> There's a better way to ask </div>
                        <div  className="title-2"> You don't want to make a boring form. And your audience won't answer one. Create a typeform instead—and make everyone happy. </div>
                        <div  className="title-3">
                             <button>Get started - it's free</button>
                              </div>
                    </div>
                
        </div>
    )
}

export default HomePage;