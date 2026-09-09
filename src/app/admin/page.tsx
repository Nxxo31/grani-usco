/**
 * Admin page — simple menu editor.
 *
 * Reads the menu JSON, renders an editable form for each drink, and a Server
 * Action persists changes back to `src/data/menu.json`. No database, no auth
 * — this is intended for the site owner to use locally before committing
 * changes and redeploying. In production (Vercel) the filesystem is read-only,
 * so the form shows current data but cannot save (a banner explains this).
 */

import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin — Grani USCO",
  description: "Editor del menú",
  robots: { index: false, follow: false },
};

type Drink = {
  id: string;
  name: string;
  description: string;
  price: number;
  accent: "pink" | "green" | "ice";
  image: string;
};

const MENU_PATH = join(process.cwd(), "src", "data", "menu.json");

function readMenu(): Drink[] {
  const raw = readFileSync(MENU_PATH, "utf-8");
  return JSON.parse(raw) as Drink[];
}

function writeMenu(drinks: Drink[]): void {
  writeFileSync(MENU_PATH, JSON.stringify(drinks, null, 2) + "\n", "utf-8");
}

export default function AdminPage() {
  const menu = readMenu();

  async function saveMenu(formData: FormData) {
    "use server";
    const drinks: Drink[] = [];
    const indices = formData.getAll("index").map(Number);

    for (const idx of indices) {
      const prefix = `drink-${idx}`;
      drinks.push({
        id: String(formData.get(`${prefix}-id`) ?? ""),
        name: String(formData.get(`${prefix}-name`) ?? ""),
        description: String(formData.get(`${prefix}-description`) ?? ""),
        price: Number(formData.get(`${prefix}-price`) ?? 0),
        accent: String(formData.get(`${prefix}-accent`) ?? "pink") as Drink["accent"],
        image: String(formData.get(`${prefix}-image`) ?? ""),
      });
    }

    writeMenu(drinks);
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold neon-text mb-2">Admin — Menú</h1>
        <p className="text-gray-400 mb-8">
          Edita los granizados del menú. Los cambios se guardan en{" "}
          <code className="text-neon-green">src/data/menu.json</code>. Después
          de guardar, commitea y redespliega el sitio.
        </p>

        <form action={saveMenu} className="space-y-6">
          {menu.map((drink, idx) => (
            <div
              key={drink.id}
              className="glassmorphism p-6 space-y-4"
            >
              <h2 className="text-xl font-semibold neon-text-green">
                Drink #{idx + 1}
              </h2>
              <input type="hidden" name="index" value={idx} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-gray-300 text-sm block mb-1">ID</span>
                  <input
                    type="text"
                    name={`drink-${idx}-id`}
                    defaultValue={drink.id}
                    required
                    className="w-full bg-gray-900/60 border border-gray-700/50 rounded-lg px-4 py-2 text-foreground"
                  />
                </label>

                <label className="block">
                  <span className="text-gray-300 text-sm block mb-1">Nombre</span>
                  <input
                    type="text"
                    name={`drink-${idx}-name`}
                    defaultValue={drink.name}
                    required
                    className="w-full bg-gray-900/60 border border-gray-700/50 rounded-lg px-4 py-2 text-foreground"
                  />
                </label>

                <label className="block md:col-span-2">
                  <span className="text-gray-300 text-sm block mb-1">Descripción</span>
                  <input
                    type="text"
                    name={`drink-${idx}-description`}
                    defaultValue={drink.description}
                    required
                    className="w-full bg-gray-900/60 border border-gray-700/50 rounded-lg px-4 py-2 text-foreground"
                  />
                </label>

                <label className="block">
                  <span className="text-gray-300 text-sm block mb-1">Precio (COP)</span>
                  <input
                    type="number"
                    name={`drink-${idx}-price`}
                    defaultValue={drink.price}
                    required
                    min={0}
                    className="w-full bg-gray-900/60 border border-gray-700/50 rounded-lg px-4 py-2 text-foreground"
                  />
                </label>

                <label className="block">
                  <span className="text-gray-300 text-sm block mb-1">Acento</span>
                  <select
                    name={`drink-${idx}-accent`}
                    defaultValue={drink.accent}
                    className="w-full bg-gray-900/60 border border-gray-700/50 rounded-lg px-4 py-2 text-foreground"
                  >
                    <option value="pink">pink</option>
                    <option value="green">green</option>
                    <option value="ice">ice</option>
                  </select>
                </label>

                <label className="block md:col-span-2">
                  <span className="text-gray-300 text-sm block mb-1">
                    Ruta de imagen (public)
                  </span>
                  <input
                    type="text"
                    name={`drink-${idx}-image`}
                    defaultValue={drink.image}
                    required
                    className="w-full bg-gray-900/60 border border-gray-700/50 rounded-lg px-4 py-2 text-foreground"
                  />
                </label>
              </div>
            </div>
          ))}

          <button
            type="submit"
            className="bg-neon-pink text-white px-8 py-3 rounded-full font-semibold hover:bg-neon-pink/90 transition-all duration-300 neon-text"
          >
            Guardar menú
          </button>
        </form>
      </div>
    </div>
  );
}
