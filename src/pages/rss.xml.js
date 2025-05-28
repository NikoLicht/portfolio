import rss from '@astrojs/rss';

export async function GET() {
  const allPostFiles = import.meta.glob('./blog/**/*.md', { eager: true });

  const postEntries = Object.entries(allPostFiles);

  const filteredPosts = postEntries.filter(([_, post]) => post?.frontmatter?.createdAt);

  const posts = filteredPosts.map(([path, post]) => {
    const slug = path.replace('./blog/', '').replace('.md', '');
    const { title, shortText, createdAt, cover} = post.frontmatter;

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
        cover: cover,
      },
    };
  });

  posts.sort((a, b) => new Date(b.data.pubDate) - new Date(a.data.pubDate));

  return rss({
    title: 'Nikolaj RSS Feed',
    description: 'Keep up with Nikolaj',
    site: 'https://nikolicht.github.io/portfolio/',
    xmlns:{
      media: 'http://search.yahoo.com/mrss/',
    },
items: posts.map((post) => ({
  title: post.data.title,
  pubDate: post.data.pubDate,
  description: `<p>${post.data.description}</p>`,
  link: `/portfolio/blog/${post.slug}/`,
  customData: `
    <media:content url="${post.data.cover}" medium="image" />
  `,
})),
  });
}
