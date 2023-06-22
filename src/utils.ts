import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';
import { Client } from '@notionhq/client';
import type { ClientOptions } from '@notionhq/client/build/src/Client';

export const getNotionItems = async (options: ClientOptions) => {
  const notion = new Client(options);

  const response = await notion.databases.query({
    database_id: import.meta.env.PUBLIC_NOTION_DATABASE,
  });

  return response.results.filter((page) => 'properties' in page);
};

export const getNotionProperties = async (options: ClientOptions) => {
  console.log("Getting Others...");
  const notion = new Client(options);

  const response = await notion.databases.query({
    database_id: import.meta.env.NOTION_DATABASE,
    filter: {
      "and": [
        {
          "property": "Public",
          "checkbox": {
            "equals": true
          }
        },
        {
          "property": "Category",
          "select": {
            "is_empty": true
          }
        }
      ]
    },
  });

  return response.results
  .filter((page) => 'properties' in page)
  .map((page) => page);
}

export const getNotionSandwich = async (options: ClientOptions) => {
  console.log("Getting Sandwiches...");
  const notion = new Client(options);

  const response = await notion.databases.query({
    database_id: import.meta.env.NOTION_DATABASE,
    filter: {
      "and": [
        {
          "property": "Public",
          "checkbox": {
            "equals": true
          }
        },
        {
          "property": "Category",
          "select": {
            "equals": "Sandwich"
          }
        }
      ]
    },
  });

  return response.results
  .filter((page) => 'properties' in page)
  .map((page) => page);
}