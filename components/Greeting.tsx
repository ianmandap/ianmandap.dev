import Link from '@/components/Link'

const Greeting = () => {
  return (
    <div className="my-2 flex flex-col items-center gap-x-12 xl:mb-12 xl:flex-row">
      <div className="pt-5">
        <h1 className="pb-5 text-3xl leading-9 font-bold tracking-tight text-gray-700 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14 dark:text-gray-300">
          Hi, I'm Ian!
        </h1>
        <h2 className="w-3/4 text-lg text-gray-600 dark:text-gray-400">
          Welcome to my personal website. A few years ago, I shifted careers from being a Certified
          Tax Accountant to Software Engineering, a total pivot change! You can read more about my
          experience in
          <Link
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            href="/blog/career-shift-into-software-engineering"
          >
            {' '}
            a blog post.
          </Link>{' '}
          <br />
          <br /> I started this blog to serve as a personal portfolio and resume site and to track
          the technical knowledge I've built throughout my career.
        </h2>
      </div>
    </div>
  )
}

export default Greeting
