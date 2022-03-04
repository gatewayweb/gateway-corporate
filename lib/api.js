async function fetchAPI(query, { variables, preview } = {}) {
  const res = await fetch(`https://api-us-east-1.graphcms.com/v2/ckqldgznas2ju01wa0o0p1lvu/master`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

export async function getPage(slug) {
  const data = await fetchAPI(
    `
    query getPage($slug: String!) {
      pages(where: { slug: $slug }) {
        title
        content
        images {
          width
          height
          url
        }
      }
    }
  `,
    {
      variables: {
        slug,
      },
    },
  );

  return data?.pages[0];
}

export async function getService(slug) {
  const data = await fetchAPI(
    `
    query getService($slug: String!) {
      services(where: { slug: $slug }) {
        title
        subtitle
        content
        images {
          width
          height
          url
        }
        seo {
          title
          description
          image {
            url
          }
        }
      }
    }
  `,
    {
      variables: {
        slug,
      },
    },
  );

  return data?.services[0];
}

export async function getServiceSlugs() {
  const data = await fetchAPI(`
    query getServiceSlugs {
      services {
        slug
      }
    }
  `);

  return data?.services;
}
