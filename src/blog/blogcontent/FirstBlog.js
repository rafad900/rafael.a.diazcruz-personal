const blog_post_1 = {
  "id": "how-i-built-this-website",
  "title": "How Did I Build This Website? (Spoiler: No Database Bills!)",
  "slug": "how-i-built-this-website",
  "authors": [
    { "name": "Rafael A. Diaz Cruz", "avatar": "https://example.com/avatar1.jpg" }
  ],
  "img": "https://picsum.photos/800/450?random=1",
  "tag": "Web Development",
  "description": "An in-depth look at how this website was built with a focus on cost-efficiency, utilizing local JSON for content, Material-UI for styling, and GitHub for hosting.",
  "published_date": "2025-06-22T13:46:00Z",
  "content_blocks": [
    { "id": "block-a1", "type": "heading", "data": { "level": 3, "text": "Motivation? Simple...... Money!" } },
    {
      "id": "block-a2",
      "type": "paragraph",
      "data": {
        "text": "When embarking on building my personal website, a primary concern quickly became cost. Traditional cloud databases often come with ongoing fees, not to mention the complexity of setting up and managing connections. My goal was a simple, yet robust, site for sharing insights without incurring unnecessary expenses or maintenance overhead. This led me to explore a rather unconventional, yet highly effective, solution..."
      }
    },
    { "id": "block-a4", "type": "heading", "data": { "level": 4, "text": "Content Storage: A Database Within My Project" } },
    {
      "id": "block-a5",
      "type": "paragraph",
      "data": {
        "text": "Instead of relying on external databases like MongoDB or PostgreSQL, I opted to store all my blog post data directly within my React project. This means each blog post is essentially a JavaScript file exporting a JSON object, just like the format you're seeing now. This approach eliminates database hosting costs and simplifies data fetching considerably, as the data is bundled with the application itself. It's a 'database' that lives entirely on GitHub!"
      }
    },
    {
      "id": "block-data-structure-example",
      "type": "code",
      "data": {
        "language": "json",
        "code": "{\n  \"id\": \"my-post-id\",\n  \"title\": \"My Post Title\",\n  \"authors\": [ { \"name\": \"Your Name\" } ],\n  \"content_blocks\": [\n    { \"type\": \"paragraph\", \"data\": { \"text\": \"This is my content.\" } },\n    { \"type\": \"code\", \"data\": { \"language\": \"js\", \"code\": \"console.log('Hello');\" } }\n  ]\n}"
      }
    },
    {
      "id": "block-modular-rendering",
      "type": "paragraph",
      "data": {
        "text": "This block-based JSON structure offers immense flexibility. Each content piece, from headings to paragraphs, images, and even mathematical formulas (yes, I added LaTeX support!), is a distinct object. This modularity not only makes content management organized but also allows for a highly customized rendering experience on the front end. Speaking of code, you might notice the `code` blocks on this site feel particularly familiar..."
      }
    },
    { "id": "block-a7", "type": "heading", "data": { "level": 4, "text": "Medium-like Code Blocks & Elegant Styling with MUI" } },
    {
      "id": "block-a8",
      "type": "paragraph",
      "data": {
        "text": "One of my design inspirations for code presentation was Medium. Their clean, readable code blocks are a benchmark, and I aimed to replicate that aesthetic. Leveraging a combination of React components and a syntax highlighter library, I achieved a similar look and feel, ensuring that code snippets are both functional and visually appealing. For the overall design, I turned to Material-UI (MUI). Its rich component library and robust styling system allowed me to quickly build a responsive and modern user interface, giving the site its polished, professional appearance without starting from scratch."
      }
    },
    { "id": "block-a9", "type": "heading", "data": { "level": 4, "text": "Hosted for Free on GitHub" } },
    {
      "id": "block-a10",
      "type": "paragraph",
      "data": {
        "text": "Finally, to keep the operational costs at zero, the entire website is hosted as a static site directly on GitHub Pages. After building the React application, the static files are pushed to a specific branch, and GitHub handles the rest. This setup is incredibly efficient, provides a reliable global CDN, and, most importantly, costs absolutely nothing. The combination of local JSON data and GitHub hosting makes this project a truly free and low-maintenance endeavor."
      }
    },
    {
      "id": "block-m4",
      "type": "latex",
      "data": {
        "formula": "\\sum_{i=1}^n (\\text{cost}_i) = \\$0",
        "displayMode": true,
        "caption": "The ultimate equation for a free website."
      }
    },
    {
      "id": "block-final-paragraph",
      "type": "paragraph",
      "data": {
        "text": "In essence, this website is a testament to what can be achieved with modern frontend technologies and a bit of creativity when budget is a primary driver. By embracing a 'database-less' approach and leveraging free hosting, I've created a platform that is both functional and financially sustainable. It's built for sharing, not for spending!"
      }
    }
  ]
}

export default blog_post_1;