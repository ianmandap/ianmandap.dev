interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const sideProjectsData: Project[] = [
  {
    title: 'Personal Website',
    description: `A showcase of my interests and projects that I've worked on`,
    imgSrc: '/static/images/sideProjects/blog.png',
    href: '#',
  },
  {
    title: 'Project Euler solutions',
    description: `My repository of Ruby solutions to my solved problems in Project Euler,
    a website that poses a series of mathematical/computer programming problems to solve`,
    imgSrc: 'https://projecteuler.net/profile/ianmandap.png?v=latest',
    href: 'https://github.com/ianmandap/project-euler/',
  },
]

export default sideProjectsData
