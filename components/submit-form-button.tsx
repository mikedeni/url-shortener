"use client";

import { useFormStatus } from "react-dom";

export const SubmitFormButton = () => {
    const status = useFormStatus();
    return (
        <button type="submit" className="mt-4 border rounded-lg p-2">
            {status.pending ? "Submiting..." : "Submit"}
        </button>
    );
};
