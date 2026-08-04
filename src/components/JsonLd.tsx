import type { ReactElement } from "react";

type JsonLdProps = {
  /**
   * The structured data object. Should NOT include the surrounding script tag.
   * It must be JSON-serializable (no functions, Dates, Symbols, etc.).
   */
  data: Record<string, unknown>;
};

/**
 * Renders a `<script type="application/ld+json">` element with the supplied
 * structured data. Always use this component to inject JSON-LD so the script
 * tag is created the same way across the app and the JSON serialisation is
 * stable (no accidental functions or Dates).
 *
 * Inspired by Next.js docs: the script lives in the server-rendered HTML so
 * crawlers can read it without executing JavaScript.
 */
export function JsonLd({ data }: JsonLdProps): ReactElement {
  // key on a stable field (type) so React can warn if multiple scripts collide
  return (
    <script
      type="application/ld+json"
      // Next.js will never inject dangerouslySetInnerHTML with user input here
      // because `data` is built from `src/lib/schema.ts` static constants.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}
