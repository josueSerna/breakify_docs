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
			favicon: '/icon_breakify.ico',
			logo: {
				light: './public/images/breakify_logo_rigth.png',
				dark: './public/images/breakify_logo_blanco_rigth.png',
			},
			customCss: ['./src/styles/custom.css'],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/josueSerna/breakify' },
				{ icon: 'external', label: 'pub.dev', href: 'https://pub.dev/packages/breakify' },
			],
			sidebar: [
				{
					label: 'Getting Started',
					translations: { es: 'Primeros pasos' },
					items: [
						{ label: 'Introduction', translations: { es: 'Introducción' }, slug: 'introduction' },
						{ label: 'Why Breakify?', translations: { es: '¿Por qué Breakify?' }, slug: 'getting-started/why-breakify' },
						{ label: 'Installation', translations: { es: 'Instalación' }, slug: 'installation' },
						{ label: 'Quick Start', translations: { es: 'Inicio rápido' }, slug: 'quick-start' },
						{ label: 'Project Structure', translations: { es: 'Estructura del proyecto' }, slug: 'getting-started/project-structure' },
					],
				},
				{
					label: 'Core Concepts',
					translations: { es: 'Conceptos principales' },
					items: [
						{ label: 'Responsive Design', translations: { es: 'Diseño responsivo' }, slug: 'core/responsive-design' },
						{ label: 'Understanding Breakpoints', translations: { es: 'Entender los breakpoints' }, slug: 'fundamentals/breakpoints' },
						{ label: 'Default Breakpoints', translations: { es: 'Breakpoints predeterminados' }, slug: 'core/default-breakpoints' },
						{ label: 'Custom Breakpoints', translations: { es: 'Breakpoints personalizados' }, slug: 'core/custom-breakpoints' },
						{ label: 'Global and Local Constraints', translations: { es: 'Restricciones globales y locales' }, slug: 'core/constraints' },
						{ label: 'Responsive Values', translations: { es: 'Valores responsivos' }, slug: 'fundamentals/responsive-values' },
						{ label: 'Fluid Values', translations: { es: 'Valores fluidos' }, slug: 'core/fluid-values' },
						{ label: 'BreakifyBuilder', slug: 'fundamentals/breakify-builder' },
					],
				},
				{
					label: 'Layout Widgets',
					translations: { es: 'Widgets de layout' },
					items: [
						{ label: 'BreakifyAdaptativeLayout', translations: { es: 'BreakifyAdaptativeLayout' }, slug: 'layouts/breakify-adaptative-layout' },
						{ label: 'BreakifyGrid', translations: { es: 'BreakifyGrid' }, slug: 'layouts/breakify-grid' },
						{ label: 'BreakifyResponsiveGrid', translations: { es: 'BreakifyResponsiveGrid' }, slug: 'layouts/breakify-responsive-grid' },
						{ label: 'BreakifyPanelLayout', translations: { es: 'BreakifyPanelLayout' }, slug: 'layouts/breakify-panel-layout' },
						{ label: 'BreakifyContainer', translations: { es: 'BreakifyContainer' }, slug: 'layouts/breakify-container' },
						{ label: 'BreakifySection', translations: { es: 'BreakifySection' }, slug: 'layouts/breakify-section' },
					],
				},
				{
					label: 'Navigation',
					translations: { es: 'Navegación' },
					items: [
						{ label: 'BreakifyNavbar', translations: { es: 'BreakifyNavbar' }, slug: 'navigation/breakify-navbar' },
					],
				},
				{
					label: 'Lists and Visibility',
					translations: { es: 'Listas y visibilidad' },
					items: [
						{ label: 'BreakifyListView', translations: { es: 'BreakifyListView' }, slug: 'lists/breakify-list-view' },
						{ label: 'BreakifyVisibility', translations: { es: 'BreakifyVisibility' }, slug: 'utilities/breakify-visibility' },
					],
				},
				{
					label: 'Developer Tools',
					translations: { es: 'Herramientas para desarrolladores' },
					items: [
						{ label: 'BreakifyDebugBanner', translations: { es: 'BreakifyDebugBanner' }, slug: 'utilities/breakify-debug-banner' },
						{ label: 'Debugging Responsive Layouts', translations: { es: 'Depurar layouts responsivos' }, slug: 'developer/debugging' },
						{ label: 'Performance Considerations', translations: { es: 'Consideraciones de rendimiento' }, slug: 'developer/performance' },
					],
				},
				{
					label: 'Examples and Guides',
					translations: { es: 'Ejemplos y guías' },
					items: [
						{ label: 'Responsive Landing Page', translations: { es: 'Landing page responsiva' }, slug: 'examples/responsive-landing-page' },
						{ label: 'Responsive Dashboard', translations: { es: 'Dashboard responsivo' }, slug: 'examples/responsive-dashboard' },
						{ label: 'Product Grid', translations: { es: 'Grid de productos' }, slug: 'examples/product-grid' },
						{ label: 'Responsive Navigation', translations: { es: 'Navegación responsiva' }, slug: 'examples/responsive-navigation' },
						{ label: 'Adaptive Application Layout', translations: { es: 'Layout de aplicación adaptativo' }, slug: 'examples/adaptive-application-layout' },
						{ label: 'Combining Breakify Widgets', translations: { es: 'Combinar widgets de Breakify' }, slug: 'examples/combining-widgets' },
					],
				},
				{
					label: 'Additional Resources',
					translations: { es: 'Recursos adicionales' },
					items: [
						{ label: 'Migration Guide', translations: { es: 'Guía de migración' }, slug: 'resources/migration-guide' },
						{ label: 'Changelog', translations: { es: 'Registro de cambios' }, slug: 'resources/changelog' },
						{ label: 'API Reference', translations: { es: 'Referencia de API' }, slug: 'resources/api-reference' },
						{ label: 'FAQ', translations: { es: 'Preguntas frecuentes' }, slug: 'resources/faq' },
					],
				},
			],
		}),
	],
});
