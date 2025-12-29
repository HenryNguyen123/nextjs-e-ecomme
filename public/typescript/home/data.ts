 import { 
  IoStatsChart,
  IoRocketOutline,
  IoSettingsOutline,
  IoCloudOutline,
  IoShieldCheckmarkOutline,
  IoCodeSlashOutline
} from "react-icons/io5";

// feature
export const dataFeature = [
  {
    title: "Analytics Growth",
    desc: "Powerful insights for your business",
    icon: IoStatsChart,
  },
  {
    title: "Fast Deployment",
    desc: "Launch your SaaS faster",
    icon: IoRocketOutline,
  },
  {
    title: "Custom Settings",
    desc: "Fully configurable system",
    icon: IoSettingsOutline,
  },
  {
    title: "Cloud Ready",
    desc: "Optimized for cloud scale",
    icon: IoCloudOutline,
  },
  {
    title: "Secure System",
    desc: "Enterprise-level security",
    icon: IoShieldCheckmarkOutline,
  },
  {
    title: "Developer Friendly",
    desc: "Clean & modern codebase",
    icon: IoCodeSlashOutline,
  },
];  
export const itemDataFeature = {
  heading: 'Feature',
  title: 'Essential Integrations with Modern Design',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
}
    
// about
export const dataAbout = {
heading: 'About',
title: 'Know Details About Our Company',
desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.'
}
export const itemDataAbout = [
{
    title: "About Us",
    heading: "Built-with Latest Tools and Technologies",
    content: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum sapien ac leo cursus dignissim.",
    "In ac lectus vel orci accumsan ultricies at in libero accumsan.",
    "Phasellus ex massa, facilisis ac vestibulum eget, ultrices quis nulla."
    ],
    image: "/images/test/bg1.jpg"
},
{
    title: "Our Mission",
    heading: "Our Mission & Core Values",
    content: [
    "Our mission is to deliver high-quality digital products.",
    "We focus on performance, scalability, and user experience.",
    "Building long-term value for our clients is our priority."
    ],
    image: "/images/test/bg2.png"
},
{
    title: "Our Vision",
    heading: "Our Vision for the Future",
    content: [
    "To become a trusted technology partner worldwide.",
    "Innovating continuously with modern technologies.",
    "Empowering businesses through digital transformation."
    ],
    image: "/images/test/bg3.jfif"
}
];

// blogs
export const dataBlog = {
    heading: 'Blogs',
    title: 'Latest News & Articles From Our Blog',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.'
}
export const itemDataBlogs  = [
    {
        image: '/images/test/bg1.jpg',
        fullname: 'Alex Baland',
        time: 'Jun 18, 2025',
        title: 'Exploring MERN Stack: Powering Modern Web Development',
        link: '',
    },
    {
        image: '/images/test/bg1.jpg',
        fullname: 'Alex Baland',
        time: 'Jun 18, 2025',
        title: 'Exploring MERN Stack: Powering Modern Web Development',
        link: '',
    },
    {
        image: '/images/test/bg1.jpg',
        fullname: 'Alex Baland',
        time: 'Jun 18, 2025',
        title: 'Exploring MERN Stack: Powering Modern Web Development',
        link: '',
    }
]

// our page
export const dataOur = {
    heading: 'Our',
    title: 'Meet With Our Creative Dedicated Team',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
}
export const itemDataOur = [
    {
        image: "/images/test/bg1.jpg",
        fullname: "Olivia Andrium",
        position: "Project Manager",
        fb: "#",
        ins: "#",
        gg: "#",
    },
    {
        image: "/images/test/bg1.jpg",
        fullname: "James Walker",
        position: "UI/UX Designer",
        fb: "#",
        ins: "#",
        gg: "#",
    },
    {
        image: "/images/test/bg1.jpg",
        fullname: "Sophia Lee",
        position: "Frontend Developer",
        fb: "#",
        ins: "#",
        gg: "#",
    },
];

// portfolio
export const dataPortpolio = {
    heading: 'PORTFOLIO',
    title: 'Gallery, Previews and Portfolio',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.'
}
type PortfolioImage = {
  image: string
  productName: string
  link: string
}

