import { ComponentPropsWithoutRef } from 'react'

const Code = (props: ComponentPropsWithoutRef<'code'>) => (
  <code
    className="text-md rounded-md bg-gray-100 p-1 before:content-none after:content-none dark:bg-gray-900"
    {...props}
  />
)

export default Code
