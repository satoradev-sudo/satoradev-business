import aabeHomeHealthcareImage from "../assets/images/client-projects/aabe-home-healthcare.png";
import aliSamCareImage from "../assets/images/client-projects/ali-sam-care.png";
import clearViewLivingImage from "../assets/images/client-projects/clear-view-living.png";
import familyTransportImage from "../assets/images/client-projects/family-transport.png";
import moringaCareImage from "../assets/images/client-projects/moringa-care.png";
import nadeerHomeHealthImage from "../assets/images/client-projects/nadeer-home-health.png";
import prestigeHomecareImage from "../assets/images/client-projects/prestige-homecare.png";
import rahmaHomeHealthImage from "../assets/images/client-projects/rahma-home-health.png";

export interface ClientProject {
  id: string;
  name: string;
  category: string;
  categoryLabel: string;
  summary: string;
  scope: string;
  role: string;
  technologies: string[];
  reportedOutcome: string;
  liveUrl: string;
  image?: {
    src: string;
    alt: string;
  };
}

export const CLIENT_PROJECTS: ClientProject[] = [
  {
    id: "aabe-home-healthcare",
    name: "Aabe Home Healthcare",
    category: "home-healthcare",
    categoryLabel: "Home healthcare",
    summary: "Home healthcare website with patient intake and a caregiver dispatch portal.",
    scope: "Patient intake, HIPAA-aware design, and caregiver dispatch.",
    role: "Website design and development",
    technologies: ["WordPress Core", "Elementor Pro", "ACF Pro"],
    reportedOutcome: "+142% inquiries",
    liveUrl: "https://aabehomehealthcare.com/",
    image: {
      src: aabeHomeHealthcareImage,
      alt: "Aabe Home Health Care website homepage screenshot"
    }
  },
  {
    id: "moringa-care",
    name: "Moringa Care LLC",
    category: "assisted-living",
    categoryLabel: "Assisted living",
    summary: "Assisted living and senior care website focused on family trust and tour bookings.",
    scope: "Senior care information and tour booking.",
    role: "Website design and development",
    technologies: ["WordPress", "Elementor Pro", "Custom Gutenberg"],
    reportedOutcome: "99% PageSpeed",
    liveUrl: "https://moringacarellc.com/",
    image: {
      src: moringaCareImage,
      alt: "Moringa Care LLC website homepage screenshot"
    }
  },
  {
    id: "prestige-homecare",
    name: "Prestige Homecare Services",
    category: "home-healthcare",
    categoryLabel: "Home healthcare",
    summary: "Healthcare facility website for care coordination and doctor referrals.",
    scope: "24/7 care coordination and doctor referrals.",
    role: "Website design and development",
    technologies: ["WordPress Core", "ACF", "Elementor Pro"],
    reportedOutcome: "+85% lead capture",
    liveUrl: "https://prestigehcares.com/",
    image: {
      src: prestigeHomecareImage,
      alt: "Prestige Homecare Services website homepage screenshot"
    }
  },
  {
    id: "ali-sam-care",
    name: "Ali Sam Care",
    category: "community-health",
    categoryLabel: "Community health",
    summary: "Community healthcare and nonprofit website for resources, outreach, and donors.",
    scope: "Community resources, outreach, and donor portals.",
    role: "Website design and development",
    technologies: ["WordPress", "ThemeREX", "Custom PHP"],
    reportedOutcome: "10K+ monthly reach",
    liveUrl: "https://alisamcare.org/",
    image: {
      src: aliSamCareImage,
      alt: "Alisam Care website homepage screenshot"
    }
  },
  {
    id: "rahma-home-health",
    name: "Rahma Home Health",
    category: "home-healthcare",
    categoryLabel: "Home healthcare",
    summary: "Home healthcare website supporting rapid consultations and insurance verification.",
    scope: "Consultation inquiries and insurance verification.",
    role: "Website design and development",
    technologies: ["WordPress", "Elementor Pro", "ACF"],
    reportedOutcome: "2.1-second mobile LCP",
    liveUrl: "https://rahmahomehealth.com/",
    image: {
      src: rahmaHomeHealthImage,
      alt: "Rahma Home Health website homepage screenshot"
    }
  },
  {
    id: "nadeer-home-health",
    name: "Nadeer Home Health",
    category: "home-healthcare",
    categoryLabel: "Home healthcare",
    summary: "Home healthcare and personal assistance website for senior and postoperative care.",
    scope: "Senior rehabilitation and postoperative care.",
    role: "Website design and development",
    technologies: ["WordPress Core", "CSS3", "JavaScript"],
    reportedOutcome: "+68% conversion",
    liveUrl: "https://nadeerhomehealth.com/",
    image: {
      src: nadeerHomeHealthImage,
      alt: "Nadeer Home Health Care website homepage screenshot"
    }
  },
  {
    id: "clear-view-living",
    name: "Clear View Living",
    category: "assisted-living",
    categoryLabel: "Assisted living",
    summary: "Assisted independent living website with information about clinical support.",
    scope: "Assisted independent living and clinical support.",
    role: "Website design and development",
    technologies: ["WordPress", "Elementor Pro", "Custom JavaScript animations"],
    reportedOutcome: "+90% tour requests",
    liveUrl: "https://clearvl.com/",
    image: {
      src: clearViewLivingImage,
      alt: "Clear View Living website homepage screenshot"
    }
  },
  {
    id: "family-transport",
    name: "Family Transport LLC",
    category: "medical-transport",
    categoryLabel: "Medical transport",
    summary: "Non-emergency medical transportation website with ride scheduling and route quotes.",
    scope: "Online ride scheduling, route quotes, and custom API integrations.",
    role: "Website design and development",
    technologies: ["WordPress", "Custom API integrations", "Elementor Pro"],
    reportedOutcome: "1,500+ rides monthly",
    liveUrl: "https://familytransportllc.com/",
    image: {
      src: familyTransportImage,
      alt: "Family Transport website homepage screenshot"
    }
  }
];