type PortfolioContent = {
  heading: string
  images: PortfolioImage[]
}
export const itemDataPortpolios: PortfolioContent[] = [
  {
    heading: 'All',
    images: [
      {
        image: '/images/test/bg1.jpg',
        productName: 'Product 1',
        link: '#',
      },
      {
        image: '/images/test/bg1.jpg',
        productName: 'Product 2',
        link: '#',
      },
      {
        image: '/images/test/bg1.jpg',
        productName: 'Product 3',
        link: '#',
      },
    ],
  },
  {
    heading: 'Brand',
    images: [
      {
        image: '/images/test/bg1.jpg',
        productName: 'Product 4',
        link: '#',
      },
      {
        image: '/images/test/bg1.jpg',
        productName: 'Product 5',
        link: '#',
      },
      {
        image: '/images/test/bg1.jpg',
        productName: 'Product 6',
        link: '#',
      },
    ],
  },
  {
    heading: 'Ecommerce',
    images: [
      {
        image: '/images/test/bg1.jpg',
        productName: 'Product 7',
        link: '#',
      },
      {
        image: '/images/test/bg1.jpg',
        productName: 'Product 8',
        link: '#',
      },
      {
        image: '/images/test/bg1.jpg',
        productName: 'Product 9',
        link: '#',
      },
      {
        image: '/images/test/bg1.jpg',
        productName: 'Product 10',
        link: '#',
      },
      {
        image: '/images/test/bg1.jpg',
        productName: 'Product 11',
        link: '#',
      },
    ],
  },
]

// pricing page
export const dataPricing = {
    heading: 'PRICING',
    title: 'Affordable Pricing With Simple Plans',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.'
}
export const itemDataPricing = [
  {
    title: "Starter",
    subtitle: "For Individuals",
    price: 100000,
    currency: "VND",
    duration: "/month",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam maxime iure dolorum in molestias iusto.",
    features: [
      { text: "100 GB Storage", active: true },
      { text: "1 TB Photos and Videos", active: true },
      { text: "Exclusive Support", active: true },
      { text: "Free SEO Tools", active: false },
      { text: "Free SEO Tools", active: false },
      { text: "Free SEO Tools", active: false },
      { text: "Free SEO Tools", active: false },
    ],
  },
  {
    title: "Professional",
    subtitle: "For Startups",
    price: 200000,
    currency: "VND",
    duration: "/month",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam maxime iure dolorum in molestias iusto.",
    features: [
      { text: "100 GB Storage", active: true },
      { text: "1 TB Photos and Videos", active: true },
      { text: "Exclusive Support", active: true },
      { text: "Free SEO Tools", active: false },
      { text: "Free SEO Tools", active: false },
      { text: "Free SEO Tools", active: false },
      { text: "Free SEO Tools", active: false },
    ],
  },
  {
    title: "Business",
    subtitle: "For Teams",
    price: 300000,
    currency: "VND",
    duration: "/month",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam maxime iure dolorum in molestias iusto.",
    features: [
      { text: "100 GB Storage", active: true },
      { text: "1 TB Photos and Videos", active: true },
      { text: "Exclusive Support", active: true },
      { text: "Free SEO Tools", active: false },
      { text: "Free SEO Tools", active: false },
      { text: "Free SEO Tools", active: false },
      { text: "Free SEO Tools", active: false },
    ],
  },
];

// TESTIMONIAL
export const dataTestimonial = {
    heading: 'TESTIMONIAL',
    title: 'What Our Clients Say About Us',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.'
}
export const itemDataTestimonials = [
  {
    desc: "Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet...",
    fullName: "Nguyễn Văn A",
    time: "2 days ago",
    image: "/images/test/bg1.jpg",
  },
  {
    desc: "Sed ut perspiciatis unde... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet...",
    fullName: "Trần Thị B",
    time: "1 week ago",
    image: "/images/test/bg1.jpg",
  },
]

// support
export const dataSupport = {
    heading: 'Contact',
    title: 'Need Any Help? Say hello',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.'
}