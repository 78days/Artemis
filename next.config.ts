import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "bytegrad.com",
			},
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			}
		],
	},
	/* config options here */
};

export default nextConfig;
