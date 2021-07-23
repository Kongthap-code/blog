const sitemap = require("nextjs-sitemap-generator");

sitemap({
	baseUrl: "https://kongthap-code.github.io/Kongthapcode-blog/",
	pagesDirectory: __dirname + "/out",
	targetDirectory: "out",
	ignoredPaths: ["404", "sitemap", "google"],
	ignoredExtensions: ["png", "jpg"],
	pagesConfig: {
		"/index": {
			priority: "0.7",
			changefreq: "daily"
		}
	}
});
