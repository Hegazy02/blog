"server only";
import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, token } from "../env";

export const wtriteClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token,
});
if (!wtriteClient.config().token) {
  throw new Error("Missing write token");
}
