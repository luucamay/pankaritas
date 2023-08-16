import prisma from '../../lib/prisma';

async function getArticles() {

  const feed = await prisma.article.findMany({
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  return feed

};

export default async function Test() {
  const articles = await getArticles()
  return <main>
    <ul>
      {articles.map((a, index) =>
        <li key={index}>
          {a.title}
        </li>)}
    </ul>
  </main>
}
