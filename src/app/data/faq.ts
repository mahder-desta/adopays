// Type definitions
type Answer = string;

type Question = {
  question: string;
  answer: Answer;
  additional?: string[];
};

type FAQSection = {
  title: string;
  questions: Question[];
};

type FAQ = {
  [key: string]: FAQSection;
};

const faq: FAQ = {
  general_questions: {
    title: "faq.general_questions.title",
    questions: [
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
    ],
  },
  loan_services: {
    title: "faq.loan_services.title",
    questions: [
      {
        question: "faq.loan_services.apply_for_loan",
        answer: "faq.loan_services.apply_instructions",
      },
      {
        question: "faq.loan_services.loan_types",
        answer: "faq.loan_services.loan_types_list.intro",
        additional: [
          "faq.loan_services.loan_types_list.agricultural_input",
          "faq.loan_services.loan_types_list.home_equipment",
          "faq.loan_services.loan_types_list.emergency_loan",
          "faq.loan_services.loan_types_list.kisanet_loan",
          "faq.loan_services.loan_types_list.ado_loan",
          "faq.loan_services.loan_types_list.salary_advance",
          "faq.loan_services.loan_types_list.asbeza_loan",
          "faq.loan_services.loan_types_list.holiday_loan",
          "faq.loan_services.loan_types_list.education_loan",
        ],
      },
      {
        question: "faq.loan_services.repayment",
        answer: "faq.loan_services.repayment_instructions",
      },
      {
        question: "faq.loan_services.interest_rates",
        answer: "faq.loan_services.interest_rates_info",
      },
      {
        question: "faq.loan_services.early_repayment",
        answer: "faq.loan_services.early_repayment_description",
      },
      {
        question: "faq.loan_services.eligibility",
        answer: "faq.loan_services.eligibility_info",
      },
    ],
  },
  transfers: {
    title: "faq.transfers.title",
    questions: [
      {
        question: "faq.transfers.available_types",
        answer: "faq.transfers.types_list.intro",
        additional: [
          "faq.transfers.types_list.own_accounts",
          "faq.transfers.types_list.other_users",
          "faq.transfers.types_list.mobile_wallet",
        ],
      },
      {
        question: "faq.transfers.fees",
        answer: "faq.transfers.fees_info",
      },
      {
        question: "faq.transfers.processing_time",
        answer: "faq.transfers.processing_info",
      },
      {
        question: "faq.transfers.cancellation",
        answer: "faq.transfers.cancellation_info",
      },
    ],
  },
  airtime_purchase: {
    title: "faq.airtime_purchase.title",
    questions: [
      {
        question: "faq.airtime_purchase.how_to_purchase",
        answer: "faq.airtime_purchase.purchase_instructions",
      },
      {
        question: "faq.airtime_purchase.buy_for_others",
        answer: "faq.airtime_purchase.others_instructions",
      },
      {
        question: "faq.airtime_purchase.payment_methods",
        answer: "faq.airtime_purchase.payment_options",
      },
      {
        question: "faq.airtime_purchase.failed_purchase",
        answer: "faq.airtime_purchase.failed_instructions",
      },
    ],
  },
  utility_payments: {
    title: "faq.utility_payments.title",
    questions: [
      {
        question: "faq.utility_payments.available_payments",
        answer: "faq.utility_payments.payment_types",
      },
      {
        question: "faq.utility_payments.how_to_pay",
        answer: "faq.utility_payments.payment_instructions",
      },
      {
        question: "faq.utility_payments.scheduling",
        answer: "faq.utility_payments.scheduling_info",
      },
      {
        question: "faq.utility_payments.payment_issues",
        answer: "faq.utility_payments.issues_help",
      },
    ],
  },
  security_troubleshooting: {
    title: "faq.security_troubleshooting.title",
    questions: [
      {
        question: "faq.security_troubleshooting.is_secure",
        answer: "faq.security_troubleshooting.security_info",
      },
      {
        question: "faq.security_troubleshooting.unauthorized",
        answer: "faq.security_troubleshooting.unauthorized_steps",
      },
      {
        question: "faq.security_troubleshooting.contact_support",
        answer: "faq.security_troubleshooting.support_channels.intro",
        additional: [
          "faq.security_troubleshooting.support_channels.chat",
          "faq.security_troubleshooting.support_channels.email",
          "faq.security_troubleshooting.support_channels.phone",
        ],
      },
    ],
  },
};

export type { FAQ, FAQSection, Question, Answer };
export default faq;
