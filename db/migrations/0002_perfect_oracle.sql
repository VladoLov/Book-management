ALTER TABLE "books" ALTER COLUMN "cover_url" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "books" ADD COLUMN "cover_color" varchar(7) NOT NULL;