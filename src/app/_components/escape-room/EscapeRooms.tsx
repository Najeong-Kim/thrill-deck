"use client";

import { useApi } from "@/hooks/useApi";
import EscapeRoom from "./EscapeRoom";
import { EscapeRoomsResponse } from "./type";

const EscapeRooms = () => {
  const { data, loading } = useApi<EscapeRoomsResponse>("/escape-rooms");

  if (loading) return <div>Loading...</div>;

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
      {data?.escape_rooms.map((escapeRoom) => <EscapeRoom key={escapeRoom.id} {...escapeRoom} />)}
    </section>
  );
};

export default EscapeRooms;
