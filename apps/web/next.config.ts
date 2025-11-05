/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 

  transpilePackages: ["@m-nav/ui"],
  images: {
    // --- 核心修改：禁用图片优化 ---
    unoptimized: true,
    // ------------------------------
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  },
  env: {
    NOTION_PAGE_ID: process.env.NOTION_PAGE_ID, 
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID
  },
}

export default nextConfig
