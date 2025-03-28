interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Microblink - BlinkShelf',
    description: `BlinkShelf lets users scan grocery items in real-time to detect product info down to the UPC level. 
    As a Fullstack Web Developer, I created dashboards for effective data visualization and created APIs to facilitate
    the communication between the back-end server, mobile devices, and machine learning algorithms`,
    imgSrc: '/static/images/projects/Capture-images-of-grocery-shelves-1.webp',
    href: 'https://microblink.com/products/ai-product-recognition/',
  },
]

export default projectsData
