import markdownIt from "markdown-it";

export default function (eleventyConfig) {
    let options = {
		html: true,
		breaks: true,
		linkify: true,
	};
    eleventyConfig.setLibrary("md", markdownIt(options));

    // Amend the existing markdown-it library rules directly
    eleventyConfig.amendLibrary("md", (md) => {
        // Modify the table opening tag to include your wrapper div
        md.renderer.rules.table_open = function () {
            return '<div class="table-container"><table>';
        };
        // Modify the table closing tag to close the wrapper div
        md.renderer.rules.table_close = function () {
            return '</table></div>';
        };
    });

	// Output directory: _site

	eleventyConfig.addPassthroughCopy("bundle.css")
	eleventyConfig.addPassthroughCopy("bundle.js")
};
