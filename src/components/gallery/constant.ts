import { ImageProps } from "next/image";

export const chefImageSize = "(max-width: 768px) 100vw, 270px";

export const imageProps = {
  style: {
    objectFit: "contain",
  } as React.CSSProperties,
  fill: true,
  sizes: chefImageSize,
  alt: "chef  image",
  priority: true,
};

export const galleryImagesData: Array<ImageProps> = [
  {
    src: "/instagram/insta-1.jpg",
    ...imageProps,
  },
  {
    src: "/instagram/insta-2.jpg",
    ...imageProps,
  },
  {
    src: "/instagram/insta-3.jpg",
    ...imageProps,
  },
  {
    src: "/instagram/insta-4.jpg",
    ...imageProps,
  },
  {
    src: "/instagram/insta-5.jpg",
    ...imageProps,
  },

  {
    src: "/instagram/insta-6.jpg",
    ...imageProps,
  },
  {
    src: "/instagram/insta-7.jpg",
    ...imageProps,
  },
  {
    src: "/instagram/insta-8.jpg",
    ...imageProps,
  },
  {
    src: "/instagram/insta-9.jpg",
    ...imageProps,
  },
  {
    src: "/instagram/insta-10.jpg",
    ...imageProps,
  },
  {
    src: "/instagram/insta-11.jpg",
    ...imageProps,
  },

  {
    src: "/instagram/insta-12.jpg",
    ...imageProps,
  },
];
