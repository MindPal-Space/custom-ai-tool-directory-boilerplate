# AI Workflows Directory Boilerplate

A boilerplate to quickly set up a directory of AI workflows built on [MindPal.io](https://mindpal.io) as a public website so anyone can use them.

## Features

- Home page that lists all AI workflows with search and category filters
- Clicking on a workflow opens a modal with embedded iframe
- Static site (no database) with all configuration in the `config` folder
- Responsive design with dark/light mode support
- Built with Next.js 13, Tailwind CSS, and Shadcn/UI components

## Getting Started

1. Clone this repository:

```bash
git clone https://github.com/[YOUR_USER_NAME]/custom-ai-tool-directory-boilerplate.git
cd custom-ai-tool-directory-boilerplate
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### Site Configuration

Modify the site configuration in [/config/site.ts](./config/site.ts):

- Site name and description
- Navigation links
- External links

### Copywriting

Edit the site's text content in [/config/copywriting.ts](./config/copywriting.ts):

- Hero section text
- Section headings and descriptions
- Button text

### Tools Configuration

Add or modify tools in [/config/tools.ts](./config/tools.ts):

- Each tool requires:
  - `url`: MindPal.io workflow URL (must be unique)
  - `title`: Display name of the workflow
  - `slug`: URL-friendly identifier (must be unique)
  - `categories`: Array of categories the tool belongs to
  - `description`: Brief description of the tool
  - `iconUrl`: Optional path to icon image (recommended)

### Branding Assets

Customize your site's branding by replacing the default assets in the [/public](./public) directory:

- **Favicon**: Replace [favicon.ico](./public/favicon.ico) with your own icon (recommended size: 32x32 pixels)
- **OpenGraph Image**: Replace [opengraph-image.png](./public/opengraph-image.png) with your own image (recommended size: 1200x630 pixels)
  - This image appears when your site is shared on social media platforms

To update these files:

1. Create your customized versions with the same filenames
2. Replace the existing files in the [/public](./public) directory
3. Restart your development server to see the changes

### Color Customization

Customize the color scheme by modifying the [tailwind.config.js](./tailwind.config.js) file:

1. Update the theme colors in the configuration:

```js
theme: {
  extend: {
    colors: {
      // Primary brand color and its variations
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
      // You can add additional custom colors
      custom: {
        DEFAULT: "#3b82f6", // blue-500
        dark: "#1e40af",    // blue-800
      },
    },
  },
}
```

2. Modify color variables in [/styles/globals.css](./styles/globals.css):

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%; /* Change this to your primary color */
  --primary-foreground: 210 40% 98%;
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 210 40% 98%; /* Change this for dark mode */
  --primary-foreground: 222.2 47.4% 11.2%;
}
```

3. For better accessibility, ensure sufficient contrast between your foreground and background colors. You can use tools like [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) to verify.

4. After making changes, restart your development server to see the updated colors.

## How to Create and Use MindPal Workflows

1. Build workflows in MindPal:

   - Sign up at [MindPal.io](https://mindpal.io)
   - Follow the [workflow documentation](https://docs.mindpal.space/workflow)
   - Create your AI workflows

2. Publish as forms:

   - Follow the [form publishing guide](https://docs.mindpal.space/workflow/run/form)
   - Get the published URL for each workflow

3. Add to your directory:
   - Add each workflow to the [tools.ts](./config/tools.ts) file
   - Deploy your site to share with others

## Deployment

Deploy to Vercel:

```bash
npm run build
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev)
- AI workflows from [MindPal.io](https://mindpal.io)
