import {
  FiDatabase,
  FiEye,
  FiFeather,
  FiHeart,
  FiMaximize,
  FiMonitor,
  FiNavigation2,
  FiPieChart,
  FiSmartphone,
  FiUserCheck,
  FiActivity,
  FiWatch,
  FiCalendar,
} from "react-icons/fi";

export const feature = [
  {
    icon: FiHeart,
    title: "Personal Loan",
    desc: "Quick access to funds for personal needs with flexible repayment terms up to 12 months",
    requirements: [
      "Valid government ID",
      "3 months bank statement",
      "Proof of income",
      "Minimum monthly income of ₦100,000",
    ],
    active: true,
  },
  {
    icon: FiActivity,
    title: "Business Loan",
    desc: "Grow your business with our affordable loans designed for small and medium enterprises",
    requirements: [
      "Business registration documents",
      "6 months bank statement",
      "Tax clearance certificate",
      "2 years business operation proof",
    ],
    active: false,
  },
  {
    icon: FiWatch,
    title: "Salary Advance",
    desc: "Get instant access to a portion of your salary before payday with minimal documentation",
    requirements: [
      "Employment letter",
      "Last 3 months pay slip",
      "Corporate account statement",
      "Salary account with partner bank",
    ],
    active: true,
  },
  {
    icon: FiFeather,
    title: "Emergency Loan",
    desc: "Quick funds for unexpected expenses with same-day approval and minimal requirements",
    requirements: [
      "Valid government ID",
      "Recent utility bill",
      "Active bank account",
      "Proof of income/employment",
    ],
    active: false,
  },
];

export const feature2 = [
  {
    icon: FiCalendar,
    title: "Micro Loans",
    desc: "Access quick small loans when you need them most, with flexible repayment terms",
  },
  {
    icon: FiSmartphone,
    title: "Buy Airtime",
    desc: "Purchase airtime and data bundles instantly for any network provider, anytime anywhere",
  },
  {
    icon: FiDatabase,
    title: "Bill Payments",
    desc: "Pay all your utility bills, cable TV, and internet services instantly through our secure platform",
  },
];

export const feature3 = [
  {
    icon: FiNavigation2,
    title: "Easy Transfer",
    desc: "Send money instantly to any bank account with just a few taps, no hassle with account details",
  },
  {
    icon: FiUserCheck,
    title: "Account Management",
    desc: "View balances, track transactions, and manage your account settings all in one place",
  },
  {
    icon: FiPieChart,
    title: "Transaction History",
    desc: "Access detailed transaction records and download statements with just one click",
  },
];

export const screenshotImg = [
  "/images/phone/5.png",
  "/images/phone/6.png",
  "/images/phone/7.png",
  "/images/phone/8.png",
  "/images/phone/9.png",
  "/images/phone/10.png",
  "/images/phone/11.png",
  "/images/phone/12.png",
];

export const faq = [
  {
    id: 1,
    title: "What is AdoPay?",
    desc: "AdoPay is a mobile banking application from Dedebit Microfinance Institution that specializes in loan services. It allows customers to manage loans, check balances, transfer funds, and pay bills directly from their mobile devices.",
  },
  {
    id: 2,
    title: "How do I apply for a loan on AdoPay?",
    desc: "To apply for a loan on AdoPay, simply download the app, register an account, complete your profile, and select your desired loan type. Submit the required documents through the app, and you'll receive a decision typically within 24 hours.",
  },
  {
    id: 3,
    title: "What types of loans are available on AdoPay?",
    desc: "AdoPay offers various loan types including Personal Loans, Business Loans, Salary Advance, and Emergency Loans. Each loan type has specific requirements and terms designed to meet different financial needs.",
  },
  {
    id: 4,
    title: "Is group lending available on AdoPay?",
    desc: "Yes, AdoPay supports both individual and group lending options. Groups can collectively apply for loans, which often come with special terms and conditions designed specifically for group borrowing.",
  },
  {
    id: 5,
    title: "How secure is AdoPay?",
    desc: "AdoPay implements industry-standard security measures including encryption, secure authentication, and regular security updates to protect your financial information and transactions.",
  },
  {
    id: 6,
    title: "What other services does AdoPay offer besides loans?",
    desc: "In addition to loans, AdoPay offers various banking services including balance inquiries, fund transfers, bill payments, airtime purchases, and account management features.",
  },
];

export const clientData = [
  {
    image: "/images/client/01.jpg",
    name: "Calvin Carlo",
    position: "Manager",
    desc: `" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. "`,
    rate: [
      "mdi mdi-star",
      "mdi mdi-star",
      "mdi mdi-star",
      "mdi mdi-star",
      "mdi mdi-star",
    ],
  },
  {
    image: "/images/client/02.jpg",
    name: "Christa Smith",
    position: "Manager",
    desc: `" The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "`,
    rate: [
      "mdi mdi-star",
      "mdi mdi-star",
      "mdi mdi-star",
      "mdi mdi-star",
      "mdi mdi-star",
    ],
  },
  {
    image: "/images/client/03.jpg",
    name: "Jemina CLone",
    position: "Manager",
    desc: `" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others. "`,
    rate: [
      "mdi mdi-star",
      "mdi mdi-star",
      "mdi mdi-star",
      "mdi mdi-star",
      "mdi mdi-star",
    ],
  },
  {
    image: "/images/client/04.jpg",
    name: "Smith Vodka",
    position: "Manager",
    desc: `" Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. "`,
    rate: [
      "mdi mdi-star",
      "mdi mdi-star",
      "mdi mdi-star",
      "mdi mdi-star",
      "mdi mdi-star",
    ],
  },
  {
    image: "/images/client/05.jpg",
    name: "Cristino Murfi",
    position: "Manager",
    desc: `" There is now an abundance of readable dummy texts. These are usually used when a text is required. "`,
    rate: [
      "mdi mdi-star",
      "mdi mdi-star",
      "mdi mdi-star",
      "mdi mdi-star",
      "mdi mdi-star",
    ],
  },
  {
    image: "/images/client/06.jpg",
    name: "Cristino Murfi",
    position: "Manager",
    desc: `" According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero. "`,
    rate: [
      "mdi mdi-star",
      "mdi mdi-star",
      "mdi mdi-star",
      "mdi mdi-star",
      "mdi mdi-star",
    ],
  },
];

export const companyData = [
  "/images/client/amazon.svg",
  "/images/client/google.svg",
  "/images/client/lenovo.svg",
  "/images/client/paypal.svg",
  "/images/client/shopify.svg",
  "/images/client/spotify.svg",
];
