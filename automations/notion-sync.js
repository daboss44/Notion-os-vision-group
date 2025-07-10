// automations/notion-sync.js
require('dotenv').config();
const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });

async function sync() {
  try {
    const db = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
    });
    console.log(`✅ Pulled ${db.results.length} records from Notion`);
    // TODO: transform or push data back
  } catch (err) {
    console.error('❌ Notion sync failed:', err.message);
  }
}

sync();
