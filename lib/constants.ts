export type EventItem = {
  image: string;
  title: string;
  slug: string;
  location: string;
  date: string;
  time: string;
};

export const events: EventItem[] = [
  {
    title: "Konferensi React & Next.js Indonesia 2025",
    image: "/images/event1.png",
    slug: "konferensi-react-next-js-indonesia-2025",
    location: "Jakarta Convention Center (JCC)",
    date: "30 November 2025",
    time: "09:00 - 17:00 WIB",
  },
  {
    title: "JakartaJS Meetup: Masa Depan TypeScript",
    image: "/images/event2.png",
    slug: "jakartajs-meetup-typescript",
    location: "GoWork Sudirman, Jakarta",
    date: "15 November 2025",
    time: "19:00 - 21:00 WIB",
  },
  {
    title: "Hackathon Merdeka 5.0: Solusi Digital Bangsa",
    image: "/images/event3.png",
    slug: "hackathon-merdeka-5-0",
    location: "Online (Zoom & Discord)",
    date: "10 - 12 Desember 2025",
    time: "Mulai 18:00 WIB",
  },
  {
    title: "SurabayaDev Meetup: Bincang Santai AI & ML",
    image: "/images/event4.png",
    slug: "surabayadev-meetup-ai-ml",
    location: "Ruang Tumbuh, Surabaya",
    date: "28 November 2025",
    time: "18:30 - 20:30 WIB",
  },
  {
    title: "Workshop Deep Dive: CI/CD & DevOps",
    image: "/images/event5.png",
    slug: "workshop-deep-dive-ci-cd-devops",
    location: "Universitas Gadjah Mada, Yogyakarta",
    date: "5 Desember 2025",
    time: "10:00 - 15:00 WIB",
  },
  {
    title: "Bedah Tuntas Golang & Microservices",
    image: "/images/event6.png",
    slug: "bedah-tuntas-golang-microservices",
    location: "Bandung Digital Valley, Bandung",
    date: "18 Desember 2025",
    time: "09:30 - 16:00 WIB",
  },
];
