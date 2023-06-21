set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "public"."products" (
	"productId" serial NOT NULL UNIQUE,
	"productName" TEXT NOT NULL,
	"productDesc" TEXT NOT NULL,
	"team" TEXT NOT NULL,
	CONSTRAINT "products_pk" PRIMARY KEY ("productId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."users" (
	"userId" serial NOT NULL,
	"username" TEXT NOT NULL,
	"hashPassword" TEXT NOT NULL,
	"token" TEXT NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."cart" (
	"userId" serial NOT NULL,
	"productId" integer NOT NULL,
	CONSTRAINT "cart_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."productSizes" (
	"productId" integer NOT NULL,
	"sizes" json NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."prices" (
	"productId" integer NOT NULL,
	"price" DECIMAL NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."productPhotos" (
	"productId" integer NOT NULL,
	"photoUrl" json NOT NULL
) WITH (
  OIDS=FALSE
);





ALTER TABLE "cart" ADD CONSTRAINT "cart_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");
ALTER TABLE "cart" ADD CONSTRAINT "cart_fk1" FOREIGN KEY ("productId") REFERENCES "products"("productId");

ALTER TABLE "productSizes" ADD CONSTRAINT "productSizes_fk0" FOREIGN KEY ("productId") REFERENCES "products"("productId");

ALTER TABLE "prices" ADD CONSTRAINT "prices_fk0" FOREIGN KEY ("productId") REFERENCES "products"("productId");

ALTER TABLE "productPhotos" ADD CONSTRAINT "productPhotos_fk0" FOREIGN KEY ("productId") REFERENCES "products"("productId");







