import { execSync } from 'child_process';
import detect from 'detect-port';

export async function setupE2eTest() {
    await startSupabase();
    reseedDb();
}

async function startSupabase() {
  const port = await detect(54323);
  if (!port) {
    throw new Error(`Port ${port} is already in use, exiting...`);
  }
}

function reseedDb() {
    execSync(
      "PGPASSWORD=postgres psql -U postgres -h 127.0.0.1 -p 64322 -f supabase/clear-db-data.sql",
      { stdio: "ignore" }
    );
}