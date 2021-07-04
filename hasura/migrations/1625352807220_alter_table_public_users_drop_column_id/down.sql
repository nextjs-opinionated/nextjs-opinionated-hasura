alter table "public"."users" alter column "id" set default nextval('users_id_seq'::regclass);
alter table "public"."users" alter column "id" drop not null;
alter table "public"."users" add column "id" int4;
