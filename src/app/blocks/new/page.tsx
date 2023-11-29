import { db } from "@/app/db";
import { redirect } from "next/navigation";

export default function BlockCreatePage () {
    async function createBlock(formData: FormData){

    "use server";

    // GET the form data
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    //Insert the data into database using prisma
    const block = await db.block.create({data:{title, code}});

    //Redirect the user back to the homepage
    redirect("/");

    }
    return (
        <form action={createBlock}>
            <h3 className="font-bold m-3">Create a Block</h3>
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
            <button className="rounded p-2 bg-blue-300 hover:bd-blue-500" type="submit">Create</button>

            </div>

        </form>
    )
}