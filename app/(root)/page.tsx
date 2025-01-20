import { auth } from "@/auth";
import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";

import { db } from "@/db/drizzle";
import { books } from "@/db/schema";
import { desc } from "drizzle-orm";

export default async function Home() {
  const session = await auth();
  /* const result = await db.select().from(users); */
  const latestBooks = (await db
    .select()
    .from(books)
    .limit(10)
    .orderBy(desc(books.createdAt))) as Book[];
  /*  console.log(JSON.stringify(result, null, 2)); */
  return (
    <>
      {/*    <BookOverview {...sampleBooks[0]} /> */}
      <BookOverview {...latestBooks[0]} userId={session?.user?.id as string} />
      <BookList
        title="latest Books"
        books={latestBooks.slice(1)}
        containerClassName="mt-28"
      />
    </>
  );
}
