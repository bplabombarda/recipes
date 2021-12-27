export const url = "/search.json";

export default function ({ search }, { url }) {
  const result = [];

  // Search tags
  for (const tag of search.tags("type=recipes")) {
    result.push({
      label: `Tag: ${tag}`,
      search: tag,
      value: url(`/tags/${tag}/`),
    });
  }

  // Search recipes
  for (const post of search.pages("type=recipes")) {
    result.push({
      label: post.data.title,
      search: `${post.data.title} ${post.data.tags.join(" ")}`,
      value: url(post.data.url),
    });
  }

  return JSON.stringify(result);
}
