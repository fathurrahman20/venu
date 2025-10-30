import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { events } from "@/lib/constants";

export default function Home() {
  return (
    <section>
      <h1 className="text-center pb-3">
        Semua Event Tech Keren <br /> Ngumpulnya di Sini
      </h1>
      <p className="text-center mt-5">
        Mau cari Hackathon, Meetup, atau Conference? Ada semua!
      </p>

      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h3>Event Pilihan</h3>

        <ul className="events">
          {events.map((event) => (
            <li key={event.title} className="list-none">
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
