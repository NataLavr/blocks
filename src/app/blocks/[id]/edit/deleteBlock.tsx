// src/app/blocks/[id]/page.tsx
"use server";
import { db } from "@/app/db";
import { redirect } from "next/navigation";

export async function deleteBlock({ params }) {
    
    const id = parseInt(params.id);

    await db.block.delete({
        where: { id },
    });

    redirect("/");
}

       