alter table "public"."users" add constraint "users_oauth_id_key" unique (oauth_id);
alter table "public"."users" alter column "oauth_id" drop not null;
alter table "public"."users" add column "oauth_id" text;
