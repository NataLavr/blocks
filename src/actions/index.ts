"use server";
import { redirect } from "next/navigation";
import { db } from "@/app/db";


export async function editBlock(id: number, code: string, formData: FormData){
    await db.block.update({
        where: { id },
        data: { code }
    });

    redirect(`/blocks/${id}`);
}

export async function deleteBlock(id: number){
    await db.block.delete({
        where: { id },
    });

    redirect(`/`);
}