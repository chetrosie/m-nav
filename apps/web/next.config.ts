/** @type {import('next').NextConfig} */
const nextConfig = {
  // 核心修改：启用静态导出，解决 Pages 部署的文件大小限制问题
  // 静态文件将输出到 'out' 目录，您需要在 Pages 设置中将 'Build output directory' 设置为 'out'
  output: 'export', 

  transpilePackages: ["@m-nav/ui"],
  images: {
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  },
  env: {
    // 确保这些变量已在 Cloudflare Pages 环境变量中设置，以便在构建时获取 Notion 数据
    NOTION_PAGE_ID: process.env.NOTION_PAGE_ID, 
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID
  },
}

export default nextConfig
