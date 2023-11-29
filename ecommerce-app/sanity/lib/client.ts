import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "skxHbaVMj8KVGXTYdFHO4QbmA8TuSYV1BubRE8bNafPfTeUy1YsFqFtMBbC0Q2zSWAJsRADOEBoh3JUhTt9SfpExE15pq3GNDZTa5DKJZywaLAeJVoV2jSOvb2EZ8n38mOvMjvMXigg0zeFJu6sQUQEmpDfge7P1hW1tDnf0HPN3GMcnXjIU"
})
