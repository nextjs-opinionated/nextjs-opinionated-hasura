CREATE TABLE "public"."list_items" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "body" text NOT NULL, "updated_at" timestamptz NOT NULL DEFAULT now(), "created_at" timestamptz NOT NULL DEFAULT now(), "title" text, "url" text, "imageUrl" text, "publishedAt" timestamptz, PRIMARY KEY ("id") );
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_list_items_updated_at"
BEFORE UPDATE ON "public"."list_items"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_list_items_updated_at" ON "public"."list_items" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
