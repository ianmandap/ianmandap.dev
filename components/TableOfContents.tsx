import Link from 'next/link'
import { useState } from 'react'

interface TocHeading {
  value: string
  url: string
  depth: number
}

export default function TableOfContents({ toc }: { toc: TocHeading[] | [] }) {
  return (
    <>
      {toc.length != 0 ? (
        <div className="pt-3 pb-1 text-lg xl:border-b xl:border-gray-200 xl:pt-11 xl:pb-3 xl:text-base xl:dark:border-gray-700">
          <span className="mb-2.5 font-medium">Table of Contents</span>
          <ul className="flex flex-col space-y-2">
            {toc.map(({ value, depth, url }) => (
              <li
                key={url}
                className="text-gray-500 dark:text-gray-400"
                style={{ paddingLeft: (depth - 2) * 15 }}
              >
                <div className="hover:text-primary-600 dark:hover:text-primary-400">
                  <Link href={url}>{value}</Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  )
}
