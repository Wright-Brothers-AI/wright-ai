import { createClient } from '@supabase/supabase-js';
import { APIUsage } from "./types";
import { match } from 'assert';
import OpenAI from 'openai';



export async function insertApiUsage(
  api_usage: APIUsage
): Promise<void> {
  const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!);
  const { error } = await supabase
    .from('api_usage')
    .insert(api_usage);
  if (error) {
    console.error("Error inserting api usage into database!" + error);
    throw error;
  }
}
export async function getEmbedding(text: string) {
  const openAiKey = process.env.OPENAI_API_KEY;
  const openai = new OpenAI({
    apiKey: openAiKey,
  });
  const embedding = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: text,
  });

  return embedding.data[0].embedding;
}

export async function searchSimilarEmbeddings(query: string) {
  try {
      console.log(query)
      // Generate the vector embedding for the query
      const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
      const queryVector = await getEmbedding(query);

      // Convert the vector to a PostgreSQL compatible format (e.g., {1,2,3,...})
      const vectorString = `[${queryVector.join(',')}]`;

      // Call the SQL function with the generated vector embedding
      const { data, error } = await supabase
          .rpc('search_similar_embeddings', { query_vector: vectorString });

      if (error) throw error;

      // Output the results
      console.log(`Data before finalString: ${data}`)
      let finalString = ''
      for(let i = 0; i < 3; i++) {
        finalString += data[i].node_text
      }
      
      return finalString
  } catch (err) {
      console.error('Error searching similar embeddings:', err);
      return 'ERROR';
  }
}

