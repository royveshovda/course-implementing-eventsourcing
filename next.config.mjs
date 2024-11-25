/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    webpack: (config) => {
        config.module.rules.push({
            test: /\.css$/,
            use: [
                {
                    loader: "ignore-loader",
                },
            ],
        });
        return config;
    },
};

export default nextConfig;