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
    question: "faq.general_questions.what_is_adopay",
    answer: "faq.general_questions.adopay_description",
  },
  {
    question: "faq.general_questions.services_offered",
    answer: "faq.general_questions.services_description",
  },
  {
    question: "faq.general_questions.how_to_register",
    answer: "faq.general_questions.registration_instructions",
  },
  {
    question: "faq.general_questions.forgot_pin",
    answer: "faq.general_questions.forgot_pin_instructions",
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
