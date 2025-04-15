import  blogapp from '../images/blogapp.jpg'
import urlShortener from '../images/urlshortener.jpg'

const projects = [
    {
      projectImg: blogapp,
      projectCode: 'https://github.com/ashishjha950/Blog-App',
      projectView: 'https://blog-app-psi-pied.vercel.app/',
      projectTitle: 'Blog App',
      projectDescription: 'This is a Blog App built with React.js, Node.js, Express.js, and MongoDB. It allows users to create, read, update, and delete blog posts. The app features a user-friendly interface and is fully responsive.'
    },
    {
      projectImg: urlShortener,
      projectCode: 'https://github.com/ashishjha950/URL-Shortener',
      projectView: 'https://urlshortener-liard-pi.vercel.app/',
      projectTitle: 'URL Shortener',
      projectDescription: 'This is a URL Shortener built with React.js, Node.js, Express.js, and MongoDB. It allows users to shorten long URLs and track their usage. The app features a user-friendly interface and is fully responsive.'
    },
  ];

  export default projects;