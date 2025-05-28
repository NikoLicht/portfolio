import rss from '@astrojs/rss';

export async function GET() {
  const allPostFiles = import.meta.glob('./blog/**/*.md', { eager: true });

  const postEntries = Object.entries(allPostFiles);

  const filteredPosts = postEntries.filter(([_, post]) => post?.frontmatter?.createdAt);

  const posts = filteredPosts.map(([path, post]) => {
    const slug = path.replace('./blog/', '').replace('.md', '');
    const { title, shortText, createdAt } = post.frontmatter;

    const [day, month, year] = createdAt.split('/');
    const pubDate = new Date(`${year}-${month}-${day}`);

    // Log anything suspicious
    if (!title || !shortText || !createdAt) {
      console.warn('Invalid post frontmatter:', path, post.frontmatter);
    }

    return {
      slug,
      data: {
        title,
        description: shortText,
        pubDate,
      },
    };
  });

  posts.sort((a, b) => new Date(b.data.pubDate) - new Date(a.data.pubDate));

  return rss({
    title: 'Nikolaj RSS Feed',
    description: 'Keep up with Nikolaj',
    site: 'https://nikolicht.github.io/portfolio/',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/info/blog/${post.slug}/`,
    })),
  });
}
