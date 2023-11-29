import { db } from "@/app/db";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function UpdateBlockPage({ params }) {
    async function updateBlock(formData: FormData) {
        "use server";

        const title = formData.get("title") as string;
        const code = formData.get("code") as string;
        const id = parseInt(params.id);

        const block = await db.block.update({
            where: { id: id },
            data: { title, code },
        });

        redirect("/");
    }
    return (
        <form action={updateBlock}>
            <h3 className="font-bold m-3">Edit Block {params.id}</h3>
            <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <label className="w-12" htmlFor="title">Title</label>
                    <input 
                    name="title"
                    id="title"
                    className="border rounded p-2 w-full"
                    
                    />
                </div>
                <div className="flex gap-4">
                <label className="w-12" htmlFor="code">Code</label>
                    <textarea 
                        name="code"
                        id="code"
                        className="border rounded p-2 w-full" 
                    />
            </div>
            <button className="rounded p-2 bg-blue-300 hover:bd-blue-500" type="submit">Save</button>
            <Link href="/" className="flex justify-center w-20 my-5 items-center p-2 border rounded bg-blue-300 hover:bd-blue-500">
                <div>Back</div>
            </Link>
            </div>
        </form>
    )

  }