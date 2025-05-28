import rss from '@astrojs/rss';

export async function GET() {
  const allPostFiles = import.meta.glob('./blog/**/*.md', { eager: true });

  const postEntries = Object.entries(allPostFiles);

  // Filter only posts that have a createdAt
  const filteredPosts = postEntries.filter(([_, post]) => post?.frontmatter?.createdAt);

  const posts = filteredPosts.map(([path, post]) => {
    const slug = path.replace('./blog/', '').replace('.md', '');

    // Convert "27/05/2025" to proper Date string for RSS
    const [day, month, year] = post.frontmatter.createdAt.split('/');
    const pubDate = new Date(`${year}-${month}-${day}`);

    return {
      slug,
      data: {
        title: post.frontmatter.title,
        pubDate,
        description: post.frontmatter.shortText,
      },
    };
  });

  // Sort by pubDate (newest first)
  posts.sort((a, b) => new Date(b.data.pubDate) - new Date(a.data.pubDate));

  return rss({
    title: 'Nikolaj RSS Feed',
    description: 'Keep up with Nikolaj',
    site: 'https://nikolicht.github.io/portfolio/info/blog/',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
  });
}
