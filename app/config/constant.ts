import {
  FaqItem,
  Portfolio,
  PricingPlan,
  Service,
  Testimonial,
} from "../types";

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
export const PHONE_NUMBER = "";
export const EMAIL = "enquiry@connect-ae.com";
export const LOCATION = "Dubai, UAE";
export const ADDRESS = "Dubai, UAE";

// export const SERVICES_DATA: Service[] = [
//   {
//     id: "1",
//     title: "Web Development",
//     description:
//       "We create modern and responsive websites for web development.",
//     image: "/images/web-dev.png",
//   },
//   {
//     id: "1",
//     title: "App Development",
//     description:
//       "We design and develop high-performance mobile apps for all platforms.",
//     image: "/images/app-dev.png",
//   },
//   {
//     id: "1",
//     title: "UI Design",
//     description:
//       "We craft beautiful and intuitive UI/UX designs that enhance user experience.",
//     image: "/images/ui-design.png",
//   },
//   {
//     id: "1",
//     title: "E-Commerce Solutions",
//     description:
//       "We build custom e-commerce websites to boost sales and improve user engagement.",
//     image: "/images/ecom.png",
//   },
//   {
//     id: "1",
//     title: "Digital Marketing",
//     description:
//       "We create impactful digital marketing strategies to drive traffic and grow your business.",
//     image: "/images/marketing.png",
//   },
// ];

// export const PRICING_DATA: PricingPlan[] = [
//   {
//     tier: "Basic",
//     price: "$5",
//     title:
//       "Access to AI writer features to help you get a taste of AI writing.",
//     features: [
//       "4,500 Words",
//       "5+ Templates",
//       "10+ Languages",
//       "AI Article Writer",
//       "Advance Editor Tool",
//       "Regular support",
//     ],
//   },
//   {
//     tier: "Standard",
//     price: "$29",
//     title: "For growing businesses with more advanced needs",
//     features: [
//       "100,000 Words Limit",
//       "15+ Templates",
//       "60+ Languages",
//       "Premium Editor Tool",
//       "Priority support",
//       "Access New Features",
//       "Analytics Tools",
//     ],
//   },
//   {
//     tier: "Premium",
//     price: "$49",
//     title: "For growing businesses needing advanced AI writing tools.",
//     features: [
//       "200,000 Words Limit",
//       "20+ Templates",
//       "100+ Languages",
//       "Premium Editor Tool",
//       "Dedicated Support",
//       "Multiple User Access",
//       "Advanced Analytics",
//     ],
//   },
//   {
//     tier: "Basic",
//     price: "$0",
//     title: "Access to basic AI writing features to get started.",
//     features: [
//       "2,000 Words",
//       "3+ Templates",
//       "5+ Languages",
//       "Basic Editor Tool",
//       "Regular support",
//     ],
//   },
//   {
//     tier: "Standard",
//     price: "$19",
//     title: "For content marketers, bloggers, freelancers & startups",
//     features: [
//       "50,000 Words Limit",
//       "10+ Templates",
//       "50+ Languages",
//       "Advance Editor Tool",
//       "Priority support",
//       "Unlimited Logins",
//       "Access New Features",
//     ],
//   },
//   {
//     tier: "Premium",
//     price: "$99",
//     title: "For enterprise-level businesses with customized needs.",
//     features: [
//       "Unlimited Words",
//       "50+ Templates",
//       "150+ Languages",
//       "Custom AI Models",
//       "24/7 VIP Support",
//       "Team Collaboration",
//       "API Access",
//     ],
//   },
// ];

