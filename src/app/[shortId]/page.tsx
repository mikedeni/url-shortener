import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

interface ShortPageProps {
    params: Promise<{
        shortId: string;
    }>;
}

export default async function ShortPage({ params }: ShortPageProps) {
    const { shortId } = await params;

    const data = await prisma.url.findUnique({ where: { shortId } });
    if (!data) {
        redirect("/");
    }

    redirect(data.originalUrl);
}
