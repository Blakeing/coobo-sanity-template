import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'

interface ImageBoxProps {
  image?: { asset?: any }
  alt?: string
  width?: number
  height?: number
  size?: string
  wrapperClasses?: string
  imageClasses?: string
}

export default function ImageBox({
  image,
  alt = 'Cover image',
  // width = 3500,
  // height = 2000,
  size = '100vw',
  wrapperClasses,
  imageClasses,
}: ImageBoxProps) {
  // const imageUrl =
  //   image && urlForImage(image)?.height(height).width(width).fit('crop').url()
  const imageUrl = image && urlForImage(image)?.fit('crop').url()

  return (
    // <div
    //   className={`w-full overflow-hidden rounded-[3px] bg-gray-50 ${wrapperClasses}`}
    // >
    //   {imageUrl && (
    //     <Image
    //       className={`absolute h-full w-full ${imageClasses}`}
    //       alt={alt}
    //       width={width}
    //       height={height}
    //       sizes={size}
    //       src={imageUrl}
    //     />
    //   )}
    // </div>
    <div className={wrapperClasses}>
      {imageUrl && (
        <Image
          className={imageClasses}
          alt={alt}
          fill
          // width={width}
          // height={height}
          sizes={size}
          src={imageUrl}
        />
      )}
    </div>
  )
}
