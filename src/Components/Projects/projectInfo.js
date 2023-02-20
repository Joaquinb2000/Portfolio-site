
const projectInfo= [
    {
        name:"Face Detect",
        description: "The app accepts image urls and uses the Clarifai detection API to identify faces in the image. It handles user interaction with its own server. It also counts with its own database for user registration and login.",
        img: "https://i.imgur.com/k56Ys4s.png",
        used: "Javascript, React, Node (using Express), and PostgreSQL",
        link: "https://joaquinb2000.github.io/face-recognition-app/"
    },
    {
        name: "Message Me",
        description: "Real time chatroom application, users can create and edit chatroom members and title",
        img: "https://i.imgur.com/G3GAG43.png",
        used: "Ruby on Rails, PostgreSQL, Redis, Bootstrap",
        link: "https://messageme-jb.fly.dev/"
    },
    {
        name: "Site as a Service app",
        description: "Organizations can manage projects, employees, and artifacts (files stored in AWS S3 bucket). Implemented a subscription payment system with stripe. Organizations can create employee accounts by sending the new member an email with a one time link which will allow the user to finish creating their account.",
        img: "https://imgur.com/sKp2v8y.png",
        used: "Ruby on Rails, PostgreSQL, Auth with Devise and Milia, file upload handled with AWS, Bootsrap",
        link: "https://jb-saas-app.fly.dev/"
    },
    {
        name: "Photo-App",
        description: "Image sharing site",
        img: "https://imgur.com/rjKXot1.png",
        used: "Ruby on Rails, Auth with Devise, image upload handled with AWS S3 bucket, implemented subcription plan payments with Stripe API.",
        link: "https://photo-app.fly.dev/"
    },
    {
        name: "University App",
        description: "Mockup for a university site with a listing for courses, information page, student index and profiles.",
        img: "https://imgur.com/4LfHlla.png",
        used: "Ruby on Rails, PostgreSQL, Auth with Devise",
        link: "https://university-app.fly.dev/"
    },
    {
        name:"Robofriends",
        description: "Simple showcase of React.",
        img: "https://i.imgur.com/Dz1lEPW.png",
        used: "React",
        link: "https://joaquinb2000.github.io/robofriends/"
    },
]

export default projectInfo;
