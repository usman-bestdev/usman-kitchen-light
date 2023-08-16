import { ImageProps } from "next/image";

export const chefImageSize = "(max-width: 768px) 100vw, 270px";

export const imageProps = {
  style: { objectFit: "contain", padding: "8px" } as React.CSSProperties,
  fill: true,
  sizes: chefImageSize,
  alt: "chef  image",
  priority: true,
};

export const chefImagesData: Array<ImageProps> = [
  {
    src: "/team/chef-1.jpg",
    ...imageProps,
  },
  {
    src: "/team/chef-2.jpg",
    ...imageProps,
  },
  {
    src: "/team/chef-3.jpg",
    ...imageProps,
  },
  {
    src: "/team/chef-4.jpg",
    ...imageProps,
  },
  {
    src: "/team/chef-5.jpg",
    ...imageProps,
  },

  {
    src: "/team/chef-6.jpg",
    ...imageProps,
  },
];

export const arrowImage = {
  src: "/prev-arrow.png",
  width: 70,
  height: 18,
  alt: "prev-arrow",
};

export const ourChefDetail = {
  subHeading: "Best food menu",
  heading: "Meet Our Exclusive & Master Chefs",
  description:
    "Sit amet consectetur adipiscing elitsue risus mauris quam adipiscing phasellus aene ante orcirat scelerisque enim ut nulla",
};
