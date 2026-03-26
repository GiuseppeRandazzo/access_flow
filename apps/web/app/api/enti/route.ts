import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function GET() {
  try {
    // Usiamo l'ORM Prisma per interrogare il Database
    const enti = await prisma.ente.findMany();
    
    // Ritorna i dati in formato JSON con status HTTP 200 (Successo)
    return NextResponse.json(enti, { status: 200 });
  } catch (error) {
    console.error("Errore nel recupero degli enti:", error);
    // Ritorna un errore HTTP 500 se il db è irraggiungibile
    return NextResponse.json({ error: "Errore interno del server" }, { status: 500 });
  }
}