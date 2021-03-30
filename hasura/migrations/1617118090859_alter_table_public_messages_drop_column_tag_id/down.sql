ALTER TABLE "public"."messages" ADD COLUMN "tag_id" int4;
ALTER TABLE "public"."messages" ALTER COLUMN "tag_id" DROP NOT NULL;
