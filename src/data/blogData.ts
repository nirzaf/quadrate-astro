export interface BlogPost {
  title: string;
  description: string;
  pubDate: string;
  heroImage: string;
  category: string;
  tags: string[];
  slug: string;
  author: string;
  authorImage: string;
}

export const initialBlogPosts: BlogPost[] = [
  {
    title: "The Future is Delightful: A Peek into What's Next for C# 13",
    description: "Exploring upcoming features and design philosophy for C# 13 and beyond",
    pubDate: "Jun 22 2024",
    heroImage: "https://ik.imagekit.io/quadrate/blogs/csharp-13.webp?updatedAt=1732702078737",
    category: "Programming",
    tags: ["C#", "programming", "language-design", "future-features"],
    slug: "csharp-13-future",
    author: "M.F.M Fazrin",
    authorImage: "https://ik.imagekit.io/quadrate/blogs/avatar.png?updatedAt=1732702078949"
  },
  {
    title: "Integrating ElasticSearch with .NET Web API: A Comprehensive Guide",
    description: "Learn how to set up ElasticSearch locally and integrate it with a .NET Web API for powerful search capabilities",
    pubDate: "Feb 10 2024",
    heroImage: "https://ik.imagekit.io/quadrate/blogs/elastic-search.webp?updatedAt=1732702078768",
    category: "Development",
    tags: ["elasticsearch", "dotnet", "webapi", "docker"],
    slug: "elasticsearch-dotnet-guide",
    author: "Fazrin",
    authorImage: "https://ik.imagekit.io/quadrate/blogs/avatar.png?updatedAt=1732702078949"
  },
  {
    title: "Supercharge Your Applications with Azure Functions v4, C# and .NET 8: A Deep Dive",
    description: "Explore the power of Azure Functions v4, C# 12, and .NET 8 for building efficient and scalable serverless applications",
    pubDate: "Jun 03 2024",
    heroImage: "https://ik.imagekit.io/quadrate/blogs/azure-functions.webp?updatedAt=1732702078841",
    category: "Cloud Computing",
    tags: ["Azure Functions", "C#", ".NET 8", "serverless"],
    slug: "azure-functions-v4-guide",
    author: "M.F.M Fazrin",
    authorImage: "https://ik.imagekit.io/quadrate/blogs/avatar.png?updatedAt=1732702078949"
  }
];