// export const PORTFOLIO_DATA: Portfolio[] = [
//   {
//     id: "1",
//     title: "Creative Design for Modern Businesses",
//     description:
//       "A blend of creativity and modern design elements focusing on branding and UX strategies.",
//     image:
//       "https://cdn.dribbble.com/userupload/16994810/file/original-c6a72b1649c9ba7b49f8b363761c669f.jpg?resize=1024x768&vertical=center",
//     category: "Design",
//   },
//   {
//     id: "1",
//     title: "Innovative Web Development",
//     description:
//       "Developing highly optimized and responsive websites with cutting-edge technologies.",
//     image:
//       "https://cdn.dribbble.com/userupload/15023900/file/original-ccf7358e67c02f6c2b8b2aae66554e49.png?resize=1024x768&vertical=center",
//     category: "Web Development",
//   },
//   {
//     id: "1",
//     title: "E-Commerce Solutions",
//     description:
//       "Creating seamless and scalable e-commerce platforms with intuitive user interfaces.",
//     image:
//       "https://cdn.dribbble.com/userupload/16055148/file/original-d807a713dafea3b7689bf847862fa7a0.png?resize=1024x768&vertical=center",
//     category: "E-Commerce",
//   },
//   {
//     id: "1",
//     title: "Branding & Identity",
//     description:
//       "Helping businesses build a strong and recognizable brand identity with creative visuals.",
//     image:
//       "https://cdn.dribbble.com/userupload/12627316/file/original-77973f7d8e5b9ff3ffc4cac9d0d31a51.png?resize=1024x768&vertical=center",
//     category: "Branding",
//   },
//   {
//     id: "1",
//     title: "Mobile App UI/UX",
//     description:
//       "Designing engaging and user-friendly mobile app interfaces for a great user experience.",
//     image:
//       "https://cdn.dribbble.com/userupload/16614142/file/original-f259e40939807c115777bf2f3df60bd9.png?resize=1024x768&vertical=center",
//     category: "UI/UX",
//   },
//   {
//     id: "1",
//     title: "SEO & Digital Marketing",
//     description:
//       "Optimizing websites to rank higher on search engines and drive organic traffic.",
//     image:
//       "https://cdn.dribbble.com/userupload/14432751/file/original-2c5c8bd21127132b1efa9820bef164ba.png?resize=1024x768&vertical=center",
//     category: "Marketing",
//   },
// ];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    name: "Sarah L",
    username: "Business Owner",
    avatar: "https://i.pravatar.cc/1000?img=1",
    rating: 5.0,
    comment:
      "Working with ConnectAE has been a seamless experience from start to finish. Their team understood our requirements perfectly and delivered a high-quality website ahead of schedule. Highly recommend them for anyone looking for professional digital solutions.",
  },
  {
    name: "Michael P",
    username: "Marketing Director",
    avatar: "https://i.pravatar.cc/1000?img=2",
    rating: 5.0,
    comment:
      "The ConnectAE team exceeded our expectations at every step. Their expertise in both design and functionality helped us create a mobile app that our users love. Communication was excellent throughout the project.",
  },
  {
    name: "Fatima R",
    username: "Startup Founder",
    avatar: "https://i.pravatar.cc/1000?img=3",
    rating: 5.0,
    comment:
      "From branding to web development, ConnectAE handled everything with professionalism and creativity. The project was delivered on time, and the results have significantly boosted our online presence. Thank you for a great experience!",
  },
  {
    name: "David K",
    username: "Operations Manager",
    avatar: "https://i.pravatar.cc/1000?img=4",
    rating: 5.0,
    comment:
      "We had a complicated project with very specific needs, and ConnectAE delivered flawlessly. Their team was patient, knowledgeable, and always available when we had questions. It’s rare to find this level of dedication and service.",
  },
  {
    name: "Ayesha M",
    username: "CEO",
    avatar: "https://i.pravatar.cc/1000?img=5",
    rating: 5.0,
    comment:
      "Choosing ConnectAE was one of the best decisions we made for our business. Their strategic approach and innovative solutions helped us not only launch a new website but also improve our brand image overall. Truly a five-star service.",
  },
  {
    name: "Omar T",
    username: "Entrepreneur",
    avatar: "https://i.pravatar.cc/1000?img=6",
    rating: 5.0,
    comment:
      "ConnectAE took our vision and brought it to life better than we could have imagined. Their attention to detail and commitment to quality truly sets them apart. We’re thrilled with the final product and look forward to working with them again.",
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: "What services does Connect AE provide?",
    answer:
      "Connect AE offers a wide range of services including custom iOS and Android app development, website design and development, UI/UX design, and 2D/3D logo and animation solutions.",
  },
  {
    question: "Where is Connect AE headquartered?",
    answer: "Connect AE is headquartered in Bethesda, Maryland, USA.",
  },
  {
    question: "What is the official website of Connect AE?",
    answer:
      "You can visit Connect AE at https://sofsupply.com (branding may vary, but domain remains active under the service umbrella).",
  },
  {
    question: "Which industry does Connect AE operate in?",
    answer:
      "Connect AE is part of the IT System & Custom Software Development industry.",
  },
  {
    question: "When was Connect AE founded?",
    answer: "Connect AE was established in the year 2020.",
  },
  {
    question: "What is the mission of Connect AE?",
    answer:
      "Connect AE is driven by a mission to empower businesses by transforming ideas into reality through immersive design, development, and digital storytelling.",
  },
  {
    question: "Which platforms does Connect AE use to showcase its portfolio?",
    answer:
      "Connect AE actively promotes its work on professional platforms like LinkedIn and Behance.",
  },
  {
    question: "How experienced is the Connect AE team?",
    answer:
      "The Connect AE team brings 5+ years of hands-on experience in full-stack mobile and web development, along with creative digital design.",
  },
  {
    question: "What technologies does Connect AE work with?",
    answer:
      "Connect AE utilizes modern frameworks and tools such as ReactJS, Tailwind CSS, CorePHP, Firebase, AWS, and OpenAI APIs to deliver scalable and innovative solutions.",
  },
  {
    question: "How can I get in touch with Connect AE?",
    answer:
      "You can reach Connect AE via their contact form on the website or by emailing contact@sofsupply.com for direct inquiries.",
  },
];

export const CORE_VALUES_DATA = [
  {
    count: "01",
    title: "Innovation",
    description: "We embrace forward-thinking solutions to drive results.",
  },
  {
    count: "02",
    title: "Integrity",
    description: "We act with honesty, transparency, and accountability.",
  },
  {
    count: "03",
    title: "Excellence",
    description:
      "We consistently deliver high-quality work and exceed expectations.",
  },
  {
    count: "04",
    title: "Collaboration",
    description: "We work as one team to achieve common goals.",
  },
];

export const TEAM_DATA = [
  {
    name: "Hayyan Ali",
    role: "Lead Engineer",
    image: "https://i.pravatar.cc/500?img=13",
  },
  {
    name: "Amina Khalid",
    role: "Product Designer",
    image: "https://i.pravatar.cc/500?img=23",
  },
  {
    name: "Usman Tariq",
    role: "Frontend Developer",
    image: "https://i.pravatar.cc/500?img=33",
  },
  {
    name: "Sana Ahmed",
    role: "Project Manager",
    image: "https://i.pravatar.cc/500?img=43",
  },
];

export const CONTACT_DATA = {
  address: [
    {
      name: "Location",
      value: LOCATION,
    },
  ],
  email: [
    {
      name: "Email",
      value: EMAIL,
    },
  ],
};
