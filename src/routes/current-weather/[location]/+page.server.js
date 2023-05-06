import { SECRET_API_KEY, API_URL } from "$env/static/private";

export async function load({ params }) {
  const res = await fetch(
    `${API_URL}/current.json?key=${SECRET_API_KEY}&q=${params.location}&aqi=no`
  );
  const data = await res.json()
  return data;
}
