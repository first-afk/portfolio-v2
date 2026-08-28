interface testimonialProps {
  id: number;
  message: string;
  name: string;
  title: string;
}

export const testimonial: testimonialProps[] = [
  {
    id: 1,
    message: "lorem ipsum dolor set kini kor kin kor",
    name: "esther",
    title: "CEO",
  },
  {
    id: 2,
    message: "lorem ipsum dolor set kini kor kin kor",
    name: "conrad",
    title: "ophtamologist",
  },
  {
    id: 3,
    message: "lorem ipsum dolor set kini kor kin kor",
    name: "peace",
    title: "enthusiast",
  },
  {
    id: 4,
    message: "lorem ipsum dolor set kini kor kin kor",
    name: "chinedu",
    title: "engineer",
  },
  {
    id: 5,
    message: "lorem ipsum dolor set kini kor kin kor",
    name: "dozie",
    title: "analyst",
  },
  {
    id: 6,
    message: "yours can be next",
    name: "your name",
    title: "your title",
  },
];

export const projects = [
  {
    id: "01",
    title: "OptoNews",
    link: "https://optonews.com.ng/",
    description:
      "A dedicated career and information portal for the optometry community.",
    tagline: "Blog",
    image: "/images/optonews.png",
  },

  {
    id: "02",
    title: "Skip-Fit",
    link: "https://medium.com/@estherorieji2/create-a-chatbot-with-vercel-ai-sdk-googles-vertex-ai-7df8e2c4450d?sharedUserId=estherorieji2",
    description:
      "Skip Fit is a lightweight fitness-tracking web app to log workouts, quick-add common activities, and schedule simple calendar reminders. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cumque assumenda ipsam facere officiis suscipit recusandae maxime aspernatur sint officia alias consequuntur eligendi tempora ullam vitae, perferendis, repudiandae, dolorem molestiae!",
    tagline: "Health",
    image: "/images/skipfit.png",
  },

  {
    id: "03",
    title: "Job Rank",
    link: "https://job-rank.vercel.app/",
    description:
      "Job Rank is an AI-powered job matching engine that replaces rigid keyword filters with semantic vector search, helping candidates find opportunities that match their real skills and experience",
    tagline: "AI",
    image: "/images/JobRank.png",
  },

  {
    id: "04",
    title: "Ekehi",
    link: "https://ekehi.netlify.app/",
    description:
      "Ekehi is a business intelligence platform designed to support women entrepreneurs and women-led SMEs across Nigeria and Africa. The platform aggregates funding opportunities, financial products, training programs, and business resources into a searchable, filterable resource hub.",
    tagline: "Business",
    image: "/images/ekehi.png",
  },
];
