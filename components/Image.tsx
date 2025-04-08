import NextImage, { ImageProps } from 'next/image'

const basePath = process.env.BASE_PATH

const Image = ({ src, ...rest }: ImageProps) => {
  const imageSource = src.toString().startsWith('/') ? `${basePath || ''}${src}` : src

  return <NextImage src={imageSource} {...rest} />
}

export default Image
