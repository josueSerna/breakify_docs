// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://breakify.dev',
	integrations: [
		sitemap(),
		starlight({
			title: 'Breakify',
			description: 'Build responsive Flutter layouts with ease.',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
				 lang: 'en',
				},
				es: {
					label: 'Español',
					lang: 'es',
				},
			},
			favicon: '/favicon.svg',
			customCss: ['./src/styles/custom.css'],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/YOUR_ORGANIZATION/breakify' },
				{ icon: 'external', label: 'pub.dev', href: 'https://pub.dev/packages/breakify' },
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', slug: 'introduction' },
						{ label: 'Why Breakify?', slug: 'getting-started/why-breakify' },
						{ label: 'Installation', slug: 'installation' },
						{ label: 'Quick Start', slug: 'quick-start' },
						{ label: 'Project Structure', slug: 'getting-started/project-structure' },
					],
				},
				{
					label: 'Core Concepts',
					items: [
						{ label: 'Responsive Design', slug: 'core/responsive-design' },
						{ label: 'Understanding Breakpoints', slug: 'fundamentals/breakpoints' },
						{ label: 'Default Breakpoints', slug: 'core/default-breakpoints' },
						{ label: 'Custom Breakpoints', slug: 'core/custom-breakpoints' },
						{ label: 'Global and Local Constraints', slug: 'core/constraints' },
						{ label: 'Responsive Values', slug: 'fundamentals/responsive-values' },
						{ label: 'Fluid Values', slug: 'core/fluid-values' },
						{ label: 'BreakifyBuilder', slug: 'fundamentals/breakify-builder' },
					],
				},
				{
					label: 'Layout Widgets',
					items: [
						{ label: 'BreakifyAdaptativeLayout', slug: 'layouts/breakify-adaptative-layout' },
						{ label: 'BreakifyGrid', slug: 'layouts/breakify-grid' },
						{ label: 'BreakifyResponsiveGrid', slug: 'layouts/breakify-responsive-grid' },
						{ label: 'BreakifyPanelLayout', slug: 'layouts/breakify-panel-layout' },
						{ label: 'BreakifyContainer', slug: 'layouts/breakify-container' },
						{ label: 'BreakifySection', slug: 'layouts/breakify-section' },
					],
				},
				{
					label: 'Navigation',
					items: [
						{ label: 'BreakifyNavbar', slug: 'navigation/breakify-navbar' },
					],
				},
				{
					label: 'Lists and Visibility',
					items: [
						{ label: 'BreakifyListView', slug: 'lists/breakify-list-view' },
						{ label: 'BreakifyVisibility', slug: 'utilities/breakify-visibility' },
					],
				},
				{
					label: 'Developer Tools',
					items: [
						{ label: 'BreakifyDebugBanner', slug: 'utilities/breakify-debug-banner' },
						{ label: 'Debugging Responsive Layouts', slug: 'developer/debugging' },
						{ label: 'Performance Considerations', slug: 'developer/performance' },
					],
				},
				{
					label: 'Examples and Guides',
					items: [
						{ label: 'Responsive Landing Page', slug: 'examples/responsive-landing-page' },
						{ label: 'Responsive Dashboard', slug: 'examples/responsive-dashboard' },
						{ label: 'Product Grid', slug: 'examples/product-grid' },
						{ label: 'Responsive Navigation', slug: 'examples/responsive-navigation' },
						{ label: 'Adaptive Application Layout', slug: 'examples/adaptive-application-layout' },
						{ label: 'Combining Breakify Widgets', slug: 'examples/combining-widgets' },
					],
				},
				{
					label: 'Additional Resources',
					items: [
						{ label: 'Migration Guide', slug: 'resources/migration-guide' },
						{ label: 'Changelog', slug: 'resources/changelog' },
						{ label: 'API Reference', slug: 'resources/api-reference' },
						{ label: 'FAQ', slug: 'resources/faq' },
					],
				},
			],
		}),
	],
});
