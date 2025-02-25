"use server";

import prisma from "@/lib/prisma";
import { nanoid } from "nanoid";
import { redirect } from "next/navigation";

export async function createShortUrl(formData: FormData) {
    const originalUrl = formData.get("originalUrl") as string;
    const shortId = nanoid(8);

    await prisma.url
        .create({
            data: {
                shortId: shortId,
                originalUrl: originalUrl,
            },
        })
        .catch(() => {});

    redirect(`/${shortId}`);
}
