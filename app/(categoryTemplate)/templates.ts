export interface TemplateProps {
  name: string;
  desc: string;
  icon: string;
  category: string;
  slug: string;
  aiPrompt: string;
  form?: FormProps[];
}

export interface FormProps {
  field: string;
  label: string;
  name: string;
  required?: boolean;
}

export const templates: TemplateProps[] = [
  {
    name: "Blog Title",
    slug: "generate-blog-title",
    desc: "Generate a blog title",
    aiPrompt:
      "Give me 5 blog titles on the basis of the provided input niche and outline, with each output item having a unique and creative title. I also want you to write a short description for each title. The description should be between 100 and 200 words long. Make sure to include a catchy phrase or tagline that will entice readers to click on the title and read the full post. Return the results in Rich Text format.",
    category: "Blog",
    icon: "/notepad-text.svg",
    form: [
      {
        label:
          "Enter the niche or topic on which you want to generate blog titles",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter the outline of the blog post",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "YouTube SEO Title",
    slug: "generate-youtube-seo-title",
    desc: "Generate a YouTube SEO-friendly title",
    aiPrompt:
      "Create 5 SEO-friendly YouTube titles based on the provided video topic and key points. Ensure each title is unique, catchy, and includes relevant keywords to improve searchability and click-through rates.",
    category: "YouTube",
    icon: "/laptop.svg",
    form: [
      {
        label: "Enter the video topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter the key points of the video",
        field: "textarea",
        name: "keyPoints",
      },
    ],
  },
  {
    name: "YouTube Description",
    slug: "generate-youtube-description",
    desc: "Generate a YouTube video description",
    aiPrompt:
      "Write a detailed YouTube video description based on the provided topic and key points. The description should be engaging and informative, including a summary of the video's content, timestamps, and relevant links. Aim for a length of 250 to 500 words.",
    category: "YouTube",
    icon: "/captions.svg",
    form: [
      {
        label: "Enter the video topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter the key points of the video",
        field: "textarea",
        name: "keyPoints",
      },
    ],
  },
  {
    name: "Rewriting Article",
    slug: "rewrite-article",
    desc: "Rewrite an article to make it plagiarism-free",
    aiPrompt:
      "Rewrite the provided article to ensure it is plagiarism-free while maintaining the original meaning and structure. Make sure the new version is unique and passes plagiarism checks.",
    category: "Article",
    icon: "/file-text.svg",
    form: [
      {
        label: "Enter the article text you want to rewrite",
        field: "textarea",
        name: "article",
        required: true,
      },
    ],
  },
  {
    name: "Add Emoji to Text",
    slug: "add-emoji-to-text",
    desc: "Add relevant emojis to the provided text",
    aiPrompt:
      "Enhance the provided text by adding relevant and appropriate emojis. Ensure the emojis add value and context to the text without making it look cluttered or unprofessional.",
    category: "Text Enhancement",
    icon: "/smile-plus.svg",
    form: [
      {
        label: "Enter the text",
        field: "textarea",
        name: "text",
        required: true,
      },
    ],
  },
  {
    name: "Social Media Caption",
    slug: "generate-social-media-caption",
    desc: "Generate a catchy social media caption",
    aiPrompt:
      "Create 5 unique and engaging social media captions based on the provided context and key points. Each caption should be concise, attention-grabbing, and suitable for platforms like Instagram, Twitter, and Facebook.",
    category: "Social Media",
    icon: "/podcast.svg",
    form: [
      {
        label: "Enter the context or topic",
        field: "input",
        name: "context",
        required: true,
      },
      {
        label: "Enter the key points",
        field: "textarea",
        name: "keyPoints",
      },
    ],
  },
  {
    name: "Product Description",
    slug: "generate-product-description",
    desc: "Generate a product description",
    aiPrompt:
      "Write a detailed product description based on the provided product features and specifications. Ensure the description is engaging, informative, and highlights the key benefits of the product. Aim for a length of 150 to 300 words.",
    category: "E-commerce",
    icon: "/shopping-cart.svg",
    form: [
      {
        label: "Enter the product features and specifications",
        field: "textarea",
        name: "features",
        required: true,
      },
    ],
  },
];
