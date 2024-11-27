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

import { GiCircleForest, GiMoneyStack } from "react-icons/gi";
import { RiArmchairFill } from "react-icons/ri";
import { FaHandHoldingMedical } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa6";

export const feature = [
  {
    icon: GiCircleForest,
    title: "Agricultural Input Loan",
    desc: "Provides funds for farmers to purchase seeds, fertilizers, and other essential agricultural inputs.",
    requirements: [
      "DECSI account",
      "Renewed kebele ID",
      "Engaged in income-generating activities",
      "Own sim card and mobile phone",
      "Age above 18",
    ],
    details: [
      {
        label: "Credit limit",
        value: "Up to 30,000 ETB",
      },
      {
        label: "Credit Period",
        value: "90 days",
      },
      {
        label: "Access Fee",
        value: "2%",
      },
      {
        label: "Daily Interest",
        value: "0.5%",
      },
      {
        label: "Penalty",
        value: "1%",
      },
    ],
    active: true,
  },
  {
    icon: RiArmchairFill,
    title: "Home Equipment Financing",
    desc: "Offers financing for purchasing home appliances and equipment.",
    requirements: [
      "DECSI account",
      "Renewed kebele ID",
      "Engaged in income-generating activities",
      "Own sim card and mobile phone",
      "Age above 18",
    ],
    details: [
      {
        label: "Credit limit",
        value: "Up to 50,000 ETB",
      },
      {
        label: "Credit Period",
        value: "90 days",
      },
      {
        label: "Access Fee",
        value: "3%",
      },
      {
        label: "Daily Interest",
        value: "0.5%",
      },
      {
        label: "Penalty",
        value: "1%",
      },
    ],
    active: false,
  },

  {
    icon: FaHandHoldingMedical,
    title: "Emergency Loan (Medical)",
    desc: "Quick access to funds for unforeseen medical expenses.",
    requirements: [
      "DECSI account",
      "Renewed kebele ID",
      "Engaged in income-generating activities",
      "Own sim card and mobile phone",
      "Age above 18",
    ],
    details: [
      {
        label: "Credit limit",
        value: "Up to 10,000 ETB",
      },
      {
        label: "Credit Period",
        value: "30 days",
      },
      {
        label: "Access Fee",
        value: "3%",
      },
      {
        label: "Daily Interest",
        value: "0.5%",
      },
      {
        label: "Penalty",
        value: "1%",
      },
    ],
    active: true,
  },
  {
    icon: FiHeart,
    title: "Kisanet Loan",
    desc: "A special loan designed for specific community needs (please check the app for detailed eligibility criteria).",
    requirements: [
      "DECSI account",
      "Renewed kebele ID",
      "Engaged in income-generating activities",
      "Own sim card and mobile phone",
      "Age above 18",
    ],
    details: [
      {
        label: "Credit limit",
        value: "Up to 10,000 ETB",
      },
      {
        label: "Credit Period",
        value: "7 days",
      },
      {
        label: "Access Fee",
        value: "3%",
      },
      {
        label: "Daily Interest",
        value: "0.5%",
      },
      {
        label: "Penalty",
        value: "1%",
      },
    ],
    active: true,
  },
  {
    icon: FaBusinessTime,
    title: "Ado Loan",
    desc: "A general-purpose loan for various personal or business needs.",
    requirements: [
      "DECSI account",
      "Renewed kebele ID",
      "Engaged in income-generating activities",
      "Own sim card and mobile phone",
      "Age above 18",
    ],
    details: [
      {
        label: "Credit limit",
        value: "Up to 20,000 ETB",
      },
      {
        label: "Credit Period",
        value: "60 days",
      },
      {
        label: "Access Fee",
        value: "3%",
      },
      {
        label: "Daily Interest",
        value: "0.5%",
      },
      {
        label: "Penalty",
        value: "1%",
      },
    ],
    active: true,
  },
  {
    icon: GiMoneyStack,
    title: "Employee Salary Advance Loan",
    desc: "Allows employees to access a portion of their upcoming salary in advance.",
    requirements: [
      "DECSI account",
      "Renewed kebele ID",
      "Engaged in income-generating activities",
      "Own sim card and mobile phone",
      "Age above 18",
    ],
    details: [
      {
        label: "Credit limit",
        value: "Up to 5,000 ETB",
      },
      {
        label: "Credit Period",
        value: "30 days",
      },
      {
        label: "Access Fee",
        value: "3%",
      },
      {
        label: "Daily Interest",
        value: "0.5%",
      },
      {
        label: "Penalty",
        value: "1%",
      },
    ],
    active: true,
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
