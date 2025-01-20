import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import BookForm from "../../forms/BookForm";

export default function page() {
  return (
    <>
      <Button asChild className="back-btn">
        <Link href="/admin/books">Go Back</Link>
      </Button>
      <section className="w-full max-w-2xl">
        <BookForm />
      </section>
    </>
  );
}
