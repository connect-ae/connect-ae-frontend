import {
  FaqItem,
  Portfolio,
  PricingPlan,
  Service,
  Testimonial,
} from "../types";

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

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
    name: "Devon Lane",
    username: "@devlane",
    avatar: "https://i.pravatar.cc/1000?img=1",
    rating: 5.0,
    comment:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    name: "Jane Cooper",
    username: "@janecoop",
    avatar: "https://i.pravatar.cc/1000?img=2",
    rating: 5.0,
    comment:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    name: "Eleanor Pena",
    username: "@eleanorpena",
    avatar: "https://i.pravatar.cc/1000?img=3",
    rating: 5.0,
    comment:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    name: "Robert Fox",
    username: "@robertfox",
    avatar: "https://i.pravatar.cc/1000?img=4",
    rating: 5.0,
    comment:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    name: "Leslie Alexander",
    username: "@lesliealex",
    avatar: "https://i.pravatar.cc/1000?img=5",
    rating: 5.0,
    comment:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    name: "Jerome Bell",
    username: "@jeromebell",
    avatar: "https://i.pravatar.cc/1000?img=6",
    rating: 5.0,
    comment:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: "What is your return policy?",
    answer:
      "You can return any item within 30 days of purchase. Please keep the receipt and original packaging.",
  },
  {
    question: "How long does shipping take?",
    answer: "Shipping usually takes 3–5 business days within the country.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we do. Delivery times may vary depending on the destination.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Absolutely. Once your order is shipped, you'll receive a tracking number via email or SMS.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit/debit cards, PayPal, and Apple Pay.",
  },
  {
    question: "How can I change or cancel my order?",
    answer:
      "Please contact our support team within 12 hours of placing the order to request changes or cancellation.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Yes. We use industry-standard encryption and follow GDPR compliance to protect your data.",
  },
  {
    question: "Do you offer bulk purchase discounts?",
    answer:
      "Yes, we do. Please contact our sales team for a custom quote for bulk orders.",
  },
  {
    question: "Can I request gift packaging?",
    answer:
      "Yes, gift packaging is available at checkout for a small additional fee.",
  },
  {
    question: "What if I received a damaged item?",
    answer:
      "We’re sorry! Please share photos of the damaged item with our support team within 48 hours to initiate a replacement.",
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
      name: "Weifield Group Contracting",
      value: "6950 S. Jordan Road Centennial, CO 80112",
    },
    {
      name: "Northern Colorado Office",
      value: "6775 Sherman Street, Loveland, CO 80538",
    },
  ],
  phone: [
    {
      name: "Weifield Group Contracting",
      value: "+1 (123) 456-7890",
    },
    {
      name: "Northern Colorado Office",
      value: "+1 (987) 654-3210",
    },
  ],
  email: [
    {
      name: "Weifield Group Contracting",
      value: "info@weifieldgroup.com",
    },
    {
      name: "Northern Colorado Office",
      value: "support@weifieldgroup.com",
    },
  ],
};
