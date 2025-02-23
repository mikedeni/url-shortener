import Form from "next/form";
import { createShortUrl } from "./actions";
import { SubmitFormButton } from "../../components/submit-form-button";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-4">
            <h1 className="font-bold text-4xl">Shortener Url</h1>
            <Form action={createShortUrl} className="flex flex-col gap-4 border rounded-lg p-8">
                <span>OriginalUrl:</span>
                <input name="originalUrl" className="rounded-lg p-2 text-black" />
                <SubmitFormButton />
            </Form>
            <p>@mikedeni</p>
        </div>
    );
}
