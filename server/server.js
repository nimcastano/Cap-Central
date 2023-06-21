import 'dotenv/config';
import express from 'express';
import errorMiddleware from './lib/error-middleware.js';
import pg from 'pg';
import ClientError from './lib/client-error.js';

// eslint-disable-next-line no-unused-vars -- Remove when used
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

// Create paths for static directories
const reactStaticDir = new URL('../client/build', import.meta.url).pathname;
const uploadsStaticDir = new URL('public', import.meta.url).pathname;

app.use(express.static(reactStaticDir));
// Static directory for file uploads server/public/
app.use(express.static(uploadsStaticDir));
app.use(express.json());

app.get('/api/productPhotos', async (req, res, next) => {
  try {
    const sql = ` 
    select "pp"."productId",
    "pp"."photoUrl",
    "products"."productName"
    from "productPhotos" as "pp"
    join "products" using ("productId")
    limit 6
      `;
    const result = await db.query(sql);
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
});

app.get('/api/browse', async (req, res, next) => {
  try {
    const sql = `
    select "pp"."productId",
    "pp"."photoUrl",
    "products"."team",
    "products"."productName",
    "products"."productDesc",
    "prices"."price",
    "productSizes"."sizes"
    from "productPhotos" as "pp"
    join "products" using ("productId")
    join "prices" using ("productId")
    join "productSizes" using ("productId")
    `;
    const result = await db.query(sql);
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
});

app.get('/api/browse/:productId', async (req, res, next) => {
  try {
    const productId = Number(req.params.productId);
    if (!productId || isNaN(productId) || productId < 1) {
      throw new ClientError(
        404,
        `cannot find product with productId ${productId}`
      );
    }
    const sql = `
      select "pp"."productId",
      "pp"."photoUrl",
      "products"."team",
      "prices"."price",
      "products"."productName",
      "products"."productDesc",
      "productSizes"."sizes"
      from "productPhotos" as "pp"
      join "products" using ("productId")
      join "prices" using ("productId")
      join "productSizes" using ("productId")
      where "products"."productId" = $1
      `;
    const params = [productId];
    const result = await db.query(sql, params);
    if (!result.rows[0]) {
      throw new ClientError(
        404,
        `cannot find product with productId ${productId}`
      );
    }
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
});

/**
 * Serves React's index.html if no api route matches.
 *
 * Implementation note:
 * When the final project is deployed, this Express server becomes responsible
 * for serving the React files. (In development, the Create React App server does this.)
 * When navigating in the client, if the user refreshes the page, the browser will send
 * the URL to this Express server instead of to React Router.
 * Catching everything that doesn't match a route and serving index.html allows
 * React Router to manage the routing.
 */
// app.get('*', (req, res) => res.sendFile(`${reactStaticDir}/index.html`));

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
