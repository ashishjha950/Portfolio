import  blogapp from '../images/blogapp.jpg'
import urlShortener from '../images/urlshortener.jpg'
import chatify from "../images/chatify.png";

const projects = [
  {
    projectImg: chatify,
    projectCode: "https://chatify-ruddy-nine.vercel.app/",
    projectView: "https://chatify-ruddy-nine.vercel.app/",
    projectTitle: "Chatify",
    projectDescription:
      "Chatify is a modern real-time chat application that allows users to communicate instantly via public and private messaging. Built with the MERN stack and enhanced with Socket.IO secure JWT authentication, message editing/deletion, and smooth animations using Framer Motion.",
  },
  {
    projectImg: blogapp,
    projectCode: "https://github.com/ashishjha950/Blog-App",
    projectView: "https://blog-app-psi-pied.vercel.app/",
    projectTitle: "Blog App",
    projectDescription:
      "This is a Blog App built with React.js, Node.js, Express.js, and MongoDB. It allows users to create, read, update, and delete blog posts. The app features a user-friendly interface and is fully responsive.",
  },
  {
    projectImg: urlShortener,
    projectCode: "https://github.com/ashishjha950/URL-Shortener",
    projectView: "https://urlshortener-liard-pi.vercel.app/",
    projectTitle: "URL Shortener",
    projectDescription:
      "This is a URL Shortener built with React.js, Node.js, Express.js, and MongoDB. It allows users to shorten long URLs and track their usage. The app features a user-friendly interface and is fully responsive.",
  },
];

  export default projects;